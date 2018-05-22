

We will make a simple app that displays some information about recently added contacts in a web panel.

We will use the **Authorization Code** flow as described in [this article on Open ID Connect](https://community.superoffice.com/en/crm-online/Partners-and-App-Store/how-to-develop-on-the-superoffice-online-platform/building-your-first-application/Security-and-Authentication/online-superoffice-online-open-id-connect/).

We will have 3 URLs:

​            `/`                      Check if logged in: if not logged in, start login process with SuperId

​            `/callback`       Receive call from SuperId login; call SuperId to get access token.

​            `/app`                Use the access token to get a list of contacts from SuperOffice.

 

The user will access the `/` URL or the `/app` URL , and is redirected to SuperId because the app is not logged in. 

SuperId will log the user in, and post back to `/callback` with the access tokens.

Once the access tokens are stored in the app session, calling `/app` will call the SuperOffice API to get a list of contacts and show them in a simple table.



# Make an Empty MVC App

![empty MVC app](1526999027785.png)



Choose the **Empty** template but check the MVC reference.

![empty MVC template](empty-template.png)   

This will get us a simple, clean folder structure:

![empty-folder-structure](empty-folder-structure.png)   

You can run it and you should get a nice error page, because we haven’t defined any views yet.

![1526999139989](server-error.png)   

 

If we take a peek in the `App_Start/RouteConfig.cs`



```cs
public static void RegisterRoutes(RouteCollection routes)
{
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
        routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
        );
}
```

 

We can see the default controller is **Home**, with default action **Index**.

# Add a Home Controller

![home-controller-add](home-controller-add.png)   

![home-controller-scaffold dialog](home-controller-scaffold.png)   

Name it **HomeController**

This is our main entry point. This is the starting point.

If we are logged in, we want to redirect to the application logic that actually does the work.

If we are not logged in, we want to kick off the log-in process with SuperId.

 

# Add Home View

![home-view-add](home-view-add.png)   

![home-view-dialog](home-view-dialog.png)   

This will add some more packages to the project, but now we have a web site.

![home-view-index](home-view-index.png)   

This homepage is just a placeholder, it will only be shown if there is an error.

 

 

# Set up IIS

The default is to use IIS Express, which runs on a non-standard port. Since our app is defined with a redirect URL of **Localhost/MvcTest**, we need to switch over to use IIS.

![iis config](iis-config.png)   

 

# Add Nuget packages

![1526999538189](nuget-packages.png)   

Add the **SuperOffice.CRM.Online.Core** package so we can decode the SuperId responses. This will also add the **System.IdentityModel.Tokens.JWT** package.

If we were going to use SOAP we would add **SuperOffice.NetServer.Services** – this would add the client code needed to talk to the webservices API via SOAP. This will also bring in the **SuperOffice.NetServer.Core** package with the shared definitions. We are going to use REST APIs, so we don’t need these.

We will need to call SuperId from the server, so we need a REST client, like [**RestSharp**](https://github.com/restsharp/RestSharp).

![restsharp](restsharp.png)   

 

# Add app settings to web.config

The **SuperOffice.CRM.Online.Core** package has also added some app settings to the web.config file that we need to tweak.

```xml
  <add key="SoAppId" value=""/>
  <add key="SoFederationGateway" value="https://sod.superoffice.com/login/"/>
  <add key="SuperIdCertificate" value="16b7fb8c3f9ab06885a800c64e64c97c4ab5e98c"/>
```

   

The gateway URL and the certificate id are fine, we don’t need to change these.

The SoAppId we need to fill in. We also need to add a couple of more settings for later.

```xml
  <add key="SoAppId" value="a43a2b7a9302b4921881fcb75d578dc2"/>
  <add key="SoAppToken" value="967a48226c9b343f6134b450f6bdfa2b"/>
  <add key="SoAppUrl" value="https://localhost/mvctest/callback"/>
```

  

# Add X509 Certificate to App_Data

Add the file **SOD_SuperOfficeFederatedLogin.crt** to the App_Data folder.

You can find the file in the [Online certificates ZIP](https://community.superoffice.com/en/CRM-Online/Partners-and-App-Store/How-To-Develop-on-the-SuperOffice-Online-Platform/building-your-first-application/online-sdk-downloads/) on Community.

We need this X509 certificate to verify that the tokens we have received are actually from SuperId, and not from some hacker trying to trick us.

 

# Implement the Home Controller

The default action is to see if we are logged in, and if we are not, then redirect to SuperId to get logged in. When SuperId is finished, it will redirect back to us, to our callback URL (SoAppUrl in the config file)

If we are logged in, we need to pass a bunch of parameters to SuperId’s OAuth URL, as described in [the documentation](https://community.superoffice.com/en/crm-online/Partners-and-App-Store/how-to-develop-on-the-superoffice-online-platform/building-your-first-application/Security-and-Authentication/online-superoffice-online-open-id-connect/).

```cs
// see if we have logged in
if (Session["LoggedIn"] == null)
{
    // Not logged in - go to login page
    string appId = ConfigurationManager.AppSettings["SoAppId"];
    string appUrl = ConfigurationManager.AppSettings["SoAppUrl"];
    string url = ConfigurationManager.AppSettings["SoFederationGateway"];
 
    string state = Guid.NewGuid().ToString();
    Session["state"] = state;
 
    var query = System.Web.HttpUtility.ParseQueryString(string.Empty);
    query.Add("client_id", appId);
    query.Add("redirect_url", appUrl);
    query.Add("scope", "openid");
    query.Add("state", state);
    query.Add("response_type", "code"); // authorization flow
    query.Add("response_mode", "form_data"); // instead of #fragment
 
    url += "/common/oauth/authorize?" + query.ToString();
 
    return Redirect(url);
}
else
    // Is logged in - go to App instead.
    return RedirectToAction("Index", "App");
```


To kick off the log in process, we pass a random value as the State parameter. We store this in the Session, so that we can check it later.

How do we know if we are logged in? We will put the access token we get into the server’s Session array when we get called back.  So if the **Session[“LoggedIn”]** value is NULL, then we are not logged in. SuperId will call the appUrl (https://localhost/mvctest/callback) with values we can use to get an access and refresh token.

 

# Add a Callback Controller

![1526999798984](callback-controller-add.png)   

Add an empty controller, call it CallbackController

The Callback controller is called from SuperId with two values: **state** and **code**

```cs
public ActionResult Index(string state, string code)
{
    // Callback 1 in authorization flow
    if (state != null && code != null)
    {
        try
        {
            var storedState = Session["state"] as string;
            if (storedState != state)
                throw new Exception("OAuth State mismatch.");
            OAuthHelper.GetAuthorizationCode(Server, Session, code);
            return RedirectToAction("Index", "App");
        }
        catch( Exception ex)
        {
            object model = ex.Message;
            return View(model);
        }
    }

    // Something is wrong, start over
    object error = "Unknown callback request. Missing state and/or code.";
    return View( error );
}
```

 

To handle the authorization code, we check the State value we stored earlier.

If they match, we can call the **OAuthHelper** class to handle making a POST request to SuperId to get the OAuth refresh and access tokens. The SuperId response will also include a JWT which contains the URL for the REST API.

If the helper class did not throw an error, then we are logged in and we can move over to the actual app, which lives over in the **AppController**.

 

# Add OAuthHelper class

We need to get tokens from SuperId, using RestSharp, so we will put this into a separate class: **OAuthHelper**. RestSharp is basically a smart HttpClient that handles JSON for us.

RestSharp can automatically de-serialize JSON for us, if we define a class that looks like the response we get. SuperId’s response to an OAuth request looks [like this](https://community.superoffice.com/en/crm-online/Partners-and-App-Store/how-to-develop-on-the-superoffice-online-platform/building-your-first-application/Security-and-Authentication/online-superoffice-online-open-id-connect/):

```http
Response to POST to /login/common/oauth/tokens

{
"token_type": "Bearer",
"access_token": "8A:Cust12020.AR2s3phb0gXK8DP0NfoYlsrQAQAACIJ/KQ+cbGp0l9g8PJNlBCEZpsfT8F4XwFlYBjvw6xmM086Vckm0Mmh+fEPuoLspl+EgtQzD0F8Ka4qLFGWICvUg==",
"expires_in": 3600,
"refresh_token": "KSamN1Tp4sd26pZJSGK6JobrWOUWorIZ2Y5XxcAqX86F4fiT3",
"id_token": "eyJ0eXAiVRKZkVxMTZZdyJ9.eyJzdWIiOiJ0b255LnlhdGVzQHN1cGVyb2ZmaWNlLmNvbSIsImh0dHA6Ly9zY2hlbWVzLnN1cGVyb2ZmaWNlLm0dHBzOi8vc29kLnN1cGVyb2ZmaWNlLmNvbSIsImF1E1MTYyOTk1OTZ9.jVW0KWtOeaYV4V3372rSVosPQqlOsaOj6-Oew_Ompe9GZ932aQi6tcc7uXdaz9jmBgLh8mlIZWyW4rFcTnyLQzjjK3nSYWNxxvobQRntigD1KANvNNT3smxec6ST-j1uCUBCQrVNxILapXiUrJER4aMmAbFweWs9bbgfhR9_sQVQDmLbVw"
}
```


So we can make a class that matches the properties in the response, and RestSharp will map everything for us:

```cs
internal class TokensResponse
{
    public string token_type { get; set; }
    public string access_token { get; set; }
    public int expires_in { get; set; }
    public string refresh_token { get; set; }
    public string id_token { get; set; }
}
```

 

Now to get the token from SuperId we need to make the **OAuthHelper** class:

 

```cs
public class OAuthHelper
{
   void GetAuthorizationCode(HttpServer server, HttpSession session, string code)
{
    GetSuperIdTokens(server, session, code, null, "authorization_code");
}
 
void GetSuperIdTokens(HttpServer server, HttpSession session, string code, string refreshToken, string grant_type)
{
    // Make new request from SuperId to get refresh token
 
    string appId = ConfigurationManager.AppSettings["SoAppId"];
    string appToken = ConfigurationManager.AppSettings["SoAppToken"];
    string appUrl = ConfigurationManager.AppSettings["SoAppUrl"];
    string url = ConfigurationManager.AppSettings["SoFederationGateway"];
 
    // Make the request from the server, since the secret appToken is used
    var client = new RestClient(url);
    var request = new RestRequest("common/oauth/tokens", Method.POST);
    request.AddParameter("client_id", appId);
    request.AddParameter("client_secret", appToken);
    if( code != null ) request.AddParameter("code", code);
    if( refreshToken!= null ) request.AddParameter("refresh_token", refreshToken);
    request.AddParameter("redirect_uri", appUrl);
    request.AddParameter("grant_type", grant_type);
 
    var response = client.Execute<TokensResponse>(request);
    if (response.IsSuccessful)
    {
        var tokens = response.Data;
 
        StoreTokensInSession(server, session, tokens).access_token, tokens.token_type, tokens.expires_in, tokens.refresh_token, tokens.id_token);
    }
}
```

Before we store the tokens in the session, we must make sure that the JWT token is valid – i.e that it is signed by SuperId. If the tokens come from somewhere else, we need to reject the request.

```cs
void StoreTokensInSession(HttpServer server, HttpSession session, TokensResponse tokens)
 {
     // Validate JWT token
     var superIdToken = ValidateToken(server, tokens.id_token);
     if (superIdToken == null)
         throw new Exception("Invalid JWT token: " + tokens.id_token );
 
     // Store tokens
     session["LoggedIn"] = tokens.access_token;
     session["RefreshToken"] = tokens.refresh_token;
     session["Expires"] = DateTime.Now.AddSeconds(tokens.expires_in);
     session["Token"] = superIdToken;
     session["NetServerUrl"] = superIdToken.NetserverUrl;
 }
```

 

To validate the token, we use an X509 certificate and the **SuperIdTokenHandler** from the Online.Core package we added earlier.

```cs
SuperIdToken ValidateToken(HttpServerUtilityBase server, string token)
{
    var path = server.MapPath("~/App_Data/") +"SOD_SuperOfficeFederatedLogin.crt";
 
    var tokenHandler = new SuperIdTokenHandler();
    tokenHandler.JwtIssuerSigningCertificate = new X509Certificate2(path);
    tokenHandler.CertificateValidator = X509CertificateValidator.ChainTrust;
    // override issuer name with environment name
    tokenHandler.ValidIssuer = "https://sod.superoffice.com";
 
    return tokenHandler.ValidateToken(token, TokenType.Jwt);
}
```

If the token is valid, a token object is returned, otherwise an exception is thrown.

A valid token means that we can store the tokens in the Session object – which is what we started out by checking for. When we get here, we are logged in.

# Add Callback View

Add an Index view that can display an error message. The model for the view is just a string.

We add an @model string directive to the top of the view, and use it to display the error message using @model

 

```xml
@model string

@{
    ViewBag.Title = "Callback";
}

<h2>Callback</h2>

<h1>Error: @Model</h1>
```

The view is only displayed if the callback controller encounters an error:

```cs
catch( Exception ex)
{
    object model = ex.Message;
    return View(model);
}
```

 

 

# Add an App Controller

This is where the main app logic will go. We are logged in at this point, and we have an access token and a refresh token in our session state.

First we check that the access token is set.

Then we check if the access token has expired – if it has, we need to get a new access token using the refresh token.

Then we can go get some data from the SuperOffice API, and use it to render a view.

 

```cs
public class AppController : Controller
{
    RestClient _client = new RestClient();
 
    // GET: App - must be logged in to access this
    public ActionResult Index()
    {
        // Are we logged in?
        if (Session["LoggedIn"] == null)
            return RedirectToAction("Index", "Home");
 
        // Do we need to refresh access token?
        string error = null;
        DateTime expiryDate = (DateTime)Session["Expires"];
        if (expiryDate < DateTime.Now)
            error = RefreshAcessToken();
 
        string accessToken = Session["LoggedIn"] as string;
        string baseUrl = Session["NetServerUrl"] as string; // https://xxx.yyy/api
 
        var model = GetDataFromSuperOffice(baseUrl, accessToken);
        model.TimeLeft = expiryDate - DateTime.Now;

        model.Error = error;
 
        return View(model);
    }
```

 

To refresh the Access token we use the OAuth helper we made before:

```cs
string RefreshAcessToken()
{
    try
    {
        string refresh_token = Session["RefreshToken"] as string;
        OAuthHelper.GetRefreshToken(Server, Session, refresh_token);
        return null;
    }
    catch (Exception ex)
    {
        return ex.Message; 
    }
}
```

 

Finally, we are ready to get the data from SuperOffice:

```cs
AppModel GetDataFromSuperOffice(string baseUrl, string accessToken)
     {
         var model = new AppModel();
         model.BaseUrl = baseUrl;
         model.AccessToken = accessToken;
 
         _client.BaseUrl = new Uri(baseUrl);
         _client.AddDefaultHeader("Authorization", string.Format("Bearer {0}", accessToken));
 
         // We don't want XML but JSON response, so force JSON serializer
         _client.ClearHandlers();
         _client.AddHandler("application/json", new RestSharp.Deserializers.JsonDeserializer());
 
         var request = new RestRequest("v1/Contact", Method.GET);
         // request.AddParameter("$filter", "registeredDate thisYear");
         request.AddParameter("$select", "contactId,nameDepartment,category,business,number,registeredDate");
 
         var response = _client.Execute<ODataResponse>(request);
         if (response.IsSuccessful)
         {
             model.Contacts = response.Data.value.ToArray();
         }
         else
         {
             model.Error = response.ErrorMessage;
         }
 
         return model;
     }
```

We are setting the authorization header to BEARER + the access token.

We are forcing RestSharp to get JSON rather than XML from the OData endpoint we are calling.

The OData v4 response looks like this:

```json
{
  "odata.metadata": "http://host/service/$metadata",
   "value": [
    {
      "name": "Orders",
      "kind": "EntitySet",
      "url":  "Orders"
    }]
}
```

So we need to make a serialization class that RestSharp can put the data into:

```cs
public class ODataResponse
{
    public List<ContactModel> value { get; set; }
}
```

 

We don’t care about the OData meta-data link, so we don’t include it in our class.

We use a List rather than an Array to work around a problem with array constructors in the JSON serializer in RestSharp.

 

# Add App and Contact Models

Add two classes to Models folder: **AppModel** and **ContactModel**. These classes are used in the ODataResponse, and as the view-model for rendering the App index view.

The AppModel describes the App user-interface.

```cs
public class AppModel
{
    public TimeSpan TimeLeft { get; set; }
    public string BaseUrl { get; set; }
    public string AccessToken { get; set; }
    public string Error { get; set; } 
    public ContactModel[] Contacts { get; set; }
}
```

 

The ContactModel describes the OData response we get back.

```cs
public class ContactModel
{
    public int PrimaryKey { get; set; }
    public int contactId { get; set; }
    public string nameDepartment { get; set; }
    public string category { get; set; }
    public string business { get; set; }
    public string number { get; set; }
    public DateTime registeredDate { get; set; }
}
```

 

# Add App View

![app-view](app-view.png)   

This generates an almost empty page for us. We need to render some information to it, using the AppModel instance:

```xml
@model MvcTest.Models.AppModel
@{
    ViewBag.Title = "App";
}
 
<h2>App</h2>
@if (Model.Error != null)
{<h1>@Model.Error</h1> }
else
{
<p>This is where the app logic goes.</p>
<p><a href="@Model.BaseUrl">@Model.BaseUrl</a></p>
<p>Access token: @Model.AccessToken </p>
<p>Token expires: @Model.TimeLeft </p>
 
<table>
    <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Created</th>
    </tr>
    @foreach (var item in Model.Contacts)
    {
        <tr>
            <td>@item.nameDepartment</td>
            <td>@item.category</td>
            <td>@item.registeredDate</td>
        </tr>
    }
</table>
}
```



# Ready to Run

We are now ready to run the app!

Start the debugger (F5):

The browser and the app starts.

The Home controller does not find an access token in Session, so it redirects to SuperId

<https://sod.superoffice.com/Login/?oauth=1&sctx=eyJQYXJ0bmVyUmVkaXJlY3RVcmwiOm51wiUHJvbXB0IjpudWxsLCJJc0xvZ2dpbmdPdXQiOmZhbHNlLCJQb3N0TG9nb3V0UmVkaXJlY3RVcmwiOm51bGwsIkZlZFJlbWVtYmVyTWUiOmZhbHNlLCJOb25jZSI6bnVsbH0%3D> 

SuperId has not set up a session for you yet, so it shows a login form:

![1527000848549](approve-login.png)   

 

# Approve Screen

![1527000875326](login-approve.png)   

Superid sees that this is the first time this app has called this particular tenant, so it shows an approval screen for the app.

If you click I APPROVE button, the authorization flow continues. The next time the app is run, the approval screen is not shown, since the approval is registered on the app + tenant.

SuperId redirects back to the callback URL we passed to SuperId at the start of the process.

# Callback Call

SuperId redirects to 

<https://localhost/MvcTest/callback?state=1234&code=43IOJXjasdxy> 

The Callback controller uses these to get a refresh + access token from SuperId directly.

Having gotten a valid JWT token from SuperId, it redirects to the App controller.

 

# App Call

The application checks that we have an access token, and uses it to get a search result from SuperOffice. It then renders a page containing the search result.

The application calls

<https://sod.superoffice.com/Cust1234/api/v1/Contact?$select=contactId,nameDepartment,category,business,number,registeredDate>

with the Authorize header containing a Bearer access token.

This returns a simple JSON object containing an array of row objects.

This is rendered as a table using the App Index view:

 ![1527001011364](app-index-render.png)

   