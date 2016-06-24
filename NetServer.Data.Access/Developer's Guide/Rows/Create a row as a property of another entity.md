<properties date="2016-05-11"
SortOrder="17"
/>

 

An Entity may have properties that are of the type Row. A Row object contains properties of basic data types. This section will focus on how to create a Row object and assign it to a property of an Entity.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("jr", "jr"))
{
 
//Creating a new Sale Entity
     Sale newSale = Sale.CreateNew();
      newSale.SetDefaults();
 
      //creating a row through the Sale Entity and assigning values
      newSale.Reason = ReasonRow.CreateNew();
      newSale.Reason.Name = "Resource Utilization";
      newSale.Reason.Rank = 10;
                          
     //Saving the Sale Entity
      newSale.Save();
 
}
```

 

Here a new Reason is created through the newly created Sale Entity and assigned to the Reason property of the Sale Entity instance. The properties of the Reason property has being modified through the Sale Entity. Note that you do not need to explicitly create a new Row when using an Entity property. The Entity will create a new blank Row for you automatically.

With the execution of the Save() method the Sale Entity instance will be saved along with that a new row will be added to the Reason Table.
