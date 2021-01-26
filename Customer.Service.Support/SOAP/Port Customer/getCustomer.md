<properties date="2016-06-24"
SortOrder="124"
/>

*Description*:

Retrieve information about a customer. You specify which fields you wish to retrieve in the *customerFields* field. If one or more of the fields are invalid no fields are returned.

 

*In Parameters*:

* sessionKey            - A valid session key

* customerFields      - A list of the fields you wish to retrieve. You can specify standard fields or extra fields. Extra fields are given on the form “customer.x\_2” where the number is the ID on the extra field. Legal standard fields are:

  * customer.id

  * customer.name

  * customer.firstname

  * customer.lastname

  * customer.phone

  * customer.cellphone

  * customer.note

  * customer.language

  * customer.username

  * customer.extTable

  * customer.extKey

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* customerResult     - An array of the fields queried. See **getTicket()** for reference.

* customerEmail      - An array of all email addresses registered on this customer.

 

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test", out sessionKey) =="0")
{
  string[] customerFields = new string[4];
  customerFields[0]="customer.name";
  customerFields[1]="customer.phone";
  customerFields[2]="customer.note";
  customerFields[3]="customer.cellphone";

  customer.ResultStruct[] customerResult;
  string [] customerEmail;
                                                        
  string res = custService.getCustomer(sessionKey, customerFields, out customerResult, out customerEmail);

}
```
