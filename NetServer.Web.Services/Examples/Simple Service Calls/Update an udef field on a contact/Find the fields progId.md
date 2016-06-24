<properties date="2016-06-24"
SortOrder="5"
/>

Find the fields progId
======================

We need to look in the udeffield table in the database to find out the progId of a given field, or we can use the UserDefinedFieldInfoAgent to look it up. Once we know the progId, we can update the field like this:

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a contact agent
    using(ContactAgent myAgent = new ContactAgent())
    {
        //Retrive the contact entity
        ContactEntity myContact = myAgent.GetContactEntity(4);
        //first lets check the field right for the logged on user
        if (myContact.FieldProperties["SuperOffice:1"].FieldRight.IsActive)
        {
              //update the udef field
              myContact.UserDefinedFields["SuperOffice:1"] = "1234";
              //save the conatact
              myAgent.SaveContactEntity(myContact);
        }
        //retrive the contact entity again to check if
        //our update has been done to the DB
        myContact = myAgent.GetContactEntity(4);
        //retrive the updated UdefField
        string test = myContact.UserDefinedFields["SuperOffice:1"];
        //Output 1234
    }
}
```

 

Here we have retrieved the contact entity through the contact agent. We can see that the UserDefinedFields property of the contact entity has been exposed as a string dictionary and by using the key of the user defined field we want we can access it. After assigning the value we want to the field we can save the entity as normal.

 

------------------------------------------------------------------------

**See Also:** UserDefinedFieldInfoAgent, ContactAgent
 
