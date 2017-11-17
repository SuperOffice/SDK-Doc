---
uid: MoreSQLExamples
title: More SQL Examples
---


List all the customers whose names begin with "S".

SELECT contact\_id, name
FROM contact WHERE name LIKE 'S%'

 

List all the people who belong to companies whose names begin with "S".

SELECT name, firstname,lastname
FROM person, contact
WHERE name LIKE 'S%'
AND contact.contact\_id \*= person.contact\_id

 

List all the appointments happening today.

SELECT \* FROM appointment
WHERE activeDate &gt;= '2002.10.21'
AND activeDate &lt; '2002.10.22'

 

List how many appointments each user has today

SELECT associate\_id, count(associate\_id)
FROM appointment
WHERE activeDate &gt;= '2002.10.21'
AND activeDate &lt; '2002.10.22'
GROUP BY associate\_id