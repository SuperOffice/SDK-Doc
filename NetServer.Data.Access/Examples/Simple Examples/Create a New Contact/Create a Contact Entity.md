<properties date="2016-05-11"
SortOrder="10"
/>

Create an Entity means that the main purpose of the code segment is to create a Contact. This can be stated as one of the simplest ways to create a Contact. The following code segment shows us how to create a Contact in the form while assigning values to the different property types which are exposed in the Contact Entity.

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
 
      //Assigning values for the individual properties of the Contact
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
      Sale newSale1 = new Sale.IdxSaleId(10);
      Sale newSale2 = new Sale.IdxSaleId(20);
      newContact.Sales.Add(newSale1);
      newContact.Sales.Add(newSale2);
 
      //Saving the Created Contact Entity
      newContact.Save();
}
```

 

In order to use Entity types we would have to import SuperOffice.CRM.Entitites name space with the use of the “using” statement. After a SoSession instance has been created and the user authenticated we can proceed to create a Contact.

In order to create a contact we create an Instance of the Contact Entity and use the CreateNew() methods exposed in the Contact class as shown below.

```
      Contact newContact = Contact.CreateNew();
```

 

Next we use the SetDefaults() method exposed in the Contact class to set the default vales for the created Contact.

```
      newContact.SetDefaults();
```

 

Since an Entity exposes properties of different types such as String, int, DateTime, Row and Rows types, Entity and Entity Collection types. Next part of the code above shows how we may assign vales to such properties exposed through the Contact Entity. Once such assignments have being made we make use of the Save() method exposed in the Contact class as shown below in order to save the created Contact.

```
      newContact.Save();
```

 
