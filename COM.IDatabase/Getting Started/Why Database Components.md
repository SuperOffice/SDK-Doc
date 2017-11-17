---
uid: WhyDatabaseComponents
title: Why Database Components
---


The database components are high-level components for searching and manipulating the database.

The components are COM wrappers around the same objects that the Windows client uses internally. In other words, this is basically the same technology that SuperOffice uses to build the windows client.

Using the components makes consistent behavior and correct data much easier to achieve. Field types and transaction logging are done automatically. Record id fields are updated automatically. The named properties and Intellisense makes working with the database much easier. The code practically writes itself.

Which is easier to understand?

```
INSERT INTO Address
VALUES (0,1234,1,"Abc 17","","0190","Oslo")
```

 or

```
theContact.PostalAddress.Address1 = "Abc 17"
theContact.PostalAddress.City = "Oslo"
theContact.PostalAddress.Zipcode = "0190"
theContact.Save
```
