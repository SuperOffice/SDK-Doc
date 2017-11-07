---
uid: CustomerService
title: Customer Service
---

Service (formerly known as Customer Service or eJournal) was merged in to the database with version 7.0
DB integration is gone; you can edit contact and person records in each system and directly see the changes in the other
eJournal can insert person records with contact\_id = 0; these are invisible in CRM

A Customer Service user is an associate; but has an extra record in the table ejuser.

## DbSetup/Serversetup

Will create all tables, both SuperOffice and Customer Service. In addition Customer Service needs to tweak them a little, with their own setup program.

DbSetup will export & import all standard tables & fields for both products.

DbSetup does not see eJournal ”extra tables” and ”extra fields”; we will have a separate solution for that. eJournal has its own dictionary and way of specifying extension fields and tables. The C++ code is not very fond of dynamically-changing tables and we have chosen to ”no go there” in this first release.

The new ”dynamic” archive provider in NetServer does see these fields & tables. NetServer is inherently designed to be more flexible, so it sees all the new fields and tables with no problems.  However, the Web Service API’s are still fairly static and transporting new data there presents a challenge. On the main entities this is solved using the existing name/value extrafields dictionary.