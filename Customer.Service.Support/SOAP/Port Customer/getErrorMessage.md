<properties date="2016-06-24"
SortOrder="125"
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

customer.customerService custService = new customer.customerService();

custService.login("test","test",out sessionKey);

string[] customerFields = new string[1];

customerFields[0]="kuztumer.name";

customer.ResultStruct[] customerResult;

string[] customerEmail;

string res = custService.getCustomer(sessionKey, customerFields, out customerResult, out customerEmail);

if(res =="0")
       textBox1.Text = "OK";
else
       textBox1.Text = custService.getErrorMessage(sessionKey);
```