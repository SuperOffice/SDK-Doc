<properties date="2016-06-24"
SortOrder="168"
/>

*Description*:

Inserts or updates a row in an extra table.

                                   

*In Parameters*:

* sessionKey      - A valid sessionKey

* tableId             - A valid table id

* rowId              - A valid row id, or -1 for inserts.

* Column values      - An array of each column and new value for the row

  * Name   - The id of the column

  * Value   - The new value

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* rowId                    - The row id of the inserted or updated row.



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals(“0”))
{

  ticket.ValuePairStruct[] values = new ticket.ValuePairStruct[1];

  values[0] = new ticket.ValuePairStruct();
  values[0].field = "27";   //extra field id
  values[0].value = "123";  //new value

  string rowId = "-1";

  errorCode = t.insertIntoExtraTable(sessionKey,
    "10",
    ref rowId, // rowId will be updated with the new ID
    values);

}
```
