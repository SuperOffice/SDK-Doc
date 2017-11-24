---
uid: guideErrorHandling
title: Error Handling
---

Handling and preventing errors
==============================

What Errors?
 On Error Resume Next
Do not use while debugging!

Creation of App Object fails:

Set SoApp=CreateObject("SuperOffice.Application")
If not SoApp is Nothing then…

Could fail because user did not log-in  (pushed cancel – wrong password – took too long - timed out)

Is there a phone number at all?

 objSO.CurrentContact.Phones.Count &gt; 0

or:

 objSO.CurrentContact.Phones.Empty

Does phone number 2 exist?

 objSO.CurrentContact.phones.Exists(2)



Avoiding Errors:
----------------

 Option Explicit

This will catch undeclared variables, bad types.
Filters out the easy errors – leaving just the hard ones.

Program defensively
-------------------

Avoid this:

 soapp.CurrentContact.Phones(1).Type

Prefer this:

 set phs = soapp.CurrentContact.Phones
 if not phs.Empty Then print phs(1).Type



Early and Late Binding
----------------------

Early:

Dim SoApp As SoApplication
Set SoApp = New SoApplication

Pro: Can use Intellisense
Con: Typelibrary must be always available when developing

Late:

Dim SoApp as Object
Set SoApp = CreateObject("SuperOffice.Application")

Pro: Flexible
Con: More work (no intellisense), more syntax errors, slower