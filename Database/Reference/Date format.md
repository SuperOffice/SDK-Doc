---
uid: Dateformat
title: Date format
---

New date time from Seven
========================

We now store date and time as DBTimeStamp instead of the old SuperOffice date (seconds since January 1st 1970)

The old SuperOffice date is still used in user defined fields.
==============================================================

The date format in SuperOffice is a 4-byte value containing seconds elapsed since 1st of January 1970 00:00 (midnight). This will restrict a date to within 1st January 1970 to 1st January 2038 (not precise).

This date value is easily produced using a C function called mktime.

Any field containing only a date (not time) is set to midnight that day.

1st September 1995 midnight = 809913600

One day is 60 \* 60 \* 24 = 86400

6th September 1995 = 809913600 + (86400 \* 5) =  810345600

 

## Example Visual Basic:

```vb
    MsgBox DateDiff("s", #1/1/1970#, Now)
```
 

Visual Basic for Applications - Excel

```vb
    Sub Conv_to_SO_date()
        Dim myDate
        Dim NewDate, OldDate
        Dim col, i
        Dim response

        response = MsgBox("Is this the first cell in the column that contains data?", vbYesNo)

        If Response = vbNo Then Exit Sub

        While ActiveCell.Text <> ""
            OldDate = ActiveCell.Value
            NewDate = DateDiff("s", #1/1/1970#, OldDate) ' To SO date
            Application.ActiveCell.Value = NewDate
            ActiveCell.NumberFormat = "general" ' To SO date
            ActiveCell.Offset(1, 0).Activate
        Wend

     End Sub



    Sub Conv_from_SO_date()
        Dim myDate
        Dim NewDate, OldDate
        Dim col, i
        Dim response

        response = MsgBox("Is this the first cell in the column that contains data?", vbYesNo)

        If Response = vbNo Then Exit Sub

        While ActiveCell.Text <> ""
            OldDate = ActiveCell.Value
            NewDate = DateAdd("s", CLng(OldDate), #1/1/1970#) ' From So date
            Application.ActiveCell.Value = NewDate
            ActiveCell.NumberFormat = "dd.mm.yyyy" ' From So date
            ActiveCell.Offset(1, 0).Activate
        Wend

     End Sub
```