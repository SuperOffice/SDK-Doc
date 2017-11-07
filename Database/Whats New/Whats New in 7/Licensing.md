---
uid: Licensing
title: Licensing
---

The license system has its own set of tables

-   [ModuleOwner](../../Tables/ModuleOwner.md) – an issuer of licenses.
    Initially only one row (SuperOffice).
    Contains global expiration dates
-   [ModuleLicense](../../Tables/ModuleLicense.md) – one row per license
    More than you see, some licenses are hidden from the GUI
    Several types: System, site, associate; on/off or a defined number of licenses
     

## License assignment

[LicenseAssocLink](../../Tables/LicenseAssocLink.md) – assigns one particular moduleLicense to a certain associate. That is how Marekv becomes a User and a Windows client user; this would be two records
The sum of licenses assigned of any particular module is limited to the number in moduleLicense.
A new license set from SuperLicense will not be accepted, if more than the acquired number is already assigned.

## License signing

Licenses are signed using public/private keys.

The private key is a closely guarded secret and without it, you cannot make a keycode generator.

Individual moduleLicense rows are also signed and all rows are also hash-checked to make tampering harder.

**Summary**: You touch them, they stop working. SoAdmin / NetServer can edit them, no-one else.
Hackers can hack the DLL’s, but not make a keycode generator that works with unhacked code
