---
uid: UserdefinedFields
title: User-defined Fields
---

---
uid: guideUdefFields
title: User-defined Fields
---

This is a property that lets you read user-defined field layouts and values without having to do all the complicated work of looking up the current layout, finding the right field, figuring out which table (large or small?) and then which field in in the table is used.

You will find UDef property on Contact, Person, Project, and Appointment, Document and Sale objects.

-   [Contact.Udef](SUPEROFFICEDBLib~SOContact~UDef.md)
-   [Person.Udef](SUPEROFFICEDBLib~SOPerson~UDef.md)
-   [Project.Udef](SUPEROFFICEDBLib~SOProject~UDef.md)
-   [Appointment.Udef](SUPEROFFICEDBLib~SOAppointment~UDef.md)
-   [Document.Udef](SUPEROFFICEDBLib~SODocument~UDef.md)
-   [Sale.Udef](SUPEROFFICEDBLib~SOSale~UDef.md)

You can access the user-defined fields through their name or by their field id. The names of the fields are listed in the Admin client, even when the label is hidden from the end-user.

![](../images/udef-admin-fields.gif)

 

If the user-defined field label is “Remote travel::” then you can get the field value like this:

val = contact.Udef(“remote travel”).Value

Note that the Udef parameter is case-insensitive, and it will remove trailing spaces and colons when trying to match the field names.

i.e. “Remote Travel” and “remote travel: ” refer to the same field.

The object you get back holds information about the field (the label, the field type, the size, x,y position on the screen, and the value of the field.

![](../images/udef-contactcard.gif)

* How the udef field is displayed in the client*

 

### Example

Set db = CreateObject("SuperOfficeDB.Database")
db.Login "name", "pass"
Set cont = db.GetContact(2)
for each udeffield in cont.Udef
   print udeffield.Label & "=" & udeffield.Value
next
cont.Udef("distributor") = "some guy"
cont.Save

In this example we get contact record number two out of the database, and then we go through all the user-defined fields defined for contact and print out the label and the value associated with it.

The last two lines update the field labeled “Distributor:” with a new value and save the new value to the database.

If there is no field named “distributor” in the user-defined field layout for companies, then the lookup will return an empty object, and the attempt to assign to the empty object (Nothing to VB programmers, NULL to C++ developers) will cause an error. So check your spelling when using user-defined fields.

 

### List Items

If you have a field that contains a dropdown list, then the value it returns will not be a list item, but the list item id.

![](../images/udef-listitem.gif)

Together with the field's ListTableId you can get the list item you want:

set field = cont.Udef("Segment")
set item = db.GetListItem( field.ListTableId, field.Value )
print item.Id & " " & item.Text

 

### Notes

You cannot change the layout of user-defined fields through the programming API unfortunately. You must use the SuperOffice Admin client to add the fields and lists that you want to modify.

The Udef value can be a number, a string or an object – depending on what the field is defined as in the user-defined field layout.

You should check the field’s type before using the value. This will make your program more robust and less likely to crash when the user decides to update his user-defined fields and re-name some of the fields.

 

### Example

This example assumes you've added at least one  udef field to contact, and published the layout.

The example also assumes that the field is stored in field udcontactsmall.long01 -- field id 8961. If you need to find out what field id a particular field name corresponds to, you can use the [Database.Dictionary object](SUPEROFFICEDBLib~Database~Dictionary.md).

 

Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
if not loginOk then
   msgbox "Unable to log in"
   WScript.Quit
end if
Set contact = db.GetContact(2)
set f = contact.Udef.ByFieldId(8961)
' 8961 = UdContactSmall.long01
msg =  f.Label & vbcrlf
msg = msg & "default: " & f.DefaultValue & vbCrlf
msg = msg & "value: " & f.Value & vbCrlf
f.Value = 321
contact.Save
msg = msg & "new-value: " & f.Value & vbCrlf
MsgBox msg,,"User-def"

 

You should try changing the value of the field and reading it out.

Run the script several times to verify that the value was saved properly.