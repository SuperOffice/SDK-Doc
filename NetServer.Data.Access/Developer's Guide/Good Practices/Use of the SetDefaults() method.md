<properties date="2016-05-11"
SortOrder="5"
/>

When using the SetDefaults() method when inserting data either to Entity or Row types it could be identified as a good practice. Since if the SetDefault() method was not used the programmer would have to make use of flow control structures such as “if-else” blocks to handle situations where the user doesn’t enter any values. The example below shows the use of the SetDefault() method.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Creating a Contact Entity
      Contact newContact = Contact.CreateNew();
 
      //Sets default values - Good Practice
      newContact.SetDefaults();
    
      newContact.Name = "Jazz";
     
      //Creating instances of Row types
     EmailRow newEmail1 = EmailRow.CreateNew();
     newEmail1.EmailAddress = "ally@alley.com";
     newEmail1.Description = "Ally's E mail";
     EmailRow newEmail2 = EmailRow.CreateNew();
     newEmail2.EmailAddress = "Anakin@star.com";
     newEmail2.Description = "Anakin's test email";
 
     PhoneRow newPhone = PhoneRow.CreateNew();
     newPhone.Description = "Jazz's phone number";
      newPhone.Phone = "9771252307";
 
     //Adding the Row types to the Contact
     newContact.Emails.Add(newEmail1);
     newContact.Emails.Add(newEmail2);
     newContact.Phones.Add(newPhone);
 
     //Saving the Entity
     newContact.Save();
}
```

 

With the above example we have created a new Contact Entity and have made use of the SetDefaults() method. With the use of the method, the NetServer will fill certain properties of the Entity such as Updated date, Updated Associate, and more.
