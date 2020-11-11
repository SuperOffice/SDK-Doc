# TicketChangedCategory (141)

Runs when ticket is saved and ticket category changed id.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `category.old` = old value
* `category.new` = new value


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("personId");
```
