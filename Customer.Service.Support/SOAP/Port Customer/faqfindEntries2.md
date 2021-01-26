<properties date="2016-06-24"
SortOrder="109"
/>

*Description*:

This method will search for FAQ entries. The search words are given as a string, and the system will find the best entries based on that string. For each specified category,  at most 10 entries will be found. The method will search in all the given categories and subcategories. If duplicates are found, only one occurrence will be shown.  Keep in mind that the search database normally is updated only once every 12:00am. To force an update run the following command from the command line:

 

Windows:

C:\\Service\\bin\\ejournalCron -force \[mydomain.com\]

Linux:

       /usr/local/ejournal/bin/ejournalCron -force \[mydomain.com\]

 

Replace \[mydomain.com\] with the domain Service is registered on. On some systems the ejournalCron command is located in other folders.

 

*In Parameters*:

* sessionKey            - A valid session key. If empty only public FAQ entries will be found.

* searchWords         - A space separated list of words that you wish to search for.

* categoryIds           - An array of the id of the top node categories you wish to search below. All subcategories will be searched too. If you send in “-1” the whole tree will be searched, and if you enter “0”, the root node of the language of the user will be used (only when the customer language module is installed).

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* faqEntries  - An array of the faq entries. The struct that is returned contains the following elements:

  * id   - The FAQ entry ID

  * question                 - The question.

  * title                        - Title of the entry.

  * hasHtml                 - 1 if this FAQ entry is HTML formatted, 0 if it is plain text.

  * score                      - The score this entry has achieved.

  * fullName               - The name of the entry including all parent folders.

  * parentId                - The id of the folder this entry is stored in. -1 if top node.

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string sessionKey;
if(custService.login("test","test", out sessionKey) == "0")
{
       customer.FaqEntryStruct[] myFaqEntries;

       string[] categoryIds = new string[2];

       categoryIds[0] = "1";
       categoryIds[1] = "2";

       string ret = custService.faq_findEntries2(sessionKey, "public", categoryIds, out myFaqEntries);

       if(ret == “0”)
              //myFaqEntries now contains the results.
}
```