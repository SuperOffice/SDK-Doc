# TicketChangedSlevel (145)

Runs when ticket is saved and security level changed.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `slevel.old` = old value
* `slevel.new` = new value


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("ticketId");
```
