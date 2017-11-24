---
uid: Getalistofpeople
title: Get a list of people
---

This document tells us how we can retrieve a list of Persons belonging to a contact using SuperOffice Application Object.
This text may be copied to the notepad, and saved as a \*.vbs file.

Dim objSO
Dim collPers
Dim per
Dim msg
Set objSO = CreateObject("SuperOffice.Application")
If not (objSO is nothing) Then
    Set collPers = objSO.CurrentContact.GetPersons()
    For Each per In collPers
        msg = msg & per.FirstName & " " & per.LastName
        msg = msg & vbCrLf
    Next
    objSO.SOMessageBox msg, "Person List"
Else
    objSO.SOMessageBox "Unable to connect to database"
End If
Set objSO = Nothing

Once the above script has been called the result can be seen as follows.
![](../images/GetPersonList.JPG)
