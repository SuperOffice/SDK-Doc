---
title: MessageGrid
path: /Blogic/Screen Elements/MessageGrid
sortOrder: 43
---


   
**This element will display ticket messages in a grid including a checkbox. The element supports one configuration item:**   



- <b>"ticketId"</b>: If this is set, the messages on this ticket is put into the grid. If no ticketId is set, the entryId is used as ticketId.


This element can be useful in screens like "forward ticket" or similar, where we want to select messages in a ticket.
Retrieve the selected messageIds in a commasepareted string with .toString().


