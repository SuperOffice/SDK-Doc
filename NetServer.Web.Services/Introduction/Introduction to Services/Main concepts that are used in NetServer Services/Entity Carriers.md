<properties date="2016-06-24"
SortOrder="19"
/>

An Entity Carrier is an entity object. Unlike in read-only carriers an Entity Carrier exposes its properties as objects that are populated with more detailed data. The properties will expose their own properties since the properties in entity objects are objects themselves. The example below displays how to load a Contact Entity Object using a Contact Agent.

```
using SuperOffice.CRM.Services;
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiate a Contact Agent
      using(ContactAgent contactAgent = new ContactAgent())
      {
          ContactEntity myContact = contactAgent.GetContactEntity(4);

          //Retrieve Contact Entity properties
          string myContactName = myContact.Name;
          string myContactCategory = myContact.Category.Value;
          string myContactWebUrl = myContact.Urls.Length > 0 ? myContact.Urls[0].Value : "";
      }
}
```

 

The above example displays how to retrieve a Contact Entity through the GetContactEntity method of the Contact Agent.
