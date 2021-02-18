import { AutorestRawConfiguration } from "./autorest-raw-configuration";
import { IFileSystem } from "@azure-tools/datastore";
import { CreateFileOrFolderUri, EnsureIsFolderUri, IsUri, ResolveUri } from "@azure-tools/uri";
import { cwd } from "process";
import { mergeConfigurations } from "./configuration-merging";
import { arrayOf } from "./utils";
import { omit } from "lodash";
import { ExtensionManager } from "@azure-tools/extension";
import fs from "fs";

// TODO-TIM don't extend
export interface AutorestConfiguration extends AutorestRawConfiguration {
  /**
   * Raw configuration that was used to build this config
   */
  raw: AutorestRawConfiguration;

  configFileFolderUri: string;

  inputFileUris: string[];

  /**
   * Path to the output folder.
   */
  outputFolderUri: string;

  // TODO-TIM check type?
  configurationFiles: { [key: string]: any };

  /**
   * If help was requested.
   */
  help: boolean;

  /**
   * If logging should be verbose.
   */
  verbose: boolean;

  /**
   * If running in debug mode.
   */
  debug: boolean;

  /**
   * If running in caching mode.
   */
  cachingEnabled: boolean;

  /**
   * list of files to exclude from caching.
   */
  cacheExclude: string[];

  // TODO-TIM check those?
  name?: string;
  to?: string;
}

export const createAutorestConfiguration = async (
  configFileFolderUri: string,
  rawConfig: AutorestRawConfiguration,
  configurationFiles: { [key: string]: any },
  fileSystem: IFileSystem,
): Promise<AutorestConfiguration> => {
  const config: AutorestConfiguration = createConfigFromRawConfig(configFileFolderUri, rawConfig, configurationFiles);

  const inputFiles = await Promise.all(
    arrayOf<string>(rawConfig["input-file"]).map((each) =>
      resolveAsPath(configFileFolderUri, config, each, fileSystem),
    ),
  );

  const filesToExclude = await Promise.all(
    arrayOf<string>(rawConfig["exclude-file"]).map((each) =>
      resolveAsPath(configFileFolderUri, config, each, fileSystem),
    ),
  );

  config.inputFileUris = inputFiles.filter((x) => !filesToExclude.includes(x));
  return config;
};

export const createConfigFromRawConfig = (
  configFileFolderUri: string,
  rawConfig: AutorestRawConfiguration,
  configurationFiles: { [key: string]: string },
): AutorestConfiguration => {
  const baseFolderUri = getBaseFolderUri(configFileFolderUri, rawConfig);

  const cleanedConfig = {
    ...omit(rawConfig, "licence-header", "use"),
    "license-header": rawConfig["license-header"] ?? rawConfig["licence-header"],
    "use-extensions": {
      ...rawConfig["use-extension"],
      ...(rawConfig.use && desugarUseField(rawConfig.use)),
    },
  };

  return {
    ...cleanedConfig,
    raw: rawConfig,
    configFileFolderUri: configFileFolderUri,
    inputFileUris: [],
    configurationFiles: configurationFiles,
    outputFolderUri: resolveAsWriteableFolder(baseFolderUri, <string>rawConfig["output-folder"]),
    help: Boolean(rawConfig.help),
    verbose: Boolean(rawConfig.verbose),
    cachingEnabled: Boolean(rawConfig.cache),
    cacheExclude: getCacheExclude(rawConfig),
    debug: Boolean(rawConfig.debug),
  };
};

const desugarUseField = async (use: string[] | string) => {
  // Create an empty extension manager to be able to call findPackages.
  const extMgr = await ExtensionManager.Create("");
  const useArray = typeof use === "string" ? [use] : use;
  const extensions: Record<string, string> = {};
  for (const useEntry of useArray) {
    if (typeof useEntry === "string") {
      // potential formats:
      // <pkg>
      // <pkg>@<version>
      // @<org>/<pkg>
      // @<org>/<pkg>@<version>
      // <path>
      // <path/uri to .tgz package file>
      // if the entry starts with an @ it's definitely a package reference
      if (
        useEntry.endsWith(".tgz") ||
        (await fs.promises.lstat(useEntry)).isDirectory() ||
        useEntry.startsWith("file:/")
      ) {
        const pkg = await extMgr.findPackage("plugin", useEntry);
        extensions[pkg.name] = useEntry;
      } else {
        const [, identity, version] = /^https?:\/\//g.exec(useEntry)
          ? [undefined, useEntry, undefined]
          : <RegExpExecArray>/(^@.*?\/[^@]*|[^@]*)@?(.*)/.exec(useEntry);

        if (identity) {
          // parsed correctly
          if (version) {
            const pkg = await extMgr.findPackage(identity, version);
            extensions[pkg.name] = version;
          } else {
            // it's either a location or just the name
            if (IsUri(identity) || (await fs.promises.access(identity))) {
              // seems like it's a location to something. we don't know the actual name at this point.
              const pkg = await extMgr.findPackage("plugin", identity);
              extensions[pkg.name] = identity;
            } else {
              // must be a package name without a version
              // assume *?
              const pkg = await extMgr.findPackage(identity, "*");
              extensions[pkg.name] = pkg.version;
            }
          }
        }
      }
    }
  }
  return extensions;
};

const getCacheExclude = (config: AutorestRawConfiguration) => {
  const cache = config["cache"];
  return cache && cache.exclude ? arrayOf<string>(cache.exclude) : [];
};

export const extendAutorestConfiguration = (
  config: AutorestConfiguration,
  overrides: AutorestRawConfiguration[],
): AutorestConfiguration => {
  const rawConfig = mergeConfigurations(...overrides, config);
  const newConfig = createConfigFromRawConfig(config.configFileFolderUri, rawConfig, config.configurationFiles);
  newConfig.inputFileUris = config.inputFileUris;
  return newConfig;
};

export const resolveAsPath = (
  configFileFolderUri: string,
  config: AutorestConfiguration,
  path: string,
  fileSystem: IFileSystem,
): Promise<string> => {
  // is there even a potential for a parent folder from the input configuruation
  const parentFolder = config.__parents?.[path];
  const fromBaseUri = ResolveUri(getBaseFolderUri(configFileFolderUri, config), path);

  // if it's an absolute uri already, give it back that way.
  if (IsUri(path) || !parentFolder) {
    return Promise.resolve(fromBaseUri);
  }

  // let it try relative to the file that loaded it.
  // if the relative-to-parent path isn't valid, we fall back to original behavior
  // where the file path is relative to the base uri.
  // (and we don't even check to see if that's valid, try-require wouldn't need valid files)
  const fromLoadedFile = ResolveUri(parentFolder, path);
  return fileSystem.ReadFile(fromLoadedFile).then(
    () => fromLoadedFile,
    () => fromBaseUri,
  );
};

export const getBaseFolderUri = (configFileFolderUri: string, config: AutorestRawConfiguration) =>
  EnsureIsFolderUri(ResolveUri(configFileFolderUri, <string>config["base-folder"]));

const resolveAsFolder = (baseFolderUri: string, path: string): string => {
  return EnsureIsFolderUri(ResolveUri(baseFolderUri, path));
};

const resolveAsWriteableFolder = (baseFolderUri: string, path: string): string => {
  // relative paths are relative to the local folder when the base-folder is remote.
  if (!baseFolderUri.startsWith("file:")) {
    return EnsureIsFolderUri(ResolveUri(CreateFileOrFolderUri(cwd() + "/"), path));
  }
  return resolveAsFolder(baseFolderUri, path);
};
