---
uid: GetContactDetails
title: Get Contact Details
---


At its most basic, we just search the contact table:

```SQL
SELECT \* FROM contact WHERE name = 'Client System AS'
```

Which gives us the name, the code and number, and a bunch of list item ids.

![](../Images/select-contact2.gif)

 

List items: Category and Business
---------------------------------

These are straightforward inner-joins against the corresponding list item tables.

```SQL
SELECT \* FROM contact, category, business 
WHERE name = 'Client System AS'
AND contact.category\_idx = category.category\_id
AND contact.business\_idx = business.business\_id
```

Now we get the category name and description, as well as the category name.

![](../Images/select-contact3.gif)

 

Phone Numbers
-------------

There may be several phone numbers on a contact. We will pick out the first one.

```SQL
SELECT \* FROM contact, category, business, phone 
WHERE name = 'Client System AS'
AND contact.category\_idx = category.category\_id
AND contact.business\_idx = business.business\_id
AND contact.contact\_id = phone.owner\_id
AND phone.ptype\_idx = 1
AND phone.rank = 1
```

Phones come in [several different types](../Tables/Phone.md)). Type 1 = direct phone.

This inner join assumes that the contact has at least one phone number.

If we want to handle contacts that have no phone numbers, we need to use an outer-join:

```SQL
SELECT c.name, cat.name, bus.name, p.\* FROM CRM5.contact c
LEFT OUTER JOIN CRM5.phone p ON c.contact\_id = p.owner\_id
INNER JOIN CRM5.category cat ON c.category\_idx = cat.category\_id
INNER JOIN CRM5.business bus ON c.business\_idx = bus.business\_id
WHERE c.name = 'Client System AS'
AND p.ptype\_idx = 1
AND p.rank = 1
```

![](../Images/select-contact4.gif)

Address: Street or Postal
-------------------------

There is only one address record of each type per contact. However, if no address has been entered there will not be an address record, so we need to use an outer join again.

We can use an inner join to get the country id. The list item should always be set.

```SQL
SELECT c.name, cat.name, bus.name, p.phone, cou.name, a.\*
FROM CRM5.contact c
LEFT OUTER JOIN CRM5.address a ON c.contact\_id = a.owner\_id
LEFT OUTER JOIN CRM5.phone p ON c.contact\_id = p.owner\_id
INNER JOIN CRM5.category cat ON c.category\_idx = cat.category\_id
INNER JOIN CRM5.business bus ON c.business\_idx = bus.business\_id
INNER JOIN CRM5.country cou ON c.country\_id = cou.country\_id
WHERE c.name = 'Client System AS'
AND p.ptype\_idx = 1
AND p.rank = 1
AND a.atype\_idx = 2
```

 

[Address type](../Tables/Address.md)): 2 = street address

 
![](../Images/select-contact5.gif)
