# TicketInternalMessageAdded (151)

Called for all internal messages added to a ticket,
following a call to the `TicketMessageAdded` trigger.

Input values:

* `entryId` = the ticket id
* `ticketId` = the ticket id
* `messageId` = the ticket message id


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("entryId");
```
