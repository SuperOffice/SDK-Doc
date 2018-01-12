---
uid: RoleBasedSecurity
title: Role-Based Security
---

### Role-Based Security

This API corresponds to the Role panel in the Admin client:

![Admin Role panel](../Images/admin%20role.gif) 

The grid shown above corresponds to the DataRight rows for the role.

Each cell equals one row in the DataRight table. The "data-owned-by" values are stored in the DataRight.RelationshipToOwner field.

The rights for the different data objects are stored by varying the table-id stored in the DataRight.TableId.

The dropdown value in each cell is stored as a CRUD value. Delete = CRUD, while Create = CR.

 
```SQL
Select \* from dataright where roleid = 4
```

![](../Images/DataRight-CRUD.png)

 

 

Each user has one and only one role.

Each role has a set of function rights and a set of data rights.

Function rights are stored in the FunctionRight table.

Function right to role assignments are stored in the FunctionRightToRoleLink table.

![](../Images/RoleDiagram.png)


### See Also:

[dataright Table](../Tables/dataright.md)
[functionright Table](../Tables/functionright.md)
[role Table](../Tables/role.md)