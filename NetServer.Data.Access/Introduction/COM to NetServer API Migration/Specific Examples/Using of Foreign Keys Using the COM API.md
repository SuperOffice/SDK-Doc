<properties date="2016-05-11"
SortOrder="42"
/>

Foreign keys are designed to make it easy for 3rd parties to store extra keys in the SuperOffice database for their applications. ForeignKey property exists on all main entity types, including Contact, Person, Associate, Project, Document, Appointment and Sale objects.

Following is an example how to set Foreign Keys using the COM API.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    //retreiving a Contact instance
    SOContact newContact = newDb.GetContact(10);
 
    //Setting foering key Values
    newContact.ForeignKey.Set("ERP", "ERP_Dev", "ERP_Id", "1234");
 
    //Saving the modified Contact
    newContact.Save();
 
}       
else
    Console.WriteLine("Incorrect Username or Password");
```

Assuming the plan is to create a foreign key on a Contact, we first retrieve one. With a contact instance, we use the contact ForeignKey.Set() property method to assign the ForeignKey value. The method requires the following parameters:

* Foreign Key Application - This represents a sync application and is the starting point for the foreign key identity. This is the link between the foreign key and the external application, and is stored in the foreignapp table. 
* Foreign Device Name - This represents an external device; it can be a PDA, an external database or some other device that you define. One application may have more than one device. This information is stored in the foreigndevice table. 
* Key Name - This is a key of a key/value pair that represents information for a particular enity type and entity id. Foreign keys are stored in the foreignkey table.   
* Value - The value that is the information tied to a particular entity type and entity id. Values are stored with the keys in the are stored in the foreignkey table.

Once the Set() method has been called, save the object by calling the Save() method. This call persists foreign key changes to the database.

To retrieve a Foreign Key, use the Database Find property.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    long id = newDb.Find.IdFromForeignKey("ERP", "ERP_Dev",
"ERP_Id", "1234", 
                                                                   
SOTableId.enTableCont); 
}       
else
    Console.WriteLine("Incorrect Username or Password");
```

By using the Find IdFromForeignKey() method, the contact id, for which the foreign key correlates to, is returned. The method requires the Foreign Key Application, Foreign Device Name, Key Name, Foreign Key Id and the Table Id the foreign key belongs to.
