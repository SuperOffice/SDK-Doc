<properties date="2016-05-11"
SortOrder="68"
/>

Updating a basic property of an Entity means changing the values that are stored in properties of basic data types, such as integer, string and etc.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retriving a Sale using the index of a Sale
    Sale newSale = Sale.GetFromIdxSaleId(2);
 
    //Update Sale properties directly
    newSale.ActiveLinks = 2;
    newSale.Amount = 100000.0;
    newSale.Earning = 50000;
    newSale.EarningPercent = 15;
    newSale.Heading = "Test edited for testing.";
    newSale.Status = SuperOffice.Data.SaleStatus.Sold;
 
    if (newSale.IsDirty == true)
    {
        //Saving the Sale Entity
        newSale.Save();
    }
}
```

 

In the example values of basic properties of Sale Entity such as ActiveLinks, Amount, Earning, EarningPercentage, Heading and Status have being modified. These properties are of the following data types respectively, Unsigned Integer, Double, Double, Double, String, and SuperOffice.Data.SaleStatus. By using the Save() method the data will be saved in the database. The IsDirty property tells whether the entity has being modified and will be set to “true” if so.

 
