<properties date="2016-05-11"
SortOrder="77"
/>

As we already know Entities have Entities itself as some of their properties. Since we are able to access properties of such an entity we are able to delete the Entity also by using the Delete() method which is shown in the example below.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieve an entity
      Sale newSale = Sale.GetFromIdxSaleId(48);
     
      //Deleting a Contact through a Sale
      newSale.Contact.Delete();
 
      //Using IsDelete to check whether the Contact has being    
deleted
      if (newSale.Contact.IsDeleted == true)
      {
            string test2 = "Conatct has being deleted";
      }
}

 
```

The IsDelete property in the Contact Entity is used to check whether the Contact Entity has being deleted. If the Entity is deleted the value of the property will be set to “true”.
