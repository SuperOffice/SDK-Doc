---
uid: prefDefaults
title: Defaults section
---

Preference section 'Defaults'
=============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Defaults'
```

Default values for dialogs and checkboxes throughout the system.

* **DefaultAppntRememberVisibleFor**
Uses the same visibility setting for new follow-ups as you used last time. (Default = NO)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentAppointLength**
Default duration for new appointment
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentAppointTaskId**
Default type for new appointment
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentAppointText**
Default text for new appointment
*Control type: Text, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentPhoneLength**
Default duration for new phone call
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentPhoneTaskId**
Default type for new phone call
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentPhoneText**
Default text for new phone call
*Control type: Text, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentToDoLength**
Default duration for new task
*Control type: Number, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentToDoTaskId**
Default type for new task
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentToDoText**
Default text for new task
*Control type: Text, access: Admin, Crm, Admin users, Wizard*
* **DefaultAppointmentVisibleFor**
Last visibility setting used in the follow-ups dialog
*Control type: Number, access: Wizard*
* **DefaultBusiness**
Default business for new company
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultCategory**
Default category for new company
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultDecimalPlacesInAmount**
Number of decimals displayed in user-defined amount
*Control type: Number, access: Wizard*
* **DefaultDocRememberVisibleFor**
Uses the same visibility setting for new documents as you used last time. (Default = NO)
*Control type: Bool, access: Admin, Crm, Admin users, Wizard*
* **DefaultDocumentType**
Default outgoing document template
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultDocumentVisibleFor**
Last visibility setting used in the Document dialog
*Control type: Number, access: Wizard*
* **DefaultFaxType**
Default outgoing fax template
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultProjectStatus**
Default status for new project
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultProjectType**
Default type for new project
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultSaleProb**
Default rating for new sale
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultSelectionCategory**
Default type for new  selection
*Control type: ListTableRef, access: Admin, Crm, Admin users, Wizard*
* **DefaultSelectionVisibleFor**
Makes this value the default visibility setting when creating a new selection
*Control type: List, access: Admin, Crm, Admin users, Wizard*
