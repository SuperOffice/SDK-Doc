<properties date="2016-06-24"
SortOrder="14"
/>

To call a NetServer service through the binaries first you have to add the following NetServer binaries to your application.

* SoCore.dll

* SuperOffice.Service.dll

* SuperOffice.Service.Implementation.dll

The following figure shows the added binaries in a windows application.

<img src="../../Sevices%20description%20+%20examples_files/image001.jpg" width="235" height="161" />

After adding the binaries to your project references you can use the namespaces of the binaries in the using section of your code file in the following way:

```
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{    
      //Instantiate the Contact Entity
      using(ContactAgent contactAgent = new ContactAgent())
      {
          //Create a Contacts Array and assign values
          Contact[] myContacts = new Contact[5];
          myContacts = contactAgent.GetMyContacts();
      }
}
```

 

The application’s configuration file should be as defined below:

```
<Services>
  <addkey="DefaultMode" value="Local" />
</Services>
```

 

The GetContactAgent will check the config file and return an object that lives in the Services.Implementation.dll – this implementation will in turn use the database directly to work out the result. In this case there is no web-service call involved in calling the service.

This corresponds to this diagram: everything is running within the same process.

<img src="../../Sevices%20description%20+%20examples_files/image002.gif" width="216" height="114" /> 

<img src="../../Sevices%20description%20+%20examples_files/image003.gif" width="198" height="355" />
