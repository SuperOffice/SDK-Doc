<properties date="2016-05-11"
SortOrder="60"
/>

The SuperOffice web client uses **web.config** as before, with database user specified there.

The SuperOffice windows client now uses **superoffice.config** in addition to **superoffice.ini**

**superoffice.config** is a NetServer config file, and is in the same place as **superoffice.ini** (also found in the same way, if you come in via COM)

The database user & password are stored in **superoffice.config** - encrypted and set by the MSI installer.

Without a correct db user/password  in there, nothing will work

**ODBC data source** and **archive path** are taken from **superoffice.ini** automatically – the superoffice.config does not need to specify the database server/type unless the ODBC source is non-standard.

The SERVER and DATABASE are dictated by the ODBC source in the superoffice.ini file. We look up in the Registry and transfer database and server settings to NetServer (not the superoffice.config file, but directly to NetServer without writing to the .config file).

The database user and password go the other way, from superoffice.config to both NetServer and the C++ code.
