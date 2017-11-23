---
uid: guideDatabaseSettings
title: Database Settings
---

The <see cref="SuperOffice.COM.SuperOfficeDB.SOSettings">settings object</see> has properties that can tell you about the system’s serial numbers, path to document archive, data source etc.

Set db = CreateObject( "SuperOfficeDb.Database")
Db.Login "name", "pass"
Print Db.Settings.SuperofIniPath
Print db.Settings.SerialNumber
Print db.Settings.LoginUsers

 

You can set the SuperofIniPath before Login to load from a specific directory (Handy in situations where all code is shared, but each set of users have a separate configuration file in their home directory)

Set db = CreateObject( "SuperOfficeDb.Database")
Db.Settings.SuperofIniPath = "c:\\another\\dir"
Db.Login "name", "pass"
Print Db.Settings.SuperofIniPath
Print db.Settings.SerialNumber
Print db.Settings.LoginUsers

Note that you can only set the ini-path before logging in. Once you’ve logged in, the ini-path is locked and you can’t change it.

 

If you do not set the ini-path, then the system uses the one you logged in with most recently. This path is stored in the registry, under the HKCU/Software/SuperOffice/ProgDir key, every time you start the SuperOffice client.

For example: if you run SOCRM.EXE from the C:\\SuperOffice directory, without any parameters, it will use the SUPEROFFICE.INI file in the same directory as the SOCRM.EXE file. So "C:\\SuperOffice" gets written to the registry.

When you create the database object, it will use the directory listed in the registry as the default. So the database component would use the ini file from C:\\SuperOffice, even if our program was running in C:\\Program Files\\MyApp\\.

### 
Settings Property list

The settings object has many properties you can read:

SuperofIniPath – Directory where the superoffice ini file lives
SuperOfLogPath – Full path to the superoffice log file
LanguageCode – language code (US, NO, etc)- does not require login to read
CentralDataSource – central data source - does not require login to read
LocalDataSource – local data source - does not require login
CentralArchivePath – central archive path - does not require login
LocalArchivePath – local archive path - does not require login
SerialNumber – System serial number
LoginUsers – Total number of licenses
WebUsers – Total number of web licenses
ReporterUsers – Total number of reporter studio licenses
UpdatedTravelUsers – number of remote travel users licensed.
Satellites – Number of satellites licensed
CurrentDataSource – current data source
CurrentArchivePath – current archive path
WindowsClientUsers – Total number of Windows Client users licensed
TotalLogins – Total number of licenses registered
OutlookMailLinkSites – Number of Outlook Mail Link site licenses
NotesLinkSites – Number of Notes Link Sites
SyncEngineUsers – Number of Sync Engine Users
ExpirationDate – date the license expires