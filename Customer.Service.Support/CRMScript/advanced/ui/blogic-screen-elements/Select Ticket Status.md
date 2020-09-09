---
title: Select Ticket Status
path: /Blogic/Screen Elements/Select Ticket Status
sortOrder: 78
---


This element displays statuses (active, closed, postponed)  in a combobox, and thus differs from HtmlTicketStatus.


The following configuration values are available.


 - "defaultAddMessage": If true, the default status for adding messages for this user is set.
 - <b>"addDeleted"</b>: Add deleted status
 - <b>"default"</b>: Default status to be selected
 - <b>"valueId"</b>: If true then entry id is used as ticket id
 - <b>"ticketId"</b>: Ticket id to get status from
 - <b>"category"</b>: Sets default status to the one for new ticket for this user for the given category
 - <b>"filterIds"</b>:




###Functions:###


 - setFieldValue("set", Map):
    - <b>"status"</b>: Choose status
    - <b>"activate"</b>: if postpone" is chosen an activation date can be set through this value
 - `getFieldValue(String)`
    - <b>"activate"</b>: returns the activation date
    - <b>"status"</b>: returns the status
 - `setValue(string)`
 - `toString()`
 - `toInteger()`
 - `toDate()`


