---
uid: exampleAddAContact
title: Add A Contact
---

### Adding a new contact to the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

 

Create a new contact with address, email and URL

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then 
    Set theContact = soDb.CreateContact
    theContact.SetDefaults
    theContact.Name = "Marge shoppingbags"
    theContact.Department = "Headquarter"
    theContact.OrgNr = "123456789"
    theContact.StreetAddress.Address1 = "Mainstreet 123"
    theContact.PostalAddress.Address1 = "P.O. Box 456"
    theContact.PostalAddress.ZipCode = "0212"
    theContact.PostalAddress.City = "Oslo"
    theContact.Country = soDb.GetListItemByName(enTableCntry, "Norway")
    theContact.Phones.Add "22 22 22 22", "Orders"
    theContact.Emails.Add "<order@marge.com>", "Orders"
    theContact.Urls.Add "[www.marge.com](http://www.marge.com)", "Home"
    theContact.Save
else
   MsgBox "Login failed"
end if
```

We can create a new Contact using SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.
For us to create a new Contact we can use the CreateContact() method available in the Database class.

```
using SuperOffice.COM.SuperOfficeDB;
database newDb = new DatabaseClass();
bool isOK = newDb.Login("USERNAME", "PASSWORD");
if (isOK)
{
   //create a new Contact instance
   SOContact newContact = newDb.CreateContact();
   //Assign default values to the created Contact
   newContact.SetDefaults();
   //Set values to the properties of the Contact
   newContact.Name = "Hunters united";
   newContact.Department = "Mountains";
   newContact.PostalAddress.Address1 = "1236/4 Lake Road, Lake View.";
   newContact.PostalAddress.City = "Lake Land";             
   newContact.Emails.Add("<dylan@hunt.com>", "This my primary email");
   newContact.Country = newDb.GetListItem(SOTableId.enTableCntry, 10);
   newContact.Business = newDb.GetListItem(SOTableId.enTableBusiness, 1);
   newContact.Phones.Add("123456789", "Dylans Personal phone", 1);
   //Save the created Contact
   newContact.Save();               
}
else
   Console.WriteLine("Incorrect username or password");

```

Once the new Contact instance is created with null values we have used the SetDefaults() method to assign default values to the different properties of the Contact. The next step is to assign values to the different properties of the contact. In the example we have done is to assign values to different property types such as string, SOEmails, IListTextItem and more. Once these assignments are done, by using the Save() method we can save the created Contact instance.