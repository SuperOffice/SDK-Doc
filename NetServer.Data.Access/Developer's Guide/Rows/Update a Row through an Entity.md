<properties date="2016-05-11"
SortOrder="23"
/>

 

A property which is of row type directly refers to a particular row of a table. For example in the Sale Entity the Associate property would refer to the Associate table and would contain the columns that are in the Associate Table as its properties. The following example explains how to update properties of a Row through an Entity.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
   //Retriving a Sale using the index of a Sale
   Sale newSale = Sale.GetFromIdxSaleId(2);
 
   //Changing the values of the Currency Row through the Sale
entity
   newSale.SetDefaults();
   newSale.Currency.Name = "DAS";
   newSale.Currency.Rank = 4;
   newSale.Currency.Tooltip = "Created for testing";
   newSale.Currency.Units = 65.32;
 
 
   if (newSale.IsDirty == true)
   {
       //Saving the Sale Entity
       newSale.Save();
   }
}
```

 

You may use the above code if you want to change a limited number of properties of a Currency property in the Sale Entity.

Using this type of a code the properties of the Currency are accessed through the Sale Entity. When modifications are made and the sale is saved, a new Currency row in the Currency table will be created.
