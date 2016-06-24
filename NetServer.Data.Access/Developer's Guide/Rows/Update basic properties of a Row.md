<properties date="2016-05-11"
SortOrder="22"
/>

 

In this example we will demonstrate how properties of a Row are updated.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
   //Create a New Row
   ContactRow myContactRow = ContactRow.GetFromIdxContactId(125);
  
   //Update the properties of the ContactRow
   myContactRow.Name = "Daisy Susan";
   myContactRow.CountryId = 12;
   if (myContactRow.IsDirty)
   {
       myContactRow.Save();
   }
 
}
```

 

We have first retrieved a row in the Contact table with the row id 125. If such a row does not exist the instance of the ContactRow will be assigned to null. We have updated the Name and the CountryId of the ContactRow. The IsDirty property is set to true if there is any change made to that Row. If any changes are made they will be saved to the database by using the Save() method.
