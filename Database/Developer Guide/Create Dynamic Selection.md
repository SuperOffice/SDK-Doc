---
uid: CreateDynamicSelection
title: Create Dynamic Selection
---

The structure of a dynamic selection is defined by several tables that contains the criteria definitions. Since the structure is complex and is easy to get wrong it is strongly recommended to use the COM objects or the NetServer APIs to create and modify the criteria instead of doing it directly.

![](../Images/DynamicSelectionDialog.jpg)

The above Selection’s corresponding Selection table’s row can be seen as follows.

![](../Images/DynamicSelectionDB1.jpg)
 
Note that the selType = 1. This indicates that it is a Dynamic Selection.
The actual criteria are stored in the searchCriteria table:

```SQL
SELECT \*
FROM   CRM5.searchcriteria
WHERE  ownerTable = 23
  AND ownerId = 56
```

![](../Images/DynamicSelectionDB2.jpg) 

This criteria contains one criteria group:

```SQL
SELECT \*
FROM  CRM5.searchcriteriagroup
WHERE  SearchCriteria\_id = 14
```

![](../Images/DynamicSelectionDB3.jpg)

This group contains one or more search criterion records: each criterion corresponds to a field.

```SQL
SELECT   \*
FROM   CRM5.searchcriterion
WHERE   SearchCriteriaGroup\_id = 11
```

![](../Images/DynamicSelectionDB4.jpg) 

Note that the contact.name field (1281) is stored in the criterionId. The extraId is used when referencing to the SAINT counters. “OperatorID = 18” references to the operator “Begins with”.
The actual value that we want to search for is stored in a separate table, which enables us to use multiple values for each search criterion.

```SQL
SELECT \*
FROM   CRM5.searchcriterionvalue
WHERE  SearchCriterion\_id = 12
```

![](../Images/DynamicSelectionDB5.jpg)

## An important point to remember!
The fields that need to be filled depend on the field used in the criterionId. Contact.Name is a string value, so the StringValue field in the criterionValue should be filled out.

## Find Dialog

The search criteria tables are also used when defining extra fields in the find dialog. This is where the active flag is used. Un-checking a search field in the find dialog corresponds to setting active = 0.