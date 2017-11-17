---
uid: QueryExamples
title: Query Examples
---


Examples:
---------

**<span style="COLOR: red">This query's won't work!</span>**

SELECT document.name, associate.name as loginname, document.registered
FROM project, appointment, document, associate
WHERE project.associate\_id =2 AND project.project\_id = appointment.project\_id AND appointment.document\_id = document.document\_id AND document.registered\_associate\_id = associate.associate\_id

 

This query's will work; notice the order of joins

SELECT document.name, associate.name as loginname, document.registered
FROM project, appointment, document, associate
WHERE associate.associate\_id = document.registered\_associate\_id AND document.document\_id = appointment.document\_id AND appointment.project\_id<span> </span> = project.project\_id<span> </span> AND<span> </span> project.associate\_id =2

 

### <span style="COLOR: red">This query won't work</span>

Select \* from contact where contact\_id &gt; = 5

 

This query will work; a space in between the operators will cause an error message.

Select \* from contact where contact\_id &gt;= 5

 

### <span style="COLOR: red">This query won't work</span>

SELECT document.name, associate.name as loginname, document.registered
FROM contact, appointment, associate, document
where contact.contact\_id = appointment.contact\_id AND appointment.document\_id = document.document\_id
and document.registered\_associate\_id = associate.associate\_id AND contact.associate\_id = 1 AND
document.registered &gt;= 93827273 AND document.registered &lt;= 96827273 AND
appointment.group\_idx = 3 and appointment.private = 0 or appointment.private = 1

 

This query will work; finish with one table before you ask for information from another table.

SELECT document.name, associate.name as loginname, document.registered
FROM contact, appointment, associate, document
where contact.contact\_id = appointment.contact\_id AND appointment.document\_id = document.document\_id
and document.registered\_associate\_id = associate.associate\_id AND contact.associate\_id = 1 AND
document.registered &gt;= 93827273 AND document.registered &lt;= 96827273 AND
appointment.group\_idx = 3 and appointment.private in (0,1)

 

Restrictions:
-------------

-   Count can only be used with single table selection.

-   All restriction on SQL syntax as for SODBIF against different databases
    (f. ex. CTree does not support OR-clause and ORDER BY on non-indexed fields.
    **You can use only one OR statement in a query on a c-tree database.**). Error messages will be generated accordingly.

-   If a table is used in the FROM-clause without any future reference, an error message will be generated.

-   Data will be delivered as it is stored in the database.