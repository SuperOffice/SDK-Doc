<properties date="2016-06-24"
SortOrder="132"
/>

*Description*:

This method is used to log in a customer. Almost all the other methods require that the user is logged in. The **login()** method requires the username and password to the customer. If you do not have the password of the customer, you should use **loginAsCustomer()** instead. The **login()** method returns a session key, and this key you have to use for all the other methods to work. The session key identifies the user, and also that it is a valid session. The session key has a idle timeout of  30 minutes, but this can be adjusted in the eJournal database. You should call **logout()** when you are finished with a seesion.

 

*In Parameters*:

* username   - The eJournal username of the customer

* password   - The eJournal password of the customer

 

*Out Parameters*:

* errorCode  - 0 = succsessfull login, 1 = incorrect login

* sessionKey            - The generated session key

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string sessionKey;

string errorCode = custService.login(“johndoe”,”pw”,out sessionKey);
```