<properties date="2016-06-24"
SortOrder="134"
/>

*Description*:

This method is used to log out a customer, and thus making the session key invalid for further use. You should always log out a customer when you have finished a session.

 

*In Parameters*:

* sessionKey            - A valid session key

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string ret = custService.logout(sessionKey);
```