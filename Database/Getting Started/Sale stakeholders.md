---
uid: Stakeholders
title: Sale stakeholders
---

New from 7.1: A sale may now have one or more stakeholders, a contact or person with an extra interest or role in the sale. This may be turned off using the preference in **SOAdmin - Preferences - Sale - Enable Stakeholders (default yes)**

With this preference turned on a new archive is presented for sales of type

![](../Images/Stakeholders.png)

This will also make the sale visible on more than one company salesarchive if "Include Stakeholders" is ticket.

![](../Images/Include%20Stakeholders.png)

Use your favorite query tool and try this query:

> SELECT \* FROM saletype where hasStakeholders = 1

If there are sales defined which may have stakeholders, you may search the database for these sales:

> SELECT \* FROM sale where saletype\_id in (select saletype\_id from saletype where hasStakeholders = 1)

For these sales we may look up the stakeholders, this will present the stakeholders for sale\_id = 4

> SELECT \* FROM salestakeholder where sale\_id = 4

 

![](../Images/SaleStakeholder%20table.png)
