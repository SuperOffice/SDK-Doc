---
uid: Newfieldsonmodels
title: New fields on models
---

###     New Fields On Models

New fields added to reflect the new functionality in SIX.

**Publish checkbox:**

    [Project.PublishType](SUPEROFFICEDBLib~SOProject~PublishType.md) 
    [Appointment.PublishType](SUPEROFFICEDBLib~SOAppointment~PublishType.md) 
    Document.PublishType 
    Sale.PublishType  

**Visible for specific user-group**

    [Appointment.PrivateToGroup](SUPEROFFICEDBLib~SOAppointment~PrivateToGroup.md) 
    [Document.PrivateToGroup](SUPEROFFICEDBLib~SODocument~PrivateToGroup.md) 
    Sale.PrivateToGroup 
    Selection.PrivateToGroup 

**Selection**

    [Selection.IncludeFirstPerson](SUPEROFFICEDBLib~SOSelection~IncludeFirstPerson.md) 

**New user defined fields**

    [Appointment.Udef](SUPEROFFICEDBLib~SOAppointment~UDef.md)  
    [Document.Udef](SUPEROFFICEDBLib~SODocument~UDef.md)  

**New appointment fields**

    [Appointment.Location](SUPEROFFICEDBLib~SOAppointment~Location.md) 
    [Appointment.EmailId](SUPEROFFICEDBLib~SOAppointment~EmailId.md) 
    [Appointment.AllDayEvent](SUPEROFFICEDBLib~SOAppointment~AllDayEvent.md) 
    [Appointment.FreeBusy](SUPEROFFICEDBLib~SOAppointment~FreeBusy.md) 

**Expose the user-group of the owner as a list item**

    [Contact.Group](SUPEROFFICEDBLib~SOContact~Group.md)  
    [Project.Group](SUPEROFFICEDBLib~SOProject~Group.md)  
    [Document.Group](SUPEROFFICEDBLib~SODocument~Group.md)  
    [Sale.Group](SUPEROFFICEDBLib~SOSale~Group.md)  
    [Appointment.Group](SUPEROFFICEDBLib~SOAppointment~Group.md)  
    Relation.Group   

**New settings**

    [Settings.SaintLicense](SUPEROFFICEDBLib~SOSettings~SaintLicense.md)
    [Settings.SaintEnabled](SUPEROFFICEDBLib~SOSettings~SaintEnabled.md)
    [Settings.SaintUpdateInRealTime](SUPEROFFICEDBLib~SOSettings~SaintUpdateInRealTime.md)
    [Settings.ExpanderKeyLicense](SUPEROFFICEDBLib~SOSettings~ExpanderKeyLicense.md)
    [Settings.SynchronizerSites](SUPEROFFICEDBLib~SOSettings~SynchronizerSites.md)
    [Settings.OutlookSynchronizerUsers](SUPEROFFICEDBLib~SOSettings~OutlookSynchronizerUsers.md)

**UDef field changes.**

    [UDefField.Identity](SUPEROFFICEDBLib~SOUDefField~FieldIdentity.md)    return new identity value rather than updated count field for Udeffield table.