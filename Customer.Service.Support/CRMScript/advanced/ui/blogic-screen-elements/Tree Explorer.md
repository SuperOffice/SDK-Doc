---
title: Tree explorer
uid: blogic_tree_explorer
sortOrder: 90
---

This element lists information in a tree view. The tree is capable of expanding or collapsing.

## Configuration

## Functions

### setFieldValue(String, Map values)

| Action    | Map keys               | Description                                    |
|:----------|:-----------------------|:-----------------------------------------------|
| add2Entry | id<br/>parent.id<br/>onclick<br/>href<br/>name<br/>tooltip<br/>target<br/>order<br/>leaf<br/>icon<br/>icon.contentType<br/>icon.filename | Adds an entry to the tree |
| addLink   | href<br/>target<br/>tooltip<br/>icon<br/>icon.contentType<br/>icon.filename | Adds a new link |
| set       |                        | Sets various fields |

```crmscript
setSortByName(map["sortbyName"]);
setPruneEmptyFolders(map["pruneEmptyFolders"].toInteger() == 1);
setExpandId(map["expandId"]);
```
