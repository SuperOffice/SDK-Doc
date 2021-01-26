<properties date="2016-06-24"
SortOrder="175"
/>

*Description*:                                                    

Requests information from an extra table. This is done by setting one or more criterias based on the columns in the extra table. For instance, retrieve every row where the second column in larger than the value 5. You input a list of columns you wish to retrieve. If any of these columns are references to other tables (extra tables or ordinary tables) two columns are returned. One with the value of the column (the foreign referenece number), and one with the value of the destination row. The latter is indicated by a trailing “(value)” in the returned column name.

 

If you want to use the id of the extra table in any of the parameters, use -1 as the column number.

 

Please note that since the criterias are connected by a logical operator, but they are stored in a one dimentional structure (without parantesis) the result might be surprising if the criterias are complex.

 

The logical operator is of course ignored if you apply only one criteria.

 

 The criteria operator can be one of:

* OperatorContains
* OperatorBeginsWith
* OperatorEquals
* OperatorGt
* OperatorLt
* OperatorGte
* OperatorLte
* OperatorNotEquals
* OperatorIn

 

 

                  

*In Parameters*:

* sessionKey                  - A valid session key

* tableId                         - The id of the extra table

* fields                           - A list of returned columns (extra field id). -1 indicates the id of the row.

* criterias                        - A list of criteria structs:

  * columnId         - The extra field id

  * op  - The operator (see above)

  * value                - The value

  * logicalOp         - A logical operator. Can be “and” or “or”

* orderByField   - Which field the result set should be sorted by (extra field id)

* maxEntries      - Number of maximum returned entries

* ascending        - True if you wish the returned set to be ordered ascending, false if you require descending.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* rows          - A two dimensional array of columns

  * columnId         - An increasing number from 0 to the number of columns

  * extraFieldId    - The id of the extra field stored in this column

  * name                - The name of this column/extra field

  * value                - The value



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”)
{

  string[] extraTableFields = new string[2];

  extraTableFields[0] = “4”;
  extraTableFields[1] = “5”;

  ticket.ExtraTableCriteriaStruct[] criterias = new ticket.ExtraTableCriteriaStruct[1];

  criterias[0] = new ticket.ExtraTableCriteriaStruct();
  criterias[0].columnId = “8”; // extra field with id 8
  criterias[0].op = “OperatorEquals”;
  criterias[0].value = “100”;  //return all rows with x\_8 = 100
  criterias[0].maxEntries = “1000”; //truncate rows after 1000
  criterias[0].logicalOp = “and” //not needed, but set anyway

  ticket.ExtraTableRowStruct[] result;

  ticket.queryExtraTable(sessionKey,”1”,extraTableFields,
                          criterias,
                          ”4”,    //order by x_4
                          “true”, //ascending
                          out result);

  foreach(i ticket.ExtraTableRowStruct in result)
  {
    foreach(i2 ticket.ExtraTableColumnStruct in i.columns)
    {
      cout &lt;&lt; “name:” &lt;&lt; i2.name &lt;&lt; “ value:” &lt;&lt; i2.value &lt;&lt; endl;
    }
  }
}
```