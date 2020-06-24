---
title: Get archive list items
path: /EJScript/NetServer examples/Get archive list items
sortOrder: 9541
---

```crmscript!
    // Here we use the ContactActivity archive provider to retrieve appointments
    
    String[] columns;
    columns.pushBack("text");
    
    NSArchiveOrderByInfo[] sortOrder;
    NSArchiveRestrictionInfo[] restriction;
    
    NSArchiveRestrictionInfo selectAll;
    selectAll.SetName("getAllRows");
    restriction.pushBack(selectAll);
    
    String[] entities;
    entities.pushBack("appointment");
    
    NSArchiveListItem[] result = archiveAgent.GetArchiveListByColumns("ContactActivity", columns, sortOrder, restriction, entities, 0, 100);
    
    for (Integer n = 0; n < result.length(); n++)
    {
      Map col = result[n].GetColumnData();
    
      for (col.first(); !col.eof(); col.next())
      {
        print(col.getKey() + ": " + col.getVal() + "\n");
      }
    }
```

