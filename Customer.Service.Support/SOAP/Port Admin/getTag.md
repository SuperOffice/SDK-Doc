<properties date="2016-06-24"
SortOrder="184"
/>

*Description*:

Get the tag that is used by eJournal to identify incoming emails with the correct request.

 

*In Parameters*:

* sessionKey            - A valid session key.

 

*Out Parameters*:

* tag                         - The configured tag for Service

 

*Example*:
```
string sessionKey;

admin.adminService adminService = new admin.adminService();

ticket.ticketService ticketService = new ticket.ticketService();

string errorCode = ticketService.login("test","test",out sessionKey);

if(errorCode.Equals("0"))
{
       string tag;
       adminService.getTag(sessionKey, out tag);
}
```