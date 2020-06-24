---
title: Generic[] GenericToArray(Generic generic)
path: /EJScript/Global functions/Generic[] GenericToArray(Generic generic)
intellisense: 1
langref: 1
sortOrder: 9348
keywords: GenericToArray(Generic)
---


Explicit downcast from a Generic to an array of Generic. If the generic does not represent an array, an exception is thrown. Typically, this function is used when traversing the members of a struct, and one of the members is an array. This can be tested with `getTypeDimensions()`, and then `GenericToArray()` can be used to access the subelements of the array for further (recursive) processing.



* **generic:** Generic The variable to downcast
* **Returns:** Generic[] The variable as an array


