<properties date="2016-06-24"
SortOrder="103"
/>

*Description*:

Adds an attachment to the system. When creating a new message that contains an attachment you first have to add the attachment to the system, and then attach the attachment id returned from this method to the message. The attachment has to be base64 encoded.

 

*In Parameters*:

* sessionKey            - A valid or empty session key.
* attachmentName   - The file name or other suitable name of the attachment
* contentType          - The mime like content type of the file. Popular content types are:
  *   “text/html”      .md .md
  *   “application/msword” .doc
  *   “application/octet-stream”      .bin .exe
  *   “application/x-zip”      .zip
* data           - Base64 encoded data.

*Out Parameters*:

* errorCode  - See appendix for error codes
* attachmentId         - The id that is assigned to the attachment by eJournal


*Example*:

```cs
System.IO.FileStream inFile;

string fileName = "c:\\\\myfile.bin";

byte[] binaryData;
inFile = new System.IO.FileStream(fileName, System.IO.FileMode.Open, System.IO.FileAccess.Read);

binaryData = new Byte[inFile.Length];
long bytesRead = inFile.Read(binaryData, 0, (int)inFile.Length);
inFile.Close();

string base64String;
base64String = System.Convert.ToBase64String(binaryData, 0, binaryData.Length);

customer.customerService custService = new customer.customerService();

string sessionKey;
string ret = custService.login("testuser","testpassword", out sessionKey);

if(ret == "0")
{
  string attachmentID;
  ret = custService.addAttachment(sessionKey, fileName, "application/octet-stream", base64String, out attachmentID);
  //\[insert the attachment id in the new message here\]
  custService.logout(sessionKey);
}

ret = custService.logout(sessionKey);
```
