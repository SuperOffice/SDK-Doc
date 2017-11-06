---
uid: exampleGetListOfPeopleForAContact
title: Get List Of People For A Contact
---

First we need to find the contact\_id for the contact.

Assuming we know the name of the contact:

```SQL
SELECT \* FROM contact WHERE name = 'SuperOffice Corporation'
```

This gives us a contact\_id.

![SELECT \* FROM contact WHERE name = ' SuperOffice Corp'](../Images/select-contact.gif)

We plug this into the next query, which gives us a list of people for that company:

SELECT \* FROM person WHERE contact\_id = 81

![SELECT \* FROM person WHERE contact\_id = 81](../Images/select-person.gif)

 

We can join these two queries into one:

```SQL
SELECT \* FROM person p, contact c 
WHERE c.name = 'My Favorite Company'
AND c.contact\_id = p.contact\_id
```

![](../Images/select-contact-person.gif)
