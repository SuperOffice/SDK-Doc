---
uid: exampleCreateContact
title: Create a contact
---

We can create a new Contact using SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.
For us to create a new Contact we can use the CreateContact() method available in the Database class.

```
using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USERNAME", "PASSWORD");
if (isOK)
{
   //create a new Contact instance
   SOContact newContact = newDb.CreateContact();
   //Assign default values to the created Contact
   newContact.SetDefaults();
   //Set values to the properties of the Contact
   newContact.Name = "Dylan Hunt";
   newContact.Department = "Additional Docs";
   newContact.PostalAddress.Address1 = "1236/4 Lake Road, Lake View. lake Land.";
   newContact.PostalAddress.City = "Lake Land";             
   newContact.Emails.Add("<dylan@hunt.com>", "This my primary email");
   newContact.Country = newDb.GetListItem(SOTableId.enTableCntry, 10);
   newContact.Business = newDb.GetListItem(SOTableId.enTableBusiness, 1);
   newContact.Phones.Add("123456789", "Dylans Personal phone", 1);
   //Save the created Contact
   newContact.Save();               
}
else
   Console.WriteLine("Incorrect Username or Password");
```

Once the new Contact instance is created with null values we have used the SetDefaults() method to assign default values to the different properties of the Contact. The next step is to assign values to the different properties of the contact. In the example we have done is to assign values to different property types such as string, SOEmails, IListTextItem and more. Once these assignments are done, by using the Save() method we can save the created Contact instance.