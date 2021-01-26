<properties date="2016-06-24"
SortOrder="105"
/>

*Description*:

Checks if this user name and passwords contains valid login credentials. Will return SoapErrorIncorrectLoginCustomer error code if not correct

 

*In Parameters*:

* username   - The user name

* password   - The password

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string ret = custService.checkPassword(“username”,”password”);

if(ret == "0")    
       cout <<  "Hip hurray";
else
       cout << "Oh no";
```