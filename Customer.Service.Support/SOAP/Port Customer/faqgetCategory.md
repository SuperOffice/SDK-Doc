<properties date="2016-06-24"
SortOrder="110"
/>

*Description*:

Retrieves information about an FAQ category

 

*In Parameters*:

* sessionKey            - A valid session key. If empty the category has to be public.

* categoryId - The id of the category. -1 if you want the top node

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* faqSubCategories  - All subcategories. Every structure contains the following fields:

  * id         - The category ID

  * name    - The category name

  * description      - The description of this category

* faqEntries        - All FAQ entries in this category. See **faq\_findEntries()** for a description of the fields.

* faqParents                   -     The parents listed in a top/down matter: topCategory, notSoTopCategory, ... thisCategory

  * id         - The category id of the category

  * name    - The name of the category

* faqGroups       - The groups contained in this category. Every group contains the following information:

  * description               - The description of the group

  * id                              - The group ID of this group. Used in **faq\_getGroupEntries()**.

  * entries                       - The FAQ entries in this group. Each entry contains the following information:

* id                        - The FAQ entry id

* question              - The question in the entry

 

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

  string ret = custService.faq_getCategory(sessionKey, "2", out categories, out entries, out parents, out groups);
}
```