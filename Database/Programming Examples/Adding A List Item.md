---
uid: exampleAddingAListItem
title: Adding A List Item
---

Adding a list item to a list requires two, possibly three, possibly four things:

1.  Insert the list-item into the item table (e.g. Category)
2.  Insert Group-link items into the group-link table (e.g. CategoryGL)
    You need to insert one link item per group. If you do not, then the MDO security system will filter your item out.
3.  Optional: Insert a heading item in the heading table.
4.  Optional: Insert one or more heading-link items into the heading-link table (e.g. CategoryHL)

 

We edit lists in  the SOAdmin Maintentance client. Here we add a new category item to the category list:

<img src="images/ScreenCap2_thumb.png" id="img_af403ca9-e8b9-4967-bc5f-e2ff0baccd60" />
[![Click to Enlarge](images/hs-enlarge.gif)Click to Enlarge](#)

[![Click to Shrink](images/hs-shrink.gif)Click to Shrink](#)

 

![](../Images/EditListItem.png)

 

Insert the category item
------------------------

INSERT INTO CRM5."category" ("Category\_id", "name", "rank", "tooltip", "deleted", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (11, 'Fresh Category', 11, 'A fresh new category of companies.', 0, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110585, 1164910792, 0, 4352, 11, 64, 11)

 

Make the category item visible for the usergroups
-------------------------------------------------

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (41, 11, 1, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110586, 1164910792, 0, 4352, 11, 65, 41)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (42, 11, 2, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110587, 1164910792, 0, 4352, 11, 65, 42)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (43, 11, 3, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110588, 1164910792, 0, 4352, 11, 65, 43)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (44, 11, 4, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110589, 1164910792, 0, 4352, 11, 65, 44)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (45, 11, 5, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110590, 1164910792, 0, 4352, 11, 65, 45)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (46, 11, 6, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110591, 1164910792, 0, 4352, 11, 65, 46)

INSERT INTO CRM5."categorygrouplink" ("categorygrouplink\_id", "category\_id", "group\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (47, 11, 7, 1164907192, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110592, 1164910792, 0, 4352, 11, 65, 47)

 

Place the category item under a heading
---------------------------------------

INSERT INTO CRM5."categoryheadinglink" ("categoryheadinglink\_id", "category\_id", "heading\_id", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (11, 11, 6, 1164907569, 11, 0, 0, 0)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110593, 1164911169, 0, 4352, 11, 66, 11)