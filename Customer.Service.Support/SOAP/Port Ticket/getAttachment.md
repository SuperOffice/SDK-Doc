<properties date="2016-06-24"
SortOrder="154"
/>

*Description*:

Retrieves an attachment. Attachment can be linked to various types of eJournal entities, for instance messages, faq entries, reply templates etc. The client stub should be able to decode the binary data automatically. If not you should base64 decode the returned byte stream.

 

*In Parameters*:

* sessionKey            - A valid session key, or empty if the attachment is linked to a public FAQ entry.

* attachmentId         - Id of the attachment to retrieve.

* attachmentKey      - The unique key identifying this attachment, for security reasons

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* attachmentName   - The file name of the attachment

* contentType          - The mime like content type of the file. Popular content types are:

  * “text/html”                                       .md .md

  * “application/msword”                      .doc

  * “application/octet-stream”               .bin .exe

  * “application/x-zip”                           .zip

* data                                   The attachment binary data.

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string attachmentId = "34";

string attachmentName;

string contentType;

string sessionKey;

 

ticketService.login(“Kai”,”Akk”, out sessionKey);

string[] messageFields = new string[0];

ticketService.ResultStruct[] messageResult;
ticketService.AttachmentInfoStruct[] attachments;
ticketService.getMessage(sessionKey,”12324”,messageFields, out messageResult, out attachmentInfoStruct);

System.Byte[] data;

string res = ticketService.getAttachment(sessionKey, attachments[0].attachmentId, attachments[0].attachmentKey, out attachmentName, out contentType, out data);

if(res == ”0”)
{

  ...StoreAttachmentToDisk...

}
```