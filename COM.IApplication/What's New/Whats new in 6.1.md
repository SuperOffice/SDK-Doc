---
uid: whatsNewInSixOne
title: What's new in 6.1
---

This is a new version of an existing product that will replace the previous version. The main target of the version is to ensure compability on database scheme and features between the Windows client and the upcoming Web client.
These are some of the main issues addressed:

-   Reporting on SAINT counters and status monitors

-   Extended system to invite and respond to meeting requests and assignments

-   Expanded and more effective administration of lists in the Admin client

-   Support for time zones

-   Possibility to link sales, appointments and documents on the links-tab

-   Possibility to configure columns in the Relation-archive

-   Microsoft Vista and Microsoft Office 2007 compatibility

-   SIX.web compatibility

New classes
--------------------------------------------------

SOSales

SOAppointments2

SOTimeZoneItem

SOTimeZoneItems

SOTimeZones

SOUtils





New table ids
----------------------------------------------------

SOTableId

                enTableMessageHandler = 241,

                enTableMessage = 242,

                enTableBatchTask = 243,

                enTableBatchTaskDefinition = 244,

                enTableTZLocation = 245,

                enTableTZStdRule = 246,

                enTableTZDstRule = 247,

                enTableBaseTZLocation = 248,

                enTableWebAppUsage = 249,

                enTableCredentials = 250,

                enTablePhoneFormat = 251,

                enTableTrayApp = 252,





Database object
---------------

                Database.TimeZones

                 

SOAppointment object
-----------------------------------------------------------

                SOAppointment.AssignTo(toAssociate, fromAssociate)

                SOAppointment.TimeZoneLocationId



SOFind
---------------------------------------------

                SOFind.IdsFromForeignKey(App, Device, Key, Value, TableId)



SOActivityLinks
------------------------------------------------------

                SOActivityLinks.AddSale(SOSale)

                SOActivityLinks.RemoveSale(SOSale)

                SOActivityLinks.Sales

                SOActivityLinks.AddAppointment(SOAppointment)

                SOActivityLinks.RemoveAppointment(SOAppointment)

                SOActivityLinks.Appointments



New events
-------------------------------------------------

                OnFindContact

                OnFindProject

                OnFindSelection

                OnFindAppointment

                OnFindDocument

Events only available through scripting
---------------------------------------------------------------------------------------------------------------------

                OnExternalUsersDialogShown

                OnExternalUsersDialogClosed

                OnExternalUserCreated

                OnExternalUserSaved


Removed event
--------------------------------

                OnFindDialogShown
