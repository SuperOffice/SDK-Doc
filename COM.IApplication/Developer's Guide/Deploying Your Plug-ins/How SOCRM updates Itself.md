---
uid: guideDeploySOCRMSelfUpdate
title: How SOCRM updates Itself
---

The SOCRM client has a simple updater that you might have configured from in Server Setup:

The user preference **\[Functions\] EnableClientAutoUpdate** (at the system level (2)) is used to enable the automated check for a new version.

The SOCRM client will check the "ServerSetup" Product version marked in the **ProductVersion** table in the database and compare it with the product version of the SOCRM file.

If the database indicates a newer version is available, then the **SuperOffice7.exe** installer is launched from the auto-update path stored in the **ProductVersion** table. The SOCRM.exe process terminates after launching the installer so that the SuperOffice7.exe installer can update the files.