# ImportMailAfterProcessing (304)

Input values:

* `messageId` = message id (int)
* `ticketId` = request id
* `customerId` = The id of the primary person connected to this ticket
* `customerEmail` =  Email address of the primary person connected to this ticket
* `mailBackup` = Raw version of the email
* `filterId` = filter id
* `to` = to header value
* `from` = from header value
* `isNewCustomer` = set to 1 if this email created a new customer/person (0/1)

In addition any variables set by the email filter is also available with the name specified in the email filter.

## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("customerId");
```
