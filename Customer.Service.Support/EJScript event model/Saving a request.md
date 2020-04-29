---
title: Saving a request
path: /EJScript event model/Saving a request
sortOrder: 103
---

Everytime a ticket is saved, a system script called "Saving a request" will be executed.

You can get the ticketId by running getVariable



###Accessible variables:###
ticketId
activeUser

Furthermore you can use getParserVariable to get out more information regarding the changes done.

    The syntax is: getParserVariable("ticket.new.value") and getParserVariable("ticket.old.value")
    



###For instance to see if the category has been changed:###

    getParserVariable("ticket.new.category") != getParserVariable("ticket.old.category")
    



###Accessible parser variables:###
id
title
createdAt
lastChanged
readByOwner
readByCustomer
firstReadByUser
firstReadByOwner
activate
closedAt
deadline
timeToClose
realTimeToClose
timeToReply
m\_realTimeToReply
createdBy
author
ownedBy
category
slevel
priority
status
ticketStatus
customer
alertLevel
alertTimeout
connectId
filterId
readStatus
hasAttachment
displayFilter
alertStop
repliedAt
filterAddress
dbiAgentId
dbiKey
dbiLastModified
dbiLastSyncronized


