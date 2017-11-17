---
uid: refPluginMailArchiveHelper
title: Mail Archive Helper
---

MailArchiveHelper
=================

.net assembly defined in: SOMailArchiveHelper (SuperOffice.MailArchiveHelper.dll), default installed on all clients.

Overview
--------

The purpose of the interface is to create high level methods so by calling one of the methods in this interface the client can be sure that all necessary checking and handling is done.

This makes Mail plugins easier to write.

 

Functions
---------

**Name**

**Parameters**

**Description**

Initialize

**This method will Initialize the library and make it ready to use.**

regKeyName as String

 

RegKeyName is the name of a registry key, to use to save preferences(ex: “MyPlugin” ).  The key will be created if it doesn’t exist.

extension as String

Extension is the file extension of the documents that are going to be archived.  This parameter is used to determine what templates to default to in CRM 5.

helpFile as String

HelpFile is the path and filename of a file to be opened when the user needs help.

ArchiveDocument

**This method will archive *Filename* as a document in SuperOffice CRM 5.**

MailAddr as String

MailAddr Ex: “jan.petter@superoffice.no”

Name as String

Name Ex: “Jan Petter Hagberg”

Title as String

Title Ex: “This is the subject”

Date as String

Date Ex: “2004-12-31”

Direction as Integer

Direction: 1(incoming) or 2(outgoing)

ArchiveProviderId as Integer

ArchiveProviderId: 0(soarc), 6(lotus notes)

DocumentId as Integer

DocumentId: = Id to store in the extref\_id field on the document table. This is what the external system needs in order to find back to the mail when opened.

Filename as String

Filename: path and filename of the file to be archived

AddUnknownAddress as Boolean

AddUnknownAddress specifies if we should add unknown addresses to CRM 5.

ShowDocDlg as Boolean

ShowDocDlg specifies if we should show the document dialog with the added document, or just save it silently.

ForeignKey as String

ForeignKey may be used to specify a unique string to identify the document in the external system.

ArchiveTask

 

**This method will create a new task in SuperOffice CRM 5.**

MailAddr as String

MailAddr Ex: ‘jan.petter@superoffice.no’

Name as String

Name Ex: ‘Jan Petter Hagberg’

Text as String

Text Ex: ‘This is the task description text’

Date as String

Date Ex: “2004-12-31”

AddUnknownAddress as Boolean

AddUnknownAddress specifies if we should add unknown addresses to CRM 5.

ShowTaskDlg as Boolean

ShowTaskDlg specifies if we should show the task dialog with the new task, or just save it silently.

ForeignKey as String

ForeignKey may be used to specify a unique string to identify the document in the external system.

 

LookUpAddress

**This method will search for the mail address or name in SuperOffice CRM 5. If found and the preference to switch to activity archive is true, it will switch context in SuperOffice CRM 5 to the correct Contact card and show the Activity Archive tab if ShowActivity is True.**

MailAddr as String

MailAddr Ex: ‘jan.petter@superoffice.no’

Name as String

Name Ex: ‘Jan Petter Hagberg’

AddUnknownAddress as Boolean

AddUnknownAddress specifies if we should add unknown addresses CRM 5

ShowOptionsDlg

This method will show the preference dialog.

ShowFindDocumentDlg

**This method will show the Find Document dialog.  The user will be able to define and run a search against the SuperOffice database. The user may select one or more documents from the search result list.  The full path and filename of the documents selected are returned in a variant holding an array.**

MultipleSelect as Boolean

 

MultipleSelect specifies whether we allow the user to select multiple documents.

ContextSwitch as Boolean

 

ContextSwitch specifies whether CRM 5 should try to select the document(s) in the archives.

TargetPath as String

TargetPath specifies a path where the documents should be copied.

SelectRecipient

To as String

Cc as String

Bcc as String

This method will show the Select Recipient dialog. The user will here be able to search for companies, projects, selection and employees (associates) and add them to the To, Cc or Bcc fields. All parameters keep any data that may be in the in/out parameters when the dialog is invoked. The recipients are delimitated with a semicolon – ‘;’.

ArchiveTaskEx

**Same as ArchiveTask, just with more parameters.**

**The new ones are:**

MailAddress as String

MailAddr Ex: ‘jan.petter@superoffice.no’

Name as String

Name Ex: ‘Jan Petter Hagberg’

Text as String

Text Ex: ‘This is the task description text’

Date as String

Date Ex: “2004-12-31”

Duration as Long

Duration – how long should the task last

Type as String

Type – what type of task is this (from CRM 5)

Alarm as Long

Alarm – If 0, the alarm is disabled.  If &gt; 0 then this is the number of minutes before the task is scheduled the alarm should go off.

Private as Boolean

Private – Is this a private task?

Completed as Boolean

Completed – Should the task be set as completed?

AddUnknownAddresses as Boolean

AddUnknownAddress specifies if we should add unknown addresses to CRM 5.

ShowTaskDlg as Boolean

ShowTaskDlg specifies if we should show the task dialog with the new task, or just save it silently.

ForeignKey as String

ForeignKey may be used to specify a unique string to identify the document in the external system.

 

Examples (VB code)
------------------

### Save a mail as task in CRM 5:

 

       // create and initialize the helper

       Dim oHelper
       oHelper = new MailArchiveHelper
       oHelper.Initialize “MYPLUGIN”, “msg”, “MyPluginHelp.chm”

       Dim strSubject, strBody
       Dim sentDate 

       '// pull all needed information out of the mail object
       strSubject = myMail.Subject
       strBody = myMail.Body
       sentDate = myMail.SentDate

       '// make the appropriate call to the archivehelper
       oHelper.ArchiveTask( “<example@superoffice.com>”, “Example User”, strSubject & vbCr & strBody, sentDate)

  

### Save a mail as document in SuperOffice    

       '// create and initialize the helper
       Dim oHelper
       oHelper = new MailArchiveHelper
       oHelper.Initialize “MYPLUGIN”, “msg”, “MyPluginHelp.chm”

       '// pull all needed information out of the mail object
       Dim strPath, strSubject
       strSubject = myMail.Subject

       '// save the mail to a file
       strPath = “C:\\mymail.msg”
       myMail.SaveAs strPath 

       '// make the appropriate call to the archivehelper
       oHelper.ArchiveDocument( “<example@superoffice.com>”, “Example User”, strSubject, sentDate, 1, 0, 0, strPath )

 

### Retrieve documents from SuperOffice

       '// create and initialize the helper
       Dim oHelper
       oHelper = new MailArchiveHelper
       oHelper.Initialize “MYPLUGIN”, “msg”, “MyPluginHelp.chm”

       '// pull all needed information out of the mail object
       Dim pathArray As VariantpathArray = oHelper.ShowFindDocumentDlg(True, False) 

if( IsEmpty( pathArray ) Then
            Exit Sub
       Else
            Dim idx As Integer
            For idx = 0 To Ubound(pathArray)
                    MsgBox “Document path: “ & pathArray(i)        ‘ A msgbox for each path
            Next idx
       End If