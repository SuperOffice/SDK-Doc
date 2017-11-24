---
uid: refIniSoloader
title: SoLoader.ini
---

SOLoader
==================================================================================================================================================================================================================

When a user starts SIX from a workstation, we recommend the use of SOLOADER.EXE. This checks SOLOADER.INI to see if a newer version of files specified in SOLoader.ini centrally needs to be downloaded to the client from the central server.

Note, its currently only the SuperOffice section in SUPEROFFICE.INI centrally that will be copied to the client.

SOLOADER.INI comprises three different types of section: Module, Files and Run, SOLoader.ini has more information on each section.

Automate deployment to workstations
-----------------------------------------------------------------------------------------------------------------

Install the Add-on on the server, and have it update SOLoader.ini located in &lt;centralpath&gt;\\Client\\SOLoader.ini.

Define a new module, for example:

``` Code
[Files]
OurAddOn.exe = Our AddOn
OurAddOn.ini = Our AddOn
OurAddCtrl.ocx = Our AddOn
```

Define a module section, for example:

``` Code
[Module:Our AddOn]
Source = Modules/OurAddon
Target = Modules/OurAddon
Regsvr = No
NoOverwrite = No
RebootIfInUse = No
UpdateOnly = No
Shared = No
```

The next time SOLOADER.EXE runs, the files OURADDON.EXE, OURADDON.INI and OURADDCTRL.OCX in the “\\\\&lt;Server&gt;\\SUPEROFFICE\\MODULES\\OurAddon” folder will be copied to the “C:\\PROGRAM FILES\\SUPEROFFICE\\MODULES\\OurAddon” folder.

If *UpdateOnly**=Yes*, files will only be copied if the user already has them. This can be used where not all associates have the module installed. It causes the files to be updated only if the user already has the module installed.

**Note:** SuperOffice updates will overwrite the existing SOLoader.ini file.



Module-specific INI files
-------------------------------------------------------------------------------------------------------

SOLOADER supports multiple INI files now. It will load the SOLOADER.INI file first, and then any other INI files that start with SOLOADER in the same directory as the main SOLOADER.INI file.

A module can maintain deployment info separate from the main INI file by using a file like SOLOADER-MYMODULE.INI



**Example:**

``` Example
[Files]
OurAddOn.exe         = Our AddOn
OurAddOn.ini         = Our AddOn
OurAddCtrl.ocx       = Our AddOn Component



[Module: Our AddOn]
Source = Modules\OurAddOn
Target = Modules\OurAddOn
RegSvr = No


[Module: Our AddOn Component]
Source = Modules\OurAddOn
Target = Modules\OurAddOn
RegSvr = Yes


[Run: Our AddOn]
Command = Modules\OurAddOn\OurAddOn.Exe
PreCopy = No
```



Files Section
-------------------------------------------------------------------------------------------

This section of the ini file just list all the files and matches the file with a module.

A file can only belong to one module.

What happens to the file is determined by the settings defined for the module.



**Example:**

``` Example
[Files]
Comctl32.ocx         = Windows Component
Comdlg32.ocx         = Windows Component
Mscomct2.ocx         = Windows Component
htmlexpt.dll         = Reporter Component
pdfexpt.dll          = Reporter Component
proplist.ocx         = Reporter Component
SoCrm.exe            = SuperOffice
SoAdmin.exe          = SuperOffice
StarView.dll         = SuperOffice
OurAddOn.exe         = Our AddOn
OurAddOn.ini         = Our AddOn
OurAddCtrl.ocx       = Our AddOn
```



Module sections
---------------------------------------------------------------------------------------------

The file contains one section for each module and regulates how the module should be updated; for example:


<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><br />

<p>[Module:SuperOffice Sounds]</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>Target=&lt;folder&gt;</p></td>
<td><p>Defines which folder copying is done to in the current folder.</p></td>
</tr>
<tr class="odd">
<td><p>Source=&lt;folder&gt;</p></td>
<td><p>Defines which folder copying is done from in the current folder.</p></td>
</tr>
<tr class="even">
<td><p>Regsvr =Yes/No</p></td>
<td><p>Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will enter the COM components in the Regstry the first time SOLoader.exe is run.</p></td>
</tr>
<tr class="odd">
<td><p>NoOverwrite =Yes/No</p></td>
<td><p>Specifies whether files may be overwritten or not. (If you enter <em>NoOverwrite</em><em>=Yes</em>, no files will be overwritten).</p></td>
</tr>
<tr class="even">
<td><p>RebootIfInUse =Yes/No</p></td>
<td><p>Specifies whether the computer should be restarted if files are in use.</p></td>
</tr>
<tr class="odd">
<td><p>UpdateOnly =Yes/No</p></td>
<td><p>Specifies whether the module should only be updated, which means that files will not be copied if you don’t already have them.</p></td>
</tr>
<tr class="even">
<td><p>Shared=Yes/No</p></td>
<td><p>Specify whether the module is added to the system folder or not. Common components are used by several programs and should be shared.</p></td>
</tr>
<tr class="odd">
<td><p>ForceRegsvr =Yes/No</p>
<p> </p></td>
<td><p>Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will register these files every time SOLoader.exe is run.</p></td>
</tr>
<tr class="even">
<td><p>Operation=Copy/Delete</p></td>
<td><p>Operations to be performed on a logical group of files.</p>
<p><strong>Copy</strong> : Copy the file(s) (Default)</p>
<p><strong>Delete:</strong> Delete the file(s) from target. Note, if Regsvr or ForceRegsvr=Yes, the files will be unregistered first.</p></td>
</tr>
</tbody>
</table>

**Note:** If no values are specified for target and source, the following default settings apply: target is the folder SOLOADER.EXE was run from, and source is the folder specified as centralpath in the SUPEROFFICE.INI file in the target folder.



Run Sections
---------------------------------------------------------------------------------------------------------------------------------

The Run sections allow you to run a program as part of the SuperOffice startup.

There are actually three run sections:

-   Run - files in this section are run on all platforms.

-   Run Win - files in this section are only run on Win9X OS -- no longer relevant, since SuperOffice SIX does not support these platforms.

-   Run NT - files in this section are only run on NT based systems: Win2000, WinXP, Win2003 etc.





<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><br />

<p>[Run:MyModule]</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>Command=&lt;path&gt;</p></td>
<td><p>Path to the file to execute</p></td>
</tr>
<tr class="odd">
<td> Parameter=&lt;string&gt;</td>
<td> Parameters to the executable.</td>
</tr>
<tr class="even">
<td> RunOnce=Yes/No</td>
<td> Run the program only once. Default = NO</td>
</tr>
<tr class="odd">
<td> PreCopy=Yes/No</td>
<td> Run the program before SOLOADER<br />
 starts copying files. Default = NO</td>
</tr>
</tbody>
</table>



**Example:**

``` Example
[Run: MyModule]
Command=C:\windows\notepad.exe
Parameter=c:\windows\souser.ini
PreCopy=No
```

###