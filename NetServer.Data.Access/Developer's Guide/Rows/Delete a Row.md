<properties date="2016-05-11"
SortOrder="24"
/>

In order to delete a Row we have to use the Delete() method of that row. Following example shows you how easily this can be done.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
    //Retrieve the row to be deleted
    ContactRow myContactRow = ContactRow.GetFromIdxContactId(125);
    //Delete the row
    myContactRow.Delete();
}
```

 

Before we delete any row we have to retrieve the Row. Once a Row is retrieve we can simply use the Delete() method and remove that perticular row from the database.

An Important Point to Remember!

There is no “undelete” option. Hence, once it’s saved the record is gone forever.

 

 
