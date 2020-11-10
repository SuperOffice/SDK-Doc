# TicketReopenedFromEmail (122)

Runs after ImportMailAfterProcessing (304) if ticket existed before.

Input values:

* `messageId` = message id (int)
* `entryId` = request id
* `ticketId` = request id
* `customerId` = person id
* `customerEmail` = person e-mail address
* `mailBackup` = backup string
* `filterId` = filter id
* `to` = to header value
* `from` = from header value
* `isNewCustomer` = new customer? (0/1)


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("customerId");
```
