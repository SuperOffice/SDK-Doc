---
uid: prefNumbering
title: Numbering section
---

Preference section 'Numbering'
==============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Numbering'
```

Numbering - how new numbers are allocated, and how the user is allowed to edit these numbers.

* **DefaultAllocate**
Automatic allocation of a new number when a new document is created
*Control type: Bool, access: Wizard*
* **DefaultAllowBlank**
Whether blank values are permitted for new counters
*Control type: Bool, access: Wizard*
* **DefaultReadOnly**
Whether numbers allocated to a document or documents of a given template type may be amended (write-protected)
*Control type: Bool, access: Wizard*
* **DefaultSatPrefix**
Default prefix for new counters on Satellite databases
*Control type: Number, access: Wizard*
* **DefaultTravelPrefix**
Default prefix for new counters on Travel databases
*Control type: Number, access: Wizard*
* **DefaultUnique**
Numbers with a new counter must be unique.
*Control type: Bool, access: Wizard*
* **NumberEachTemplate**
If Yes, separate counters are maintained for each document template
Control type: Bool, access: Wizard