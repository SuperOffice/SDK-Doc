---
uid: SentryPlugins
title: Sentry Plugins
---

To write a sentry plugin you must first figure out what the security rules are, and how they depend on the data in the database.

If the security rules depend on the owner of the entity, then you might be able to express the security system without using a plugin.

 

To write a sentry plugin you need to implement two COM interfaces: ISentryPlugin and ISentryPlugin2.

These interfaces are defined in SentryPluginInterface.tlb.

### [ISentryPlugin](refPluginSentryAPI.md)

GetTableList - returns which entities the plugin applies to. i.e. the contact or project table.

GetProviderDetails - tells the client how much information the plugin needs.

GetRowSecurity - obsolete function - use GetTableRights instead

GetFieldSecurity - obsolete function - use GetFieldRights instead.

 

### [ISentryPlugin2](refPluginSentry2.md)

Initialize - called at the start with an ADO connection string.

GetTableRights - computes the access rights for an entity (contact/person/project/etc).

GetFieldRights - computes the access rights for the fields in an entity.

 

 

Call Sequence
-------------

This is for the windows client

1.  SuperOffice SIX starts login
2.  The SentryAddonNames preference section is read -- all the plugins named here are attempted created. If any plugin fails to create then the login process is aborted.
3.  Each plugin is checked to see if it supports the ISentryPlugin2 interface.
4.  For each plugin that supports ISentryPlugin2: Call the Initialize function.
5.  For each plugin: Call the GetTableList to find out which entities need to call this plugin
6.  Login completes.
7.  For each object loaded (Contact, Person, Project, Selection, Appointment, Document, Sale, Relation), call the plugin's GetProviderDetails
8.  If plugin needs full data, load entire row if not already loaded (potential performance hit!)
9.  Call plugin's GetRowSecurity (and GetTableSecurity if plugin supports ISentryPlugin2)
10. If plugin supports field level data, call GetFieldSecurity (and GetFieldRights if plugin support ISentryPlugin2)
11. Combine plugin results with results from database data-rights matrix. Yield the lowest common denominator as the result.
12. User interface reacts to field rights.

 

The CRM5.web client is very similar, but there is no support for field-level security, and the entire call sequence is performed every time a page is loaded. In other words, every click can trigger several sentries.

SIX.web will use a new plugin system based on .net rather than COM, and will allow application queries to be modified on the fly.