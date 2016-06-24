<properties date="2016-06-24"
SortOrder="25"
/>

SOAP is a simple XML based protocol used to let applications exchange information over HTTP. In SuperOffice we can access the web services using SOAP calls.

* In CRM 6 the authentication was done using a special secret hash that was calculated and sent on each request.
* In CRM 7 the secret is not used any more. Instead you must acquire a **ticket** from an authentication web service first. The ticket is what you send in the header instead of the secret.

The Service WcfSoPrincipalService is responsible for carrying out authentication.

AuthenticateImplicit tries to authenticate with whatever information possible. This information is most likely to be an Active Directory user.

AuthenticateUsernamePassword authenticates using a username and password. This can be a username and password of a domain user.

A successful response to Authentication is a Ticket that is passed in the Soap header of the subsequent requests.

It is required that the Web Services are hosted on a machine that is a member of the Active Directory in order to support Active Directory Integration.

It is required that Active Directory credentials are passed along a request to AuthenticateImplicit in order to support Integrated Authentication. This means you need to enable ASP.net impersonation in IIS:

* Either use classic pipeline mode
* Or disable Integrated pipeline mode validation:

    ```
    <system.webServer>
       <validation validateIntegatedModeConfiguration="false" />
    ```

 

1. autolist
