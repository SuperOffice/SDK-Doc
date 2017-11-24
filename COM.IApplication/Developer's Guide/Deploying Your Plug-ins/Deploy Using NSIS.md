---
uid: guideDeployUsingNSIS
title: Deploy Using NSIS
---

An alternative to MSI is to use a traditional script-based installer.

These will usually handle copying files and setting registry values for you, and making the right registry magic happen so that your installation appears in the ADD/REMOVE SOFTWARE control panel.



These installers are just normal EXE files that extract and place your files in the appropriate places.

They do not use the installer service, so you will have to face the UAC prompt when running them. There is also no built-in support for GPO deployment or updating remotely.



Zip2Exe: <http://www.chilkatsoft.com/chilkatsfx.asp>

NullSoft Installer (NSIS): <http://nsis.sourceforge.net/> (also has ZIP2EXE)

InnoSetup: <http://jrsoftware.org/isinfo.php>