---
uid: refOLEDBInsert
title: Insert syntax
---

INSERT
------

insert into \[table\]  (\[field\]\[, \[field\] ...\] ) values (\[value\]\[, \[value\] ...\] )

 

If the primary key field is omitted or given a value of 0, then SODBIF will auto-generate a primary key from the sequence table.

The primary key is returned as a result set with one element in it.

 

For example:
------------

INSERT INTO category (category\_id, name) VALUES (0, 'The new name')