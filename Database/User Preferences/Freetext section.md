---
uid: prefFreetext
title: Freetext section
---

Preference section 'Freetext'
=============================

In order to view all preferences in this section, use the following SQL:

```SQL
    SELECT \* FROM UserPreference WHERE prefsection='Freetext'
```

Freetext search settings. These are usually edited in the admin tool.

* **AutoEnableTravel**
Automatically enables freetext search on Travel databases. This will increase the size of local databases and the time required to generate prototypes
*Control type: Bool, access: Wizard*
* **Enabled**
Enables freetext search
*Control type: Bool, access: Wizard*
* **MaxSuggestWords**
Maximum number of different words to be suggested as stopwords in stopword maintenance
*Control type: Number, access: Admin, Admin users, Wizard*
* **MultiWordFTHitLimit**
Maximum number of hits returned by a multi-word freetext search (0 = no limit)
*Control type: Number, access: Admin, Admin users, Wizard*
* **MultiWordFTOperator**
Criteria for freetext search on multiple words (1 = contains, 2 = starts with, 3 = exact match)
*Control type: List, access: Wizard*
* **SingleWordFTHitLimit**
Max. number of hits returned by a single-word freetext search (0 = no limit)
*Control type: Number, access: Admin, Admin users, Wizard*
* **SingleWordFTOperator**
Criteria for freetext search on a single word (1 = contains, 2 = starts with, 3 = exact match)
*Control type: List, access: Wizard*
