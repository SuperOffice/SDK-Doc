<properties date="2016-05-11"
SortOrder="47"
/>

Contact user-defined fields are stored in one of two possible tables, either the udcontactsmall or the udcontactlarge table. Fields are defined in the SOAdmin application, and the system - by knowledge of the fields data type, controls to which table the field is assigned. Using the label text, it is possible to assign or update the values of a userdefined field Udef property of the Contact.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    //retreiving a Contact instance
    SOContact newContact = newDb.GetContact(10);
 
    newContact.UDef["Code Number:"].Value = "Value 1";
    newContact.UDef["Customer Wish"].Value = "Value 2";
    newContact.UDef["Shipping Code"].Value = 1234;
 
    //Save the changes
           newContact.Save();
}       
else
    Console.WriteLine("Incorrect Username or Password");
```

This example demonstates how to use the "udef" property to assign a value to a user-defined field.  In C\# the label is specified as a indexer to the UDef property, but in any VB type languange, the value is changed by addressing the UDef.ByName("LabelText").Value property.
