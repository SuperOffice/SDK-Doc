---
title: Select User
uid: blogic_select_user
sortOrder: 19
---

This element is used to select a user in the system.

## Configuration

| Value             | Description                  |
|:------------------|:-----------------------------|
| AddNone           | If true, then the value "none" is available in the drop-down |
| AddNotDelegated   | If true, then the value "(not delegated)" is available |
| AddDelegate       | If true, then the value "(Automatically assigned)" is available. From 3.0.11 |
| AddAll            | If true, then the value "all users" are available |
| AddNoValue        | If true, then empty is available |
| AddActiveUser     | If true, then the value "(Active user)" is available in the drop-down |
| AddNotPresent     | If true, then include users set as "Not present |
| RemoveNone        | If true, then the blank value is removed from the drop-down |
| AddDeleted        | If true, then deleted deleted users are available |
| AddReadOnly       | If true, then users with read only status are available|

## Functions

### setValue()

Sets the user from the supplied ID.

### toString()

Return the IS of the selected entry.

### toInteger()

Return the IS of the selected entry.
