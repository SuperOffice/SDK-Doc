---
uid: SimpleSQLExamples
title: Simple SQL Examples
---


SELECT name,department FROM contact
WHERE name LIKE 'S%'

Returns all the names and departments in the contact table where the name begins with “S” or “s”.

 

SELECT name,department FROM contact
WHERE contact\_id IN (1,2,3,5,81,23)

Returns the name from the records whose contact-ids are in the list.

 

SELECT firstname,lastname,name
FROM person, contact
WHERE firstname = 'John'
AND person.contact\_id = contact.contact\_id

Returns the persons name and the name of the company they are part of, for all the persons whose first name is “John”. (Will also match “JOHN” and “john”)

 

SELECT name,firstname,lastname
FROM contact, person
WHERE name LIKE 'S%'
AND contact.contact\_id \*= person.contact\_id

Returns the name of the company and the name of all the people belonging to the company, where the company name is “S”.

Note the use of the outer-join (the \*= condition)  to return the company name even if there are no people listed for that company.

 

SELECT name FROM contact
WHERE registered &gt; '2002.12.31 12:0:0'

Returns the names of all the companies created after a certain date at noon. The result is randomly ordered (the exact sequence is up to the database).

 

SELECT name FROM contact
WHERE registered &gt; 1041336000 ORDER BY name

Returns the names of all the companies created after a certain date (here the date is expressed using seconds since 1-1-1970). The result is ordered by name.

 

INSERT INTO contact (name,associate\_id)
VALUES ('Foo Inc', 23)

Create a new contact record – auto-assigns a new contact\_id – NULLs or zeros the other unspecified fields. Note that the command returns the allocated contact\_id as the result set.

Note also that the registered, registered\_date and soundex fields were set automatically for you, even though they were not specified in the insert.

 

UPDATE contact
SET category\_idx = 14, department= 'London'
WHERE category\_idx = 12

Updates the category and department fields for all contact records with category 12. All the updates are logged to the transaction log.