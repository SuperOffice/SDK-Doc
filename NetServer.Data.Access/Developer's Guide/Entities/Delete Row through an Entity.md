<properties date="2016-05-11"
SortOrder="78"
/>

We are aware that the some properties of an Entity are of Row type. Hence by using the Delete() method we are able to delete a Row as well. In this case it will delete an entire row from the database.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieve an entity
      Sale newSale = Sale.GetFromIdxSaleId(48);                    

                   
      //Deleting a Currency through a Sale
      newSale.Currency.Delete();
 
      //Using IsDelete to check whether the Currency has being   
deleted
      if (newSale.Currency.IsDeleted == true)
      {
            string test2 = "Currency has being deleted";
      }
}

 
```

The example shows the use of the Delete() method to delete a property of the Sale Entity which is of Row type. When the Delete() method is executed it will delete the relevant currency row from the Currency table in the database.

 
