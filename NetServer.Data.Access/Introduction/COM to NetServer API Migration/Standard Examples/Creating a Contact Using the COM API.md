<properties date="2016-05-11"
SortOrder="33"
/>

The following is an example of how to create a new Contact using the Database object, located in the SuperOffice.COM.SuperOfficeDB namespace of the SuperOfficeDB.Interop.dll assembly.

To create a new Contact, use the Database CreateContact() method.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
if (isOK)
{
    //Create a New Contact instance
    SOContact newContact = newDb.CreateContact();
 
    //Assign default values to the created Contact
    newContact.SetDefaults();
 
    //Set values to the properties of the Contact
    newContact.Name = "LizParkerS";
    newContact.Department = "Additional Docs";
    newContact.PostalAddress.Address1 = "1236/4 Lake Road, Lake
View. lake Land.";
    newContact.PostalAddress.City = "Lake Land";
    newContact.Emails.Add("liz@parker.com", "Liz's Phone");
    newContact.Country = newDb.GetListItem(SOTableId.enTableCntry,
578);
    newContact.Business =
newDb.GetListItem(SOTableId.enTableBusiness, 2);
    newContact.Phones.Add("123456789", "Liz's Phone", 1);
 
    //Save the created Contact
    newContact.Save();
}
else
    Console.WriteLine("Incorrect Username or Password");
```

When the new Contact instance is first created, it contains mostly null values. Therefore, we use the SetDefaults() method to assign default values to all of the Contact properties. The next step is to assign values to the contact, such as Name, email address, phone, and so on. In this example, we assign values to different property types, including string, SOEmails, IListTextItem, and more. After populating all relevant contact properties, save the contact by using the contact Save() method.
