<properties date="2016-06-24"
SortOrder="144"
/>

*Description*:

Execute a CRMScript with parameters.

*In Parameters*:

* sessionKey            - A valid session key

* includeId             - The include id text.

* parameters            - Array of name/value pairs, available in the script via getVariable("varName").


*Out Parameters*:

* errorCode  - See appendix for error codes

* script result            - Result from the script execution.


*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals("0"))
{
  string messageId = 10;

  ticket.ValuePairStruct[] values = new ticket.ValuePairStruct[2];
  
  values[0] = new ticket.ValuePairStruct();
  values[0].field = "var1Key";   // variable name
  values[0].value = "var1Value";  //variable value
  values[1].field = "var2Key";   // variable name
  values[1].value = "var2Value";  //variable value

  string error = ticketService.executeScript(sessionKey, includeId, values, out scriptResult);
}
```

