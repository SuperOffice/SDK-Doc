---
uid: Upgrading_from_CRM_SIX
title: Common issues when upgrading from CRM SIX
---

Some common issues when upgrading your programs to work with SEVEN are:

-   SOCRM is no longer registered automatically when it's run.
    You need to run SOCRM /RegServer as an administrator to put it into registry. The MSI installer will do this for you.

-   You need a SUPEROFFICE.CONFIG along with SUPEROFFICE.INI - this is the NetServer config file.
    You will need a new, empty, but correctly set up the database instance to convert into - your old database is not affected by the upgrade, since this is a copy upgrade.

    This process adds a bunch of new tables, including all eJournal tables. Some tables who where never in use is removed and some existing ones are modified.

- If you do not have internet access from where you are running setup, you will need an XML license to upgrade. 
  In this case you'll need to add the
  license file to SOTABLES.INI so Server Setup / DbSetup gets it.


Db + user password will be stored locally on each client in the SUPEROFFICE.CONFIG file in encrypted form, or read from the ODBC link.
    
This means a database user for every SuperOffice user is no longer needed.
    
SuperOffice will use db user to log into the database, then checks the Associate and Credentials to see if it's the correct user.
