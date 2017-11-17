---
uid: Updateanudeffieldonacontact
title: Update an udef field on a contact
---


Below code segment retrieves user defined data related to the given  contact\_id.
List of data retrieved from the db.GetContact(124).Udef method and each SOUDefField can be displayed by getting the fieldlabel of particular SOUDefField.
We make use of GetContact() method, and contact\_id should be passed to this method as a parameter.

Database db = new DatabaseClass();
bool isOk = db.Login("USER", "PASS");
if (isOk)
{    
   // Get the user defined fields for the contact\_id 124
   SOContact cont = db.GetContact(124);
         SOUDefFields udeffields=db.GetContact(124).UDef;
         // Set the vales for each user defined field. Note - the names must be EXACTLY as defined in SOAdmin
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

In the client you'll see the data added

![](../images/UpdateUdef.png)
