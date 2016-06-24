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

o   id         - The category ID

o   name    - The category name

o   description      - The description of this category

* faqEntries        - All FAQ entries in this category. See **faq\_findEntries()** for a description of the fields.

* faqParents                   -     The parents listed in a top/down matter: topCategory, notSoTopCategory, ... thisCategory

o   id         - The category id of the category

o   name    - The name of the category

* faqGroups       - The groups contained in this category. Every group contains the following information:

o   description               - The description of the group

o   id                              - The group ID of this group. Used in **faq\_getGroupEntries()**.

o   entries                       - The FAQ entries in this group. Each entry contains the following information:

* id                        - The FAQ entry id

* question              - The question in the entry

 

*Example*:

customer.customerService custService = new customer.customerService();

customer.FaqCategoryStruct\[\] categories;

customer.FaqEntryStruct\[\] entries;

customer.FaqParentStruct\[\] parents;

customer.FaqGroupStruct\[\] groups;

string sessionKey =””;

string ret = custService.faq\_getCategory(sessionKey,

                     "2",
                     out categories,
                     out entries,
                     out parents,
                     out groups);
