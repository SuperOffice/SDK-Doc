---
uid: AppointmentDialog
title: AppointmentDialog section
---

Preference section 'AppointmentDialog'
======================================

In order to view all preferences in this section, use the following SQL:

```SQL
SELECT \* FROM UserPreference WHERE prefsection='AppointmentDialog'
```

Follow-up dialog - used in CRM5 - obsolete in SIX.

* **AppointmentDialogExpanded**
Preference used to remember the setup/state of the Filter dialog
Control type: Bool, access: Wizard