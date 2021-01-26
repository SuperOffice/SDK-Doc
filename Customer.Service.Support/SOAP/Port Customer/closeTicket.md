<properties date="2016-06-24"
SortOrder="106"
/>

*Description*:

This method will close the given request if the customer has access to this. The request can either be his own, or if he has company access, it can be a request of another customer in the same company.

 

*In Parameters*:

* sessionKey            - A valid session key.

* ticketId  - The id of the request to close

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

 

if(custService.login("test","test", out sessionKey) == "0")

{

       string res = custService.getCategories(sessionKey, “345”);
       if(ret == "0")        
          cout &lt;&lt;  "Request closed";
       else
          cout &lt;&lt;  "Something went wrong. Check error code";

}
```