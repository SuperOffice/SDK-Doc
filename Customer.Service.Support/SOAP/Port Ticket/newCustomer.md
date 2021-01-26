<properties date="2016-06-24"
SortOrder="172"
/>

*Description*:                                                    

Creates a new empty customer.

                  

*In Parameters*:

* sessionKey      - A valid session key

 

*Out Parameters*:

* errorCode        - See appendix for error codes

* customerId      - The Id of the new customer



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

 

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);


if(errorCode.Equals(“0”)
{

  string customerId;

  ticketService.newCustomer(sessionKey, out customerId);

}
```