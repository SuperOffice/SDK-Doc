---
title: Projects
uid: crmscript_projects
SortOrder: 35
---

A project typically consists of different stages. For each stage, you have certain activities and perhaps documents that need to be completed. With every activity and every stage completed, you will get closer to completing the project.

## Key info

* a unique ID
* a name
* a project manager or owner
* project members
* the type of project
* a status
* milestones
* an (expected) end date

## Retrieve a project

**To view basic info, use NSProject:**

```crmscript
NSProjectAgent projectAgent;
NSProject p = projectAgent.GetProject(1);
printLine(p.GetType());
```

**To view (and possibly update) complex info, use NSProjectEntity:**

```crmscript!
NSProjectAgent projectAgent;
NSProjectEntity p = projectAgent.GetProjectEntity(1);
printLine(p.GetProjectType().GetValue());
```

## Project type

A *project type* is a named set of reuseable info that will help you standardize the process. Aside from the name and ID, you'll find info such as:

* the expected duration
* whether a [project guide](@crmscript_project-guides) is available
* stages

**List available types:**

```crmscript!
SearchEngine se;
se.addFields("ProjType", "ProjType_id,name");
print(se.executeTextTable());
```

## Project guides

Using a [*guide*](@crmscript_project-guides) will simplify and structure the process for the project manager with suggestions for which [follow-ups](@crmscript_followups) to do and which [documents](@crmscript-docs) to create at each stage.

## Status of a project

| Status | Description |
|:------:|:------------|
| 1      | planned     |
| 2      | in progress |
| 3      | completed   |
| 4      | stopped     |
| 5      | closing     |

**To get an updated list:**

```crmscript!
NSListAgent listAgent;
NSProjectStatus[] statuses = listAgent.GetProjectStatuses();

foreach (NSProjectStatus s in statuses) {
  printLine(s.GetId().toString() + " " + s.GetValue());
}
```

Or:

```crmscript!
SearchEngine se;
se.addFields("ProjStatus", "ProjStatus_id,name");
print(se.executeTextTable());
```

## Projects vs. other entities

When working with projects, data will often intersect with the following entities:

* [company](@crmscript-class-company) (contact table)
* [contact](@crmscript-class-customer) (person table)
* [documents](@crmscript-docs)
* [follow-ups](@crmscript_followups) (appointment table)
* [sales](@crmscript_sales)

## In this section

1. autolist
