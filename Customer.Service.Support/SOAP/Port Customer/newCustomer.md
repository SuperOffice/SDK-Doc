<properties date="2016-06-24"
SortOrder="135"
/>

*Description*:

This method will create a new customer with the specified user name and password. You have to log in the customer afterwards to use more method by using the **login()** method. If you want to specify more values that the user name and password, log him/her in after this method, and use the **setCustomer()** method to set any other value.

 

*In Parameters*:

* userName  - The user name of the new user

* password   - The password of the new user

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string ret = custService.newCustomer("Billy", "pass");

if (ret.Equals(“0”))
       //Ok, customer created
```