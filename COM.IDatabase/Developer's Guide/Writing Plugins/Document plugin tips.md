---
uid: guidePluginsDoc
title: Implementation tips
---

Document Plug-in Overview
=========================

This document describes the functionality, the architecture and some technical use cases for a Document Link between SuperOffice CRM 5 and a document storage system.

We have also included the SOArcPlugin as a Visual Basic example on how to implement a document plug-in. The SOArcPlugin is the default document plug-in used in CRM 5 (Release 5.6). The interface is found here.
Users of CRM 5 will not be directly affected by the plug-in-system, unless new plug-ins implements noticeable features as login to external document system use of other document dialog and so on. From the users’ point of view, documents will be treated as they do today.

The SoArc-plug-in should always be present, on installation it is set as default plug-in.  If later a default plug-in, set in the preference system, is not found, we will try to use the SoArc-plug-in.

All operations and actions that CRM 5 performs in the context of document handling is available in the described interface. Technically, any external Document Archive System can in principle be integrated with CRM 5.

 

### Default Values

SuperOffice will be shipped with the “SOArc” plug-in.  This plug-in will work as it does today, with one or more central file servers, and where files will be stored in user directories and categorized by date.  Ex: \\\\server\\so\_arc\\bob\\2002.2\\myfile.txt

The plug-ins need to have a standardized name to be picked up by SuperOffice.  The plug-in dll must have a filename that starts with “SoDocPlugin”.  For example: “SoDocPlugin\_SoArc.dll”

Based on the plug-ins implementation of GetPluginProperty( “useSODocDialog“  ), the SO document dialog will or will not be shown when new documents are created. (This is the case only for the CRM5 client, the CRM5.web will always use the SO document dialog.)

Based on the plug-ins implementation of GetPluginProperty( “supportTravel“  ), the plug-in will or will not be used to replicate documents handled by this plug-in, when going on travel or homecoming.

Based on the plug-ins implementation of GetPluginProperty( “supportVersioning“  ), CRM5 will or will not display and handle menu-items for versioning of documents handled by this document plug-in. There are three menu items that will be used if versioning is supported by the plug-in for this document. One is “Get version”, with a submenu listing all the versions of this document returned from GetDocumentProperty( “versionlist” ) The other is two menu items whose text is returned by the GetDocumentProperty ( “command1” | “command2” ). When the user selects one of this items, the plug-ins method Open(…) will be called with no value for “filepath” and the text of the selected command in the last parameter. The plug-in must handle whether the old versions are read-only or not, and how branching will be handled. That is which version should be the latest version on merging/homecoming.

New plug-ins may implement their own section in the superoffice.ini file for preferences if needed. Example:

\[DocPlugin\_SoArc\]
ArchivePath=c: \\so\_arc
ArchivePath2=\\\\brumle\\so\_arc
Local\_ArchivePath= C:\\ So\_Local

The SoArc-plug-in first look for key ArchivePath in section DocPlugin\_SoArc, then in section SuperOffice. The key ArchivePath must also be in section SuperOffice (used for templates).

 

### Database fields

Database fields used for the document plug-in:

Document table:

> **extRef** – used by external plug-ins for document id/reference
>
> **archiveProvider** - plug-in id for the document ( 0 is SoArc-plug-in, other plug-ins decide their own id)

DocTmpl table:

> **autoevent\_id** - plug-in id used for storing the documents created from this template

 

In addition an entry in table prefDesc determines the default plug-in, and each plug-in get a record in table prefDescLine.

### Error messages, Tool tips etc

If no plug-in is available during start-up an error message will be presented.

When two plug-ins have the same id, a warning is displayed during start-up and the second plug-in will be ignored.

When a document made with a plug-in that is not available, is accessed, an error message explaining this is displayed with the id of the missing plug-in.

When a new document is created, the SuperOffice CRM 5 record must first be created and saved.  If any error occurs during this process, no calls will be made against the plug-in. The id the model gets after it is saved is then passed to the plug-in, which may use it to retrieve the actual document record. So\_Arc will use the document\_id as the reference to the document, but other plug-ins can save their own identifier to the field ‘extRef’. If the field ‘extRef’ holds a value this identifier is the one that will be passed as id to the plug-in in all other functions than Create(…).

Any other error messages needed, the plug-in should implement.  The plug-in should throw a COM exception; which will be caught by SOCRM and displayed in an error dialog.  In Visual Basic this may be done by writing the following:

Err.Raise 1001, "Delete", "Unable to delete the file, because the file archive is not available"                                                                 

 

### Access Rights and Validation Rules

Access rights will be the same as today from inside SuperOffice CRM 5.  Any other access validating, the external system or the plug-in need to handle on its own.

 

### Administration

To install a plug-in the following steps are necessary:

-   Copy the plug-in to the SuperOffice installation directory and register it using REGSVR32 or REGASM. 
-   Add a user preference to the database to enable the plug-in.
-   Add any settings the plugin needs to the database.
-   Set up document templates for the plug-in in SuperOffice Admin
-   If the new plug-in is to be the default plug-in, change the default plug-in settings in SuperOffice Admin-&gt;Preferences-&gt;System-&gt;DefaultDocPlugin
-   If the administrator allows it, each individual user may later change this to whatever he/she prefers.

 

### Remote travel

During a remote travel update no auto magical behavior is implemented to support external plug-ins, besides necessary functions in the interface. If updates are necessary, a new SORTS.EXE need to be written that in addition to write a list of documents that satisfy the criteria in the ini-file(wishlist) written by SORT.EXE, also copies the documents to a directory where SORT.EXE can find them. That is if the documents are not stored as files. A new SORT.EXE needs to use the document plug-ins methods to get or put the files if they don’t exist on remote or central with the same name and modified date/time. Here the same applies that the documents need to be temporarily copied to a directory, if they cannot be copied directly into the archive system.

 

### SDK

The SDK function <see cref="SODocument.FullPath">SODocument.FullPath</see> will most likely not work with all types of plug-ins.  This function should return an absolute path to a physical file.  Not all systems operate with files however. This will probably lead to a need to improve/rewrite applications that use the CRM 5 SDK.  A workaround could be to use the <see cref="SODocument.GetFileCopy">GetFileCopy</see> function in SODocument instead.  This should give the user a copy of the original file to play with, and she has the option of giving as parameter the path to the directory where the copy will be stored.  Most systems should probably support this.

If CRM 5 SDK is used in other methods than those that are not used by CRM5.web, the plug-in will not work with CRM5.web. (See description of interface)

 

###      

Sample code – [The default SOArc plug-in](../../Files/SOArcPlugin.zip)