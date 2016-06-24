<properties date="2016-06-24"
SortOrder="98"
/>

A Read Only carrier is a simple object. It exposes its properties primarily as simple string values.  A read-only carrier will expose the country property as country name and not as a country sub-object. The advantage of the read-only carrier is its simplicity and you can avoid many overheads by working with an entity carrier. Below is an example that displays how to load an read-only carrier using an Agent.

 
Example to read simple contact info using an Agent

```cs
using SuperOffice.CRM.Services;

ContactAgent contactAgent = new ContactAgent();
Contact myContact = contactAgent.GetContact(4);
string myContactName = myContact.Name;
string myContactCategory = myContact.CategoryName;
string myContactWebUrl = myContact.URL;
```

In the above example the Contact Agent will return a Contact Read Only object through the GetContact method. These kinds of objects are what we call Read Only Carriers.

 
