---
title: Project management
uid: crmscript_projects_run
SortOrder: 20
---

Whether you're a project manager or head of department, inspecting the current status of projects provides valuable info.

> [!TIP]
> You can only retrieve projects for persons that are SuperOffice users ([associates](xref:crmscript-employees.<br/>The signed-in user must also have permission to view those projects. Otherwise, an exception is thrown.

## Get selected projects

To call `GetProjectList()`, we need to create the list of project IDs first.

In this example, we use [SearchEngine](xref:crmscript_search_engine) to get the ID of all projects headed by a specific associate and not marked as *done*.

```crmscript
String associateId = "5";
Integer[] projectIds;

SearchEngine se;
se.addFields("project","project_id");
se.addCriteria("project.associate_id", "OperatorEquals", associateId,"OperatorAnd", 1);
se.addCriteria("project.done", "OperatorEquals", "=","OperatorAnd", 1);
se.execute();

while (!se.eof()) {
  projectIds.pushBack(se.getField(0).toInteger());
  se.next();
}
```

### NSProject[] GetProjectList(Integer[] p0)

```crmscript
NSProjectAgent agent;
NSProject[] projectList = agent.GetProjectList(projectIds);
```

## Projects and companies

A company is implicitly linked to a project when at least 1 person in that organization is a member of that project.

### NSProject[] GetProjectsFromContact(Integer contactId)

```crmscript!
Integer contactId = 4;
NSProjectAgent agent;
NSProject[] projectList = agent.GetProjectsFromContact(contactId);

foreach (NSProject p in projectList) {
  printLine(p.GetProjectId().toString() +" | " + p.GetName());
}
```

## Involved parties

### NSProject[] GetProjectsFromPerson(Integer personId)

```crmscript
Integer personId = 5;
NSProjectAgent agent;
NSProject[] projectList = agent.GetProjectsFromPerson(personId);
```
