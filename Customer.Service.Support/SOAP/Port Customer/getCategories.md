<properties date="2016-06-24"
SortOrder="118"
/>

*Description*:

Retrieves all categories that are available to the customer, if the category is external. If you wish to build a tree structure you can do this manually by checking the parent IDs of each category.

 

If the customer language module is installed you should consider the following:

If the session key is empty the default customer language is chosen, otherwise the system chooses the language of the customer. If this language has any external categories defined, these are returned as a flat structure (all nodes has parent = -1), otherwise the tree structure of all external categories is returned as above.

 

*In Parameters*:

* sessionKey            - A valid, or empty session key. If you wish to retrieve the language dependant categories for this customer a valid session key is required.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* categoryIds           - An array of all external categories. Elements of this structure is as follows:

  * id                        - The category ID

  * name                   - External category name

  * parentId             - The category ID of the parent. -1 if this is a top level category.

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test", out sessionKey) == "0")
{
  customer.CategoryStruct[] categoryIds;
  string res = custService.getCategories(sessionKey, out categoryIds);
}
```