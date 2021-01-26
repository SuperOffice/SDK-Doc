<properties date="2016-06-24"
SortOrder="161"
/>

*Description*:

Gets data contained in a single message. Info about the attachments that are linked to this message are also returned, and can be retrieved by getAttachment();

Valid data field to retrieve are:

 

* message.id
* message.body
* message.header
* message.md\_body
* message.created\_at
* message.author
* message.slevel (1=internal, 2=external)

 

*In Parameters*:

* sessionKey                        - A valid session key

* messageId - The message Id

* messageField         - A list of the fields you wish to retrieve.

*Out Parameters*:

* errorCode  - See appendix for error codes

* messageResult       - An array containing these fields:

  * field                                   - The field name

  * type                                   - The field type, see appendix for info

  * value                                  - The value

* attachmentInfo     - A list of all attachments on this message.

  * attachmentId   - The id

  * attachmentName         - The file name of the attachment

  * contentType    - The content type (“text/plain”, “text/html” etc)

  * attachmentKey            - A key needed to retrieve the attachment.



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals(“0”)
{

  string[] messageFields = new string[1];

  messageFields[0] = ”message.body”;

  ticket.ResultStruct[] messageInfo;

  ticket.AttachmentInfoStruct[] attachments;

  getMessage(sessionKey,”23”,messageFields, out messageInfo, out attachments);
  
  foreach(ticket.ResultStruct i in messageInfo)
  {
    cout &lt;&lt; “field:” &lt;&lt; i.field &lt;&lt; “ value:” &lt;&lt; i.value &lt;&lt; endl;

  }

}
```

 
