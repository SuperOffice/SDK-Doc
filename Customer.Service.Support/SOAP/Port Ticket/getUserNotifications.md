<properties date="2016-06-24"
SortOrder="167"
/>

*Description*:

Will retrieve all notification to the current user that has been generated since the last call to this method, from this or any other client application.

                  

*In Parameters*:

* sessionKey      - A valid session key

* notificationKey     - A subscription key retrived by the allocUserNotification() method

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* userNotifications   - All notifications with the following fields:

  * type                 - type of notification, see appendix

  * createdBy        - the id of the user that generated this notification

  * ticketId           - the ticketId associated with this notification if any

  * message           - the text message.

 

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