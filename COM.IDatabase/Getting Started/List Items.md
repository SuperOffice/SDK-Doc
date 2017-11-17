---
uid: startListItems
title: List Items
---

Remember this table structure from the database section?

![](../images/list-items-db-struct.gif)

 

There are actually four functions on the database object which deal with lists and list items.

-   [Database.GetHeadings](SUPEROFFICEDBLib~Database~GetHeadings.md)
-   [Database.GetList](SUPEROFFICEDBLib~Database~GetList.md)
-   [Database.GetListItem](SUPEROFFICEDBLib~Database~GetListItem.md)
-   [Database.GetListItemByName](SUPEROFFICEDBLib~Database~GetListItemByName.md)

 

### GetHeadings

GetHeadings returns the list of headings. Under each heading you can get a list of the items. You can use this to build a cascading menu if you wanted. The object structure reflects the database structure.

![](../images/list-items-headings.gif)

```
Set list = db.GetHeadings( enTableCategory )
For each heading in list
   msg = msg & heading.HeadingText & " contains "
   msg = msg & heading.Items.Count & " items"
   msg = msg & vbCrLf
   For each item in heading.Items
       msg = msg & "   " & item.Text & vbCrLf
   Next
Next
```
 

 

### GetList

GetList returns all the items in one collection – very handy for building a simple drop-down. The list is filtered, but has no headings. It is easier to traverse the list in this format.

![](../images/list-items-getlist.gif)

```
Set list = db.GetList( enTableCategory )
msg = list.Count & " items" & vbCrLf
For each item in list
   msg = msg & item.Text & " "
   msg = msg & item.Tooltip
   msg = msg & vbCrLf
Next
```
 

### GetListItem and GetListItemByName

GetListItem returns one item that matches a particular id – very handy when you know what you want.

![](../images/list-items-getlistitem.gif)
 
```
Set item = db.GetListItem( enTableCategory, 123 )
MsgBox item.Tooltip,,item.Id & "=" & item.Text

Set item = db.GetListItemByName( enTableCategory, "VIP Customer" )
MsgBox item.Tooltip,,item.Id & "=" & item.Text
```
 

### List Item Properties

Objects like Appointment and Contact have list item properties. You can access the item's text and id directly from the model:

```
Set cont = db.GetContact( 123 )
msg = "Contact " & cont.Name & " = " & cont.Category.Text
MsgBox msg,,"Contact category"
```
 

You change a contact's category by assigning to the contact's category property:

```
Set item = db.GetListItem( enTableCategory, 123 )
Set cont = db.GetContact( 123 )
cont.Category = item
cont.Save
MsgBox "Changed category on " & cont.Name & " to " & item.Text
```
