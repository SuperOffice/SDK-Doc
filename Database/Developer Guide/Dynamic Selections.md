---
uid: DynamicSelections
title: Dynamic Selections
---

### Dynamic Selections

The structure of a dynamic selection is defined by several tables that contain the criteria defintions. This structure is complex and easy to get wrong. We strongly urge you to use the COM objects or the NetServer APIs to create and modify the criteria instead of doing it directly.

 ![](../Images/DynSelCard.png)

The corresponding Selection table row looks like this:

![](../Images/DynSelRow.png)

Note that the selType = 1 (dynamic)

The actual criteria are stored in the searchCriteria table:

SELECT \* FROM searchcriteria WHERE ownertable=23 and ownerid=76

![](../Images/DynSel-SearchCrit.png)

This criteria contains one criteria group (the group concept is there to support more complex searches using AND/OR operators and so on - nothing is implemented yet though).

SELECT \* FROM searchcriteriagroup WHERE searchcriteria\_id = 24

![](../Images/DynSel-SearchCritGroup.png)

The group contains one or more search criterion records: each criterion corresponds to a field.

SELECT \* FROM searchcriterion WHERE searchcriteriagroup\_id = 20

![](../Images/DynSel-SearchCriterion.png)

Note that the [contact.name](../Tables/CONTACT.md) field (1281) is stored in the criterionId. The extraId is used when referencing the SAINT counters.

Operator 18 = Begins with

The actual value that we want to search for is stored in a separate table, so that we can support multiple values per search criterion (for the is-one-of searches).

SELECT \* FROM searchcriterionvalue WHERE searchCriterion\_id = 24

![](../Images/DynSel-CriterionValue.png)

Which of the fields you need to fill in depends on the field used in the criterionId. Contact.Name is a string value, so the stringValue field in the criterionValue should be filled out.

 

Find dialog
-----------

The search criteria tables are also used when defining extra fields in the find dialog. This is where the active flag is used. Unchecking a search field in the find dialog corresponds to setting active=0

 


### See Also:

[searchcriteria Table](../Tables/searchcriteria.md)
[searchcriteriagroup Table](../Tables/searchcriteriagroup.md)
[searchcriterion Table](../Tables/searchcriterion.md)
[searchcriterionvalue Table](../Tables/searchcriterionvalue.md)
[selection Table](../Tables/selection.md)