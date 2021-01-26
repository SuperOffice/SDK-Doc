<properties date="2016-06-24"
SortOrder="170"
/>

*Description*:

Authenticates another user and returns a valid session key if successful. With this method you can log in another user using your own username and password.

                  

*In Parameters*:

* userId              - The id of the user you want to log in

* username         - Your usename

* password         - Your password  

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* sessionKey            - All notifications with the following fields:



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.loginAsUser(3, "egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”)
{
  cout &lt;&lt; “hurray!” &lt;&lt; endl;
}
```