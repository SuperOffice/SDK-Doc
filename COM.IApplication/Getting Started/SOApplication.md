---
uid: whySOApplication
title: SOApplication
---

Gives you the possiblity to control the user interface for the user and to query the status of the user-interface from a separate application.

When you create the SOApplication object, the object connects to the running SOCRM.EXE application. If SOCRM.EXE isn't running, then it is started and the user must log in to get the object created.



The SOApplication object gives you access to what the user is seeing, and to the parts of the application the user isn't seeing.

The <see cref="SOApplication.CurrentPerson">CurrentPerson Property</see> is available, even when the person dialog is not shown.

You can modify the values on the Current objects, and the changes are immediately visible on the screen.



Here is a small program that switches the SOCRM application to the contact panel

set so = CreateObject("SuperOffice.Application")
so.CurrentContact.ChangeIdentity so.Database.OwnerContactId



When you are watching the project panel, nothing appears to happen. Let us also force a switch to the contact panel to make the change visible:

set so = CreateObject("SuperOffice.Application")
so.CurrentContact.ChangeIdentity so.Database.OwnerContactId
so.Context.Set "contact.main"