---
uid: Upgrading_from_SIX
title: Common issues when upgrading from SIX
---

Some common issues when upgrading your programs to work with SEVEN are:

-   SOCRM is no longer registered automatically when it's run.
    You need to run SOCRM /RegServer as an administrator to put it into registry. The MSI installer will do this for you.
-   You need a SUPEROFFICE.CONFIG" along with SUPEROFFICE.INI - this file contains the NetServer settings, including the database username + password in encrypted form.
-   You will need a new, empty, but correctly set up the database instance to convert into - your old database is not affected by the upgrade, since this is a copy upgrade.

    This process adds a bunch of new tables, including all eJournal tables. Some tables who where never in use is removed and some existing ones are modified.

-   If you do not have internet access from where you are running setup, you will need an XML license to upgrade. In this case you'll need to click the link in the ServerSetup license dialog to select the XML file instead.
-   Db + user password will be stored locally on each client in encrypted form in the SUPEROFFICE.CONFIG file, or read from the ODBC link.
    
    This means a database user for every SuperOffice user is no longer needed.
    SuperOffice will use db user to log into the database, then checks the Associate and Credentials to see if it's the correct user.
