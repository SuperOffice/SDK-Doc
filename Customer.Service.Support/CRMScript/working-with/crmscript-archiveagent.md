---
title: Archive agent
SortOrder: 02
uid: crmscript_archiveagent
---

## Get NSArchiveListItem

This example uses the **ContactActivity** archive provider to retrieve [appointments](./follow-ups/appointment.md).

```crmscript!
String[] columns;
columns.pushBack("text");

NSArchiveOrderByInfo[] sortOrder;

NSArchiveRestrictionInfo[] restrictions;
NSArchiveRestrictionInfo selectAll;
selectAll.SetName("getAllRows");
restrictions.pushBack(selectAll);

String[] entities;
entities.pushBack("appointment");

NSArchiveAgent agent;
NSArchiveListItem[] result = agent.GetArchiveListByColumns("ContactActivity", columns, sortOrder, restrictions, entities, 0, 100);

foreach (NSArchiveListItem i in result) {
  Map col = i.GetColumnData();
  col.first();
  while (!col.eof()) {
    print(col.getKey() + ": " + col.getVal() + "\n");
    col.next();
  }
}
```
