---
uid: SearchSaint
title: Search for a contact with a given saint value
---

The following example shows how we can retrieve a Contact by using a SAINT value.

An important point to remember!
When SAINT is enabled, whenever a Contact or a Project is created, a bunch of counter rows are created and when ever an Appointment, Document or a Sale is created, the corresponding counter rows are updated. Each counterValue row points to the Contact\_id or project\_id it is linked to. SAINT also requires a separate license.

Following are some of the Counter values for a Contact

```SQL
SELECT  *
FROM  CRM5.countervalue
WHERE   sale_status = 2
 AND amountClassId = 0
 AND totalReg &gt; 2
```

If we want to find all Contacts with no Sales registered in the particular period, we could write the SQL statements as follows.

```SQL
SELECT  *
FROM   CRM5.countervalue
WHERE  contact_id &gt; 0
  AND sale_Status = 4 
  AND amountClassId = 0
  AND totalRegInPeriod = 0
```

Sale\_Status = 4 -&gt; All Statuses

Amount\_Class = 0 -&gt; All sizes

If we want to find Contacts who have more than 5 sales register the following code can be used.

```SQL
SELECT  *
FROM   CRM5.CounterValue
WHERE  contact_id &gt; 0
  AND sale_Status = 4 
  AND amountClassId = 0
  AND totalReg &gt; 5
```

If we want to find Contacts with more than 4 phone-call appointments (record\_type = 5 )registered in this period.

```SQL
SELECT  *
FROM   CRM5.CounterValue
WHERE  contact_id &gt; 0
    AND record_type = 5  
    AND direction &gt; 0
    AND intent_id = 0 AND totalReg &gt; 4
```

An important point to Remember!
We are required to specify the intent-d for Appointments/Documents to avoid duplicates ids in the result. Intent\_id = 0 includes all intents.
 
 
If we want to find all contacts with more than 4 phone-call appointments (record\_type=5 on task) registered in this period:

```SQL
SELECT * FROM CounterValue
WHERE contact_id &gt; 0 
    AND record_type = 5  
    AND direction &gt; 0  
    AND intent_id = 0 
    AND totalReg &gt; 4
```

Note that we must specify intent\_id for appointments/documents to avoid duplicate ids in the result. Intent\_id = 0 implies all intents.