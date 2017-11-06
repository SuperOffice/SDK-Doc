---
uid: Upgrade_from_SIX
title: Common issues when upgrade from SIX
---

Some common issues when upgrading your programs to work with SEVEN are:

-   SOCRM is no longer registered automatically when it's run.
    You need to run SOCRM /RegServer as an administrator to put it into registry. The MSI installer will do this for you.
-   You need a SUPEROFFICE.CONFIG" along with SUPEROFFICE.INI - even though the values for database in the SUPEROFFICE.CONFIG is not that important
-   You will need a new, empty, but correctly set up the database instance to convert into - your old database is not affected by the upgrade, since this is a copy upgrade.

    This process adds a bunch of new tables, including all eJournal tables. Some tables who where never in use is removed and some existing ones are modified.

-   You need an internet connection while upgrading which allows access to communicate with our lisence server via HTTP (port 80).
-   Db + user password will be stored locally on each client in encrypted form, or read from the ODBC link.
    This means a database user for every SuperOffice user is no longer needed.
    SuperOffice will use db user to log into the database, then checks the Associate and Credentials to see if it's the correct user. 
-   We upgrade databases to Unicode only. You may install a database as ANSI but we strongly recomment Unicode.
-   DB-native fulltext search:Enabled for text.text and some eJournal fields Needs ”enable fulltext search” to be turned on when database is created (or later, but before you run ServerSetup/DbSetup) Gives lightning-fast search on all our long text fields (appointment text, yellow notes, descriptions)