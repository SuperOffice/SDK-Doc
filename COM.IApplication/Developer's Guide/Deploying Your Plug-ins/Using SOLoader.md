---
uid: GuideDeploymentSoloader
title: Using SOLoader
---

SOLoader
========

When a user starts the SuperOffice client from a workstation, we recommend the use of SOLOADER.EXE. This checks SOLOADER.INI to see if a newer version of files specified in SOLoader.ini centrally needs to be downloaded to the client from the central server.

SOLOADER.INI comprises three different types of section: Module, Files and Run, SOLoader.ini has more information on each section.

Automate deployment to workstations
----------------------------------------------------------------------------------------------------

Install the Add-on on the server, and have it update SOLoader.ini located in &lt;centralpath&gt;\\Client\\SOLoader.ini.

Define a new module, for example:

```ini
[Files]
OurAddOn.exe = Our AddOn
OurAddOn.ini = Our AddOn
OurAddCtrl.ocx = Our AddOn
```

Define a module section, for example:

```ini
[Module:Our AddOn]
Source = Modules/OurAddon
Target = Modules/OurAddon
Regsvr = No
NoOverwrite = No
RebootIfInUse = No
UpdateOnly = No
Shared = No
```

The next time `SOLOADER.EXE` runs, the files `OURADDON.EXE`, `OURADDON.INI` and `OURADDCTRL.OCX` in the "\\\\&lt;Server&gt;\\SUPEROFFICE\\MODULES\\OurAddon" folder will be copied to the "C:\\PROGRAM FILES\\SUPEROFFICE\\MODULES\\OurAddon" folder. If *UpdateOnly**=Yes*, files will only be copied if the user already has them. This can be used where not all associates have the module installed. It causes the files to be updated only if the user already has the module installed.

**Note:** SuperOffice updates will overwrite the existing SOLoader.ini file.

Module sections
--------------------------------------------------------------------------------

The file contains one section for each module and regulates how the module should be updated; for example:


|INI File line|Description|
|---------------------------|-----------|
|[Module:SuperOffice Sounds]|Section header|
| Target = | Defines which folder copying is done to in the current folder.
| Source = | Defines which folder copying is done from in the current folder.
| Regsvr = | Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will enter the COM components in the Registry the first time SOLoader.exe is run.|
|NoOverwrite =|Specifies whether files may be overwritten or not. (If you enter NoOverwrite=Yes, no files will be overwritten).
|RebootIfInUse =|Specifies whether the computer should be restarted if files are in use.
|UpdateOnly =|Specifies whether the module should only be updated, which means that files will not be copied if you donÃ¢â‚¬â„¢t already have them.
|Shared=|Specify whether the module is added to the system folder or not. Common components are used by several programs and should be shared.
|ForceRegsvr =|Specifies whether the module contains COM components which need to be entered in the Registry, or not. This will register these files every time SOLoader.exe is run.
|Operation =|Operations to be performed on a logical group of files. **Copy** : Copy the file(s), **Delete**: Delete the file(s) from target. Note, if Regsvr or ForceRegsvr=Yes, the files will be unregistered first.

 ![](../../images/hs-note.gif) | **Note:** If no values are specified for target and source, the following default settings apply: target is the folder SOLOADER.EXE was run from, and source is the folder specified as centralpath in the SUPEROF5.INI file in the target folder. 
