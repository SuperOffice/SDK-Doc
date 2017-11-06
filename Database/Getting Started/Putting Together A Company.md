---
uid: startPuttingTogetherACompany
title: Putting Together A Company
---

The company card uses the Contact table and its related tables:

 

![Company tables](Images/so-contact.gif)

 

Note how there are multiple Person records for any one contact. A classic many-to-one relationship.

-   A Person can only belong to one Contact.
-   A Contact can have zero or more Persons.

 

It is this relationship which drives the first to fields in the appointment, sale and document dialogs. Every time you select a new company, the person list below it has to be re-populated.

 

Address and Phone: owner-id and type
------------------------------------

Address and Phone tables use two fields to determine where they belong: The owner\_id field refers to a contact\_id or a person\_id  depending on the type\_idx field.

The type\_idx is 1, 2, 16387, or 16388

```SQL
SELECT \* FROM address WHERE owner\_id &lt; 10
```

![](../Images/select-address.gif)

[Address](../Tables/Address.md): type\_idx

> 1 = Postal (contact)
> 2 = Street (contact)
> 16387 = Private (person)

 

[Phone](infoPhoneTable.md): type\_idx

> 1 = Phone (contact)
> 3 = Fax (contact),
> 16385 = Phone (person)
> 16387 = Fax (person)
> 16388 = Direct (person)
> 16389 = Mobile (person)

So – values of 16384 or above are related to the person table, while those below are related to the contact table.

 

So if you wanted to pick up just the fax numbers for contact 123 then your query would be:

```SQL
SELECT \* FROM phone WHERE owner\_id=123 AND type\_idx=3 ORDER BY rank
```

Note that these are many to one relations, so you can still pick up more than one phone number per owner. Phone numbers are further sorted by rank. For addresses this is a theoretical proposition. The CRM client will not define more than one address per type for each owner.

E-mail and URL
--------------

To put together a list of the URLs and e-mails that belong to this contact:

```SQL
SELECT \* FROM url WHERE contact\_id = 123 ORDER BY rank

SELECT \* FROM email WHERE contact\_id = 123 ORDER BY rank
```

There may be several urls all referencing the same project\_id. This is ok. The URLs will be presented in rank order. The first rank will always be 1.

These are simpler relationships than the owner-id + type relations used on phone and address.

 

Person list
-----------

To get the list of persons under a contact:

```SQL
SELECT \* FROM person WHERE contact\_id = 123 ORDER BY rank
```
