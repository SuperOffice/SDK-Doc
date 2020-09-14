---
title: Select Reply Template
uid: blogic_select_reply_template
sortOrder: 19
---

This element is used to select a reply template or a reply template folder.

## Configuration

| Value             | Description                  |
|:------------------|:-----------------------------|
| onlyLeafNodes     | If set to true, only leaf nodes may be selected. |

## Functions

### getString()

Returns the ID of the selected node.

> [!NOTE]
> Folders will return "folder." plus ID, while reply templates will return only the ID.
