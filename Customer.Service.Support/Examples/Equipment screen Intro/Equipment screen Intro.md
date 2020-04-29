---
title: Equipment screen Intro
path: /Examples/Equipment screen Intro
sortOrder: 9569
---

In this example we will crate a screen used for viewing the reservation-history of equipment that is stored in our database.

This example requires two extra tables in eJournal. Create an extra table named equipment and an extra table named reservations.

The equipment table should contain fields for name, description, manufacturer and purchase date. Of course you can add extra fields if you like.
Lets call the table y\_equipment and the fields x\_eqname, x\_eqdesc, x\_manufacturer, x\_eqpurchase.

The resevations table should contain an extra table relation to the equipment table, a customer contact relation, from-date and to-date.
Lets call the table y\_reservations and the fields x\_eqid, x\_customer, x\_fromdate, x\_todate.

Add some posts to the database before we begin.




1. autolist

