<properties date="2016-06-24"
SortOrder="129"
/>

*Description*:

Retrieves a message. The ID required to call this message is retrieved from **getTicket()**. The example shows how to retrieve the message ID and to iterate over the result. Note that only tickets available to the user logged in will be available.

 

*In Parameters*:

* sessionKey            - A valid session key

* messageId - Internal ID of the message. This is the id retrieved from getTicket.

* messageFields       - A list of fields that you wish to retrieve. Legal fields are:

  * message.body

  * message.id

  * message.header

  * message.md\_body

  * message.created\_at

  * message.author

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* messageResult       - Array of the results. See **getTicket()** for reference to the fields of this structure *ResultStruct*.

* attachmentInf   - Array of information about attachments connected to this message. Each element contains the fields: attachmentId, attachmentName and contentType.

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test", out sessionKey)=="0")
{
   string[] ticketFields = new string[1];
   ticketFields[0]="ticket.id";
   customer.ResultStruct[] ticketResult;
   string[] messageIds;
   if(custService.getTicket(sessionKey, "1208", ticketFields, out ticketResult, out messageIds)=="0")
   {
      string newValue ="";
      string[] messageFields = new string[2];
      messageFields[0] = "message.created_at";
      messageFields[1] = "message.body";

      customer.ResultStruct[] messageResult;
      customer.AttachmentInfoStruct[] attachmentInfo;

      if(custService.getMessage(sessionKey,
         messageIds[0],
         messageFields,
         out messageResult,
         out attachmentInfo)=="0")
      {
         foreach(customer.ResultStruct i in messageResult)
         {
            if(i.field == "message.body")
               newValue = i.value;
         }
      }
      textBox1.Text=newValue;
   }
   else
   {
      textBox1.Text = custService.getErrorMessage(sessionKey);
   }

}
```