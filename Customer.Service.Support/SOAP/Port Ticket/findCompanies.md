<properties date="2016-06-24"
SortOrder="150"
/>

*Description*:

This method will search for companies and return information about the companies which match the search criterias. If you specify an illegal search criteria (an invalid field or matching operator) an error message will be returned.

If you specify an illegal search field, the field will be dropped in the output.

 

Valid fields for search criterias and search fields are:

cust\_company.id

cust\_company.name

cust\_company.note

cust\_company.phone

cust\_company.fax

cust\_company.adr

cust\_company.our\_contact

cust\_company.priority\_id

cust\_company.domain\_name (only as search field, returns comma separated list)

 

 

Valid operator for search criterias are:

OperatorContains

OperatorBeginsWith

OperatorEquals

OperatorLt (only for numerics)

OperatorGt (only for numerics)

 

*In Parameters*:

* sessionKey            - A valid sessionKey

* searchCriteria        - A list of criterias (field, operator, value)

* searchFields          - A list of fields that you want to have returned.

* maxRows  - Maximum number of rows returned.

* orderBy     - (not in use)

* ascending  - (not in use)

 

*Out Parameters*:

* errorCode              - See appendix for error codes

* searchResult          - A two dimensional array of field/value/type structs.

 

*Example*:

ticket.ticketService ticketService = new ticket.ticketService();

 

string sessionKey;

 

string errorCode = ticketService.login("tommy",

                   "myPwd", out sessionKey);

 

if (errorCode.Equals(“0”)

{

  ticket.CriteriaStruct\[\] searchCriteria = new searchCriteria\[1\];

  searchCriteria\[0\].field = “cust\_company.id”;

  searchCriteria\[0\].op    = “OperatorEquals”;

  searchCriteria\[0\].value = “23”;

  string\[\] fields = new string\[2\];

  fields\[0\] = “cust\_company.id”;

  fields\[1\] = “cust\_company.name”;

  ticket.ResultStruct\[\]\[\] result;

  if(ticketService.findCompanies(sessionKey, 

                            searchCriteria, fields, “100”,
                            “customer.id”, true, out result)== “0”);

  {

    foreach(i1 ResultStruct\[\] in result)
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
