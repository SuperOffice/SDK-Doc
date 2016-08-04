<properties date="2016-08-04"
SortOrder="10"
/>

When creating any web site it is necessary to have a **web.config** file. What we will do is get a copy of web.config file of the SIX.web and to modify it as required.

The SuperOffice Serivices and Database sections need to remain in the config file, so that we can talk to the database:

```
  <SuperOffice>
    <Security>
    </Security>
    <Factory>
      <DynamicLoad>
      </DynamicLoad>
    </Factory>
    <Diagnostics>
    </Diagnostics>
    <Data>
      <Session>
        <add key="Mode" value="Thread"/>
      </Session>
      <Database>
        <add key="DatabaseMajor" value="MSSQL"/>
        <add key="DatabaseMinor" value="8"/>
        <add key="Server" value="dbserver"/>
        <add key="Database" value="superdb"/>
        <add key="CommandTimeOut" value="300" />
        <add key="TablePrefix" value="CRM5" />
        <add key="ConnectionString" 
             value="Server=[@Server];Database=[@Database];User 
             ID=[@User];Password=[@Password]"/>
      </Database>
      <ImplicitAnonymous>
        <add key="Allowed" value="True"/>
        <add key="DBUser" value="user"/>
        <add key="DBPassword" value="pass"/>
        <add key="CommonDBConnection" value="True"/>
        <add key="SoUser" value="Anonymous1" />
        <add key="SoPassword" value="" />
      </ImplicitAnonymous>
      <Explicit>
        <add key="ExternalPersonAllowed" value="True"/>
        <add key="EmployeeAllowed" value="True"/>
        <add key="SystemAllowed" value = "True"/>
        <add key="DBUser" value="user"/>
        <add key="DBPassword" value="pass"/>
        <add key="CommonDBConnection" value="True"/>
      </Explicit>
    </Data>
 
    <Globalization>
    </Globalization>
 
 
    <Services>
      <!-- Mode can be Local, Remote, Switch -->
      <add key="DefaultMode" value="Local" />
    </Services>
    <Documents>
    </Documents>
 
    <Client>
      <Application name="TestWeb" instance="User"/>
      <Globalization>
        <ResourceProviders>
          <add name="ResourceDllProvider" rank="3" assemblyname="SuperOffice.DCF" objecttype="SuperOffice.Globalization.ResourceDllProvider" params="SuperOffice.Web.Globalization.ResourceStrings;SuperOffice.Web.Globalization"/>
        </ResourceProviders>
      </Globalization>
    </Client>
  </SuperOffice>
```

 

Since we are not using the SIX.web and PageBuilder features, we don’t need their sections in the config file:

```
  <configSections>
      <sectionGroup name="Client">
         <section name="ClientConfigurationProvider" 
         type="System.Configuration.NameValueSectionHandler, System, 
         Version=1.0.5000.0, Culture=neutral, 
         PublicKeyToken=b77a5c561934e089" />
    </sectionGroup>
  </configSections>
 
...
 
    <ClientConfigurationProvider>
      <add key="FilePath" value="C:\Program Files\SuperOffice\SuperOffice SIX.web\2817\App_Data" />
    </ClientConfigurationProvider>
 
```

 

We can also clean out a lot of ASP.net config that is specific to the SIX.web

```
  <ajaxNet>
    <ajaxSettings>
      <urlNamespaceMappings useAssemblyQualifiedName="false">
     </urlNamespaceMappings>
      <jsonConverters>
          <add type="SuperOffice.CRM.Web.AjaxMethods.ArchiveOrderByConverter,SuperOffice.CRMWeb" />
      </jsonConverters>
    </ajaxSettings>
  </ajaxNet>
  <location path="ajaxpro">
    <system.web>
      <httpHandlers>
        <add verb="*" path="*.ashx" type="AjaxPro.AjaxHandlerFactory,AjaxPro" />
      </httpHandlers>
     <authorization>
        <allow users="*" />
     </authorization>
    </system.web>
  </location>
   . . .
 
<system.web>
    <httpRuntime . . . />
    <compilation debug="false">
      <assemblies>
       <add assembly="System.Design, Version=2.0.0.0, Culture=neutral, 
            PublicKeyToken=B03F5F7F11D50A3A" />
      </assemblies>
    </compilation>
    <authentication mode="Forms">
      <forms name="Handshake" loginUrl="Security/Login.aspx" timeout="20" />
    </authentication>
   <authorization>
      <deny users="?" />
    </authorization>
    <xhtmlConformance mode="Legacy" /> 
    <httpModules>
      <add name="SoProtocolModule" type="SuperOffice.CRM.Web.Protocol.SoProtocolModule, SuperOffice.CRMWeb" />
    </httpModules>
</system.web>
<location path="Services">
 . . .
</location>
```

 

The resulting config file has the settings necessary for SODatabase to talk to the database via the webservice API, and for the DCF to talk to the resource dlls.
