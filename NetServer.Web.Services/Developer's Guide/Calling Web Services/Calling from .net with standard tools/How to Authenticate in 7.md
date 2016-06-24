<properties date="2016-06-24"
SortOrder="9"
/>

The authentication details of a web service are passed as a parameter.

You call an authentication service to get a session ticket before calling other services.

We used `http://localhost/SuperOffice/SoPrincipal.svc` and `http://localhost/SuperOffice/Contact.svc` as the web service references.

```
using ServicesTest1.ContactRef;
 
SoPrincipal p;
SoPrincipalClient soprincipal = new SoPrincipalClient();
SoPrincipalCarrier principalResponse;
SoCredentials cred;
bool success;
bool authSuccess;
SoTimeZone tz;
SoExceptionInfo ex;
ex = soprincipal.AuthenticateUsernamePassword( "password", "username", out success, out tz, out principalResponse, out authSuccess, out cred );
Console.WriteLine("Auth {0} call={1} auth={2}", "ADM0", success, authSuccess);
   
Contact1Client contAgent = new Contact1Client();
ContactEntity contactResponse;
ex = contAgent.GetContactEntity(cred, ref tz, 2, out success, out contactResponse);
Console.WriteLine("Contact {0}: {1} {2}", contactResponse.ContactId, contactResponse.Name, contactResponse.Country.Name);

Person1Client persAgent = new Person1Client();
PersonEntity persResult;
ex = persAgent.GetPersonEntity(cred, ref tz, 33, out success, out persResult);

Console.WriteLine("Person {0}: {1} {2} - {3}", persResult.PersonId, persResult.Firstname, persResult.Lastname, persResult.Contact.Name);
```

 

Before the above code is executed we have to create a website and add a web reference to the Contact web service. We have named the web reference folder as ContactRef.

Note that there is no secret used here - the username + password is passed in clear-text, so you should use HTTPS if you are going to be doing this over the open Internet.
