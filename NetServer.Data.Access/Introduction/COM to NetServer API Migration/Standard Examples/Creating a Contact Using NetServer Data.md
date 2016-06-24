<properties date="2016-05-11"
SortOrder="34"
/>

The example below shows how to create a Contact similar to the one created above, but now using NetServer.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{   
    //Create a Contact Entity
    Contact newContact = Contact.CreateNew();
 
    //Setting the Defaults for the Contact
    newContact.SetDefaults();
 
    //Assigning values for the individual properties of the Contact
    //Assigning basic properties to a Contact
    newContact.Name = " LizParkerS";
    newContact.Department = " Additional Docs";
 
    //Adding a Row type property to a Contact Entity
    newContact.Country = new CountryRow.IdxCountryId(578);
    newContact.Business = new BusinessRow.IdxBusinessId(2);
 
    //Creating Email Row
    EmailRow eMail1 = EmailRow.CreateNew();
    eMail1.EmailAddress = "liz@parker.com";
    eMail1.Description = "Liz's Email";
 
    //Adding the created Row types to the Properties of Rows type
to the Contact Entity
    newContact.Emails.Add(eMail1);
 
    //Creating Phone Row
    PhoneRow phone = PhoneRow.CreateNew();
    phone.PhoneNumber = "123456789";
    phone.Description = "Liz's Phone";
 
    //Creating Address Row
    AddressRow address = AddressRow.CreateNew();
    address.Address1 = "1236/4 Lake Road, Lake View. lake Land.";
    address.City = "Lake Land";
 
    //Adding a Row type property to a Contact Entity
    newContact.PostalAddress = address; 
    newContact.Phone.Add(phone); 
 
    //Saving the Created Contact Entity
    newContact.Save();
}
```

Entity types are defined in the SuperOffice.CRM.Entitites namespace. With an authenticated SoSession instance, the user can create a Contact using the static (Shared in VB.NET) Contact.CreateNew() method.

```
Contact newContact = Contact.CreateNew();
```

Using the new contact instance, we call the SetDefaults() method to set the default vales for all contact propperties.

```
newContact.SetDefaults();
```

The rest of the example code above demonstates how to assign vales to both simple and complex Contact Entity property types. When done with setting properties, we use of the newContact.Save() method to save the new Contact.

```
newContact.Save();
```
