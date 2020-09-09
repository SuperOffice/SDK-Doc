---
title: Select Company
path: /Blogic/Screen Elements/Select Company
sortOrder: 57
---


This element adds the "Select Company" field to your screen, the same feature which is available under new request in eJournal.




###The following configuration values are avilable:###


- "notEmpty": will not allow an empty choice




###Functions:###


- `setValue()` sets the selected company with the given id.
- `toInteger()` returns the selected company id.
- `toString()` returns the selected company id.


From 4.9, it is possible to define the columns used to select a company in reg\_id=227. The syntax is as follows:
[displayField:searchField:op:label],[displayField:searchField:op:label],[displayField:searchField:op:label]

From 8.0 it is possible to choose between two controls to select contact from, an older version and a newer version.


- "controlVersion" = 1 (old)
- <b>"controlVersion"</b> = 2 (new)


