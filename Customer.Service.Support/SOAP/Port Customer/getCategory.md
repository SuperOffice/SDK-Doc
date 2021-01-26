<properties date="2016-06-24"
SortOrder="122"
/>

Description:

Retrives the category with the given ID. The category has to be available for the customer to get information about it (depends on if the category is external/internal. This can be overridden if the customer language module is installed).

 

*In Parameters*:

* sessionKey            - A valid, or empty session key. If you wish to retrieve the language dependant categories for this customer a valid session key is required.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* category   - The category with the given ID. The structure is as follows:

  * id                        - The category ID

  * name                   - External category name

  * parentId             - The category ID of the parent. -1 if this is a top level category, or the parent is internal.

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test", out sessionKey) == "0")
{
  customer.CategoryStruct category;
  string res = custService.getCategory(sessionKey, out category);
}
```