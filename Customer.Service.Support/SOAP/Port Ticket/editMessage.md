<properties date="2016-06-24"
SortOrder="144"
/>

*Description*:

Edits an existing message by setting values.

           

*In Parameters*:

* sessionKey            - A valid session key

* messageId             - The id of the message to edit.

* Values                   - Array of name/value values. See MessageLib::setValue for possible values to set

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* messageID            - A notification key to be used in getUserNotfications() etc.

 

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
  values[0].field = "body";   // field id, can be extra field
  values[0].value = "denne meldingen er endret fra SOAP";  //new value
  values[1].field = "x_field";   // field id, can be extra field
  values[1].value = "1032";  //new value 

  string error = ticketService.editMessage(sessionKey, messageId, values, out messageId);
}
```