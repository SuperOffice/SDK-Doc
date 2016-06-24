<properties date="2016-06-24"
SortOrder="171"
/>

*Description*:                                                    

Renders a session key invalid.

                  

*In Parameters*:

* sessionKey      - A valid session key

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* *

*Example*:

ticket.ticketService ticketService = new ticket.ticketService();

 

string sessionKey;

string errorCode = ticketService.login("egon",

                   "norges bank", out sessionKey);

 

if (errorCode.Equals(“0”)

{

  ticketService.logout(sessionKey);

}
