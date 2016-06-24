<properties date="2016-05-11"
SortOrder="11"
/>

Creating a Contact Entity through an entity can be done in two different ways, i.e. if you create an Entity called “A” and assign it to an Entity called “B”, when saving Entity “B” entity will be saved through NestedPersistent, or you could create an Entity which is a property of another Entity. Then when saving the main Entity the Entity created as the property of it will be saved as well. Both these would give the same results.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{    
      //Create a Contact Entity
      Contact newContact = Contact.CreateNew();
                                     
      //Setting the Defaults for the Contact
      newContact.SetDefaults();
 
      //Assigning values for the individual properties of the Contact Entity
      //Assigning basic properties to a Contact
      newContact.Name = "EuroCenter";
      newContact.OrgNr = "1234523";
      newContact.Number1 = "7412885";
 
      //Adding a Row type property to a Contact Entity
      newContact.Country = new CountryRow.IdxCountryId(40);
 
      //Creating Email Rows
      EmailRow eMail1 = EmailRow.CreateNew();
      eMail1.EmailAddress = "Matt1@Fox.com";
      eMail1.Description = "Mathews first email";
      EmailRow eMail2 = EmailRow.CreateNew();
      eMail2.EmailAddress = "Matt2@Fox.com";
      eMail2.Description = "Mathews second email";
      //Adding the created Row types to the Properties of Rows type to the Contact Entity
      newContact.Emails.Add(eMail1);
      newContact.Emails.Add(eMail2);
                 
      //Assigning values to Properties of Entity Collection Types.
      Sale newSale1 = Sale.GetFromIdxSaleId(10);
      Sale newSale2 = Sale.GetFromIdxSaleId(20);
      newContact.Sales.Add(newSale1);
      newContact.Sales.Add(newSale2);
 
      //Retrieving an Intsance of another Entity
      Person newPerson = new Person.IdxPersonId(20);
 
      //Assing the Created Contact to the other Entity
      newPerson.Contact = newContact;
 
      //Saving the Updated Entity
      newPerson.Save();
}
```

 

Here we create a new Contact as explained in Create Contact Entity. The different is that we do not save the Contact created. Instead we assign the created Contact to another Entity such as The Person Entity as shown above and Save the Person Entity with the use of its Save() method as show in the below code segment.

```
      newPerson.Contact = newContact;         
      newPerson.Save();
```

 

Below is the example of creating a Contact Entity, which is a property of another Entity, such Person that is explained below.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Create an Intsance of another Entity
      Person newPerson = Person.CreateNew();
      newPerson.SetDefaults();
                   
      //Assigning values for the individual properties of the Contact Entity of the Person Property
      //Assigning basic properties to a Contact Entity
      newPerson.Contact.Name = "EuroCenter";
      newPerson.Contact.OrgNr = "1234523";
      newPerson.Contact.Number1 = "7412885";
 
      //Creating Email Rows
      EmailRow eMail1 = EmailRow.CreateNew();
      eMail1.EmailAddress = "Anna1@Nicole.com";
      eMail1.Description = "Anna first email";
      EmailRow eMail2 = EmailRow.CreateNew();
      eMail2.EmailAddress = "Anna2@Nicole.com";
      eMail2.Description = "Anna second email";
      //Adding the created Row types to the Properties of Rows type to the Contact Entity Property of the Person Entity
      newPerson.Contact.Emails.Add(eMail1);
      newPerson.Contact.Emails.Add(eMail2);
 
      //Assigning values to Properties of Entity Collection Types.
      Sale newSale1 = Sale.GetFromIdxSaleId(10);
      Sale newSale2 = Sale.GetFromIdxSaleId(20);
      newPerson.Contact.Sales.Add(newSale1);
      newPerson.Contact.Sales.Add(newSale2);
 
      //Saving the Updated Entity
      newPerson.Save();
}
```

 

The difference of the above code to the one before that is that the properties of the Contact Entity are accessed through the instance of the Person Entity as The Contact entity is exposed as a property of the Person Entity. The properties of the Contact entity are accessed with statement similar to the once shown below. However, the statements may vary a little depending on the data type as shown in the example above.

```
            newPerson.Contact.Name = "EuroCenter";
```

 

When saving the Person Entity with the use of the Save() method the New Contact is also saved. This is called NestedPersistent.

An important point to remember!

When using the above type of a code it should be noted that the main entity such as the Person Entity as above should also be created. The reason for this is that when retrieving a Person it may already have a Contact assigned to it. So therefore when adding values to the properties of the Contact in such an entity, what we would actually be doing is updating the existing Contact information.
