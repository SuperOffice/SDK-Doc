<properties date="2016-06-24"
SortOrder="147"
/>

*Description*:

This method will search for customers and return information about the customers which match the search criteria. If you specify an illegal search criterion (an invalid field or matching operator) an error message will be returned.

If you specify an illegal search field, the field will be dropped in the output.

 

All fields that are reachable by the eJournal dot syntax can be used. Refer to ejScript documentation for explanation of this format. Examples of valid fields for search criteria and search fields are:

  * person.person\_id

  * person.firstname

  * person.lastname

  * person.contact\_id.contact\_id (id of the company)

  * person.contact\_id.name (name of the company)

  * person.(Email-&gt;person\_id).email\_address
  
Valid operators for search criteria are:

* OperatorContains

* OperatorBeginsWith

* OperatorEquals

* OperatorNotEquals

* OperatorLt (only for numerics)

* OperatorGt (only for numerics)

* OperatorLte (less than equal)

* OperatorGte (greater than equal)

 

*In Parameters*:

* sessionKey            - A valid sessionKey

* searchCriteria        - A list of criterias (field, operator, value)

* searchFields          - A list of fields that you want to have returned.

* maxRows  - Maximum number of rows returned.

* orderBy     - (not in use)

* ascending  - (not in use)

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* searchResult          - A two dimensional array of field/value/type structs.

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("tommy", "myPwd", out sessionKey);

 
if (errorCode.Equals(“0”)
{

  ticket.CriteriaStruct[] searchCriteria = new    ticket.CriteriaStruct[1];

  searchCriteria[0] = new ticketService.CriteriaStruct();
  searchCriteria[0].field = “customer.email”;
  searchCriteria[0].op    = “OperatorEquals”;
  searchCriteria[0].value = “hjelms@ejournal.no”;

  string[] fields = new string[2];
  fields[0] = “customer.id”;
  fields[1] = “customer.email”;

  ticket.ResultStruct[][] result;

  if(ticketService.findCustomers(sessionKey, searchCriteria, fields, “100”, “customer.id”, true, out result)== “0”);
  {
    foreach(ticketService.ResultStruct[] i1 in result)
    {
      cout &lt;&lt; “Row\\n”;
      foreach(ticketService.ResultStruct[] i2 in i1)
      {
        cout &lt;&lt; “Field:” &lt;&lt; i2.field &lt;&lt; endl;
        cout &lt;&lt; “Value:” &lt;&lt; i2.value &lt;&lt; endl;
      }
    }
  }

}
```
