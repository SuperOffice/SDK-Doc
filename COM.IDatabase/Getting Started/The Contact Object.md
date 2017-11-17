---
uid: startTheContactObject
title: The Contact Object
---

This is how the [SOContact](SUPEROFFICEDBLib~SOContact.md) object is put together

 

![](../images/contact-details.gif)

 

Country, Category and Business are all properties that contain a [ListItem](SUPEROFFICEDBLib~IListTextItem.md) object.

Contact.Phones returns a [Phones](SUPEROFFICEDBLib~SOPhones.md) object, which in turn contains individual [Phone](SUPEROFFICEDBLib~SOPhone.md) objects