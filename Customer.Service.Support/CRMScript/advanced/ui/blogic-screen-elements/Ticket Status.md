---
title: Ticket Status
path: /Blogic/Screen Elements/Ticket Status
sortOrder: 89
---


This element shows the ticket status field, which shows either "active", "closed" or "postponed". A calendar element is also shown next to status "postponed".




###The following configuration values are avilable:###
-"deleted": if set to true then a "deleted" status is also added.



###Functions:###


- setFieldValue("set", Map)
    - <b>"status"</b>: choose status
    - <b>"activate"</b>: if status "postponed" is chosen an activation date can be set through this value
- `getFieldValue(string)`
    - <b>"activate"</b>: returns the activation date
    - <b>"status"</b> returns the status
- `setValue()`


