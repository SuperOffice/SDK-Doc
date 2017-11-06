---
uid: prefNetServices
title: NetServices section
---

Preference section 'NetServices'
================================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='NetServices'
```

SuperOffice Web Services settings - these are used by the web-panel to automatically display information from SuperOffice when the user logs on.

* **ELearningUrl**
URL to E-Learning
*Control type: Text, access: Admin, Admin users, Wizard*
* **EnableNetServicesOnCentral**
Make Web Services available on your central and satellite databases. (Default = YES)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **EnableNetServicesOnTravel**
Make Web Services available on your Travel databases. (Default = YES)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **LastPage**
Last page read
*Control type: Number, access: Wizard*
* **NewsURL**
News URL
*Control type: Text, access: Wizard*
* **NextCheck**
Next date SIX should check for news on Web Services (yyyy-mm-dd)
*Control type: Text, access: Wizard*
* **PageURL**
Page URL
*Control type: Text, access: Wizard*
* **SeenTeaserDlg**
The user has read the teaser from Web Services.
*Control type: Bool, access: Wizard*
* **ShowOnStartup**
Show news from SuperOffice Web Services on startup. (Default = YES)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **StatusCheckTimeout**
Timeout for reading status from Web Services in seconds. (Default = 60)
*Control type: Number, access: Admin, Admin users, Wizard*
* **StatusURL**
Status URL
*Control type: Text, access: Wizard*
* **TeaserURL**
Teaser URL
*Control type: Text, access: Wizard*
* **UserPassportId**
The Microsoft Passport ID of this associate (not the e-mail address)
Control type: Text, access: Admin, Admin users, Wizard