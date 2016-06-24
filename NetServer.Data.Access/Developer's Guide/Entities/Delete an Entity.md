<properties date="2016-05-11"
SortOrder="76"
/>

In order to delete whether it be a Entity or Row we would have to use the Delete() method which is located in the respective Entity or Row.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieve an entity
      Sale newSale = Sale.GetFromIdxSaleId(49);
 
      //Deleting the Entity
      newSale.Delete();
 
      //Checking whether the entity has being deleted
      if (newSale.IsDeleted == true)
      {
            string test = "The sale has beign deleted";
      }
}

 
```

In the example we have used the Delete() method to delete the retrieved Entity. It should be noted however that when deleting this Entity it would not delete any Entities or Rows which are parts of its properties.

 
