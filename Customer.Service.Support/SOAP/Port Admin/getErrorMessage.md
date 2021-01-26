<properties date="2016-06-24"
SortOrder="182"
/>

*Description*:

Finds the descriptive text for an error. These messages are linked to the session, so only the last error message for one session is returned. For errors before you receive a valid session key see the appendix.

 

*In Parameters*:

* sessionKey            - A valid session key.

 

*Out Parameters*:

* errorMessage         - A text explaining the last error.

 

*Example*:
```
string sessionKey;

admin.adminService adminService = new admin.adminService();

ticket.ticketService ticketService = new ticket.ticketService();

ticketService.login("test","test",out sessionKey);

string res = some_method();

if(res =="0")
       textBox1.Text = "OK";
else
       textBox1.Text = adminService.getErrorMessage(sessionKey);
```