<properties date="2016-06-24"
SortOrder="138"
/>

*Description*:

This method will set/change one or more values on the logged in customer. The values are sent as an array of **ValuePairStruct**, which contain one field and one value. Note that all fields have to be valid, else nothing will be stored.

 

*In Parameters*:

* sessionKey                        - A valid session key

* customerValues     - An array of **ValuePairStruct** consisting of a field and a value. The field indicate which customer field you want to set, and in value you set the value for this field. It is important to only use legal fields, else the whole method will fail. To set an external extra field on customer, use x\_&lt;nr&gt; where nr = number of the extra fields. Use the method **getExtraFields()** to find available extra fields. Other legal fields are:

  * name

  * display\_name

  * firstname

  * lastname

  * phone

  * cellphone

  * note

  * password

  * email (will add the email address)

  * language

  * company (the id of the company)

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
customer.customerService custService = new customer.customerService();

string errorCode = custService.login(“johndoe”,”pw”,out sessionKey);

if(errorCode.Equals(“0”))
{
       customer.ValuePairStruct[] customerValues = new customer.ValuePairStruct[2];

       customerValues[0] = new customer.ValuePairStruct();
       customerValues[0].field = "name";
       customerValues[0].value = "Johnny X";
       customerValues[1] = new customer.ValuePairStruct();
       customerValues[1].field = "email";
       customerValues[1].value = "johnny@x.com";

       string ret = custService.setCustomer(sessionKey, customerValues);
}

```