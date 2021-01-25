<properties date="2016-06-24"
SortOrder="133"
/>

loginAsCustomer
---------------

*Description*:

This method is used to log in a customer, but instead of using the customers password, you use your own eJournal username and password for verification.

 

*In Parameters*:

* username                           - Your eJournal username

* password                           - Your eJournal password

* customerUsername            -  The username of the customer

 

*Out Parameters*:

* errorCode  - 0 = successful login, 1 = incorrect login

* sessionKey            - The generated session key

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string sessionKey;

string ret = custService.loginAsCustomer("john", "pw", “johndoe”, out sessionKey);
```