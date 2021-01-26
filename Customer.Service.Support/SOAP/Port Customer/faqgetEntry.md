<properties date="2016-06-24"
SortOrder="111"
/>

*Description*:

Gets the detailed information about an FAQ entry.

 

*In Parameters*:

* sessionKey            - A valid session key. If empty only public entries will be accessible.

* entryId      - The entry id.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* title         - The title of the entry

* question  - The question.

* answer    - The answer. Is HTML encoded if hasHtml is “1”.

* links        - Array of all links attached to this entry.

  * name                                  - The name of the link

  * url                                      - The URL to the link

* attachmentInfo     - Array of information about attachments connected to this FAQ entry. Each element contains the fields: attachmentId, attachmentName and contentType.

* hasHtml  - This indicates if the answer is formatted with HTML.

* score       - The score this entry has received. This is a number is between 1 and 100

* faqParents - All parents to this entry, listed in a top-down matter.

  * id                                       - id of the parent folder

  * name                                  - name of the parent folder

 

*Example*:
```
customer.customerService custService = new customer.customerService();
string sessionKey;
if(custService.login("test","test", out sessionKey) == "0")
{
  string title;

  string question;

  string answer;

  customer.FaqLinkStruct[] links;

  string[] attachmentIds;

  bool hasHtml;

  string score;

  customer.FaqParentStruct[] faqParents;

  string entryId = "2";

  string res = custService.faq_getEntry(sessionKey, entryId, out title, out question, out answer, out links, out attachmentIds, out hasHtml, out score, out faqParents);
}
```