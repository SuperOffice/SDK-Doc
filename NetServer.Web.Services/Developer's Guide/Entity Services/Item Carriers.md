<properties date="2016-06-24"
SortOrder="19"
/>

An Item carrier is a simple object: It exposes its properties primarily as simple string values. For example the Contact Item carrier exposes the country property of a Contact as country name not as a country sub-object. Read-only carriers are very simple hence it avoids many overheads. The following example shows how an Item carrier is loaded using an Agent.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a ContactAgent
    using(ContactAgent myAgent = new ContactAgent())
    {
        //Retrieve an Item Carrier
        Contact myContact = myAgent.GetContact(12);
     
        //Obtain the properties of the contact
        string myName = myContact.Name;
        string myCountryName = myContact.CountryName;
        string myUrl = myContact.URL;
    }
}
```

 

In the above example the Contact Agent will return a Contact Read Only object through the GetContact() method. These kinds of objects are what we call Read Only Carriers.
