---
uid: exampleGetListOfCategories
title: Get List Of Categories
---

### Get all categories

```SQL
select l.category\_id, l.name, l.tooltip
from Category l
where l.deleted = 0
order by l.rank
```

The result is a list of categories, ordered by rank in the list.

The deleted items are not included, but items which should be hidden from the user because of MDO filtering are included.

![](../Images/select-category1.gif) 

 

### Filter without heading

Filtering means that items that are hidden from the user should not be shown.

Filtering is done through the user's group membership.

Some items are hidden from some groups.

```SQL
select l.category\_id, l.name, l.rank
from Category l, CategoryGroupLink gl, UserGroupLink ugl
where l.deleted = 0
and l.category\_id = gl.category\_id
and gl.group\_id = ugl.usergroup\_id
and ugl.assoc\_id = &lt;my assoc\_id&gt;
order by l.rank
```

The result is a set of list names, filtered via the user's group membership. Items that the user is not allowed to see will not be returned.

Note that a user may be a member of more than one usergroup, and we therefore have to join against the [UserGroupLink](../Tables/USERGROUPLINK.md) table.

Note that items that are visible to more than one group will be returned twice. Use SELECT DISTINCT to filter the duplicates out.

![](../Images/select-category2.gif) 

 

### Get all items with headings, no filtering

```SQL
select h.rank, h.name, l.name, l.category\_id, l.rank
from Heading h, Category l, CategoryHeadingLink hl
where l.deleted = 0
and h.heading\_id = hl.heading\_id
and l.category\_id = hl.category\_id
order by h.rank, l.rank
```
 

The result is a set of heading-name pairs, ordered by heading and then the desired order within each heading.

 Note that an item may appear under multiple headings - this allowed by the list admin tool.

![](../Images/select-category3.gif)

 

### Filter and group under headings

```SQL
select distinct h.rank, h.name, l.name, l.category\_id, l.rank
from Heading h, Category l, CategoryHeadingLink hl, CategoryGroupLink gl, UserGroupLink ugl
where l.deleted = 0
and h.heading\_id = hl.heading\_id
and l.category\_id = hl.category\_id
and l.category\_id = gl.category\_id
and gl.group\_id = ugl.usergroup\_id
and ugl.assoc\_id = **&lt;my assoc\_id&gt;**
order by h.rank, l.rank
```

 

This will give the correctly filtered set of names from the list, ordered by headings and rank.

List items which are hidden from the user will be removed from the result by the database using the UserGroupLink join.