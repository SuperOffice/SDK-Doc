<properties date="2016-05-11"
SortOrder="19"
/>

Retrieving data from a particular row of a table in the database can easily be done via Rows.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
    //Create a New Row
    ContactRow myContactRow = ContactRow.GetFromIdxContactId(4);
 
    //Retrieve properties of basic data type
    string name = myContactRow.Name;
    string department = myContactRow.Department;
    int countryId = myContactRow.CountryId;
    bool isDeleted = myContactRow.IsDeleted;
 
}
```

 

Here some of the properties of a ContactRow are retrieved. ContactRow accesses the Contact table in the database and we are retrieving data in a row with row Id equal to 4.
