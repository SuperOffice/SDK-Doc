---
uid: refIniSoUser
title: SoUser.ini
---

SOUser.ini
==========

The SOUSER.INI file contains the default settings for SuperOffice SIX. To change these settings, you edit the values of parameters in SOUSER.INI.

The following section gives you information about the parameters in SOUSER.INI to edit if you want to use SIX with settings other than the default ones. The SOUSER.INI file is located in the folder where Windows is installed, either \\WINDOWS or \\WINNT although it can be moved to anywhere in the user's path.



List of Settings in SOUSER.INI
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The majority of settings previously defined in SOUSER.INI have now been moved to the preferences system in SuperOffice SIX and the Maintenance Client. SOUSER.INI is now used largely for information that SuperOffice SIX needs to start up.

The following gives you a list of parameters you can change, with explanations. The settings relate to the PC they are made on and are independent of who is using SuperOffice SIX on the PC; they are updated when SuperOffice is shut down.

This list contains parameters you add to, or edit in, the file directly.

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
<td><p>[Startup]</p></td>
<td><p>When the program starts.</p></td>
</tr>
<tr class="odd">
<td><p>Language=XX</p></td>
<td><p>Shows the language version of the program the user is running.</p></td>
</tr>
<tr class="even">
<td><p>UserID=ABC</p></td>
<td><p>Enters a user ID automatically in the login screen.</p></td>
</tr>
<tr class="odd">
<td><p>DlgBackground=65535,65535,65535</p></td>
<td><p>Sets colours for dialog box backgrounds. The numbers stand for red, green and blue and show colour intensity. They range from 0 to 65534, where 0 produces black and 49152,49152,49152 produces the standard grey.</p>
<p>The default is 65535,65535,65535, which is translated to the standard Windows colours in Control Panel. This is usually white.</p></td>
</tr>
<tr class="even">
<td><p>[Stripes]</p></td>
<td><p>Stripes.</p></td>
</tr>
<tr class="odd">
<td><p>StripeFrequency=2</p></td>
<td><p>Makes list backgrounds striped. The value 2 gives two grey and two white stripes.</p></td>
</tr>
<tr class="even">
<td><p>PercentChange=10</p></td>
<td><p>Indicates how dark the stripes are. The percentage indicates the grey tone to use.</p></td>
</tr>
<tr class="odd">
<td><p>[Diary]</p></td>
<td><p>Diary.</p></td>
</tr>
<tr class="even">
<td><p>StartTime=08</p></td>
<td><p>Start time in user’s diary.</p></td>
</tr>
<tr class="odd">
<td><p>FirstDay=MON</p></td>
<td><p>First day of week in user’s diary.</p></td>
</tr>
<tr class="even">
<td><p>WeekDays=MON,TUE,WED,THU,<br />
FRI,SAT,SUN</p></td>
<td><p>The days of the week the user’s diary contains.</p></td>
</tr>
</tbody>
</table>

Specifying a User ID
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can specify in the SOUSER.INI file the user ID to display in the login screen. This is useful if you don’t want to enter an ID every time you start SIX.

If you want to specify a user ID and you have the user ID PS for Peter Strong, enter the following setting under \[Startup\] in SOUSER.INI:

\[Startup\]
UserID=PS

Changing the Language Version
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To use SIX and SIX Help in another language, for example, Norwegian, you can change the Language= parameter under \[Startup\] in SOUSER.INI, to *Language=NO*, as long as you have installed the language module for the Norwegian version. The default value is the language version you installed, for example, US for US English. You need two language files for SIX (SOLN32*XX*.DLL and SOCRMHELP*XX*.DLL),and two language files for the Maintenance Client (SOADLN*XX*.DLL and SOADMHELP*XX*.DLL). There are more details about the file structure and about rights in the installation guide for SIX.

**Note:** In order for you to be able to change languages, the language files must be located in the \\SUPEROFFICE folder, or you will get an error message.

Changing the Default Start Time in the Day Tab
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Day tab in SIX starts at 08:00. If you have different working hours and want to display a different time as the start time, you can change the default start time in SOUSER.INI. If the working day in your organisation starts at 09.00, change the following setting in SOUSER.INI:

\[Diary\]
StartTime=08

*to:*

\[Diary\]
StartTime=09


-------------------------------------------------------------------------------------------------

Specifying which Days to Display in the Week Tab
------------------------------------------------------------------------------------------------------------------------------------

By default, the Week tab in SIX’s Diary shows Monday to Sunday inclusive. If you want to display only Monday to Friday, specify English abbreviations of the days in the following setting:

\[Diary\]
WeekDays=MON,TUE,WED,THU,FRI.

Type in the day names in uppercase letters and separate them with a comma.

If you work part-time, for example, Monday, Wednesday and Friday, you can edit this setting to display only these days in your Week tab: WeekDays=MON,WED,FRI.



Last revised: March 19, 2001