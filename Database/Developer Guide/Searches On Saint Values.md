---
uid: SearchesOnSaintValues
title: Searches On Saint Values
---

### Searches On Saint Values

When SAINT is enabled, whenever a contact or a project is created, a bunch of counter rows are created.

Whenever an appointment, document or sale is created, then the corresponding counter rows are updated.

Each counterValue row points to the contact\_id or project\_id it is linked to.  The counter values themselves are stored in the totalReg, totalRegInPeriod, notCompleted, notCompletedInPeriod, etc fields.

Here is a some of the counter values for a project:

SELECT \* FROM countervalue where project\_id =47 and sale\_status in (1,2,4) and amountclassid in (2,1,0)

![](../Images/CounterValues-more.png)

 

If we want to search on the SAINT counters, we would use the counter-value fields as criteria, and read out the project\_id or contact\_id.

 

If we wanted to find all projects where there is an open sale, in any size, and no sale has been registered in the past year:

```SQL
SELECT project\_id FROM CounterValue WHERE project\_id &gt; 0 AND sale\_Status = 1  AND amountClassId=0 AND lastRegistered &lt; '2005.10.1'
```
 

If we only wanted to search for small sales, we would use the amount-class "small" (amountclass\_id=1)

```SQL
SELECT project\_id FROM CounterValue WHERE project\_id &gt; 0 AND sale\_Status = 1  AND amountClassId=1 AND lastRegistered &lt; '2005.10.1'
```
 

If we want to find all contacts with no sales registered in the period, we would search like this:

```SQL
SELECT contact\_id, project\_id FROM CounterValue WHERE contact\_id &gt; 0 AND sale\_Status = 4  AND amountClassId=0 AND totalRegInPeriod =0
```

Sale-status = 4  (All sales)

amount-class = 0 (all sizes)

 

If we want to find all contacts with more than 5 sales registered (since the beginning of time):

```SQL
SELECT contact\_id, project\_id FROM CounterValue WHERE contact\_id &gt; 0 AND sale\_Status = 4  AND amountClassId = 0 AND totalReg &gt; 5
```
 

If we want to find all contacts with more than 4 phone-call appointments (record\_type=5 on task) registered in this period:

```SQL
SELECT \* FROM CounterValue WHERE contact\_id &gt; 0 AND record\_type = 5  AND direction &gt; 0  AND intent\_id = 0 AND totalReg &gt; 4
```

Note that we must specify intent-id for appointments/documents to avoid duplicate ids in the result. intent = 0 implies all intents.
 


### See Also:

[countervalue Table](../Tables/countervalue.md)