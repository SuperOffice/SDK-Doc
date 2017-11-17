---
uid: SearchforaContactwithagivenSAINTvalue
title: Search for a Contact with a given SAINT value
---


We can search for contacts with a given SAINT value using the SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.

using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{
//Create an instance of the Find Object
SOFind newFind = newDb.Find;
               
//Retrieving Contact based on the SAINT values
SOContacts newContacts = newFind.ContactsWithActiveStatusMonitor(2);
if (newContacts.EOF == false)
{
 Console.WriteLine("Contact Name");
  Console.WriteLine();
  foreach (SOContact newContact in newContacts)
     Console.WriteLine(newContact.Name);
}               
}
else
Console.WriteLine("Incorrect Username or Password");

In the above code we have first created an instance of the SOFind class. Then by using the created find class’s ContactsWithActiveStatusMonitor() method we have retrieved a collection of SOContact objects. The method ContactsWithActiveStatusMonitor() requires an object to be passed into it which can either be the StatusDef\_Id or by the name that is defined in the SOAdmin – System Options – Status Monitors.