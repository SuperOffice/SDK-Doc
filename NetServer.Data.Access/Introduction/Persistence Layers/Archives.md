<properties date="2016-05-11"
SortOrder="10"
/>

An archive is a configurable multi-column list that flatten the complex relationships between tables into a simple grid.

Archives simplify searching and retrieving collections of related data efficiently. The archive system is very flexible, and supports many different providers. Each provider describes a set of related columns from the database.

Each provider supports a set of methods for finding out what columns are available. For simplicity we have listed the basic set of columns in this help-file.

The example below shows how we can read the name+department as one field, and the postal address city as a separate field. Unlike an entity, the archive will not load categories or e-mail addresses unless they are requested.

```
using SuperOffice;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.Util;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
    IArchiveProvider contactArchive =
ArchiveProviderFactory.CreateFindContactProvider();
 
    //Set the columns that needs to be returned
    contactArchive.SetDesiredColumns("contactId", "nameDepartment",
"address/city");
 
    //set the paging properties of the provider.
    contactArchive.SetPagingInfo(10, 0);
 
    //An array of restrictions with an implicit and inbetween them.
    contactArchive.SetRestriction(
                     new ArchiveRestrictionInfo("contactId", "=",
"1234"));
 
    //Display the retreived data in another list box
    foreach (ArchiveRow row in contactArchive.GetRows())
    {
        foreach (KeyValuePair<string, ArchiveColumnData>
column in row.ColumnData)
        {
            resultsListbox.Items.Add(column.Value.ToString());
        }
        resultsListbox.Items.Add(" --- ");
    }
}
```

 

 

------------------------------------------------------------------------

**See Also:** ArchiveProviderFactory, [Entities](../Persistence%20Layers/Entities.md)
