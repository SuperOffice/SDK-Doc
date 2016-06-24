<properties date="2016-05-11"
SortOrder="53"
/>

To create a basic Entity you have to use the CreateNew() method of the Entity class that you are going to create. After you have created the Entity you want to populate the various properties that are exposed by this newly created Entity.

 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
      //create an entity
      Sale mySale = Sale.CreateNew();
      mySale.SetDefaults();
 
      //assign some very basic and simple properties
      mySale.Amount = 20000;
      mySale.Heading = "This is my first sale";
      mySale.Status = SuperOffice.Data.SaleStatus.Open;
      mySale.Done = SuperOffice.Data.SaleDone.NotDone;
      mySale.Earning = 10000;
      mySale.EarningPercent = 50;
      mySale.Probability = 30;
      //finally save the entity
      mySale.Save();
}

 
```

This example shows you how to create a Sale Entity and populate it with some very basic and simple properties of the Sale Entity. What is meant by simple and basic is the above properties are either system provided simple data types like System.String, System.Double or NetServer defined enums. In a typical NetServer Entity there are many more properties which are of very complex data types. In the following sections lets discuss these more complex properties.
