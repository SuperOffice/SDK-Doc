<properties date="2016-06-24"
SortOrder="172"
/>

*Description*:                                                    

Creates a new empty company.

                  

*In Parameters*:

* sessionKey      - A valid session key
* name      - Name of compnay
 

*Out Parameters*:

* errorCode        - See appendix for error codes

* companyId      - The Id of the new company



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

 

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);


if(errorCode.Equals(“0”)
{

  string companyId;
  string companyName = "Liberty Communications";
  ticketService.newCompany(sessionKey,  companyName, out companyId);

}
```