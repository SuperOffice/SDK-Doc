---
uid: GetAnMDOList
title: Get An MDO List
---


### Getting an MDO list from the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

 

This will only return the listitems that the logged in user is allowed to see.

set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then
    'Get the complete list
    Set theList = soDb.GetList(enTableTask)
    For Each theListItem In theList
        msg = msg & theListItem.Text & vbCrLf
    Next
    MsgBox msg, vbInformation + vbOKOnly, "SuperCOM"
    
    'Get a list item by name, it must be written exactly as found in the database
    Set theListItem = soDb.GetListItemByName(enTableTask, "Meeting (Internal)")
    If Not theListItem Is Nothing Then
        MsgBox theListItem.Id & " = " & theListItem.Text
    End If
    
    'Get a list item by it's identity
    Set theListItem = soDb.GetListItem(enTableTask, 2)
    If Not theListItem Is Nothing Then
        MsgBox "The list item with task\_id=2 is: " & theListItem.Text
    End If
   
else
   MsgBox "Login failed"
end if