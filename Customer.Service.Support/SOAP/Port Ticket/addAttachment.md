<properties date="2016-06-24"
SortOrder="140"
/>

*Description*:

Adds an attachment to Service. This attachment can be used to attach to a message, faq entry, reply template etc. The binary data should be automatically base64 encoded by your client SOAP stack, but if not you have to do this manually.

                  

*In Parameters*:

* sessionKey            - A valid session key

* attachmentName   - File name of the attachment

* contentType          - The content type, eg. “application/octet-stream”, “image/gif” etc.

* data           - binary data.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* attachmentId         - The id of the newly inserted attachment

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”))
{

  System.IO.FileStream infile = new System.IO.FileStream("DivFix.exe", System.IO.FileMode.Open,System.IO.FileAccess.Read);

  byte[] buffer = new byte[infile.Length];

  int read = infile.Read(buffer,0,(int)infile.Length);

  infile.Close();

  string attachmentId;

  ticketService.addAttachment(sessionKey, infile.Name, "application/octet-stream", buffer, out attachmentId);
}
```
