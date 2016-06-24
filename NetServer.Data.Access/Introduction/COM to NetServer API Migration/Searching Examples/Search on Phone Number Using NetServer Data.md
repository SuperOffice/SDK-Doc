<properties date="2016-05-11"
SortOrder="55"
/>

The example below demonstrates how to retrieve the same results as above, only this type we will use a CustomSearch to retrieve a ContactRows object, filtered by the phone number.

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
    PhoneTableInfo newPhoTab = TablesInfo.GetPhoneTableInfo();
 
    //Join the contact table with with phone table
   
newConRows.JoinRestriction.InnerJoin(newConTab.ContactId.Equal(newPhoTab.OwnerId));
 
    newConRows.Restriction =
newPhoTab.PhoneNumber.Equal(S.Parameter("22544545")).
    And(newPhoTab.PtypeIdx.Equal(S.Parameter(1)));
 
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

The difference between the COM code and this example is use of the the restriction statement. Here we filtered the rows on the PhoneNumber and PTypeIdx columns of the "Phone" table.

Below is the observed result by both the COM and NetServer examples.

```
ContactName
Valantine
```
