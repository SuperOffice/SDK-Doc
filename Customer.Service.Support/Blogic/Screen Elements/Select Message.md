---
title: Select Message
path: /Blogic/Screen Elements/Select Message
sortOrder: 68
---


This html element lets the user select a message from a ticket




###Possible configuration variables:###


 - <b>"ticketId"</b>: The id of the ticket to list messages from
 - <b>"addNone"</b>: If true, none is added as a select value




###Functions:###


 - setFieldValue(string, Map)
    - <b>"add"</b>
         - <b>"name"</b>
         - <b>"value"</b>
    - <b>"remove"</b>: Remove all options with the given value
         - <b>"value"</b>
    - <b>"clear"</b>: Remove all options
 - `toString()` returns the selected value
 - `toInteger()` returns the selected value


