/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Datetime
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestDateTimeTestService.
 */
export interface Datetime {

    /**
     * Get null datetime value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getNull(callback: ServiceCallback<Date>): void;

    /**
     * Get invalid datetime value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getInvalid(callback: ServiceCallback<Date>): void;

    /**
     * Get overflow datetime value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getOverflow(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getOverflow(callback: ServiceCallback<Date>): void;

    /**
     * Get underflow datetime value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUnderflow(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getUnderflow(callback: ServiceCallback<Date>): void;

    /**
     * Put max datetime value 9999-12-31T23:59:59.9999999Z
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUtcMaxDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putUtcMaxDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get max datetime value 9999-12-31t23:59:59.9999999z
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUtcLowercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getUtcLowercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Get max datetime value 9999-12-31T23:59:59.9999999Z
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUtcUppercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getUtcUppercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Put max datetime value with positive numoffset
     * 9999-12-31t23:59:59.9999999+14:00
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putLocalPositiveOffsetMaxDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putLocalPositiveOffsetMaxDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get max datetime value with positive num offset
     * 9999-12-31t23:59:59.9999999+14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalPositiveOffsetLowercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalPositiveOffsetLowercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Get max datetime value with positive num offset
     * 9999-12-31T23:59:59.9999999+14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalPositiveOffsetUppercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalPositiveOffsetUppercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Put max datetime value with positive numoffset
     * 9999-12-31t23:59:59.9999999-14:00
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putLocalNegativeOffsetMaxDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putLocalNegativeOffsetMaxDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get max datetime value with positive num offset
     * 9999-12-31T23:59:59.9999999-14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalNegativeOffsetUppercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalNegativeOffsetUppercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Get max datetime value with positive num offset
     * 9999-12-31t23:59:59.9999999-14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalNegativeOffsetLowercaseMaxDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalNegativeOffsetLowercaseMaxDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Put min datetime value 0001-01-01T00:00:00Z
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUtcMinDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putUtcMinDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get min datetime value 0001-01-01T00:00:00Z
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUtcMinDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getUtcMinDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Put min datetime value 0001-01-01T00:00:00+14:00
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putLocalPositiveOffsetMinDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putLocalPositiveOffsetMinDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get min datetime value 0001-01-01T00:00:00+14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalPositiveOffsetMinDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalPositiveOffsetMinDateTime(callback: ServiceCallback<Date>): void;

    /**
     * Put min datetime value 0001-01-01T00:00:00-14:00
     *
     * @param {date} datetimeBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putLocalNegativeOffsetMinDateTime(datetimeBody: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putLocalNegativeOffsetMinDateTime(datetimeBody: Date|string, callback: ServiceCallback<void>): void;

    /**
     * Get min datetime value 0001-01-01T00:00:00-14:00
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLocalNegativeOffsetMinDateTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getLocalNegativeOffsetMinDateTime(callback: ServiceCallback<Date>): void;
}