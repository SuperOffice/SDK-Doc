<properties date="2016-06-24"
SortOrder="141"
/>

*Description*:

Deprecated, see **addMessage3()** instead.

 

Adds a message to an existing ticket. If you are creating a new ticket, you need to also call this to add a message to the ticket. If you have file attachments you wish to add to this message, you have to call addAttachment() for each of these.

 

Note that when making a new ticket, a New Ticket notification is sent, so you should normally not send a notification for the addMessage() call. This is controlled by the *sendNotification* parameter.

 

Please note that *addMessage* will not effect ticket.status, this can be set using *setTicket*.

                  

*In Parameters*:

* sessionKey            - A valid session key

* messageBody        - The text contained in the body of this message.

* ticketId     - The id of the ticket to attach this message to.

* sLevel        - Security level. 1=Internal, 2=External.

* attachmentIds       - A list of the ids to the attachments linked to this message.

* sendNotification   - A boolean indicating if you wish that the owner is notified that a message has been added to the ticket.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* messageID            - A notification key to be used in getUserNotfications() etc.

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”))

{

  string[] attachmentIds = new string\[1\];

  attachmentIds[0]="62";

  string messageId;

  string error = ticketService.addMessage(sessionKey,

     "her er en meldingstekst\\n\\nmvh\\njulenissen",
     "1602",         //ticketId
     "1",            //internal message  
     attachmentIds, 
     true,           //send notification
     out messageId);
}
```