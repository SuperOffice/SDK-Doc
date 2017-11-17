---
uid: SearchesOnSaintValues
title: Searches On Saint Values
---

###     Searches On Saint Values

Database.Find is our smart search object. It makes it very easy to search on phone numbers and e-mail addresses.
We have added SAINT counters and values to the list as well.

Again these functions require the SAINT license to be active in order to work.

[SOFind](SUPEROFFICEDBLib~SOFind.md) - Added the following methods:

    ContactsWithNumActivitiesCreatedTotal( type, intent, direction, operator, value )
    ContactsWithNumActivitiesCreatedPeriod( type, intent, direction, operator, value )
    ContactsWithNumActivitiesNotCompletedTotal( type, intent, direction, operator, value )  
    ContactsWithNumActivitiesNotCompletedPeriod( type, intent, direction, operator, value )
    ContactsWithLastCreatedActivity ( type, intent, direction, operator, value )
    ContactsWithLastCompletedActivity ( type, intent, direction, operator, value )
    ContactsWithLastDoByActivity ( type, intent, direction, operator, value )

    ContactsWithNumSalesCreatedTotal( type, intent, direction, operator, value )
    ContactsWithNumSalesCreatedPeriod( type, intent, direction, operator, value )
    ContactsWithNumSalesNotCompletedTotal( type, intent, direction, operator, value )  
    ContactsWithNumSalesNotCompletedPeriod( type, intent, direction, operator, value )
    ContactsWithLastCreatedSale( type, intent, direction, operator, value )
    ContactsWithLastCompletedSale( type, intent, direction, operator, value )
    ContactsWithActiveValue( valueName )

    ProjectsWithNumActivitiesCreatedTotal( status, amountclass, operator, value )
    ProjectsWithNumActivitiesCreatedPeriod( status, amountclass, operator, value )
    ProjectsWithNumActivitiesNotCompletedTotal( status, amountclass, operator, value )  
    ProjectsWithNumActivitiesNotCompletedPeriod( status, amountclass, operator, value )
    ProjectsWithLastCreatedActivity( status, amountclass, operator, value )
    ProjectsWithLastCompletedActivity( status, amountclass, operator, value )
    ProjectsWithLastDoByActivity( status, amountclass, operator, value )

    ProjectsWithNumSalesCreatedTotal( status, amountclass, operator, value )
    ProjectsWithNumSalesCreatedPeriod( status, amountclass, operator, value )
    ProjectsWithNumSalesNotCompletedTotal( status, amountclass, operator, value )  
    ProjectsWithNumSalesNotCompletedPeriod( status, amountclass, operator, value )
    ProjectsWithLastCreatedSale( status, amountclass, operator, value )
    ProjectsWithLastCompletedSale( status, amountclass, operator, value )
    ProjectsWithActiveValue( valueName )

This is a load of methods, but they are basically simple wrappers around the same basic function with slightly different parameters.

AmountClass and Intent are list items. You can pass NULL/Nothing for these if you want to specify "all".

 

Example:

    Set conts = db.Find.ContactsWithActiveValue( "stale customer" )

    Set amount = db.GetListItem( enTableAmountClass, 69 )
    lastMonth = Now() - 30
    Set projs = db.Find.ProjectsWithLastCreatedSale( enSaintSaleOpen, amount, enOperatorLess, lastMonth )
    For each p in projs
        Msgbox p.Name
    next

These are searches on the CounterValue table. The project search results in the following SQL:

SELECT project\_id FROM CRM5.CounterValue WHERE project\_id &gt; 0 AND saleStatus = 1 AND amountClassId = 69 AND lastRegistered &lt; 1126224000