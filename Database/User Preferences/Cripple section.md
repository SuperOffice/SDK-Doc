---
uid: prefCripple
title: Cripple section
---

Preference section 'Cripple'
============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Cripple'
```

Remove groups of functionality from SIX.
Obsolete in SIX - replaced by corresponding FunctionRights on Role instead.

* **Application**
Removes all external applications and user-defined buttons from SuperOffice SIX.
*Control type: Bool, access: Wizard*
* **Appointment**
Removes the follow-ups dialog from SIX. Follow-ups will still be visible in lists, but the dialog will be completely removed, making it impossible to add or edit appointments, tasks and sales in SIX.
*Control type: Bool, access: Wizard*
* **Contact**
Removes the entire Company screen from SIX. Company names will still be visible in dialogs etc., but the screen itself (and the Navigator button for it) will be completely removed, making it impossible to edit Companies in SIX.
*Control type:* Bool, access: Wizard
* **Diary**
Removes the entire Diary screen from SIX. All diary-related functionality will be removed.
*Control type: Bool, access: Wizard*
* **Document**
Removes the Document dialog from SIX. Documents will still be visible in lists, but the dialog itself will be completely removed, making it impossible to create or edit documents in SIX.
*Control type: Bool, access: Wizard*
* **Email**
Removes the entire E-mail screen from SIX. All e-mail functionality will be removed.
*Control type: Bool, access: Wizard*
* **Person**
Removes the Contact dialog from SIX. Contact names will still be visible in lists, but the dialog itself will be completely removed, making it impossible to add or edit contacts in SIX.
*Control type: Bool, access: Wizard*
* **Project**
Removes the entire Project screen from SIX. Project names will still be visible in dialogs and lists, but the screen itself (and the Navigator button for it) will be completely removed, making it impossible to edit projects in SIX.
*Control type: Bool, access: Wizard*
* **Relation**
Removes the Relations section tab from the Company screen
*Control type: Bool, access: Wizard*
* **Reporter**
Removes the Reports button and the Reports screen from SIX. Print buttons will still be available at various points in SIX.
*Control type: Bool, access: Wizard*
* **Sale**
Removes the Sale dialog from SIX. Sales will still be visible in lists, but the dialog itself will be completely removed, making it impossible to add or edit sales in SIX.
*Control type: Bool, access: Wizard*
* **Selection**
Removes the entire Selection screen from SIX. All selection-related functionality will be removed.
*Control type: Bool, access: Wizard*
* **Travel**
Removes all Travel functionality from SIX.
*Control type: Bool, access: Wizard*
