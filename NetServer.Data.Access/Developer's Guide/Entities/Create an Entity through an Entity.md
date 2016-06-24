<properties date="2016-05-11"
SortOrder="54"
/>

One of the more complex properties that are exposed in a typical NetServer Entity is an Entity itself. An Entity will expose another Entity when the need arises to expose more data than what you can hold in a single field. There can be more than one way to assign a new Entity to a property that is exposed by an Entity. In this section we will focus on how to create a new Entity through a property exposed by another Entity.

 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
      //create an entity
      Sale mySale = Sale.CreateNew();
      mySale.SetDefaults();
 
      //here we are accessing a property of another entity
      mySale.Person.Firstname = "Johnny";
      mySale.Person.Lastname = "Depp";
      mySale.Person.DayOfBirth = 09;
      mySale.Person.MonthOfBirth = 06;
      mySale.Person.YearOfBirth = 1963;
      mySale.Person.Gender = 2;
      PhoneRow numerOne = PhoneRow.CreateNew();
      numerOne.PhoneNumber = "123456";
      numerOne.Rank = 1;
      PhoneRow numbrerTwo = PhoneRow.CreateNew();
      numbrerTwo.PhoneNumber = "890112";
      numbrerTwo.Rank = 2;
 
      //here we are adding rows to another entities property that
is exposed as a row.
      mySale.Person.MobilePhones.Add(numerOne);
      mySale.Person.MobilePhones.Add(numbrerTwo);
 
      //save the sale entity
      mySale.Save();
}

 
```

Here the Person property of the Sale Entity has been exposed as an Entity itself. You can access all the properties of the Person Entity through the Sale entity as shown in the example. The MobilePhones property of the Person Entity is exposed as a PhoneRows type. We create two new PhoneRows and add the to the phones rows collection. You may have noticed that we only save the Sale Entity. When the Sale entity is saved the NetServer will save all the other entities and rows that have created newly back into the database. This mechanism in NetServer is called NestedPersist.

When you save the Sale Entity, NetServer will look for other newly created Entities and save them to the appropriate tables in the database. In this case NetServer will create a new record in the person table and assign the person ID to the person ID field in the sale table so now it has the link between the person table and the sale table. NetServer will also create a new row in the phone table and add the phone ID to the phone ID field of the person table. This way the NetServer maintains all the database links properly.

 
