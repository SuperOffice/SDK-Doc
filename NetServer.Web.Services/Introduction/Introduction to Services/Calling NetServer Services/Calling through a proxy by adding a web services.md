<properties date="2016-06-24"
SortOrder="16"
/>

To call a NetServer service through a proxy as a web service you have to set up the NetServer provided web services as an application in the IIS. After configuring the IIS application you have to add the web service you are going to use in your application as a web reference. The following figure shows the web reference added to a web application.

<img src="../../Sevices%20description%20+%20examples_files/image006.jpg" width="265" height="174" />

The below figure shows the add web reference dialog of the Visual Studio IDE.

![](AddServiceReference.png)

The URL shown in the above given figure is the kind of URL that you have to specify when you are adding a web service running in a web server to your application.

After giving a name to the added web service you can use that web service name in the using section of your code file in the following manner:

```
using TestNewWcfApi.SoPrincipalSvc;
using C=TestNewWcfApi.ContactSvc;
 
static void Main(string[] args)
{    
    // SOAP Header
    SoPrincipalClient svc = new SoPrincipalClient();
    bool bSuccess;
    bool bAuthSuccess;
    SoTimeZone tz = null;
    SoPrincipalCarrier soPrincipal = null;
    SoCredentials soCredentials = null;
    SoExceptionInfo ex = svc.AuthenticateUsernamePassword("hh", "hh", 
           out bSuccess, out tz, out soPrincipal, out bAuthSuccess, out soCredentials);
    if (ex != null)
    Console.WriteLine("Error:" + ex.FriendlyText);
    else
    if( !bAuthSuccess )
    Console.WriteLine("Login failed");
    else
    {
    string ticket = soCredentials.Ticket;

    C.SoTimeZone tz2 = new TestNewWcfApi.ContactSvc.SoTimeZone();
    tz2.SoTimeZoneId = tz.SoTimeZoneId;
    tz2.SoTimeZoneLocationCode = tz.SoTimeZoneLocationCode;
    tz2.ExtensionData = tz.ExtensionData;

    C.SoCredentials soCredentials2 = new TestNewWcfApi.ContactSvc.SoCredentials();
    soCredentials2.Ticket = soCredentials.Ticket;
    soCredentials2.ExtensionData = soCredentials.ExtensionData;
    C.Contact1Client contactSvc = new C.Contact1Client();
    C.Contact aContact = null;
    C.SoExceptionInfo ex2 = contactSvc.GetContact(soCredentials2, ref tz2, 4, out bSuccess, out aContact);
    if (ex2 != null)
        Console.WriteLine(ex2.FriendlyText);
    else
        Console.WriteLine(aContact.Name);
}
```

 

Having multiple services that share the same carrier objects is a scenario that is not well supported in Visual Studio. For help, see: [Proxy Code Generation in Visual Studio](http://www.hightech.ir/SeeSharp/Proxy-Code-Generation-In-Visual-Studio)
 

[Agent Patterns](../../What%20is%20an%20Agent/What%20is%20an%20Agent.md) 

[Authentication and SOAP Calls](../../Authentication%20and%20SOAP%20calls/Authentication%20and%20SOAP%20calls.md)

[Wrapped or Unwrapped Proxies](Wrapped%20or%20Unwrapped.md)
