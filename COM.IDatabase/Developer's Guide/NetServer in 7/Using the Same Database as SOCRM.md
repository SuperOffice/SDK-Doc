---
uid: UsingtheSameDatabaseasSOCRM
title: Using the Same Database as SOCRM
---


If you are developing your own application that uses NetServer or using the SuperOfficeDB COM library, then you will connect to the SuperOffice database through NetServer.

 

 ![](../../images/using-netserver.gif)

 

**Using SuperOfficeDB**

If you use the SuperOfficeDB.Database component, it will handle setting up the connection for you, by looking at the most recently used SUPEROFFICE.INI location stored in the registry.

 
```
using SuperOffice.Configuration;
using SuperOffice.COM.SuperOfficeDB;
using SuperOffice.CRM.Rows;

IApplication so = new SOApplicationClass();
SuperOffice.COM.SuperOfficeDB.IDatabase db;
// Log in to COM Database object
db = new DatabaseClass();
db.Login(so.Database.SafeCredentials, "");
// NetServer is now ready to use
ContactRow c = ContactRow.GetFromIdxContactId(2);
```
 

**Using NetServer**

If you want to use NetServer directly, you will need to connect it to the same config file and settings that the SOCRM client is using.

The way to do this is using the <see cref="SOSettings.SuperofConfigPath">Settings.SuperOfConfigPath</see> property and the <see cref="SOSettings.NetServerOverrides">NetServerOverrides</see> array.

 
```
using SuperOffice.COM.Application;
using SuperOffice.Configuration;
// Configure NetServer using SOCRM settings
IApplication so = new SOApplicationClass();
ConfigFile.SetConfigFile( so.Database.Settings.SuperofConfigPath);
ConfigFile.AddOverrides( so.Database.Settings.NetServerOverrides);
// re-use windows client login
SuperOffice.SoSession.Authenticate( so.Database.SafeCredentials, "");
```