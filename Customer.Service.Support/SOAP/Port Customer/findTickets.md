<properties date="2016-06-24"
SortOrder="116"
/>

*Description*:

This method is used to find one or more requests (tickets), based on a search criteria  your supply. The search criteria are specified using an array of **CriteriaStruct**, which consist of a field, operator and value. All are entered as strings. The field indicates what field to search for, the operator indicates how to compare this field and value indicates what value to compare. In the array **SearchFields** you specify which fields you want returned for each request. The answer is returned in a double array of **ResultStruct**. The outer array controls which request this is, thus there will be equally many other arrays as request found from your search criteria. The inner array controls the fields returned as specified in **SearchFields**. See **getTicket()** for how this works.

 

*In Parameters*:

* sessionKey            - A valid session key

* searchCriteria        - The search criteria consisting of a field, op and value. All are supplied as strings. If you specify an illegal field, it will be ignored. Valid fields are:

o   ticket.id

o   ticket.title

o   ticket.created\_at

o   ticket.category

o   ticket.status

o   ticket.replied\_at

o   ticket.closed\_at

o   ticket.priority

o   ticket.read\_by\_customer

o   ticket.has\_attachment

o   ticket.last\_changed

 

Extra fields are also valid on the form:

o   ticket.\[extra field name\]

 

If you specify an illegal operator, the search criteria will be ignored. Valid operators are:

o   OperatorContains

o   OperatorBeginsWith

o   OperatorEquals

o   OperatorGt

o   OperatorLt

o   OperatorGte

o   OperatorLte

o   OperatorIn (Only valid for integer/relation fields. Example value: 1,2-4,8-10)

o   OperatorNotIn

o   OperatorEmpty

* searchFields          - An array of strings indicating all fields to be retrieved for this request. If you specify an illegal field, it will be ignored. Valid fields are:

o   ticket.id

o   ticket.title

o   ticket.created\_at

o   ticket.category

o   ticket.status

o   ticket.replied\_at

o   ticket.closed\_at

o   ticket.priority

o   ticket.read\_by\_customer

o   ticket.has\_attachment

o   ticket.author

o   ticket.created\_by

o   customer.id

o   customer.firstname

o   customer.lastname

 

Extra fields are also valid on the form:

o   ticket.\[extra field name\]

 

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* searchResult          - A double array of **ResultStruct** containing all found requests and the specified search fields. See **getTicket()** and the out parameter ticketResult for a description of what the inner array looks like. The outer array contains all found request, and you increase this to get to the next request.

 

*Example*:

customer.customerService custService = new customer.customerService();

string sessionKey;

string errorCode = custService.login(“johndoe”,”pw”,out sessionKey);

if(errorCode.Equals(“0”))

    {

customer.CriteriaStruct\[\] ticketSearchCriteria = 

          new customer.CriteriaStruct\[1\];

string\[\] ticketSearchFields = new string\[2\];

customer.ResultStruct\[\]\[\] ticketSearchResult;

ticketSearchCriteria\[0\] = new customer.CriteriaStruct();

ticketSearchCriteria\[0\].field = "ticket.id";

ticketSearchCriteria\[0\].op = "OperatorGt";

ticketSearchCriteria\[0\].value = "0";

 

ticketSearchFields\[0\] = "ticket.id";

ticketSearchFields\[1\] = "ticket.title";

 

 

custService.findTickets(Session\["sessionKey"\].ToString(), ticketSearchCriteria, ticketSearchFields, out ticketSearchResult);
