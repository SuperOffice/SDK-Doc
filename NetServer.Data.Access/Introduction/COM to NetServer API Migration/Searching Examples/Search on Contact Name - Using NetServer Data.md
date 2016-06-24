<properties date="2016-05-11"
SortOrder="53"
/>

The example below demonstates how to retrieve the same result as the COM code, only this time using NetServer data. In NetServer we again leverage a CustomSearch to retrieve a ContactRows object, filtered by name. The Distinct statement is used to filter out the duplicate rows.

```
using SuperOffice;
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Rows;
 
using (SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
    //Create an instance of the CustomSearch class 
    ContactRows.CustomSearch newConRows = new
ContactRows.CustomSearch();
 
    //Get instances of ContactTableInfo using the TableInfo from
the rows object
    ContactTableInfo newConTab = newConRows.TableInfo;
 
    newConRows.Restriction =
newConTab.Name.Equal(S.Parameter("Valantine"));
    newConRows.IsDistinct = true;
 
    //Set IsDistinct property True to remove duplicates  
    ContactRows newRows =
ContactRows.GetFromCustomSearch(newConRows);
 
    //Display the returned rows
    Console.WriteLine("Contact Name");
 
    foreach (ContactRow myRow in newRows)
    {
        Console.WriteLine(myRow.Name);
    }
}
```

Below is the result for both the COM and NetServer examples.

```
Contact Name
Valantine
```
