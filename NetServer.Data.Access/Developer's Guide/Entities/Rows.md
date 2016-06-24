<properties date="2016-05-11"
SortOrder="81"
/>

Rows which consist of Row types are another type which can be a property of an Entity. Therefore it is possible to use the Delete() method to delete such a set of Rows. The difference between deleting Rows and the deleting an Entity Collection is that when Rows are delete it is removed from the database, whereas when an Entity Collection is deleted it is not.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieve an entity                   
      Contact newContact = Contact.GetFromIdxContactId(25);
 
      //Deleting an Rows Collection through a Contact
      newContact.Emails.Delete();
 
}
```

 

 Above example shows the use of the Delete() method to delete Rows type of an Entity.    If wish to delete a particular Row of the collection the following piece of code may be used.

```
    newContact.Emails[0].Delete();

 
```
