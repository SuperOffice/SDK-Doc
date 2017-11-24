---
uid: guideNetServerVersioning
title: NetServer Versioning
---

.net versioning and plugins
===========================

Because .net is very strongly versioned, you should take care to compile your plugins against the same NetServer version as the SOCRM application uses.



**Deploy to the SOCRM program folder**

If you deploy your plugin to the ProgramFiles\\SuperOffice folder then your plugin will bind to the SOCORE.DLL that SOCRM has already loaded.

![](../../images/NetServer-plugins-1.gif)

The plugin will automatically re-use the NetServer configuration and database connection that the SOCRM client has established.





**Deployed to a separate folder**

If you are deploying your plugin to a separate folder, you need to be careful with NetServer versioning.

For example, if you are running in a client that runs SOCRM 7.0.4003 then you should compile the plugin against NetServer 7.0.4003

e.g. ProgramFiles\\SuperOffice\\Client

     SOCRM.EXE, SOCORE.DLL (7.0.4003), SODATABASE.DLL (7.0.4003), SODBIF32.DLL etc

Your plugin is in ProgramFiles\\MyPlugin

     MYPLUGIN.DLL, SOCORE.DLL (7.0.3974), SODATABASE.DLL (7.0.3974), etc

If you have compiled the plugin against a different version (for example 7.0.3974), then your plugin will run side-by-side with the NetServer that SOCRM has loaded.  This is by design - this is part of the .net way.

![](../../images/NetServer-plugins-2.gif)

The consequence is that you won't see the database connection that SOCRM has set up, because it applies to a different version of SOCORE than the one you have.



To work around it you will need to make an **SOCRM.EXE.config** that redirects NetServer DLLs from the old version to the new version.
Note that this **SOCRM.EXE.config** is not the same as the **SuperOffice.config** that contains the NetServer database configuration.


```xml
<configuration>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="SoCore"
          publicKeyToken="bdda2d694ae22a86"
          culture="en-us" />
        <bindingRedirect oldVersion="7.0.3000.0-7.0.4002.0" newVersion="7.0.4003.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="SoDatabase"
          publicKeyToken="bdda2d694ae22a86"
          culture="en-us" />
        <bindingRedirect oldVersion="7.0.3000.0-7.0.4002.0" newVersion="7.0.4003.0" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
</configuration>
```
