---
uid: whatsnew6.1
title: What's new in 6.1
---

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">This is a new version of an existing product that will replace the previous version. The main target of the version is to ensure compability on database scheme and features between the Windows client and the upcoming Web client.
These are some of the main issues addressed:</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Reporting on SAINT counters and status monitors</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Extended system to invite and respond to meeting requests and assignments</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Expanded and more effective administration of lists in the Admin client</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Support for time zones</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Possibility to link sales, appointments and documents on the links-tab</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Possibility to configure columns in the Relation-archive</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">Microsoft Vista and Microsoft Office 2007 compatibility</span></span>

<span lang="EN-US" lang="EN-US"><span lang="EN-US" lang="EN-US">SIX.web compatibility</span></span>

<span lang="EN-US" lang="EN-US">New classes</span>
--------------------------------------------------

<span lang="EN-US" lang="EN-US">SOSales</span>

<span lang="EN-US" lang="EN-US">SOAppointments2</span>

<span lang="EN-US" lang="EN-US">SOTimeZoneItem</span>

<span lang="EN-US" lang="EN-US">SOTimeZoneItems</span>

<span lang="EN-US" lang="EN-US">SOTimeZones</span>

<span lang="EN-US" lang="EN-US">SOUtils</span> 

<span lang="EN-US" lang="EN-US">New table ids</span>
----------------------------------------------------

<span lang="EN-US" lang="EN-US">                enTableMessageHandler = 241</span>

<span lang="EN-US" lang="EN-US">                enTableMessage = 242</span>

<span lang="EN-US" lang="EN-US">                enTableBatchTask = 243</span>

<span lang="EN-US" lang="EN-US">                enTableBatchTaskDefinition = 244</span>

<span lang="EN-US" lang="EN-US">                enTableTZLocation = 245</span>

<span lang="EN-US" lang="EN-US">                enTableTZStdRule = 246</span>

<span lang="EN-US" lang="EN-US">                enTableTZDstRule = 247</span>

<span lang="EN-US" lang="EN-US">                enTableBaseTZLocation = 248</span>

<span lang="EN-US" lang="EN-US">                enTableWebAppUsage = 249</span>

<span lang="EN-US" lang="EN-US">                enTableCredentials = 250</span>

<span lang="EN-US" lang="EN-US">               </span> enTablePhoneFormat = 251

                enTableTrayApp = 252

Database object:
----------------

                <span lang="EN-US" lang="EN-US">Database.TimeZones</span>

<span lang="EN-US" lang="EN-US">SOAppointment object</span>
-----------------------------------------------------------

<span lang="EN-US" lang="EN-US">                SOAppointment.AssignTo(toAssociate, fromAssociate)</span>

<span lang="EN-US" lang="EN-US">                SOAppointment.TimeZoneLocationId</span>

<span lang="EN-US" lang="EN-US">SOFind</span>
---------------------------------------------

<span lang="EN-US" lang="EN-US">                SOFind.IdsFromForeignKey(App, Device, Key, Value, TableId)</span>

<span lang="EN-US" lang="EN-US">SOActivityLinks</span>
------------------------------------------------------

<span lang="EN-US" lang="EN-US">                SOActivityLinks.AddSale(SOSale)</span>

<span lang="EN-US" lang="EN-US">                SOActivityLinks.RemoveSale(SOSale)</span>

<span lang="EN-US" lang="EN-US">                SOActivityLinks.Sales</span>

<span lang="EN-US" lang="EN-US">                SOActivityLinks.AddAppointment(SOAppointment)</span>

<span lang="EN-US" lang="EN-US">                SOActivityLinks.RemoveAppointment(SOAppointment)</span>

<span lang="EN-US" lang="EN-US">                SOActivityLinks.Appointments</span>

<span id="SeeAlsoBookmark"></span>