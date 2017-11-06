---
uid: MDOlists
title: MDO lists
---

Multi-Department Organisations
==============================

Larger organisations may need to hide non-relevant information from employees. This is now possible with the Multi-Department Organisation (hereafter referred to as MDO) lists.

 

To take Templates as an example, this means that, if MDO is implemented in SuperOffice, a user will see only those Templates, with a record in TemplateGroupLink pointing to the UserGroup the user is a member of.

The templates will be grouped with headings taken from the Heading table, and under each heading will be the templates that have a TemplateHeadingLink record pointing both to the template and the Heading. This means that a single template may appear several times in the list, under several headings.

Relations
---------

Each primary list table will have two link tables related to MDO functionality; one for filtering and one for grouping.

 

The **Heading** table contains the headings to be used in the MDO list boxes, for all lists.

The Link table between a list and the Heading table is always named **&lt;list table name&gt;HeadingLink**.

The UserGroup table is treated in a special way. It has no direct Link tables, and is instead used by Link tables as a target to implement the MDO filtering.

An associate is a member of only one UserGroup, as specified in the associate record. MDO filtering will be implemented by showing records from the **other** lists if, and only if, they have entries in the **&lt;list table name&gt;GroupLink**.

 

The following diagram illustrates the new structure:

![](../Images/MDO-grouplinks.gif)

Table ordering
--------------

To make coding simpler, the List tables are defined in a specific order so that the Table Id of the Link tables can be calculated from the main table Id. The order is:

| Id             | Descr
|----------------|--------------------|
|    Id = k      | Main table, for instance, Template
|    Id = k+1    | GUI Group link, in this case, TemplateHeadingLink
|    Id = k+2    | Filter link, in this case, TemplateGroupLink

 

 

Example
=======

### Filter without heading

```SQL
select l.category\_id, l.name
from Category l, CategoryGroupLink gl, UserGroupLink ugl
where l.deleted = 0
and l.category\_id = gl.category\_id
and gl.group\_id = ugl.usergroup\_id
and ugl.assoc\_id = &lt;my assoc\_id&gt;
```


The result is a set of list names, filtered via the user's group membership. Items that the user is not allowed to see will not be returned.

Note that a user may be a member of more than one usergroup, and we therefore have to join against the [UserGroupLink](../Tables/USERGROUPLINK.md) table.

Note that items that are visible to more than one group will be returned twice. Use SELECT DISTINCT to filter the duplicates out.