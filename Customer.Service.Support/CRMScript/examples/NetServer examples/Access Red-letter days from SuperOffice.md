---
title: Access Red-letter days from SuperOffice
path: /EJScript/NetServer examples/Access Red-letter days from SuperOffice
sortOrder: 9539
---

```crmscript!
    // check which days in the christmas period are holidays
    
    NSAppointmentAgent appointmentAgent;
    
    DateTime start = String("2010-12-22").toDateTime();
    DateTime end = start;
    end.addDay(10);
    
    Integer associateId = 0; // means the currently logged in associate in this case
    
    NSRedLetterInformationListItem[] redLetterDays = appointmentAgent.GetRedLetterInformationListByDatesAndAssociate(start, end, associateId);
    
    for (Integer n = 0; n < redLetterDays.length(); n++)
    {
      print(start.toString() + " is holiday: " + redLetterDays[n].GetRedLetterInformation().GetIsOwnCountryHoliday().toString() + "\n");
      start.addDay(1);
    }
```

