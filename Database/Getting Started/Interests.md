---
uid: startInterests
title: Interests
---

![](../Images/ContactInterests.png)

 

Interests are stored on Contacts and Persons - there are two separate sets of interests, and a separate set of link tables.

![](../Images/InterestLinkTable.png)

The link table (ContactInterest) allows a single contact to have zero, one or more interests checked off.

The ContInt table is an MDO table, so interests can be grouped and organized under headings. The position under a headings does not matter to the linkage to a contact.

SELECT \* FROM contint

![](../Images/InterestsTable.png)

SELECT \* FROM contactinterest

![](../Images/ContIntLinkTable.png)

 

To get a list of interests checked off for a contact:

SELECT \* FROM contactinterest WHERE contact\_id = 123

To get the names of the checked off interests for a contact:

SELECT \* FROM contactinterest, contint WHERE contactinterest.contact\_id = 123 AND contactinterest.cinterest\_idx = contint.contint\_id

![](../Images/ContactInterestJoin.png)

 

Contact cached value

The Contact table has a counter field that stores the number of active interests.

This field is used to cache the count - it is updated whenever the user edits the company.

The field is used to quickly check whether the interests tab needs to indicate the presence of interests or not.