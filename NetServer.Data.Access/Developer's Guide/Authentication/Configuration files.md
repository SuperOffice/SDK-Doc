---
uid: netserver-authentication-configuration
title: Configuration Files
date: 2018-05-08
SortOrder: 6
---
# Configuration Files

## .ini versus .config

SuperOffice web client uses **web.config** to specify database connection details.

SuperOffice windows client uses **superoffice.config**, in addition to **superoffice.ini**.

**superoffice.config** is a NetServer config file, and is in the same place as **superoffice.ini** (also found in the same way, if you come in via COM).

The database user & password are stored in **superoffice.config** - encrypted and set by the MSI installer.

**ODBC data source** and **archive path** are taken from **superoffice.ini** automatically – the superoffice.config does not need to specify the database server/type unless the ODBC source is non-standard.

The SERVER and DATABASE are dictated by the ODBC source in the superoffice.ini file. We look up in the Registry and transfer database and server settings to NetServer (not the superoffice.config file, but directly to NetServer without writing to the .config file).

The database user and password go the other way, from superoffice.config to both NetServer and the C++ code.

## Security Considerations

ServerSetup encrypts and saves the database credentials in a .MST file.

Client setup extracts the credentials and stores them in the local .config file

NetServer decrypts these credentials on behalf of the Sales and Marketing Windows client.

ServerSetup also creates a System User with the same credentials; giving that username a dual role.

The same credentials are used to access NetServer Web Services.

The following steps are recommended to increase security:

1. Deactivate the default system user in the SoAdmin client.
2. Create a new pair of database- and system user specifically for Sales and Marketing Web and Customer Service

---

