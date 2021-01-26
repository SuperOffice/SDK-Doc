<properties date="2016-06-24"
SortOrder="157"
/>

*Description*:

Retrieve information about a customer. You specify which fields you wish to retrieve in the *customerFields* field. If one or more of the fields are invalid no fields are returned.

 

*In Parameters*:

* sessionKey            - A valid session key

* customerId            - Id of the customer to retrieve

* customerFields      - A list of the fields you wish to retrieve. You can specify standard fields or extra fields. Extra fields are given on the form “customer.x\_2” where the number is the ID on the extra field. Legal standard fields are:

o   customer.id

o   customer.name

o   customer.firstname

o   customer.lastname

o   customer.phone

o   customer.cellphone

o   customer.note

o   customer.language

o   customer.username

o   customer.extTable

o   customer.extKey

o   customer.company

o   customer.password

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* customerResult     - An array of the fields queried. See **getTicket()** for reference.

* customerEmail      - An array of all email addresses registered on this customer.

 

*Example*:

string sessionKey;

ticket.ticketService ticketService = new ticket.ticketService();

if(ticketService.login("test","test", out sessionKey) == "0")

{

       string\[\] customerFields = new string\[4\];
       customerFields\[0\]="customer.name";
       customerFields\[1\]="customer.phone";
       customerFields\[2\]="customer.note";
       customerFields\[3\]="customer.cellphone";

 

       ticket.ResultStruct\[\] customerResult;
       string \[\] customerEmail;
                                                             
       string res = ticketService.getCustomer(sessionKey,
                                    “22”,
                                    customerFields,
                                    out customerResult,
                                    out customerEmail);

}
