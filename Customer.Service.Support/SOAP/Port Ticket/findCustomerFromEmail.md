<properties date="2016-06-24"
SortOrder="148"
/>

*Description*:

Deprecated: use findCustomers() instead.

 

*In Parameters*:

* username               - The username of an eJournal administrator

* password               - The password of an eJournal administrator

* custEmail              - The email address of the customer to find

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* custUsername        - The username of the customer if found

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string custUsername;

string errorCode = ticketService.findCustomerFromEmail("myUser", "myPwd", "customer@domain.com", out custUsername);

if (errorCode.Equals(“0”)
  cout &lt;&lt; custUsername; // Here we have the username

```