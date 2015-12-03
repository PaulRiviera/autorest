/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.bodycomplex.models;

import java.util.List;

/**
 * The ArrayWrapper model.
 */
public class ArrayWrapper {
    /**
     * The array property.
     */
    private List<String> array;

    /**
     * Get the array value.
     *
     * @return the array value
     */
    public List<String> getArray() {
        return this.array;
    }

    /**
     * Set the array value.
     *
     * @param array the array value to set
     */
    public void setArray(List<String> array) {
        this.array = array;
    }

}