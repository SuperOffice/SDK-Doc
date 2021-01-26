<properties date="2016-06-24"
SortOrder="169"
/>

*Description*:

Authenticates a user and returns a valid session key if successful.

                  

*In Parameters*:

* userName        - A users valid name

* password         - A users valid password

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* sessionKey            - All notifications with the following fields:



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”))
{

  cout &lt;&lt; “hurray!” &lt;&lt; endl;
}
```