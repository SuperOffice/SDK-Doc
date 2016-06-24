<properties date="2016-06-24"
SortOrder="9"
/>

Once the above classes have been written we could use a code similar to the one shown below to set the credential needed in order to connect to the web service client.

```
    SoCredentialsHeader newCredHead = new SoCredentialsHeader();
    newCredHead.setUserId("SAL0");        
    
    newCredHead.setAuthenticationType(SoAuthenticationType.fromValue( "CRM5"));
    String authType = newCredHead.getAuthenticationType().toString();
    String userName = newCredHead.getUserId();
    String userPass = "";
    String soSecret = getSecret(authType, userName, userPass);
    newCredHead.setSecret(soSecret);
```

 

Once we are connected to the web service client we can now retrieve a Contact Entity and its properties as shown below.

```
    //Create a, instance of the Contact_Service Class
    Contact_Service newConSer = new Contact_Service();
    //Create an instance of the ContactSoap using the Contact_Service Class
    ContactSoap newConSoap = newConSer.getContactSoap();  

    //Retrieves a Contact instance based on the Contact ID
    ContactEntity newConEnt = newConSoap.getContactEntity(4);
       
    //Retrieve properties of the Contact Entity
    String conName = newConEnt.getName();
    int conID = newConEnt.getContactId();
    String conDept = newConEnt.getDepartment();
```

 

The ContactSoap class is responsible for loading default values into the retrieved ContactEntity. Once this is done we can retrieve the properties of the Contact Entity.

See Also:

[Authentication and SOAP Calls](../../../Introduction/Authentication%20and%20SOAP%20calls/Authentication%20and%20SOAP%20calls.md)

[Calling from .net with standard tools](../Calling%20from%20.net%20with%20standard%20tools/Calling%20from%20.net%20with%20standard%20tools.md)

[Calling from .net with SuperOffice tools](../Calling%20from%20.net%20with%20SuperOffice%20tools/Calling%20from%20.net%20with%20SuperOffice%20tools.md)

 
