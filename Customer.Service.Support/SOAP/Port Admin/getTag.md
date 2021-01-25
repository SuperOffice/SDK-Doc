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

 

ticketService.login("test","test",out sessionKey);

string res = \[some method()\]

if(res =="0")

       textBox1.Text = "OK";

else

       textBox1.Text = adminService.getErrorMessage(sessionKey);
```