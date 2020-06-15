---
title: Samples
uid: crmscript_request_samples
---

## List available categories

```crmscript!
SearchEngine se;
se.addField("category.name");
printLine(se.executeTextTable());
```

## List available priorities

```crmscript!
SearchEngine se;
se.addField("Priority.name");
printLine(se.executeTextTable());
```

## Find requests

### Search for a ticket with a given tag

Tagging is a powerful tool for organizing and finding requests in SuperOffice Service.

```crmscript!
SearchEngine se;
se.addFields("ticket", "id,title");
se.addCriteria("ticket.tags", "in", "1,2");
printLine(se.executeTextTable());
```

> [!TIP]
> List tags by their ID as a comma-separated string.
