<properties date="2016-06-24"
SortOrder="18"
/>

A Read Only carrier is a simple object. It exposes its properties primarily as simple string values. A read-only carrier will expose the country property as country name       and not as a country sub-object. The advantage of the read-only carrier is its. Below is an example that displays how to load a read-only carrier using an Agent.

```
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiate a Contact Agent
      using(ContactAgent contactAgent = new ContactAgent())
      {
          Contact myContact = contactAgent.GetContact(4);
     
          //Retrieve Contact Entity properties
          string myContactName = myContact.Name;
          string myContactCategory = myContact.CategoryName;
          string myContactWebUrl = myContact.URL;
      }
}
```

 

In the above example the Contact Agent will return a Contact Read Only object through the GetContact method. These kinds of objects are what we call Read Only Carriers.
