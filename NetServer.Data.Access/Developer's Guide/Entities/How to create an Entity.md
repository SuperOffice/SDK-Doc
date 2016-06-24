<properties date="2016-05-11"
SortOrder="50"
/>

We use the CreateNew() method to create a new instance of an Entity. It has to be saved using the Save() method for the data to be stored in the database. However it should be noted that with the use of the CreateNew() method, a new instance of the Entity is created with default values assigned to its properties. But it will not be saved, if you directly save it without making any changes to its properties. Therefore if the Entity is to be saved you need to assign some new values to its properties. The syntax for creating an Entity is as follows.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Create a New Entity
      Contact newContact = Contact.CreateNew();
 
      //Assign values to an Entity
      newContact.Name = "Lois Lane";
 
      //Saving the Entity
      newContact.Save();
}

 
```

Above is a brief example of creating an Entity through the CreateNew() method and assigning a value to one of its properties and saving it using the Save() method. We will give you details on how to create and assign values to an Entity later in this section.
