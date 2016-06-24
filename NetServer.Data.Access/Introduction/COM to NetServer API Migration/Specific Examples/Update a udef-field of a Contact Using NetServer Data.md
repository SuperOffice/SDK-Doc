<properties date="2016-05-11"
SortOrder="48"
/>

UdefHelper, a Contact entity property, is a type which helps handle user-defined fields with ease.

```
using SuperOffice;
using SuperOffice.CRM.Rows.Util;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    //Retrieve a contact
    Contact contact = Contact.GetFromIdxContactId(37);
 
    //Update the Udef fields using udefHelper
    // You have to pass the progId which identifies the field
    // to the udefHelper
    contact.UdefHelper["SuperOffice:1"] = "Value 1";
    contact.UdefHelper["SuperOffice:2"] = "Value 2";
    contact.UdefHelper["SuperOffice:3"] = 1234;
 
    //Save the changes
    contact.Save();
}
```

The example above demonstrates how to address a particular user-defined field by using a program identifier. A program identifier is the value located in the progId column of the udeffield table. The progId field remains as a constant throughout the user-defined field lifetime. The main purpose of progId is to facilitate 3rd party developers to access their user-defined fields consistantly through the lifetime of their applications, regardless if the label text is changed.
