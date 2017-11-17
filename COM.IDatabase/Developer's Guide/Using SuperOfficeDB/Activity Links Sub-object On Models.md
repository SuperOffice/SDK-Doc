---
uid: ActivityLinksSubobjectOnModels
title: Activity Links Sub-object On Models
---

###     Activity Links Sub-object On Models

Activity/Document links is complex enough to deserve its own sub-object. This replaces the old single-value DocumentLink property that Appointment and Sale used to have.

The new system uses the relation table to allow many-to-many links between all activities.

Currently we only support document-related links (i.e. you can't link activities and sales yet)

 

The activity models expose a suitable links object:

-       [Appointment.ActivityLinks](SUPEROFFICEDBLib~SOAppointment~ActivityLinks.md) 
-       [Sale.ActivityLinks](SUPEROFFICEDBLib~SOSale~ActivityLinks.md) 
-       [Document.Links](SUPEROFFICEDBLib~SODocument~ActivityLinks.md)

 

The [SOActivityLinks](SUPEROFFICEDBLib~SOActivityLinks.md) object has the following operations:

    AddDocument( Document )
    RemoveDocument( Document )
    Documents -&gt; Collection of Document model objects
Links are saved when the owner object is saved.

Example:

```
    set appoint = db.GetAppoint( 123 )
    set doc = db.GetDocument( 456 )
    set sale = db.GetSale( 987 )
    sale.ActivityLinks.AddDocument( doc )
    sale.Save
    appoint.ActivityLinks.AddDocument( doc )
    appoint.Save
    for each d in appoint.ActivityLinks.Documents
       msgbox d.Header
    next
```