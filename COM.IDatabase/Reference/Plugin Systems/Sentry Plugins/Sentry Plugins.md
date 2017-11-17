---
uid: refPluginSentry
title: Sentry Plugins
---

Sentry Plugins
==============

The sentry system is what SuperOffice uses to manage access to the data in the database. They are responsible for implementing rules like "private appointments are only visible to the owner". The rules are pretty straightforward for the most part, and focus on ownership, group membership and access-level of the creator and viewer.

The sentry system is used by the CRM application and by the OLE-DB provider's special views - that means that the system is used by the reporter as well.

 

###     The Sentry Plug-in

A sentry plug-in is a COM component that has been registered on the client machine (SOLOADER.INI can help you deploy and register the plug-in DLL). A preference needs to be created to enable the sentry plug-in system. Once enabled, the sentry system will load the named plug-in components and ask each plugin to judge the logged-in user's access rights with respect to every appointment record, every project record, every company and person record, and so on. Because the application loads in a lot of appointment records, you should make sure that your plugin can answer the question quickly!

###     The Enabling Preference

In order for the plug-in to be used, you need to turn on the plug-in system.

You need to add a preference entry under the "SentryAddonNames" section with the ProgId of your plug-in. The key of the preference is ignored - it is easiest if it is the same as the value.

**Example:**
```
set db = CreateObject("SuperOfficeDB.Database")
db.login "username","password"
db.Preferences.Set "SentryAddonNames", "ExampleSentry.SampleSentry", "ExampleSentry.SampleSentry", 2
' note how preference is set on level 2 in order to apply to all users rather than just the current user.*
```

###    

The Plugin API is defined by a COM interface. There are two interfaces - the second overlaps the first, but gives a greater degree of control over the permissions.

You need to add a reference to the [SentryPlugin TLB file](Files/SentryPluginInterface.tlb) to your VB Project.

At the top of your VB code you can then write

```
Implements SOPLUGINSENTRY2Lib.SOSentryPlugin
Implements SOPLUGINSENTRY2Lib.SOSentryPlugin2
```

 

You can then use VB to fill in the implementation of the interfaces for you -- just select the function names from the dropdown list, and VB will create the function declarations for you.