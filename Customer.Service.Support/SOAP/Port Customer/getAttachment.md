<properties date="2016-06-24"
SortOrder="117"
/>

*Description*:

Retrieves an attachment either linked to a message or to an FAQ entry. For attachment attached to public entries you do not need a session key.

 

*In Parameters*:

* sessionKey            - A valid session key, or empty if the attachment is linked to a public FAQ entry.

* attachmentId         - Id of the attachment to retrieve.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* attachmentName   - The file name of the attachment

* contentType          - The mime like content type of the file. Popular content types are:

  * “text/html”                                       .md .md

  * “application/msword”                      .doc

  * “application/octet-stream”               .bin .exe

  * “application/x-zip”                           .zip

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string sessionKey;
if(custService.login("test","test", out sessionKey) == "0")
{
  string attachmentId = "34";

  string attachmentName;

  string contentType;

  string data;

  string res = custService.getAttachment(sessionKey, attachmentId, out attachmentName, out contentType, out data);

  byte[] newData = System.Convert.FromBase64String(data);
}
```