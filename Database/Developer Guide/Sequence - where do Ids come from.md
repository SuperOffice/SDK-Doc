---
uid: SequencewheredoIdscomefrom
title: Sequence - where do Ids come from
---

---
uid: guideSequence
title: Sequence - where do Ids come from?
---

The id numbers are stored in a table called SEQUENCE.

SELECT \* FROM sequence

The sequence table has a counter for each table.

The id is the table-id + 10 (the first ten tables are used for storing the dictionary data).

The contact table is table number 5, so the next available contact\_id is the row with id = 15.

If you are adding your own records to the database, you must update the sequence table as well, otherwise Superoffice will trample your records.

Number ranges
=============

There are ranges of id’s in use when it comes to the SuperOffice database, and the range depends on where in the hierarchy this database is. We refer to the central database as the mother, and this database id range starts from 1.

At some point we need to start the range for the satellites, and we've said the first satellite starts at 0x1000000 (16777216), second satellite starts id range at 0x2000000 (33554432) and so on. These high id's may live in all databases, so you'll find both central and satellite id's in all types of SO databases.

Now you also have the travel databases, they have a temporary id range from 0x7E000000 (2113929216). Now, this range is the same for ALL travel databases and the high id's from these databases are automatically converted to central or satellite id's when the user sync his data with its mother database. There should never be high travel id's in a central or satellite database.