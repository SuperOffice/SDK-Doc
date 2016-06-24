<properties date="2016-05-11"
SortOrder="51"
/>

The following example shows how we can retrieve Contacts based on a SAINT search with NetServer.

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
 
    //Get instances of ContactTableInfo and CounterValueTableInfo
    ContactTableInfo newConTab = newConRows.TableInfo; //
TabeleInfo from the Rows object has been used               
    CounterValueTableInfo newConValTab =
TablesInfo.GetCounterValueTableInfo();
 
    //Join the contact table with with countervalue table          
                                      
   
newConRows.JoinRestriction.InnerJoin(newConTab.ContactId.Equal(newConValTab.ContactId));
 
    //Set Restrictions so that sale_status = 1 and amountClassId =
2 and saleDate < Now
    newConRows.Restriction =
newConValTab.SaleStatus.Equal(S.Parameter(1)).
    And(newConValTab.AmountClassId.Equal(S.Parameter(2))).
   
And(newConValTab.LastCompleted.LessThanOrEqual(S.Parameter(DateTime.Now)));
 
    //Set IsDistinct property True to remove duplicates  
    newConRows.IsDistinct = true;
 
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

This example uses a CustomSearch to retrieve the rows based on a specific restriction.

With the ContactRows.CustomSeach, we join the countervalue table and set the restriction. This is similar to a where clause in SQL, and the IsDistinct operator is used to omit repeated rows.

The query is executed using the static ContactRows.GetfromCustomSearch() method, and passing in the constructed CustomSearch object.

```
ContactRows newRows = ContactRows.GetFromCustomSearch(newConRows);
```

Below is the result for both code examples in this section.
