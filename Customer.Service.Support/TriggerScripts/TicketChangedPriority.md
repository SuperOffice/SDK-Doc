# TicketChangedPriority (140)

Runs when ticket is saved and priority changed.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `priority.old` = old value
* `priority.new` = new value


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("customerId");
```
