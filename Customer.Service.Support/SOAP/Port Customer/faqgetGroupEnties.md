<properties date="2016-06-24"
SortOrder="112"
/>

*Description*:

Gets entry information about all entries in an faq group. Useful if you wish to display all questions with answers for a group in a separate element/page.

 

*In Parameters*:

* sessionKey            - A valid session key. If empty only public entries will be accessible.

* groupId     - The group id.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* entries        - All entries in a group. See **faq\_findEntries()** for a description of the fields.

*Example*:
```
customer.customerService custService = new customer.customerService();
string sessionKey;
if(custService.login("test","test", out sessionKey) == "0")
{
    customer.FaqCategoryStruct[] categories;

    customer.FaqEntryStruct[] entries;

    customer.FaqParentStruct[] parents;

    customer.FaqGroupStruct[] groups;

    string ret = custService.faq_getCategory(sessionKey,
    "2",out categories,out entries,out parents,out groups);
    out attachmentIds,out hasHtml,out score,out faqParents);
}

```
