<properties date="2016-06-24"
SortOrder="15"
/>

To call a NetServer service through a proxy as a web service you have to set up the NetServer provided web services as an application in the IIS. After configuring the IIS application you can call the web-services using the same Agent pattern as before.

We change the configuration to indicate that we are calling a remote web-service rather than using a local implementation of the web-service.

This corresponds to the following diagram:

<img src="../../Sevices%20description%20+%20examples_files/image004.gif" width="216" height="638" />

The Application calls the services proxy, which calls the remote WebServices via SOAP

The application’s configuration file will need to be changed to reflect the following changes [so that the NetServer Services will be called through the proxy.]()

```
<Services>
  <addkey="DefaultMode" value="Remote" />
  <addkey="RemoteBaseURL" value="http://hostname/WebServices/" />
</Services>
```

 

What happens when the application’s config file is changed from running Local to Remote is that the AgentFactory returns a different type of object when its various factory functions are called.

When running locally, the new ContactAgent() returns a ContactAgentImpl that lives in the SuperOffice.CRM.Services.Implementation.dll.

When running remotely, the new ContactAgent() returns a ContactAgentProxy that lives in the SuperOffice.CRM.Services.Proxy.dll

The application code cannot tell the difference between the two because the GetContactAgent() call only promises to return something which implements the IContactAgent interface – which both the local implementation and the proxy object do.

In order for the agent factory to return the proxy rather than the implementation object, we would change the Implementation reference in the previous example to the SuperOffice.Services.Proxy.DLL assembly which will look like the following.

<img src="../../Sevices%20description%20+%20examples_files/image005.jpg" width="275" height="194" />

The proxy object will use Microsofts WSE toolkit to do a SOAP call to the remote URL specified in the config file. If WSE is not installed an error will occur during the processing of a configuration file required to service this request.

The webservice at the other end of the URL also has a web.config. This web.config must specify that the service implementation is run locally. This is done by having the following in the web.config for the web services.

```
<Services>
  <addkey="DefaultMode" value="Local" />
</Services>
```

 

The Microsoft’s Web-Service Enhancements are used to provide the SOAP message handling, while the web.config file of the webservices must also contain the right WSE sections. Given below are the configurations that you have to add to the web.config file:

```
<system.web>
  <webServices>
    <soapExtensionTypes></soapExtensionTypes>
    <soapServerProtocolFactory type="Microsoft.Web.Services3.WseProtocolFactory,
        Microsoft.Web.Services3, Version=3.0.0.0, Culture=neutral,
        PublicKeyToken=31bf3856ad364e35"/>
    <soapExtensionImporterTypes>
      <add type="Microsoft.Web.Services3.Description.WseExtensionImporter,
         Microsoft.Web.Services3, Version=3.0.0.0, Culture=neutral,
         PublicKeyToken=31bf3856ad364e35"/>
    </soapExtensionImporterTypes>
  </webServices>
  <customErrors mode="RemoteOnly"/>
  <authentication mode="None"/>
  <authorization>
    <allow users="*"/>
  </authorization>
  <identity impersonate="true"/>
  <sessionState mode="InProc" stateConnectionString="tcpip=127.0.0.1:42424" 
    sqlConnectionString="data source=127.0.0.1;Trusted_Connection=yes" cookieless="false"  
    timeout="20"/>
  <globalization requestEncoding="utf-8" responseEncoding="utf-8"/>
</system.web>
<microsoft.web.services3>
</microsoft.web.services3> 
```
