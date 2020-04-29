---
title: Select Customer
path: /Blogic/Screen Elements/Select Customer
sortOrder: 61
---

This element adds the "Select Customer" field to your screen, the same feature that is available under new request in eJournal.



###The following configuration values are available:###


- "notEmpty": Will not allow an empty choice




###Functions:###


- `setValue()` sets the selected customer with the given id.
- `toInteger()` returns the selected customer id.
- `toString()` returns the selected customer id.


From 4.9, it is possible to define the columns used to select a customer in reg\_id=226. The syntax is as follows:
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]


