---
title: Select Faq
path: /Blogic/Screen Elements/Select Faq
sortOrder: 66
---

This element is used to select an entry from the FAQ database.

The element takes a config value accessLevel for minimum access level (all entries with higher access level will be returned), with possible values:


 - "1": for private entries
 - "2": for internal entries
 - "3": for public authenticated entries
 - "4": for public not authenticated entries


If not set, 3 is set as default, so public authenticated and not authenticated entries will be returned.


 - `getValue()`: will return the id of the FAQ entry.


