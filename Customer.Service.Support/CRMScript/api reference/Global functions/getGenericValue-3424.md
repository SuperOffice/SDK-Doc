---
title: Generic getGenericValue(String name)
path: /EJScript/Global functions/Generic getGenericValue(String name)
intellisense: 1
langref: 1
sortOrder: 9347
keywords: getGenericValue(String)
---


Get a variable from the run-time environment given its name. The variable is returned as a Generic, independent of its type. If the name is unknown, an exception is thrown.


E.g.

    Integer age = 42;
    Generic g = getGenericValue("age");
    



* **name:** String Name of variable to get
* **Returns:** Generic The generic variable


