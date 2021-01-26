<properties date="2016-06-24"
SortOrder="137"
/>

*Description*:

This method will send the username and password to the given email address (if it exist). The actual text sent is configured in eJournal (Settings-&gt;System).

 

*In Parameters*:

* emailCode             - The email address of the customer to send the password

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string errorCode = custService.login(“johndoe”,”pw”,out sessionKey);

if(errorCode.Equals(“0”))
{
       string ret = custService.sendPassword("test@mycompany.com");
}

```