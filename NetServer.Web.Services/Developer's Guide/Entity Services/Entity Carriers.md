<properties date="2016-06-24"
SortOrder="20"
/>

Through the Entity Carrier we obtain an Entity object. Entity carriers expose their properties as objects that are populated with more detailed data. The example below displays how to load a Contact Entity Object using a Contact Agent.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a ContactAgent
    using(ContactAgent myAgent = new ContactAgent())
    {
        //Retrieve a Contact Entity carrier
        ContactEntity myContact = myAgent.GetContactEntity(12);
       
        //Obtain the properties of the contact
        string contactName = myContact.Name;
        string contactCategory = myContact.Category.Value;
     }
}
```

 

Here we retrieve a Contact Entity through the GetContactEntity() method of the Contact Agent. Notice that the Category property of the Contact is an object and not a string. []()
