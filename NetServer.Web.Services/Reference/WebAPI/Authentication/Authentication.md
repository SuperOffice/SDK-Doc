
## Authorization

You will need to provide some login information in order to use the SuperOffice web API.

* BASIC authentication: Base64 Encode SuperOffice username:password
* SOTICKET authentication. Pass the SuperOffice ticket (7T:abc123==) without any encoding.
* BEARER authentication. Online only. Pass along an access token (7A:abc123==) from SuperId.




1. autolist




## Configuration

You must explicitly enable the authentication methods you want to use in the `web.config` file.

```xml
<WebApi>
      <add key="AuthorizeWithUsername" value="true" />
      <add key="AuthorizeWithTicket" value="true" />
      <add key="AuthorizeWithImplicit" value="true" />
      <add key="CORSEnable" value="true" />
      <add key="CORSOrigin" value="https://mail.google.com" />
</WebApi>
```

**AuthorizeWithUsername** enables username + password (Basic) authentication. This method is not enabled in the Online environment.

**AuthorizeWithTicket** enables SOTicket authentication.

**AuthorizeWithImplicit** enables authentication with IIS identity. This method is not enabled in the Online environment.

**CORSEnable** turns on CORS headers, meaning that external sites must be listed in the CORSOrigin config in order to call the WebAPI. Default is on.

**CORSOrigin** a list of space separated URLs of sites that are allowed to call the WebAPI. If an external site tries to call, and it is not listed here, then the call will fail. You can use "*" to allow all sites to call.

