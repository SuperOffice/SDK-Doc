---
uid: UpdateAnUdefField
title: Update An Udef Field
---


### Updating a user defined field in the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

Updating user defined fields for a company.

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
    'get a list of all udef fields available for contact
    Set theUdefFields = soDb.GetContact(2).UDef
    For Each theUdefField In theUdefFields
        msg = msg & theUdefField.Label & vbCrLf
    Next
   
    MsgBox "A list of all udef fields on contact: " & vbCrLf & msg
    'To update a udef field by name
    Set theContact = soDb.GetContact(2)
    Set theUdefField = theContact.UDef.ByName("Extra info")
    theUdefField.Value = "Updated udef"
    theContact.Save
    
    'Note - we may also use its fieldId, but this may change if
    'the users add/remove indexed or change its type.
    MsgBox theContact.UDef.ByFieldId(9025).Value
else
   MsgBox "Login failed"
end if
```

 

We can easily call the database connection by using SuperOffice.COM.SuperOfficeDB namespace as below.

```
using SuperOffice.COM.SuperOfficeDB;
```

Below code segment retrieves user defined data related to the given contact\_id.

List of data retrieved from the db.GetContact(124).Udef method and each SOUDefField can be displayed by getting the label of particular SOUDefField.

We make use of GetContact() method, and contact\_id should be passed to this method as a parameter.

```
Database db = new DatabaseClass();
bool isOk = db.Login("USERNAME", "PASSWORD");
if (isOk)
{
  // Get the user defined fields for the contact\_id 124
  SOContact cont = db.GetContact(124);
  SOUDefFields udeffields=db.GetContact(124).UDef;
  // Set the vales for each user defined field
  udeffields\["companyshorttext"\].Value = "2";
  udeffields\["companylongtext"\].Value = "3";
  udeffields\["companynumber"\].Value = "4";
  udeffields\["companydate"\].Value = "3/3/2005";
  udeffields\["page1saleonly"\].Value = "sales";
  udeffields\["page1marketingonly"\].Value = "maketing";
  udeffields\["page1adminonly"\].Value = "admin";
  db.GetContact(124).UDef.Equals(udeffields);
  // Save the contact details
  cont.Save();
}
else
  Console.WriteLine("Unable to log in to database");
```

After updating the user defined fields, retrieved data from the SIX contact page is shown as below. Note that the udef fields labels in the screen dump are the same as in the example udeffields\["**companyshorttext**"\].Value

![](../../images/UdefUpdate.JPG)
