<properties date="2016-06-24"
SortOrder="5"
/>

How to Create a Contact
=======================

Below we have demonstrated how a new contact is created in the NetServer Services layer.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
   //Retrieve a ContacttAgent
   using(ContactAgent contactAgent = new ContactAgent())
   {
       //Create a new contact Entity with default values set to its properties
       ContactEntity myContact = contactAgent.CreateDefaultContactEntity();
     
       //Assign values to various properties of the contact entity
      
       //Assign values to properties of basic data types
       myContact.Name = "Paba Inc.";
       myContact.Department = "Head office";
       myContact.NoMailing = true;
     
       //Create an array of EntityElement and assign it to the Phones property
       EntityElement[] myPhones = new EntityElement[2];
       myPhones[0] = new EntityElement();
       myPhones[1] = new EntityElement();
       myPhones[0].Value = "0112732006";
       myPhones[1].Value = "0713243288";
       myContact.Phones = myPhones;
     
       // Set the new contact’s  our-contact to associate 2
       using(AssociateAgent associateAgent = new AssociateAgent())
       {
           Associate myAssociate = associateAgent.GetAssociate(2);
           myContact.Associate = myAssociate;
         
           // Set the contact’s address
           myContact.Address[0][0].Value = "98/1,Main Street, Inland";
           myContact.Address[3][0].Value = "10620,";
           myContact.Address[3][1].Value = "Inland";  
         
           //Save the Contact Entity and the new person through the ContactAgent
           myContact = contactAgent.SaveContactEntity(myContact);
           // the returned entity has the contact id filled in
       }
   }
}
```

 

Here we have used a ContactAgent and the CreateDefaultContactEntity() method to create a new ContactEntity with default values filled in. We first set some of the basic values to like name and department, etc.

In the latter part of the example we have set values to properties of complex data types such as EntityElement\[\] types, Entity types such as Associate, Entity collection types such as Persons and LocalizedField types. Finally the newly created contact entity is saved to the database using the SaveContactEntity() method of the agent. With this a new record will be added to the contact table in the database with its fields set to values that have been assigned.

The entity is returned with the allocated id filled in.
