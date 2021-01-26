<properties date="2016-06-24"
SortOrder="159"
/>

*Description*:

Same as getExtraTables, but returns only one extra table. See getExtraTables() for more info.

 

*In Parameters*:

* sessionKey            - A valid session key.

* tableId       - The id of the table you want to retrieve

*Out Parameters*:

* errorCode  - See appendix for error codes

* extraTables         - An array of all extra tables

  * id   - the id

  * name    - the name

  * fields   - array of fields

* id

* name

* datatype    - see appendix

* flags          - see description

 

*Example*:
```
string sessionKey;

ticket.ticketService ticketService = new ticket.ticketService();

if(ticketService.login("test","test", out sessionKey) == "0")
{

       ticket.ExtraTablesStruct extraTable;
       string res = ticketService.getExtra(sessionKey, “1”
                     out extraTable);
       if(res == “0”)
       {
          ...doStuffWithExtraTables...
       }

}
```