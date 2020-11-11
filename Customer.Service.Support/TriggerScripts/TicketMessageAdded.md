# TicketMessageAdded (150)

Called for all messages added to a ticket,
followed by call to either `TicketInternalMessageAdded` or `TicketExternalMessageAdded` trigger.

Input values:

* `entryId` = the ticket id
* `ticketId` = the ticket id
* `messageId` = the ticket message id


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("entryId");
```
