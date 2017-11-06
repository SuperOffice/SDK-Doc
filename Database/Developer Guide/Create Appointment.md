---
uid: exampleCreateAppointment
title: Create Appointment
---

1.  Insert an appointment record
2.  Insert a text record for the appointment text
3.  Insert a VisibleFor record that points to the appointment record.

 

![](../Images/Appointment.png)

Create the appointment
----------------------

INSERT INTO CRM5."appointment" ("appointment\_id", "contact\_id", "person\_id", "associate\_id", "group\_idx", "registered", "registered\_associate\_id", "done", "do\_by", "leadtime", "task\_idx", "priority\_idx", "type", "status", "private", "alarm", "text\_id", "project\_id", "mother\_id", "document\_id", "color\_index", "opportunity\_id", "invitedPersonId", "activeDate", "endDate", "lagTime", "source", "userdef\_id", "userdef2\_id", "updated", "updated\_associate\_id", "updatedCount", "activeLinks", "recurrenceRuleId", "location", "alldayEvent", "freeBusy", "rejectCounter", "emailId", "rejectReason", "hasAlarm", "assignedBy") VALUES (738, 29, 74, 13, 1, 1164196048, 13, 0, 1164114540, 0, 8, 0, 1, 1, 0, 0, 388, 0, 0, 0, 0, 0, 149, 1164114540, 1164118140, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, '', 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110418, 1164199648, 0, 4352, 13, 9, 738)

Update affected SAINT counters
------------------------------

UPDATE CRM5."countervalue" SET "CounterValue\_id" = 19344, "contact\_id" = 29, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 1, "direction" = 3, "intent\_id" = 0, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 2, "totalRegInPeriod" = 2, "notCompleted" = 2, "notCompletedInPeriod" = 2, "lastRegistered" = 1164114540, "lastCompleted" = 0, "lastDoBy" = 1164114540, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164196049, "updated\_associate\_id" = 13, "updatedCount" = 0 WHERE "CounterValue\_id" = 19344

UPDATE CRM5."countervalue" SET "CounterValue\_id" = 19348, "contact\_id" = 29, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 1, "direction" = 3, "intent\_id" = 5, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164114540, "lastCompleted" = 0, "lastDoBy" = 1164114540, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164196049, "updated\_associate\_id" = 13, "updatedCount" = 0 WHERE "CounterValue\_id" = 19348

UPDATE CRM5."countervalue" SET "CounterValue\_id" = 19533, "contact\_id" = 29, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 10, "direction" = 3, "intent\_id" = 0, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 6, "totalRegInPeriod" = 6, "notCompleted" = 5, "notCompletedInPeriod" = 5, "lastRegistered" = 1164114540, "lastCompleted" = 1163783238, "lastDoBy" = 1164114540, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164196049, "updated\_associate\_id" = 13, "updatedCount" = 0 WHERE "CounterValue\_id" = 19533

UPDATE CRM5."countervalue" SET "CounterValue\_id" = 19537, "contact\_id" = 29, "person\_id" = 0, "project\_id" = 0, "extra1\_id" = 0, "extra2\_id" = 0, "record\_type" = 10, "direction" = 3, "intent\_id" = 5, "sale\_status" = 0, "amountClassId" = 0, "totalReg" = 1, "totalRegInPeriod" = 1, "notCompleted" = 1, "notCompletedInPeriod" = 1, "lastRegistered" = 1164114540, "lastCompleted" = 0, "lastDoBy" = 1164114540, "extra1\_count" = 0, "extra2\_count" = 0, "extra3\_count" = 0, "extra4\_count" = 0, "registered" = 0, "registered\_associate\_id" = 0, "updated" = 1164196049, "updated\_associate\_id" = 13, "updatedCount" = 0 WHERE "CounterValue\_id" = 19537

Add the text record
-------------------

INSERT INTO CRM5."text" ("text\_id", "type", "owner\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount", "text", "lcid", "seqno") VALUES (388, 4, 738, 1164196049, 13, 0, 0, 0, 'A nice toasted bagel with lox and cream-cheese.', 1044, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110419, 1164199649, 0, 4352, 13, 18, 388)

DELETE FROM CRM5."freetextindex" WHERE "table\_id" = 18 AND "record\_id" = 388

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (1662277039, 'BAGEL')

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (994575658, 'CHEESE')

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (1982075453, 'CREAM')

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (566186505, 'LOX')

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (125524443, 'NICE')

INSERT INTO CRM5."freetextwords" ("freetextwords\_id", "word") VALUES (2062571956, 'TOASTED')

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (1163465720, 199, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (960242617, 1662277039, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (408489531, 994575658, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (104022427, 1982075453, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (1403285959, 566186505, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (342101549, 125524443, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (895819198, 2062571956, 18, 388, 9, 738, 0)

INSERT INTO CRM5."freetextindex" ("freetextindex\_id", "freetextwords\_id", "table\_id", "record\_id", "ownertable\_id", "ownerrecord\_id", "infile") VALUES (1131576383, 1208, 18, 388, 9, 738, 0)

Add the visible-for record for the appointment
----------------------------------------------

INSERT INTO CRM5."visiblefor" ("VisibleFor\_id", "tableId", "recordId", "forAll", "forGroupId", "forAssocId", "encryptedCheck", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (914, 9, 738, 1, 0, 0, 'hQMC78oTMlGiFhgQyTEIuYatA57qbFEo', 1164196049, 13, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110420, 1164199649, 0, 4352, 13, 196, 914)