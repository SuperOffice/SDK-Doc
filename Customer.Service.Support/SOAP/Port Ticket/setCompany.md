<properties date="2016-06-24"
SortOrder="176"
/>

*Description*:

This method will set/change one or more values on the specified company. The values are sent as an array of **ValuePairStruct**, which contain one field and one value. Note that all fields have to be valid, else nothing will be stored.

 

*In Parameters*:

* sessionKey                        - A valid session key

* companyId                        - The id of the company to change

* companyValues     - An array of **ValuePairStruct** consisting of a field and a value. The field indicate which company field you want to set, and in value you set the value for this field. It is important to only use legal fields, else the whole method will fail. To set an extra field on company, use x\_&lt;nr&gt; where nr = number of the extra fields. Use the method **getExtraFields()** to find available extra fields. Other legal fields are:

  *   name

  *   note

  *   phone

  *   fax

  *   countryId

  *   ticketPriorityId

  *   ourContact

  *   primContact

  *   ourSalesContact

  *   domain

  *   department

  *   contactCategory
  
  *   contactBusiness

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "banken", out sessionKey);

string companyId = “10”; // Hard coded company id for example

if(errorCode.Equals(“0”))
{

       ticket.ValuePairStruct[] companyValues = new ticket.ValuePairStruct[2];

       companyValues[0] = new ticket.ValuePairStruct();
       companyValues[0].field = "name";
       companyValues[0].value = "Libery Communications";
       companyValues[1] = new customer.ValuePairStruct();
       companyValues[1].field = "company";
       companyValues[1].value = "23";

       string ret = ticketService.setCompany(sessionKey, companyId, companyValues);

}
```