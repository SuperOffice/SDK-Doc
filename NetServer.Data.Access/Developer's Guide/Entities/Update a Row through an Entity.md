<properties date="2016-05-11"
SortOrder="71"
/>

A property which is of row type directly refers to a particular row of a table. For example in the Sale Entity the Associate property would refer to the Associate table and would contain the columns that are in the Associate Table as its properties. As in the case of creating or retrieving and assigning Entity properties to the Sale entity there are two methods of creating or retrieving and assigning Row properties to the Sale Entity.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retriving a Sale using the index of a Sale
 
      Sale newSale = Sale.GetFromIdxSaleId(2);
      //Creating a Currency Row and assigning values
      CurrencyRow newCurrency = CurrencyRow.CreateNew();
      newCurrency.Name = "SAD";
      newCurrency.Rank = 5;
      newCurrency.Tooltip = "Created for testing";
      newCurrency.Rank = 23;
      newCurrency.Units = 52.25;
     
      //Assigning the new Currency to sale
      newSale.Currency = newCurrency;
           
      //Saving the Sale Entity
      newSale.Save();
           
}

 
```

Here we have created an instance of a Row type, namely currency row and assigned values to its properties after which it is assigned to the Sale Entity’s Currency property. This method is used basically given a whole new currency type which is a lot different to the existing one. When saving the Sale Entity all changes made to the Currency Row will also be saved.

However if the user wishes to change a limited number of properties of the Currency property in the Sale Entity he may use the following code.

 

```
            newSale.Currency.Name = "DAS";
            newSale.Currency.Rank = 4;
            newSale.Currency.Tooltip = "Created for testing";
            newSale.Currency.Rank = 25;
            newSale.Currency.Units = 65.32;             

 
```

Using this type of a code the properties of the Currency are accessed through the Sale Entity. When modifications are made and saved a new Currency row in the Currency table will be created.

 
