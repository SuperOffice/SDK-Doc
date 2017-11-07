---
uid: Obsolete_fields_and_tables
title: Obsolete fields and tables
---

We had a number of obsolete tables... that have either become obsolete, or that were designed but never taken into use.
There were also some obsolete fields which has been removed. This changes the field id’s (we had to change reporter priming data), but has no other ill consequences.

The obsolete tables have been replaced by new tables, as far as possible (there were more obsolete tables than new tables in Seven). The remainders are single-field tables in the dictionary, but they are not physically created in the db. This keeps the table numbers unchanged

Keeping the table numbers unchanged is important to avoid breaking or remapping relations.
From 7.5 on, we won’t add tables or fields until we know for sure that we need them, what you see in the database is actually all in use.