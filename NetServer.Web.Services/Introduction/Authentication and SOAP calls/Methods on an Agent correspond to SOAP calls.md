<properties date="2016-06-24"
SortOrder="6"
/>

Given the following simple agent call:

```
   using SuperOffice.CRM.Services;
   
   using (SoSession mySession = SoSession.Authenticate("SAL0", "SAL0"))
   {    
        using(ContactAgent contactAgent = new ContactAgent())
        {
            Contact aContact = contactAgent.GetContact(12);
        }
   }
```

Below is the resulting SOAP message that the client sends to the server.

```
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Header>
        <SoCredentials            xmlns="http://www.superoffice.net/ws/crm/2005/04/Netserver20">
            <AuthenticationType>CRM5</AuthenticationType>
            <UserId>SAL0</UserId>
            <Secret>NHoZChzE8hxd4XkJOc8yAQ==</Secret>
        </SoCredentials>
    </soap:Header>
    <soap:Body> 
     <GetContact xmlns="http://www.superoffice.net/ws/crm/2005/04/Netserver20">
            <contactId>12</contactId>
        </GetContact>
    </soap:Body>
</soap:Envelope>
```

 

In order to authenticate SOAP calls against the NetServer back end, a special SOAP header must be used, and a special value sent back. This is to avoid sending the password directly to the server.

Encrypted value of the password is sent to the server. Once the request received by the server, it matches the encrypted value contained in the request with the encrypted value in the server if both match then the password is correct. This provides a secure means of providing password without actually sending the password across the network.

 

An Agent contains a set of methods corresponding to SOAP calls. These methods determine the properties of the SoCredentials header. They can be listed as follows.

* AuthenticationType- This provides the highest level of security for the system.
* Secret – Sets the SOAP secret.
* UserId – Sets the userId.
