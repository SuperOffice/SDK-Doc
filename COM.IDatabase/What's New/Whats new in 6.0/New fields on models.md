---
uid: Newfieldsonmodels
title: New fields on models
---

###     New Fields On Models

New fields added to reflect the new functionality in SIX.

**Publish checkbox:**

    <see cref="IProject.PublishType">Project.PublishType</see> 
    <see cref="IAppointment.PublishType">Appointment.PublishType</see> 
    Document.PublishType 
    Sale.PublishType  

**Visible for specific user-group**

    <see cref="IAppointment.PrivateToGroup">Appointment.PrivateToGroup</see> 
    <see cref="IDocument.PrivateToGroup">Document.PrivateToGroup</see> 
    Sale.PrivateToGroup 
    Selection.PrivateToGroup 

**Selection**

    <see cref="ISelection.IncludeFirstPerson">Selection.IncludeFirstPerson</see> 

**New user defined fields**

    <see cref="IAppointment.UDef">Appointment.Udef</see>  
    <see cref="IDocument.UDef">Document.Udef</see>  

**New appointment fields**

    <see cref="IAppointment.Location">Appointment.Location</see> 
    <see cref="IAppointment.EmailId">Appointment.EmailId</see> 
    <see cref="IAppointment.AllDayEvent">Appointment.AllDayEvent</see> 
    <see cref="IAppointment.FreeBusy">Appointment.FreeBusy</see> 

**Expose the user-group of the owner as a list item**

    <see cref="IContact.Group">Contact.Group</see>  
    <see cref="IProject.Group">Project.Group</see>  
    <see cref="IDocument.Group">Document.Group</see>  
    <see cref="ISale.Group">Sale.Group</see>  
    <see cref="IAppointment.Group">Appointment.Group</see>  
    Relation.Group   

**New settings**

    <see cref="ISettings.SaintLicense">Settings.SaintLicense</see>
    <see cref="ISettings.SaintEnabled">Settings.SaintEnabled</see>
    <see cref="ISettings.SaintUpdateInRealTime">Settings.SaintUpdateInRealTime</see>
    <see cref="ISettings.ExpanderKeyLicense">Settings.ExpanderKeyLicense</see>
    <see cref="ISettings.SynchronizerSites">Settings.SynchronizerSites</see>
    <see cref="ISettings.OutlookSynchronizerUsers">Settings.OutlookSynchronizerUsers</see>

**UDef field changes.**

    <see cref="IUDefField.FieldIdentity">UDefField.Identity</see>    return new identity value rather than updated count field for Udeffield table.
