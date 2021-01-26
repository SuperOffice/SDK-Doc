<properties date="2016-06-24"
SortOrder="166"
/>

*Description*:

Gets data contained in a ticket/request. A set of fields that you wish to retrieve must be supplied.

 

Valid fields to retrieve are:

* ticket.id

* ticket.title

* ticket.created\_at

* ticket.category

* ticket.status

* ticket.replied\_at

* ticket.closed\_at

* ticket.priority

* ticket.read\_by\_customer

* ticket.has\_attachment

* ticket.last\_changed

* ticket.cust\_id

* and any extra field.

*In Parameters*:

* sessionKey                        - A valid session key

* ticketId     - The ticket Id

* ticketFields           - A list of the fields you wish to retrieve.

*Out Parameters*:

* errorCode  - See appendix for error codes

* ticketResult           - An array containing these fields:

  * field                                   - The field name

  * type                                   - The field type, see appendix for info

  * value                                  - The value

* messageIds            - A list of ids to all messages on this ticket



*Example*:
```
ticket.ticketService ticketService = new * ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals(“0”)
{

  string[] ticketFields = new string[1];
  ticketFields[0] = ”ticket.title”;

  ticket.ResultStruct[] ticketInfo;

  int[] messageIds;

  getTicket(sessionKey,”10”,ticketFields, out ticketInfo, out messageIds);
  
  foreach(ticket.ResultStruct i in ticketInfo)
  {

    cout &lt;&lt; “field:” &lt;&lt; i.field &lt;&lt; “ value:” &lt;&lt; i.value &lt;&lt; endl;

  }

}
```