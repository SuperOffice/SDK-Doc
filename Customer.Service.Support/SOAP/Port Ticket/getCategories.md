<properties date="2016-06-24"
SortOrder="155"
/>

*Description*:

Retrieves all categories that are available in the system. If you wish to build a tree structure you can do this manually by checking the parent IDs of each category. The array returned is ordered so that each parentId have a corresponding id earlier in the array. This makes it easy to create a tree structure representation of the category hierarchy.

 

*In Parameters*:

* sessionKey            - A valid session key.

*Out Parameters*:

* errorCode  - See appendix for error codes

* categoryIds           - An array of all categories. Elements of this structure is as follows:

  * id                        - The category ID

  * name                   - External category name

  * parentId             - The category ID of the parent. -1 if this is a top level category.

  * isInternal – Boolean indicating if it is internal or external

 

*Example*:
```
string sessionKey;

ticket.ticketService ticketService = new ticket.ticketService();

if(ticketService.login("test","test", out sessionKey) == "0")
{

       ticket.CategoryStruct[] categoryIds;
       string res = ticketService.getCategories(sessionKey, out categoryIds);

}
```