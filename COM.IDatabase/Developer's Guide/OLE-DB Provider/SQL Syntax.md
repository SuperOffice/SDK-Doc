---
uid: SQLSyntax
title: SQL Syntax
---


FROM clause
===========

No aliasing allowed: can't say FROM contact c, person p

No join specifications allowed in the FROM clause.

 

JOINS
=====

Specified in WHERE clause, not in FROM clause.

Can't say: FROM person INNER JOIN contact ON contact\_id

Must say: FROM person, contact 
 WHERE contact.contact\_id = person.contact\_id

Left outer join: FROM person, contact
 WHERE contact.contact\_id \*= person.contact\_id

 

ORDER BY
========

Works as expected:

ORDER BY lastname ASC, firstname DESC

 

GROUP BY
========

Works – but can't combine with ORDER BY

Can't say COUNT(\*) – must specify field name to count.

Supported Functions with GROUP BY:
• COUNT( )
• SUM( )
• MIN( )
• MAX( )
• AVG( ) - average (Sum divided by count)

Example:

SELECT category\_idx, COUNT(name)
FROM contact WHERE associate\_id = 123
GROUP BY category\_idx

 

HAVING
======

Not understood. Won’t work.

Column renaming

SELECT count(name) as sumName, project.name as projName

The new name is used in the result sets column name instead of the actual name of the field. This is useful for distinguishing conflicting field names.

 

Only one OR clause per statement.
=================================

This query will work fine:

SELECT \* FROM contact
WHERE name='A' OR name='B'

This will not work:

SELECT \* FROM contact
WHERE name='A' OR name='B' OR name='C'

The underlying database translation technology does not like SQL with more than one OR statement.

You’ll get an error message back if you try to use more than one OR statement in your command.