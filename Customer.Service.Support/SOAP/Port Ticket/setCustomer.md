<properties date="2016-06-24"
SortOrder="176"
/>

*Description*:

This method will set/change one or more values on the specified customer. The values are sent as an array of **ValuePairStruct**, which contain one field and one value. Note that all fields have to be valid, else nothing will be stored.

 

*In Parameters*:

* sessionKey                        - A valid session key

* customerId                        - The id of the customer to change

* customerValues     - An array of **ValuePairStruct** consisting of a field and a value. The field indicate which customer field you want to set, and in value you set the value for this field. It is important to only use legal fields, else the whole method will fail. To set an extra field on customer, use x\_&lt;nr&gt; where nr = number of the extra fields. Use the method **getExtraFields()** to find available extra fields. Other legal fields are:

o   name

o   display\_name

o   firstname

o   lastname

o   phone

o   cellphone

o   note

o   password

o   username

o   email (will add the email address)

o   language

o   company (id of company and -1 to set none)

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:

ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon",

                   "banken", out sessionKey);

string customerId = “10”; // Hard coded customer id for example

if(errorCode.Equals(“0”))

{

ticket.ValuePairStruct\[\] customerValues = new ticket.ValuePairStruct\[2\];

 

       customerValues\[0\] = new ticket.ValuePairStruct();
       customerValues\[0\].field = "name";
       customerValues\[0\].value = "Johnny X";
       customerValues\[1\] = new customer.ValuePairStruct();
       customerValues\[1\].field = "company";
       customerValues\[1\].value = "23";

string ret = ticketService.setCustomer(sessionKey, customerId, customerValues);

}
