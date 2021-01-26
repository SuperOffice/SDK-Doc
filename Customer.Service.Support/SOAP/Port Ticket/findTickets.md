<properties date="2016-06-24"
SortOrder="151"
/>

*Description*:

This method will search for tickets/requests and return information about the tickets which match the search criterias.

 

Valid fields for search criterias  and search fields are:

* ticket.id

* ticket.title

* ticket.created\_at

* ticket.category

* ticket.status

* ticket.replied\_at

* ticket.closed\_at

* ticket.priority

* ticket.read\_by\_customer

* ticket.has\_attachment

* ticket.last\_changed

* ticket.author

* ticket.created\_by

* ticket.owned\_by

* customer.id (note that this only will match the primary customer)

* customer.firstname

* customer.lastname

* and any extra field.

 

Valid operator for search criterias are:

* OperatorContains

* OperatorBeginsWith

* OperatorEquals

* OperatorGt

* OperatorLt

* OperatorGte

* OperatorLte

* OperatorNotEqualsOperatorIn (Only valid for integer/relation fields. Example value: 1,2-4,8-10)

* OperatorNotIn

 

 

*In Parameters*:

* sessionKey - A valid sessionKey

* searchCriteria        - A list of criterias (field, operator, value)

* searchFields          - A list of fields that you want to have returned.

* maxRows              - Maximum number of rows returned.

* orderBy                 - which field you wish to order the returned data by.

* ascending              - set to true if you wish that the returned data is ordered ascending, false if you want them descending.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* searchResult          - A two dimensional array of field/value/type structs.

 

*Example*:
```
ticket.ticketService ticketService = new * ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("tommy", "myPwd", out sessionKey);

 
if (errorCode.Equals(“0”)
{

  ticket.CriteriaStruct[] searchCriteria = new searchCriteria[1];

  searchCriteria[0].field = “ticket.id”;
  searchCriteria[0].op    = “OperatorLt”;
  searchCriteria[0].value = “10”;

  string[] fields = new string[2];
  fields[0] = “ticket.id”;
  fields[1] = “ticket.title”;

  ticket.ResultStruct[][] result;

  if(ticketService.findTickets(sessionKey, searchCriteria, fields, “100”, “ticket.id”,true, out result)== “0”);
  {
    foreach(i1 ResultStruct[] in result)
    {
      cout &lt;&lt; “Row\\n”;
      foreach(i2 ResultStruct in i1)
      {
        cout &lt;&lt; “Field:” &lt;&lt; i2.field &lt;&lt; endl;
        cout &lt;&lt; “Value:” &lt;&lt; i2.value &lt;&lt; endl;
      }
    }

  }

}
```

 
