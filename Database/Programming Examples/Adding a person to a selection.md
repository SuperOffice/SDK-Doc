---
uid: exampleAddPersonToSelection
title: Adding a person to a selection
---

Creating a selection
--------------------

```SQL
INSERT INTO CRM5."selection" ("selection\_id", "associate\_id", "group\_idx", "name", "text\_id", "postitText\_Id", "visibility", "seltype", "searchCat\_id", "companyUnique", "soundEx", "source", "memberCount", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount", "includePerson") VALUES (75, 10, 5, 'My First Selection', 0, 0, 1, 0, 1, 0, 'MAFRSTSLK', 0, 0, 1164904874, 10, 0, 0, 0, 0)

INSERT INTO CRM5."visiblefor" ("VisibleFor\_id", "tableId", "recordId", "forAll", "forGroupId", "forAssocId", "encryptedCheck", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (919, 23, 75, 0, 0, 10, 'aakJA2Mgv19Dhim5t3Q3gQ1Kjvg8L981', 1164904874, 10, 0, 0, 0)
```

 

Adding a company to a static selection
-------------------------------

![](../Images/Selection-AddMemberContact.png)

```SQL
INSERT INTO CRM5."selectionmember" ("selectionmember\_id", "selection\_id", "contact\_id", "person\_id") VALUES (1776, 75, 19, 0)
```

*Note that the person\_id = 0*

 

Adding a person to a static selection
------------------------------

![](../Images/ScreenCap1.png)

 
```SQL
INSERT INTO CRM5."selectionmember" ("selectionmember\_id", "selection\_id", "contact\_id", "person\_id") VALUES (1774, 75, 13, 41)
```
