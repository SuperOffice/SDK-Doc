---
uid: Systemsection
title: System section
---

---
uid: prefSystem
title: System section
---

Preference section 'System'
===========================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='System'
```

System contains important preferences. Changing these is usually done through the admin tool.

* **AllowCentralLogin**
Travel users allowed to log into the central database (Default = No)
*Control type: List, access: Admin, Admin users, Wizard*
* **AllowForcedLogin**
Allow users to log on to the system even if they are already logged in on another computer (Default = No)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **BaseCurrencyId**
Base currency for your system. This is a common currency for reports etc.
*Control type: ListTableRef, access: Admin, Admin users, Wizard*
* **CurrentUdefVersioncontact**
The current version number for user-defined fields in the Company screen
*Control type: Number, access: Wizard*
* **CurrentUdefVersionperson**
The current version number for user-defined fields in the Contact dialog
*Control type: Number, access: Wizard*
* **CurrentUdefVersionproject**
The current version number for user-defined fields in the Project screen
*Control type: Number, access: Wizard*
* **CurrentUdefVersionsale**
The current version number for user-defined fields in the Sale dialog
*Control type: Number, access: Wizard*
* **DefaultDocPlugin**
Default document management system to be used by SuperOffice SIX.
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **EnableCurrency**
Allow sales to be recorded in another currency
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **MailMergeMoreTimeNeeded**
Increases the time available to SuperOffice SIX to complete a mail merge (mass mailing) operation. This time should be increased if you get empty or incomplete documents printed.
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **NotesIniPath**
Sets the path to the Notes.ini file
*Control type: Text, access: Wizard*
* **NotesSODbName**
The name of the database in SuperOffice SIX where Lotus Notes e-mail is saved (default: SOCONFIG\\SoMailArchive.nsf )
*Control type: Text, access: Admin, Admin users, Wizard*
* **OurCurrencyId**
Default currency for new sales
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **OwnCountry**
Which country you are currently located in. This affects phone number prefixes and the suggested country when entering a new company.
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **PreferredNotesDocServer**
Preferred server name of the Lotus Notes document server
*Control type: Text, access: Admin, Admin users, Wizard*
* **PreferredNotesMailServer**
Preferred e-mail server name for Lotus Notes
*Control type: Text, access: Admin, Admin users, Wizard*
* **ReplicateSelection**
Replicates selection members to Travel and satellite databases. After changing this preference you need to regenerate satellites and create new prototypes. This will reduce performance. Default: No
*Control type: Bool, access: Admin, Admin users, Wizard*
