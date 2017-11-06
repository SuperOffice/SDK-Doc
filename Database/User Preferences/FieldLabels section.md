---
uid: prefFieldLabels
title: FieldLabels section
---

Preference section 'FieldLabels'
================================

In order to view all preferences in this section, use the following SQL:

SELECT \* FROM UserPreference WHERE prefsection='FieldLabels'

Field labels are turned on/off using preferences, but the actual labels are stored in the LocaleText table.

* **LastLanguage**
Last-used language for field labels
*Control type: Number, access: Wizard*
* **ShowCustomFieldLabels**
Enabling this setting will allow you to edit field labels in the system
*Control type: Bool, access: Wizard*
