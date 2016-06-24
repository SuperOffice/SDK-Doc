<properties date="2016-05-11"
SortOrder="56"
/>

An Entity can have properties that are of the type Row. A Row object contains properties of basic data types. This section will focus on how to create a Row object and assign it to a property of an Entity.

 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
      //Creating a new Sale Entity
     Sale newSale = Sale.CreateNew();
      newSale.SetDefaults();
 
      //Creating a new Currency Row and assigning it values
      CurrencyRow newCurrency = CurrencyRow.CreateNew();
      newCurrency.SetDefaults();
 
      newCurrency.Name = "Riyal";
      newCurrency.Rank = 5;
      newCurrency.Units = 52.25;
      newSale.Currency = newCurrency;
 
      //Another way of creating a new Row and assigning values
      newSale.Reason = ReasonRow.CreateNew();
      newSale.Reason.Name = "Resource Utilization";
      newSale.Reason.Rank = 10;
                          
     //Saving the Sale Entity
      newSale.Save();
 
}

 
```

Here we have created an instance of a CurrencyRow type using the CreateNew() method and assigned some values to its properties. After which the CurrencyRow instance will be assigned to the Currency property of the Sale instance.

In the second half of the code a new Reason is created and assigned to the Reason property of the Sale Entity instance. The properties of the Reason property has being modified through the Sale Entity.

With the execution of the Save() method the Sale Entity instance will be saved along with  a new row being added to the Currency table with its name, rank, units fields having the values Riyal, 5 and 52.25 respectively and rest of the columns will be of default values.  Similarly a new row will be added to the Reason Table
