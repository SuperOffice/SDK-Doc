<properties date="2016-06-24"
SortOrder="9"
/>

In the  application config file if we allow the implicit anonymous user, then we can call service agents without authenticating. We can see how the implicit anonymous user is allowed in the config file from the sample given below.

```
<ImplicitAnonymous>
        <add key="Allowed" value="True"/>
        <add key="DBUser" value="crm5"/>
        <add key="DBPassword" value="crm5myd"/>
        <add key="CommonDBConnection" value="True"/>
        <add key="SoUser" value="ANONYMOUS" />
        <add key="SoPassword" value="ANONYMOUS" />
</ImplicitAnonymous>
```

 

If we try to call service agents without authenticating, then an exception will be thrown unless the implicit anonymous user is allowed in the config file. 

The SOAdmin can create explicit anonymous users too. Once an anonymous user is created in SOAdmin it can be used to authenticate, even if implicit anonymous user is not allowed in the config file.

The example below shows a client application that calls agents without authentication.

 

```
using SuperOffice.CRM.Services;
 
{
    //Create a contact agent. Notice that there's no authentication
    using(ContactAgent agent = new ContactAgent())
    {
        //Retrieve a Contact entity using the contact agent
        ContactEntity myContact = agent.GetContactEntity(12);
        string name = myContact.Name;
    }
}
```

 

Here we have called the service agents without authenticating. Notice that we are only reading data but not making any changes to the data. If we try to make any changes, then an exception will be thrown. But in the Role window of the SOAdmin you can set data rights for the anonymous users. We can allow anonymous users to access data belonging to External users, other associates and it self. And also we can set these data rights on different data object like company, contact, project and many more. In order to run the above code without any exception we need to make sure that the Anonymous users are allowed to read the company data object which belongs to other associates.  An exception will be thrown if its data rights are set to “None”.
