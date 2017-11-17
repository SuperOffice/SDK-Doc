---
uid: exampleSentry
title: Sentry Example
---

This example implements a sentry plugin that makes all companies that contain the word 'Superoffice' in the name into read-only. The EDIT button on the company card is disabled.

Note that you can still delete the company, even though you can't edit it.

 

In the ZIP file you will find:

-   ReadOnlySuperOfficeSentry.dll - the plugin itself.
-   SetSentryPreference.vbs and KillSentryPreference.vbs - for activating the plugin.
-   IDL, TLB, CLS, VBP files - source code for the plugin.

 

In order to use the example you need to

1.  Register the plugin DLL with REGSVR32.EXE
2.  Edit the VBS files -- change the username + password used in the login to work with your database.
3.  Run the SetSentryPreference.vbs file.
4.  Log in to SOCRM and observe that any SuperOffice companies are now read-only.
5.  Attempt to login from a machine that does not have the plugin installed, and observe that login fails.

 

The function in the plugin that does the work for us is this one:

```
Private Sub SOSentryPlugin2\_GetTableRights(ByVal AssocId As Long, ByVal GroupId As Long, ByVal RecordId As Long, ByVal TableName As String, RecordData() As Variant, o\_CanInsertRow As Boolean, o\_CanReadRow As Boolean, o\_CanUpdateRow As Boolean, o\_CanDeleteRow As Boolean, o\_ToolTip As String)
    If TableName = "contact" And RecordId &gt; 0 Then
        Dim name As String
        name = LCase(RecordData(1))
        log " checking name=" & name
       
        ' case-insensitive name check
        If InStr(1, name, "superoffice", vbTextCompare) &gt; 0 Then
            log "  found superoffice - mark as read-only"
            o\_CanReadRow = True
            o\_CanUpdateRow = False
            o\_ToolTip = "Name contains magic word 'superoffice'"
        End If
       
    End If
End Sub
```