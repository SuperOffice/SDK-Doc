---
title: Messages
path: /Blogic/Screen Elements/Messages
sortOrder: 44
---

This element will display the messages for a ticket.



###The message element supports the following configuration items:###


 - <b>"ticketId"</b>: without a ticketId the id will be taken from the cgi variable entryId, if it exists. If it does not, no messages will be shown as the element must have a ticket id to show messages for.
 - <b>"limit"</b>: limit the number of messages returned. From version 4.0
 - <b>"showChange"</b>: if true, then the element will display changed lines. From version 4.0
 - <b>"blockQuickReply"</b>:


One can also set extra criterias for message (example), from version 3.1.5:

    fields.0.field = message.id
    fields.length = 1
    where.0.critPriority = 0
    where.0.field = message.id
    where.0.operator = OperatorLte
    where.0.rowOperator = OperatorAnd
    where.0.value = 60
    where.length = 1
    

These configuration values are deprecated from version 4.2 and will have no effect:
"showForward": If true, the it will display forward lines.
"previewImages": If true, then it will display images inline.
"descending": If true, then messages will be display by descending id/age.


