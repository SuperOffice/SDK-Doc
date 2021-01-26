<properties date="2016-06-24"
SortOrder="145"
/>

*Description*:

To avoid that several clients receives user notifications (new request, new chat message, new message on existing request etc) a subscription system is introduced. If you supply a valid session key to this method, you will receive a notification key that you need to suppy when requesting new notification. This key will only be valid for 5 minutes and is renewed every time it is used.

           

*In Parameters*:

* sessionKey            - A valid session key

* source        - A string identifying your client (e.g. “MySoapClient”)

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* notificationKey     - A notification key to be used in getUserNotfications() etc.

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);
 

if (errorCode.Equals(“0”)
{

  string notifyKey;

  allocUserNotifications(sessionKey, “MyClient”,out notifyKey);

  ticket.NotificationStruct[] notifications;

  getUserNotfications(sessionKey, notifyKey, out notifications);

}
```