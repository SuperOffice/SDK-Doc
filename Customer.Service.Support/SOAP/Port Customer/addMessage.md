<properties date="2016-06-24"
SortOrder="104"
/>

*Description*:

Adds a message to an existing ticket. You are only allowed to add messages to a ticket owned by the logged in customer.

 

*In Parameters*:

* sessionKey            - A valid session key
* messageBody        - The text in the message.
* ticketId     - The ticket to attach the message to.
* sLevel       - Security level of the ticket. Can be:
   *   1 – Intenal
   *   2 – External

 

Other values will result in an error.

* attachmentIds       - An array of the IDs of all attachments that you wish to connect to this message. The ID is received from addAttachment().

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes
* messageId - The internal ID of the new message.

 

*Example*:

```cs
customer.customerService custService = new customer.customerService();

string sessionKey;
string ret = custService.login("test","test", out sessionKey);

if(ret == "0")
{
       string\[\] attachmentIDs = new string\[0\];
       string messageId;
       ret = custService.addMessage(sessionKey,
              "I would like more information","1201","2",
              attachmentIDs,
              out messageId);
       if(ret == "0")
          cout &lt;&lt; messageId;
          //messageId now contains the new ID
       custService.logout(sessionKey);
}
```
