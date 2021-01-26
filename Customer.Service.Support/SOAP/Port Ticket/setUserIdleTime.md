<properties date="2016-06-24"
SortOrder="178"
/>

*Description*:                                                    

Sets the number of seconds a user has been idle, ie. no inputs from keyboard or mouse. This is used to automatically set users to idle so they do not receive any new chat sessions.

                  

*In Parameters*:

* sessionKey      - A valid session key

* idleTime          - Seconds user has been idle

 

*Out Parameters*:

* errorCode  - See appendix for error codes



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”)
{

  int it = GetUserIdleTime() //your own method for finding idle time

  ticketService.setUserIdleTime(sessionKey, idleTime);

}
```