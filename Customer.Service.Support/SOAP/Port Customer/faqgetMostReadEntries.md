<properties date="2016-06-24"
SortOrder="113"
/>

*Description*:

Finds the most read entries in a category. The most read entries first.

 

*In Parameters*:

* sessionKey            - A valid session key. If empty only public entries will be listed.

* categoryId - The category. -1 indicated root node.

* maxEntries            - Maximum number of entries to retrieve

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* faqEntries  - An array of the most read entries. See **faq\_getCategory()** for a description of this structure.

 

*Example*:
```
customer.customerService custService = new customer.customerService();
string sessionKey;
if(custService.login("test","test", out sessionKey) == "0")
{
    string maxEntries ="10";

    customer.FaqEntryStruct[] faqEntries;

    string res = custService.faq_getMostReadEntries(sessionKey,"-1",maxEntries, out faqEntries);
}
```