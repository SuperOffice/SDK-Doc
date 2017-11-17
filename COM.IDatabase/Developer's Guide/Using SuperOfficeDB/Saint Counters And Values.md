---
uid: SaintCountersAndValues
title: Saint Counters And Values
---

SAINT counters are updated automatically as you do things, so these functions are read-only.
They are intended to make life easier for people to read the counters – since the table is fairly complex.
These wrap the StatusMonitorAgent and the StatusMonitorModel, and the the CounterValue table.
Access to the SAINT object requires that you have the SAINT site license. If the license is missing, then we set an error.

    Contact.Counters      ICounters (read-only)
    Project.Counters      ICounters (read-only)

```
ICounters : IDispatch
    NumSalesCreatedTotal( status, amountclass )   long  (read-only)
    NumSalesCreatedPeriod( status, amountclass )   long  (read-only)
    NumSalesNotCompletedTotal( status, amountclass)   long  (read-only)
    NumSalesNotCompletedPeriod( status,amountclass)   long  (read-only)
    LastCreatedSale( status, amountclass )    DATE  (read-only)
    LastCompletedSale( status, amountclass )    DATE  (read-only)
    NumActivitiesCreatedTotal( type, intent, direction )   long  (read-only)
    NumActivitiesCreatedPeriod( type, intent, direction )   long  (read-only)
    NumActivitiesNotCompletedTotal( type, intent, direction )  long  (read-only)
    NumActivitiesNotCompletedPeriod( type, intent, direction )  long  (read-only)
    LastCreatedActivity ( type, intent, direction)    DATE  (read-only)
    LastCompletedActivity ( type, intent, direction)   DATE  (read-only)
    LastDoByActivity( type, intent, direction)    DATE  (read-only)
    ActiveValues       ICounterValues (read-only)
```

```
ICounterValues : IDispatch
    \_NewEnum   IEnumDispatch – creates iterator object
    Item( variant )   ICounterValue - look up by name or id. Return Nothing if not found
    First    ICounterValue - internal iterator method
    Next    ICounterValue - internal iterator method
```

```
ICounterValue : IDispatch
    Id    long  (read-only – primary key)
    Name    string  (read-only)
    Description   string  (read-only)
    Rank    variant-boo (read-only)l
    IsVisual    variant-bool (read-only)
    IsDirty    variant-bool (read-only)
    Picture    IPicture  (read-only, also read-only content)
    DefaultTaskText   string  (read-only)
    DefaultTaskType   IListTextItem (read-only)
```

```
Type  = new enum = allActivity, allAppointment, appointment, phone, task, allDocument, letter, fax, e-mail, mail merge
- default to allActivity
Status  = new enum = allSales, open, sold, lost  - default to allSales
Intent   = list item ( NULL or id = 0 means all)  - default to NULL
AmountClass  = list item ( NULL or id = 0 means all)  - default to NULL
Direction  = new enum = any, incoming, outgoing   - default to any
```

Intent and AmountClass are both list items.

The basic Saint properties (NumSalesCreatedTotal etc) are all simply a matter of reading the right SAINT record from the database and returning the right field.
e.g. cont.Counters.NumSalesCreatedTotal( enSaintAllSales )  is equivalent to

```
Select totalReg from CounterValue Where contact\_id = 123 and sale\_status = 4 and  amountClassId = 0
```

We should be able to say this:

```
    Set cont = db.GetContact( 123 )
    Set intent = db.GetListItem( enTableIntent, 1 )
    Set amount = db.GetListItem( enTableAmountClass, 2 )
    lastDate = cont.Counters.LastCreatedActivity( enSaintAllActivity )
    lastSaleDate = cont.Counters.LastCreatedSale( enSaintAllSales )
    numSales = cont.Counters.NumSaleCreatedPeriod( enSaintSaleOpen, amount )
    numDocs = cont.Counters.NumActivityCreatedTotal( enSaintAllDocument, intent, enDirOutgoing )
    isStale = not ( cont.Counters.ActiveValues(“stale customer”) is nothing )
    for each v in cont.Counters.ActiveValues
       msg = msg & v.Name & v.Description & vbCrLf
    next
    msgbox msg
```