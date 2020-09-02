---
title: Starting projects 
uid: crmscript_projects_start
SortOrder: 10
---

## Register a project

```crmscript!
NSProjectAgent agent;
NSProjectEntity newProject = agent.CreateDefaultProjectEntity();

newProject.SetName("Back to school campaign");

NSListAgent listAgent;
newProject.SetProjectType(listAgent.GetProjectType(1));

NSAssociateAgent associateAgent;
newProject.SetAssociate(associateAgent.GetAssociate(5));

DateTime dt;
dt.addMonth(2);
newProject.SetEndDate(dt);

newProject = agent.SaveProjectEntity(newProject);

print(newProject.GetProjectId().toString());
```

## Update a project

```crmscript
NSProjectAgent agent;
NSProjectEntity p = agent.GetProjectEntity(4);

p.SetDescription("Let our advance worrying become advance thinking and planning."); // Winston Churchill

p = agent.SaveProjectEntity(p);
```

## Delete a project

It might be necessary to delete a project if it is no longer appropriate to store it in the database.

```crmscript
NSProjectAgent projectAgent;
agent.DeleteProjectEntity(123);
```

## Reference

### Frequently used fields

| Field          | Description                                  |
|:---------------|:---------------------------------------------|
| project_id     | ID                                           |
| name           | name of project                              |
| associate_id   | project manager or owner                     |
| type_idx       | type of project                              |
| status_idx     | status                                       |
| done           | 0 = no, 1 = yes                              |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-project.htm).

### Timestamp values

| Field             | Description                                               |
|:------------------|:----------------------------------------------------------|
| registered        | UtcDateTime of registration                               |
| updated           | UtcDateTime of last update                                |
| endDate           | expected closing time or when it was completed or stopped (DateTime) |
| nextMilestoneDate | closest non-complete future milestone activity (DateTime) |
