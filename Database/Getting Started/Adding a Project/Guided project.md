---
uid: Guidedproject
title: Guided project
---
<properties 
SortOrder="4"
/>


In 7.1 we introduce the Project Guide, for project stages, activities and milestones. There are some [new datebase fields](Table%20changes%20from%207.0%20to%207.1.md) to support this functionallity

![](../../Images/ProjectGuide.png)

The project.type\_idx says if the project is guided or not:

Use your favorite query tool and try this query:

```SQL
 SELECT \* FROM projtype WHERE hasGuide = 1
```

Now locate all guided projects in the database with this query:

```SQL
SELECT \* FROM project WHERE type\_idx in (SELECT projtype\_id FROM projtype where hasGuide = 1)
```

![](../../Images/ProjectTable.png)

If a project is guided it will also have several statuses, if you know the project\_id you may check the current status:

```SQL
SELECT \* FROM projStatus WHERE projstatus\_id = (select status\_idx from project where project\_id = 29)
```

![](../../Images/ProjectStatusCurrent.png)

 

The different stages defined for a projects different statuses is found in the ProjectTypeStatusLink table:

```SQL
SELECT \* FROM projecttypestatuslink WHERE projtype\_id = (select type\_idx from project where project\_id = 29)
```

![](../../Images/ProjTypeStatusLink.png)

The different status names are found in table ProjeStatus:

```SQL
select \* from PROJSTATUS where ProjStatus\_id in 
    (select ProjStatus\_id from PROJECTTYPESTATUSLINK where projType\_id = 4)
```

![](../../Images/ProjStatus.png)

The different tasks defined for a projects different statuses is found in the ProjectTypeStatusLink table:

```SQL
SELECT \* FROM suggestedappointment WHERE projectTypeStatusLinkId = 2
```

![](../../Images/SuggestedAppointment.png)

The different tasks defined for a projects different statuses is found in the ProjectTypeStatusLink table:

```SQL
SELECT \* FROM suggesteddocument WHERE projectTypeStatusLinkId = 2
```

![](../../Images/SuggestedDocument.png)
