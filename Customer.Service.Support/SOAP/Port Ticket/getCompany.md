<properties date="2016-06-24"
SortOrder="156"
/>

*Description*:

Retrieve information about the specified company. You specify which fields you wish to retrieve in the *companyFields* field. If one or more of the fields are invalid no fields are returned.

*In Parameters*:

* sessionKey            - A valid session key

* companyId            - Id of the company to retrieve

* companyFields      - A list of the fields you wish to retrieve. You can specify standard fields or extra fields. Extra fields are given on the form “company.x\_2” where the number is the ID on the extra field. Legal standard fields are:

  *   company.id

  *   company.name

  *   company.address

  *   company.extTable

  *   company.extKey

  *   company.note

  *   company.phone

  *   company.fax

  *   company.primContact

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* companyResult     - An array of the fields queried. See **getTicket()** for reference.

 

*Example*:
```
string sessionKey;

ticket.ticketService ticketService = new ticket.ticketService();

if(ticketService.login("test","test", out sessionKey) == "0")
{

       string[] companyFields = new string[4];
       companyFields[0]="company.name";
       companyFields[1]="company.phone";
       companyFields[2]="company.note";
      
       ticket.ResultStruct[] companyResult;
                                                             
       string res = ticketService.getCompany(sessionKey, companyFields, out companyResult);

}
```