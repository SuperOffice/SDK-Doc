---
uid: Newfieldsonmodels
title: New fields on models
---

###     New Fields On Models

New fields added to reflect the new functionality in SIX.

**Publish checkbox:**

    <see cref="SOProject.PublishType">Project.PublishType</see> 
    <see cref="SOAppointment.PublishType">Appointment.PublishType</see> 
    Document.PublishType 
    Sale.PublishType  

**Visible for specific user-group**

    <see cref="SOAppointment.PrivateToGroup">Appointment.PrivateToGroup</see> 
    <see cref="SODocument.PrivateToGroup">Document.PrivateToGroup</see> 
    Sale.PrivateToGroup 
    Selection.PrivateToGroup 

**Selection**

    <see cref="SOSelection.IncludeFirstPerson">Selection.IncludeFirstPerson</see> 

**New user defined fields**

    <see cref="SOAppointment.UDef">Appointment.Udef</see>  
    <see cref="SODocument.UDef">Document.Udef</see>  

**New appointment fields**

    <see cref="SOAppointment.Location">Appointment.Location</see> 
    <see cref="SOAppointment.EmailId">Appointment.EmailId</see> 
    <see cref="SOAppointment.AllDayEvent">Appointment.AllDayEvent</see> 
    <see cref="SOAppointment.FreeBusy">Appointment.FreeBusy</see> 

**Expose the user-group of the owner as a list item**

    <see cref="SOContact.Group">Contact.Group</see>  
    <see cref="SOProject.Group">Project.Group</see>  
    <see cref="SODocument.Group">Document.Group</see>  
    <see cref="SOSale.Group">Sale.Group</see>  
    <see cref="SOAppointment.Group">Appointment.Group</see>  
    Relation.Group   

**New settings**

    <see cref="SOSettings.SaintLicense">Settings.SaintLicense</see>
    <see cref="SOSettings.SaintEnabled">Settings.SaintEnabled</see>
    <see cref="SOSettings.SaintUpdateInRealTime">Settings.SaintUpdateInRealTime</see>
    <see cref="SOSettings.ExpanderKeyLicense">Settings.ExpanderKeyLicense</see>
    <see cref="SOSettings.SynchronizerSites">Settings.SynchronizerSites</see>
    <see cref="SOSettings.OutlookSynchronizerUsers">Settings.OutlookSynchronizerUsers</see>

**UDef field changes.**

    <see cref="SOUDefField.FieldIdentity">UDefField.Identity</see>    return new identity value rather than updated count field for Udeffield table.
