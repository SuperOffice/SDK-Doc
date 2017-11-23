---
uid: startTheContactObject
title: The Contact Object
---

This is how the <see cref="SuperOffice.COM.SuperOfficeDB.SOContact">SOContact</see> object is put together

 

![](../images/contact-details.gif)

 

Country, Category and Business are all properties that contain a <see cref="SuperOffice.COM.SuperOfficeDB.IListTextItem">ListItem</see> object.

Contact.Phones returns a <see cref="SuperOffice.COM.SuperOfficeDB.SOPhones">Phones</see> object, which in turn contains individual <see cref="SuperOffice.COM.SuperOfficeDB.SOPhone">Phone</see> objects
