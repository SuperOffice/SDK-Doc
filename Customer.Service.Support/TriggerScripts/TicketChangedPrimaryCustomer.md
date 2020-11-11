# TicketChangedPrimaryCustomer (143)

Runs when ticket is saved and customer id changed.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `cust_id.old` = old value
* `cust_id.new` = new value


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("personId");
```
