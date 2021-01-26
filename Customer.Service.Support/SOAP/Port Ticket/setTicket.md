<properties date="2016-06-24"
SortOrder="177"
/>

*Description*:                                                    

Sets the value of one or more fields on a ticket. At the time of writing the following fields are legal:
* ticket.category
* ticket.owner
* ticket.title
* ticket.status (open, close, delete)
* ticket.customerId (-1 will delete all connected customers, any other id will add it)
* ticket.filterAddress (replies will use this as From-address)
* ticket.filterAddress
* ticket.createdAt
* ticket.slevel (1=internal, 2=external)
* ticket.dbiAgentId
* ticket.dbiKey
* ticket.dbiLastSynchronized
* And all extra fields.

 

                  

*In Parameters*:

* sessionKey      - A valid session key

* ticketId           - The ticket ID

* ticketValues    - An array of field/value structs

 

*Out Parameters*:

* errorCode  - See appendix for error codes


*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "banken", out sessionKey);

if (errorCode.Equals(“0”)
{

  ticket.ValuePairStruct[] values = new ticket.ValuePairStruct[1];

  values[0] = new ticket.ValuePairStruct();
  values[0].field = “ticket.title”;
  values[0].value = “New title”;

  ticketService.setTicket(sessionKey,”70”, values);

}
```