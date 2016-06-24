<properties date="2016-05-11"
SortOrder="44"
/>

```
using SuperOffice;
using SuperOffice.CRM.Rows.Util;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;;
 
using (
SoSession mySession = 
SoSession.Authenticate(
"sam", 
"sam"))
{
    
// Retrieve a ContactRow
    
ContactRow myContactRow = 
ContactRow.GetFromIdxContactId(2);
 
    
//get a foreignAppRow from the database. if the
row is not found a new row is created
    
ForeignAppRow appRow =
RowForeignKeyHelper.GetForeignAppRow(
"ERP");
 
    
//get a foreignDeviceRow using
RowForeignKeyHelper
    
ForeignDeviceRow devRow =
RowForeignKeyHelper.GetForeignDeviceRow(appRow.ForeignappId, 
"ERP", 
"");
 
    
//Create an instance of the
RowForeignKeyHelper
    RowForeignKeyHelper fkHelp = 
new RowForeignKeyHelper(myContactRow);
    
//Set a foreignkey for this contact
    fkHelp.Set(devRow.ForeigndeviceId, 
"ERP_id", 
"1234");
    
//Save the changes
 
    fkHelp.Save();
    
//Get ERP_id from a contact row
    
String ERP_id =
myContactRow.ForeignKey.Get(devRow.ForeigndeviceId, 
"ERP_id");
 
    
//Search for a contact using the
customsearch
    
ContactRow.
CustomSearch searchContact = 
new 
ContactRow.
CustomSearch();
    ForeignKeyTableInfo fkInfo = 
TablesInfo.GetForeignKeyTableInfo();
 
    
//Set the foreignkey value as a restriction 

    searchContact.Restriction = fkInfo.Subkey.Equal(
S.Parameter(
"ERP_id"))
                .And(fkInfo.Subvalue.Equal(
S.Parameter(
"1234")))
                .And(fkInfo.ForeigndeviceId.Equal(
S.Parameter(3)));
    
ContactRow getContact = 
ContactRow.GetFromCustomSearch(searchContact);
 
    
//The id should be equal to 2 
    
int id = getContact.ContactId;
 
}
```

The example above demonstrates how to access Foreign Keys using NetServer Data.

The example demonstrates how to set a foreignkey of the contact who has a contact\_id equal to 2. It begins by using the ForeignKeyHelper class, which is designed to make it easier to manage foreign keys.

A ForeignAppRow is then returned by passing the Appname into the RowForeignKeyHelpers GetFireignAppName() method. If a row does not exist in the foreignapp table with the Appname specified, one is created.

Using the returned ForeignAppRow ID value, we pass that as a parameter into the RowForeignKeyHelper.GetForeignDeviceRow method, along with a DeviceName, to instantiate a ForeignDeviceRow type. With the ForeignDeviceRow, the example code contains all it needs to leverage the ForeignKeyHelper class to gain access to a specific Foreign key/value pair.

A ForeignKey is usually associated with a foreign device; hence it is important to know the foreign device ID. All the changes are persisted to the database when the RowforeignKeyHelper Save method is called. Using this methodology, and with knowledge if and what the ForeignApp name and ForeignDevice name are, foreignkeys are easily accessible for each entity and row type.

Finally, the example demonstrates how to retrieved a contact using a custom search, leveraging the foreignkey as the restriction.
