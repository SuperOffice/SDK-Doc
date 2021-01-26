<properties date="2016-06-24"
SortOrder="174"
/>

*Description*:                

Creates a new ticket. To add messages to this ticket you need to use addMessage().

                                   

*In Parameters*:

* sessionKey      - A valid session key

* title                  - Title of the new ticket

* sLevel              - Security level. 1= Internal, 2=External

* categoryId       - Cateogry Id of the new ticket

* priorityId         - The id of the priority of this ticket. If -1 the priority will be chosen based on the priority of the customer or company

* owner              - The user who should own this message. -1 will automatically assign an owner based on delegation rules in the cateogry, and 1 will make the ticket unassigned.

* customers        - A list of the ids to customers associated with this ticket/request. The first customer will be the primary customer.

* extraFields      - A list of field/value structs with values for extra fields. The fields are on the form “ticket.x\_10” where 10 is the extra field id.

* sendNotification – If set to true, the user will receive a notification specified by his user settings. False will not send any notifications

 

 

*Out Parameters*:

* errorCode                    - See appendix for error codes

* ticketId                       - The Id of the new ticket.



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals(“0”)
{

  string[] custIds = new string[1];

  custIds[0] = "5";

  ticket.ValuePairStruct[] extraFields = new ticket.ValuePairStruct[1];
  extraFields[0] = new ticket.ValuePairStruct();
  extraFields[0].field = "ticket.x_24";
  extraFields[0].value = "1234";

  string ticketId;

  ticketService.newTicket(sessionKey,
                   "New Soap Ticket",
                   "2",
                   "4",
                   "-1",   //automatically find priority
                   "-1",   //automatically assign owner
                   custIds,
                   extraFields,
                   true,
                   out ticketId);
}
```