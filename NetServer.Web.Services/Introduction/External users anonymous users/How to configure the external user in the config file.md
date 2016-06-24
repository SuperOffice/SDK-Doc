<properties date="2016-06-24"
SortOrder="11"
/>

In the  application config file we can allow External users as shown below. When we authenticate a user as an external user, login fails if the config files says “ExternalPersonAllow = False”.

```
<Explicit>
      <add key="ExternalPersonAllowed" value="True"/>
      <add key="EmployeeAllowed" value="True"/>
      <add key="SystemAllowed" value="True"  />
      <add key="DBUser" value="crm5"/>
      <add key="DBPassword" value="crm5myd"/>
      <add key="CommonDBConnection" value="True"/>
</Explicit>
```

Like with anonymous users we can also set data rights to the external user through SOAdmin.  External users can access different data objects (like Company, Contact, Project etc ) owned by different users like this particular external user, other associates, other external users etc.

Before running the following example the SOAdmin had created an external user with username “[EXTERNAL1@SUPEROFFICE.COM](mailto:EXTERNAL1@SUPEROFFICE.COM)”. This user is allowed to read data belonging to the contact data object which this external persion is registered on. The following example demonstrates how to login as an external user and call contact service agent.

 

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
//Authenticate as an External User
using (SoSession newSession = SoSession.Authenticate("EXTERNAL1@SUPEROFFICE.COM", ""))
{
    //Create a contact agent.
    using(ContactAgent agent = new ContactAgent())
    {
        //Retrieve a Contact belongin to this External user itself.
        ContactEntity myContact = agent.GetContactEntity(newSession.Principal.ContactId);
        string name = myContact.Name;
    }
}
 
Here we have logged in with an external user id. Notice that there is no difference between logging in as an external user and logging in as an internal user. When retrieving a contact we have passed the contact id of this particular user. If we try to retrieve data belonging to anyone other than this user then an exception will be thrown unless it is allowed by the SOAdmin.
 





```
