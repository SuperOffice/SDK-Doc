---
title: Activities
path: /EJScript/NetServer examples/Activities
sortOrder: 9540
---

```crmscript!
    // here we find all activities on companies that has happened the last week
    
    NSContactAgent contactAgent;
    
    // if the starttime is set in the future instead, we will get all activities since last login
    DateTime startTime = getCurrentDateTime();
    startTime.addDay(-7);
    
    Integer[] categories; // if this is empty all categories will be returned
    
    // the different action types are:
    // Created = 1, Updated = 2, NewActivity = 4, ActivityCompleted = 8, PersonAdded = 16, PersonUpdated = 32
    // if you want several action types, add together the desired ones.
    
    Integer actionType = 63; // here we go for all the action types
    
    NSContactActivity[] activities = contactAgent.GetMyActiveContacts(startTime, categories, actionType);
    
    for (Integer c = 0; c < activities.length(); c++)
    {
      print("At the time of " + activities[c].GetActionTime().toString() + ", " + activities[c].GetActivityPersonName() + " carried out an activity on the company " + activities[c].GetName() + "\n");
    }
```

