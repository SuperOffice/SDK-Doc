---
uid: Sortingsection
title: Sorting section
---

---
uid: prefSorting
title: Sorting section
---

Preference section 'Sorting'
============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Sorting'
```

Sorting - controls how various lists of people are presented to the user.

* **SortingAssociates**
The display format and sort order of associates in lists (e.g. Last name, First name or First name Last name)
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **SortingLists**
The display format and sort order of items in lists (e.g. name or rank)
*Control type: List, access: Admin, Crm, Admin users, Wizard*
* **SortingPersons**
The display format and sort order of contacts in lists (e.g. Last name, First name or First name Last name)
Control type: List, access: Admin, Crm, Admin users, Wizard