---
uid: refIniSuperOffice
title: SuperOffice.ini
---

Superoffice.ini
======================================================

This is the new name for the old SUPEROF5.INI

The contents of the file are unchanged from SUPEROF5.INI.



\[SuperOffice\]
-------------------------------------------------------------------

The configuration file for SuperOffice SIX has several parameters that describe the program’s database environment.

All connections between a database/archive and the program are governed by the configuration file.

SUPEROFFICE.INI is created on installation and does not normally need to be changed, but there are cases where it may be useful to change some of the parameters in it.

There are three types of parameter, and they are described below.

Description of the Central Database and Archive

The following parameters in SUPEROFFICE.INI describe the central database and the archive:


<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Parameter</strong></p></td>
<td><p><strong>Explanation</strong></p></td>
</tr>
<tr class="even">
<td><p>archivepath=</p></td>
<td><p>Defines where documents in SIX will be stored.</p></td>
</tr>
<tr class="odd">
<td><p>archivepath2=</p></td>
<td><p>Alternative document folder.</p></td>
</tr>
<tr class="even">
<td><p>centralpath=</p></td>
<td><p>Points to the central program area, where any SuperOffice SIX updates will be stored. When SOLOADER.EXE runs on a workstation, it checks the program against the central program area to see if there are any new files there. Any new program files are then copied to the workstation. SOLOADER.INI is located in &lt;CENTRALPATH&gt;\CLIENT and contains rules for updating.</p></td>
</tr>
<tr class="odd">
<td><p>datapath=</p></td>
<td><p>Defines the location of the database.</p></td>
</tr>
<tr class="even">
<td><p>templatepath=</p></td>
<td><p>Defines where the templates are located.</p></td>
</tr>
<tr class="odd">
<td><p>socachepath=</p></td>
<td><p>Defines where the data cache files are stored.<br />
These cache files speed up the login process and reduce database traffic.<br />
Defaults to the profile's LocalSettings\AppData folder.</p>
<p>Defaulted to C:\WINDOWS\SOCACHE in CRM5 and SIX before SR3.</p></td>
</tr>
</tbody>
</table>


The only parameter that **must** be specified is *archivepath*.

If the other parameters do not exist, they are given values that are determined by *archivepath*

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>datapath=</p></td>
<td><p>built-in ODBC database</p></td>
</tr>
<tr class="even">
<td><p>templatepath=</p></td>
<td><p>&quot;archivepath&quot;\TEMPLATE</p></td>
</tr>
</tbody>
</table>

**
Note:** You can add further archive paths, e.g. archivepath2, archivepath3, and so on.

### Using the Datapath Parameter

*Datapath* for SQL
If you are using an SQL-database, an ODBC data source must be defined, and *datapath* must begin with *ODBC:,* followed by the Data Source Name. Note that you must enter ODBC in uppercase. If you have not already defined a Data Source Name for the database, use the name *SuperOffice*.

*Datapath* for C-Tree - this is no longer supported in SuperOffice SIX.
*datapath**=\\SO\_ARC\\DATA\\SUPEROF5.DAT*.

Note that the file name is expressed in full. This is because the database may be in a different location from the documents. This does not provide extra security – all users still need rights to the \\SO\_ARC folder.

**Note:** *Datapath* is not required if SUPEROF5.DAT is located in the \\SO\_ARC\\DATA folder. However having the setting there will not cause any problems



 
------------------------------------------------------------------------

\[Error\]
-------------------------------------------------------------

### Defining More Comprehensive Error Logging

If required, you can define that error logging will be more comprehensive than that specified by the default setup.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Parameter</strong></p></td>
<td><p><strong>Explanation</strong></p></td>
</tr>
<tr class="even">
<td><p>EnableDebug=0/1</p></td>
<td><p>Turn debug logging on/off</p></td>
</tr>
<tr class="odd">
<td><p>Truncate=0/1</p></td>
<td><p>Allow log file to keep growing beyond 20K.</p></td>
</tr>
<tr class="even">
<td><p>LogPath=&lt;path&gt;</p></td>
<td><p>Where log is saved. Defaults to SO_ARC\DATA</p></td>
</tr>
<tr class="odd">
<td><p>OLEDBLogFile=&lt;path&gt;</p></td>
<td><p>Where log is saved from reporter components. Defaults to LogPath.</p></td>
</tr>
<tr class="even">
<td> EnableReporterLog=0/1</td>
<td> Starts logging from reporter components.</td>
</tr>
<tr class="odd">
<td> EnableOLEDBLog=0..5</td>
<td> Determines what level of detail the OLE-DB provider<br />
 describes its workings.<br />
 1 = SQL logging only<br />
 2 = also report component creation/destruction<br />
 3 = report method calls<br />
 4 = report sub method calls<br />
 5 = report mind numbing detail</td>
</tr>
</tbody>
</table>

For example:

\[Error\]
EnableDebug=1 *(enable comprehensive error logging)
*Truncate=0 *(do not truncate the log once it reaches the default maximum size– 128KB)
*Logpath=C:\\SO\_ERROR.LOG *(where the log file is saved, if not set it defaults to \\so\_arc\\data\\so\_log.txt)*
OLEDBLogFile=c:\\so\_arc\\oledb.log *(if not set, will use the same as logpath)
*EnableReporterLog=1
EnableOLEDBLog=1 *(you may set a value between 1 and 5, 3 is recommended)*


If you enable the comprehensive error logging function, you must remember to disable it afterwards, or the hard disk will fill up.

To disable it, enter the following:

\[Error\]
EnableDebug=0

 

 

\[Client\]
---------------------------------------------------------------------------------

In the central SuperOf5.ini file. Used to define how the default client is set up when installing.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Parameter</strong></p></td>
<td><p><strong>Explanation</strong></p></td>
</tr>
<tr class="even">
<td><p>PrefLang=</p></td>
<td><p>Default language for SOUSER.INI</p></td>
</tr>
<tr class="odd">
<td><p>PrefMailClient</p></td>
<td><p>Default mail client</p></td>
</tr>
<tr class="even">
<td><p>PrefWordProcessor</p></td>
<td><p>Default editor to use</p></td>
</tr>
</tbody>
</table>

 

*PrefLang*

This is the suggested language when installing a new client. PrefLang=NO will suggest that you install a new client workstation with Norwegian language files. This may be overridden during setup.

 

*PrefMailClient*
This is the suggested mail client used on new clients. Options are:

Other – the default mail client/simple mapi solution

Outlook – Outlook Mail Link
Notes – Notes Mail Link

 

Last revised: July 13, 2004
