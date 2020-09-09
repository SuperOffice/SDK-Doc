---
title: Select User
path: /Blogic/Screen Elements/Select User
sortOrder: 81
---

This element is used to select a user in the system.



###The following configuration values are available:###


 - <b>"AddNone"</b>: If true, then the value "none" is available in the drop down
 - <b>"AddNotDelegated"</b>: If true, then the value "(not delegated)" is available.
 - <b>"AddDelegate"</b>: If true, then the value "(Automatically assigned)" is available. From 3.0.11
 - <b>"AddAll"</b>: If true, then the value "all users" are available
 - <b>"AddNoValue"</b>: If true, then empty is available
 - <b>"AddActiveUser"</b>: If true, then the value "(Active user)" is available in the drop down
 - <b>"AddNotPresent"</b>: If true, then include users set as "Not present"
 - <b>"RemoveNone"</b>: If true, then the blank value is removed from the drop down
 - <b>"AddDeleted"</b>: If true, then deleted deleted users are available
 - <b>"AddReadOnly"</b>: If true, then users with read only status are available




###Functions:###


 - `setValue()`: Will set the user from the supplied id.
 - `toString()` or `toInteger()`: will return the id of the selected entry.


