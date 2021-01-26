<properties date="2016-06-24"
SortOrder="146"
/>

*Description*:

Deletes a row from an extra table if the row exists.

                  

*In Parameters*:

* sessionKey            - A valid sessionKey

* tableId       - A valid table id

* rowId        - A valid row id.

*Out Parameters*:

* errorCode  - See appendix for error codes

* *

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”))
{

  errorCode = t.deleteExtraTableRows(sessionKey,"10",rowId);

}
```