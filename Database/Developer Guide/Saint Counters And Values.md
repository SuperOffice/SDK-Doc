---
uid: SaintCountersAndValues
title: Saint Counters And Values
---

SAINT counters are updated automatically as you do things.

When SAINT is enabled, whenever a contact or a project is created, a bunch of counter rows are created.

Whenever an appointment, document or sale is created, then the corresponding counter rows are updated.

For example:
------------

When a sale is created, it is saved with sale status = 1 (open)

This updates the CounterValue for the contact \_id in the sale with saleStatus =1 and saleStatus = 4 (all).

Sales are grouped into amount-classes, depending on the value (in the base currency) of the sale.

Assume the sale falls into amount-class 2.

We would then have to update the four counter values that correspond to this query:

```SQL
SELECT \* FROM countervalue WHERE project\_id = 56 AND sale\_status in (1,4) AND amountclassid in (2,0)
```

![](../Images/CounterValueTable.png)

 The counter values themselves are stored in the totalReg, totalRegInPeriod, notCompleted, notCompletedInPeriod, etc

![](../Images/CounterValue-values.png)

The lastRegistered and lastDoBy values are all equal because these match the sale we just registered on this contact.

Here is a larger extraction for the same project, but now also with sale-status 2 (sold) and amountclass 1 (small)

```SQL
SELECT \* FROM countervalue where project\_id =47 and sale\_status in (1,2,4) and amountclassid in (2,1,0)
```

![](../Images/CounterValues-more.png)

 

SAINT Values
============

Values are much easier - they are simple binary values - either on or off.

To find all the SAINT values for a particular contact or project, simply search the StatusValue table:

```SQL
Select \* from statusvalue where contact\_id =89
```

![](../Images/StatusValue.png)

The image that is shown on the contact card is determined by the status definition - and the blob linked to this record.

```SQL
Select \* from statusdef where statusdef\_id = 7
```

![](../Images/StatusDef.png)

isVisual indicates that a picture is used to mark that the status is active.

The actual picture is found via the blob link table.

### See Also:

[countervalue Table](../Tables/countervalue.md)
[statusvalue Table](../Tables/statusvalue.md)
[statusdef Table](../Tables/statusdef.md)