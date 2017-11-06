---
uid: prefFieldReplication
title: FieldReplication section
---

Preference section 'FieldReplication'
=====================================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='FieldReplication'
```

Enables replication of user-defined fields at field level instead of record level. This ensures that field changes for the customer are retained, but may affect the performance of the replication process. This will affect the size of UP/DWN files and how conflicts are handled by the travel system.

* **udcontactlarge**
Enables replication at field level for user-defined fields of the large strings on the company card
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udcontactsmall**
Enables replication at field level of user-defined fields on the Company card. Activating this setting may affect the speed at which UP and DWN files are read and written (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udpersonlarge**
Enables replication at field level for user-defined fields of the large strings on the person dialog
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udpersonsmall**
Enables replication at field level of user-defined fields in the Contact dialog. Activating this setting may affect the speed at which UP and DWN files are read and written (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udprojectlarge**
Enables replication at field level for user-defined fields of the large strings on the project card
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udprojectsmall**
Enable replication at field level for user-defined fields on the Project card. Activating this setting may affect the speed at which UP and DWN files are read and written (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udsalelarge**
Enables replication at field level for user-defined fields of the large strings on the sale dialog
*Control type: Bool, access: Admin, Admin users, Wizard*
* **udsalesmall**
Enables replication at field level for user-defined fields in the Sale dialog. Activating this setting may affect the speed at which UP and DWN files are read and written (Default = NO)
*Control type: Bool, access: Admin, Admin users, Wizard*
