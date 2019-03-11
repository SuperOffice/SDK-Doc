
## Authorization

You will need to provide some login information in order to use the SuperOffice web API.

* BASIC authentication: Base64 Encode SuperOffice username:password
* SOTICKET authentication. Pass the SuperOffice ticket (7T:abc123==) without any encoding.
* BEARER authentication. Online only. Pass along an access token (7A:abc123==) from SuperId.

| Auth Type | Example  | On-site | Online |
|-----------|----------|---------|--------|
| No header |          |   x     |    x   |
| Basic     | YWrtMdo= |   x     |        |
| SOTicket  | 7T:xyz123abc== | x |    x   |
| Bearer    | 8A:xyz123abc== |   |    x   |

Basic is not allowed in **Online**, since all usernames and passwords must flow through SuperId to get a bearer access token.

No header request means that you either:

* have [IIS configured to handle identity](Integrated%20with%20Active%20Directory.md) so that you can log in with your Active Directory, or
* that you send [an `X-XSRF-TOKEN` header](Re-use%20existing%20session.md) to prove that you have access to a logged in session.



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

