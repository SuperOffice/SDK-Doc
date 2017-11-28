---
uid: RoleBasedSecurity
title: Role-Based Security
---

<see cref="IRole">SORole</see> exposed on both Associates and User objects.

Associate.Role -&gt; SORole (read-only)

User.Role  -&gt; SORole (read/write)

Roles can be read-only objects in this version – just expose the get functions on SRoleModel:

## IRole

* Identity (read-only)
* Name (read-only)
* Description (read-only)
* HasFunctionRight( string )
* DataRight( SOTable, SORelationship ) returns string ("CRUD" for full access, "R" for read-only.)

Note the use of a string instead of an id to query the function rights.

* SOTable is an existing enum.
* SORelationship is a new enum.

Function rights have unique string ids as well as an id – to make code easier to read.

Example
-------

```vb
    Set curUser = db.GetAssociate( db.GetCurrentAssocId )
    canRun = curUser.Role.HasFunctionRight( "allow-bulk-mailmerge" )
```


If you had user admin permission, then you can use the Admin object to edit or add new roles with one or more rights. C = create, R = Read, U = Update, D = Delete:

```vb
    Set newRole = db.Admin.CreateRole( enRoleTypeEmployee, Nothing )
    newRole.Name = "My role"
    newRole.Description = "Read only role"
    Set bulkInterest = db.Admin.GetFunctionRight( "allow-bulk-interests" )
    Set adminSaint = db.Admin.GetFunctionRight( "admin-saint-regeneration" )
    newRole.AddFunctionRight( bulkInterest )
    newRole.AddFunctionRight( adminSaint )
    newRole.DataRight( enTableContact, enRelToOwner ) = "CRUD"
    newRole.DataRight( enTableContact, enRelToGroup ) = "CRU"
    newRole.DataRight( enTableContact, enRelToOtherGroup ) = "CR"
    newRole.DataRight( enTableContact, enRelToOther ) = "R"
    newRole.DataRight( enTableProject, enRelToOwner ) = "CRUD"
    newRole.DataRight( enTableProject, enRelToGroup ) = "CRU"
    newRole.DataRight( enTableProject, enRelToOtherGroup ) = "CRU"
    newRole.DataRight( enTableProject, enRelToOther ) = "CRU"
    newRole.Save
```


This API corresponds to the Role panel in the Admin client:

![Admin Role panel](../images/admin%20role.gif)
