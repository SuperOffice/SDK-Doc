---
title: Integer getTypeDimensions(Generic generic)
path: /EJScript/Global functions/Integer getTypeDimensions(Generic generic)
intellisense: 1
langref: 1
sortOrder: 9375
keywords: getTypeDimensions(Generic)
---


Get the number of array dimensions for any variable (will automatically be upcasted to a Generic). Note: this is the number of dimensions, not the length of the arrays.


E.g.

    Integer[][] i;
    getTypeDimensions(i); // Returns 2
    



* **generic:** Generic The value to get the dimensions for
* **Returns:** Integer number of dimensions.


