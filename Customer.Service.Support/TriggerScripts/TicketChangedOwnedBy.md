# TicketChangedOwnedBy (142)

Runs when ticket is saved and owner changed.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `owned_by.old` = old value
* `owned_by.new` = new value


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("ticketId");
```
