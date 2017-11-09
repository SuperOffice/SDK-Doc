---
uid: exampleAcceptInvitation
title: Accept Invitation Appointment
---

Accepting an invitation involves changing the type of the appointment.

 ![](../Images/InvitationsDialog.png)

Here is Ingrid Istad about to accept an invitation to an appointment from Frode Freestad.

An invitation has type = 6 (booking in diary) and status = 6 or 7 (notSeen and seen).

 

Here is what happens when the ACCEPT button is clicked:

 

Update invitation appointment
-----------------------------

UPDATE dbprefix."appointment" SET "appointment\_id" = 740, "contact\_id" = 13, "person\_id" = 42, "associate\_id" = 10, "group\_idx" = 5, "registered" = 1164896595, "registered\_associate\_id" = 7, "done" = 0, "do\_by" = 1164888900, "leadtime" = 0, "task\_idx" = 8, "priority\_idx" = 0, **"type" = 1, "status" = 1,** "private" = 0, "alarm" = 0, "text\_id" = 389, "project\_id" = 0, "mother\_id" = 739, "document\_id" = 0, "color\_index" = 0, "opportunity\_id" = 0, "invitedPersonId" = 18, "activeDate" = 1164888900, "endDate" = 1164894300, "lagTime" = 0, "source" = 0, "userdef\_id" = 0, "userdef2\_id" = 0, "updated" = 1164904435, "updated\_associate\_id" = 10, "updatedCount" = 2, "activeLinks" = 0, "recurrenceRuleId" = 0, "location" = '', "alldayEvent" = 0, "freeBusy" = 0, "rejectCounter" = 0, "emailId" = 0, "rejectReason" = '', "hasAlarm" = 0, "assignedBy" = 0 WHERE "appointment\_id" = 740

INSERT INTO dbprefix."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110522, 1164908036, 0, 4608, 10, 9, 740)

Update SAINT counters for the contact
-------------------------------------

UPDATE dbprefix."countervalue" SET "CounterValue\_id" = 16402, "contact\_id" = 13, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 1, "direction" = 3, "intent\_id" = 0, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164888900, "lastCompleted" = 0, "lastDoBy" = 1164888900, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164904436, "updated\_associate\_id" = 10, "updatedCount" = 0 WHERE "CounterValue\_id" = 16402

UPDATE dbprefix."countervalue" SET "CounterValue\_id" = 16406, "contact\_id" = 13, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 1, "direction" = 3, "intent\_id" = 5, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164888900, "lastCompleted" = 0, "lastDoBy" = 1164888900, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164904436, "updated\_associate\_id" = 10, "updatedCount" = 0 WHERE "CounterValue\_id" = 16406

UPDATE dbprefix."countervalue" SET "CounterValue\_id" = 16591, "contact\_id" = 13, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 10, "direction" = 3, "intent\_id" = 0, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164888900, "lastCompleted" = 0, "lastDoBy" = 1164888900, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164904436, "updated\_associate\_id" = 10, "updatedCount" = 0 WHERE "CounterValue\_id" = 16591

UPDATE dbprefix."countervalue" SET "CounterValue\_id" = 16595, "contact\_id" = 13, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 10, "direction" = 3, "intent\_id" = 5, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164888900, "lastCompleted" = 0, "lastDoBy" = 1164888900, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164904436, "updated\_associate\_id" = 10, "updatedCount" = 0 WHERE "CounterValue\_id" = 16595