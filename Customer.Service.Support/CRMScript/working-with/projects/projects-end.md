---
title: Ending projects
uid: crmscript_projects_end
SortOrder: 50
---

In the end, regardless of whether you followed a project guide or not, a sale is either **completed** or **stopped**. It is time to wrap things up and at the same time make sure the project manager and others can learn from it either way.

| Status | Description |
|:------:|:------------|
| 3      | completed   |
| 4      | stopped     |

## Completed

The date is no longer an estimate, and you can record the actual completion.

```crmscript
NSProjectAgent agent;

NSProjectEntity p = agent.GetProjectEntity(2);

p.SetEndDate(getCurrentDateTime());
p.SetCompleted(true;)

NSProjectStatus status;
status.SetValue(3);
sale.SetProjectStatus(status);

p = agent.SaveProjectEntity(p);
```

## Stopped

Not all projects are viable, and you might need to stop a current project.

The update is very similar to marking it complete. Simply create an NSProjectStatus with value 4 instead of 3.

> [!NOTE]
> You should cancel all scheduled upcoming activities before marking it as stopped.
