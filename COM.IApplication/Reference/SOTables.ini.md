---
uid: refIniSOTables
title: SOTables.ini
---

This file is used during the setup phase - it describes which primer data files are to be loaded into the newly created or upgraded database.

This file is usually created automatically during the setup process. You should not need to manually edit this file.



\[Init\]
IA=\\\\server\\Programs\\SOSIX\\Init\\I\_CacheTabs.imp
IB=\\\\server\\Programs\\SOSIX\\Init\\I\_Currency.imp
IC=\\\\server\\Programs\\SOSIX\\Init\\I\_Preferences.imp
ID=\\\\server\\Programs\\SOSIX\\Init\\I\_UdListDef.imp



Certain sections are always loaded.

    \[Register\]

Some sections are only loaded after a fresh install.

    \[Init\]



Some sections are only loaded after an upgrade from CRM 5 to SIX or a fresh install.

    \[UpgradeToSix\]
    \[Update\]
    \[Countries\]
    \[DefaultRoles\]

    \[StdReports\]
    \[LabelLayout\]



You can manually load sections from SOTABLES.INI using the DBSETUP.EXE tool.