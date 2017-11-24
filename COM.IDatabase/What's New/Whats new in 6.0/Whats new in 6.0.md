---
uid: whatsnew6.0
title: What's new in 6.0
---

What's new in the COM API
=========================

 

The COM API reflects the new functionality in SuperOffice 6 compared with SuperOffice CRM 5.

 

New objects:

-   <see cref="SuperOffice.COM.SuperOfficeDB.SORole">Role</see> objects allow you to read [what the user can do](Role-Based%20Security.md).
-   <see cref="SuperOffice.COM.SuperOfficeDB.SOAdmin">Admin</see> object define <see cref="SuperOffice.COM.SuperOfficeDB.SOAdmin.CreateRole">new roles</see>, <see cref="SuperOffice.COM.SuperOfficeDB.SOAdmin.CreateStatusMonitor">new status monitors</see>.
-   <see cref="SuperOffice.COM.SuperOfficeDB.SOFind">Find</see> object allows [searches on SAINT counters](Saint%20Counters%20And%20Values.md).
-   <see cref="SuperOffice.COM.SuperOfficeDB.SOSelection">Selection</see> object allows [dynamic selections to be defined](Dynamic%20Selections.md).
-   <see cref="SuperOffice.COM.SuperOfficeDB.SOAppointment">Appointments</see> support [invitations and responding to invitations](Simplified%20Bookings%20And%20Invitations.md) as well as [recurrence](Recurring%20Appointments.md).
-   Appointment, Sale, Document all support the <see cref="IAppointment.ActivityLinks">ActivityLinks</see> object instead of the old DocumentLink.

-   All model objects (Contact, Person, Project, Appointment, Sale, Document, Selection) have a <see cref="SuperOffice.COM.SuperOfficeDB.SOSentry">Sentry</see> property that can answer questions about permissions. 

-   <see cref="SuperOffice.COM.SuperOfficeDB.SOPerson">Person</see>, <see cref="SuperOffice.COM.SuperOfficeDB.SOProject">Project</see> and <see cref="SuperOffice.COM.SuperOfficeDB.SOStatusMonitor">StatusMonitor</see> have a <see cref="SuperOffice.COM.SuperOfficeDB.SOPerson.Picture">Picture property</see> to manipulate the picture blob.

-   The database object has new <see cref="Database.ImportBlobFromFile">Import</see> and <see cref="Database.ExportBlobToFile">ExportBlobToFile</see> functions to use blobs for things other than pictures.

-   Some [new list tables](New%20lists.md) have been added to the database.

-   A new ListItem helper has been added: <see cref="Database.GetListItemByName">GetListItemByName</see> - get a list item by the text rather than id.

 

Some functionality has been disabled because it has been replaced by new functionality:

-   Associate.Userlevel is replaced by <see cref="SuperOffice.COM.SuperOfficeDB.SORole">roles</see>.
-   DocumentLink has been replaced by <see cref="SuperOffice.COM.SuperOfficeDB.SOActivityLinks">ActivityLinks</see>.
