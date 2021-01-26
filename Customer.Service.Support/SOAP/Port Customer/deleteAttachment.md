<properties date="2016-06-24"
SortOrder="107"
/>

*Description*:

Deletes an attachment. Only attachments not attached to any other entities in eJournal can be deleted. That way only stray attachments can be deleted, hence we don’t need to verify the validity of the contact.

 

*In Parameters*:

* attachmentId         - The id of the attachment

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:

customer.customerService custService = new customer.customerService();

string ret = custService.deleteAttachment(“10”);

if(ret == "0")    

       cout &lt;&lt;  "Hip hurray";

else

       cout &lt;&lt;  "Oh no";
