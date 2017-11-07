---
uid: Single_database_user
title: Single database user
---

We used to have application user = database user; application password = database password
No more!  Now there is a single, common database user, separate from the application user concept
NetServer will log on using this (and now NetServer is always started first, by all applications)
Other code (C++) will ”inherit” the settings. The database user/password is specified in the .config file
We will come up with a system for maintaining and distributing this information in a reasonable and safe manner
What you type into ServerSetup goes (via an MST transform) into the MSI client installer, and into superoffice.config

Note - The upgrade neither creates nor deletes any database users. The code to do so is completely disabled in Seven. Database users and their settings and rights are the responsibility of the customer.

We do still create the groups SOADMIN and SOUSER.  You can create new database users (by using the DB tools), and then assign them to one of these groups; SOADMIN recommended!  That way they will get the correct rights. Or you can simply assign CRUD rights to all SuperOffice tables to a new database user, and that should be it

The user is specified in SuperOffice/Data/Explicit in the config file
For web, this still also needs to be a System User (create via SoAdmin). This requirement will probably go away and be reduced to just a db user
Do not use the ”Trusted login” setting of ODBC sources, since it overrides the login and makes you dependent on having db users for all AD users