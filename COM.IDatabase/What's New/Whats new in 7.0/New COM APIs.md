---
uid: New_COM_APIs
title: New COM APIs
---

A summary of the new and changed COM APIs in 7.0

 

**Database**

<see cref="Database.Password">Password</see> - Obsolete, use SafeCredentials instead.

<see cref="Database.GetLocationList">GetLocationList</see> - Return resources that are locations

<see cref="SuperOffice.COM.SuperOfficeDB.Database.GetStagesForSaleType">GetStagesForSaleType( item )</see> - For filtering the stages list correctly.

<see cref="Database.SafeCredentials">SafeCredentials</see> - Ticket from NetServer - represents a login session.

 

**Contact, Person, Project, Sale, Appointment, Document**

<see cref="SOContact.ExternalFieldChanged">ExternalFieldChanged</see> - Signal SOCRM that something has happened outside its world – will force a save on model object when AutoSave is triggered. Forces the main record to be updated when object is saved, even if no internal values have changed.

<see cref="SOContact.ValidationMessage">ValidationMessage</see> - Signal SOCRM that Save should be blocked on the model object because of some reason.

<see cref="SOContact.AutoSaveOnFlush">AutoSaveOnFlush</see> - Save changes when Flush is triggered

<see cref="SOContact.AutoSaveOnChangeIdentity">AutoSaveOnChangeIdentity</see> - Save changes when identity is changed.

 

**Contact**

<see cref="SuperOffice.COM.SuperOfficeDB.SOContact.MergeTo">Contact.MergeTo( TargetContact )</see> - Merge this contact with another

<see cref="SuperOffice.COM.SuperOfficeDB.SOContact.Copy">Contact.Copy( newName, new Dept )</see> - Make a copy of this contact

 

**Person**

<see cref="SuperOffice.COM.SuperOfficeDB.SOPerson.MergeTo">Person.MergeTo( TargetContact )</see> - Merge two persons

<see cref="SuperOffice.COM.SuperOfficeDB.SOPerson.MoveTo">Person.MoveTo( newName, new Dept )</see> - Move a person to another contact

<see cref="SOPerson.ChatAddresses">ChatAddresses</see> - e-mail addresses of type 1

<see cref="SOPerson.VoIPAddresses">VoIPAddresses</see> - e-mail addresses of type 2

<see cref="SOPerson.Urls">Urls</see> - homepage links and the like. Urls with person\_id set

 

**Associate**

<see cref="SOAssociate.Groups">Groups</see> - List all groups user is member of

 

**Appointment**

<see cref="SOAppointment.Sale">Sale</see> - The sale this appointment is linked to

<see cref="SOAppointment.SuggestedAppointmentId">SuggestedAppointmentId</see> - This appointment came from a sales guide.

 

**Document** 

<see cref="SODocument.Sale">Sale</see> - The sale this document is linked to

<see cref="SODocument.SuggestedDocumentId">SuggestedDocumentId</see> - This document came from a sales guide

<see cref="SODocument.ExtRef">ExtRef</see> - same as <see cref="SODocument.Reference">Reference</see>

<see cref="SODocument.ArchiveProviderName">ArchiveProviderName</see> - string version of ArchiveProvider

 

**Project** 

<see cref="SuperOffice.COM.SuperOfficeDB.SOProject.MergeTo">Project.MergeTo( project )</see>

<see cref="SOProject.ActiveLinks">Project.ActiveLinks</see> – links to other projects, urls, documents etc

 

**ProjectMember**

<see cref="SOProjectMember.ExternalFieldChanged">ExternalFieldChanged</see>

<see cref="SOProjectMember.ValidationMessage">ValidationMessage</see>

 

**Selection**

<see cref="Enumerations.ESelectionType_EN">ESelectionType</see> enum changed! Static, Dynamic, Combination

<see cref="SOSelection.TargetTable">TargetTable</see> - what this is a selection of

<see cref="SOSelection.Completed">Completed</see> - is the selection marked as done?

 

**Sale**

<see cref="SOSale.ActiveLinks">ActiveLinks</see>

<see cref="SOSale.CanBeCompleted">CanBeCompleted</see>() – is the completed checkbox enabled? Requires status = lost or sold.

<see cref="SOSale.PostItText">PostItText</see>

<see cref="SOSale.NextDueDate">NextDueDate</see>

<see cref="SOSale.ReasonStalled">ReasonStalled</see> - mdo list item

<see cref="SOSale.ReasonSold">ReasonSold</see> - mdo list item

<see cref="SOSale.ReasonLost">ReasonLost</see> - mdo list item

<see cref="SOSale.ReopenDate">ReopenDate</see>

<see cref="SOSale.SaleType">SaleType</see> - mdo list item

<see cref="SOSale.Stage">Stage</see> - mdo list item - valid stages vary according to SaleType - same as old Probability

<see cref="SOSale.GetSuggestedAppointments">GetSuggestedAppointments</see>()

<see cref="SOSale.GetSuggestedDocuments">GetSuggestedDocuments</see>()

 

**Settings**

<see cref="SOSettings.HasLicense">HasLicense</see>( licenseName ) – does user have access to license?

<see cref="SOSettings.GetNumLicense">GetNumLicense</see>( licenseName ) – total number of licenses

<see cref="SOSettings.NetServerOverrides">NetServerOverrides</see> - return the NetServer config file settings needed to log in to the database.

<see cref="SOSettings.SuperofConfigPath">SuperofConfigPath</see> - return the path to the superoffice.config file

 

**ActivityLinks**

<see cref="IActivityLinks.AddProject">AddProject</see>

<see cref="IActivityLinks.RemoveProject">RemoveProject</see>

<see cref="IActivityLinks.Projects">Projects</see>

 

**User** 

CredentialTypes - Returns a list of installed authentication providers. Default = CRM5/PASSWORD + ActiveDirectory

Credentials - List of authentications for user. Currently will only have one item in it.

AddCredential - adds new credential provider to list. Will automatically remove existing credentials. *Currently we have only one credential per user, but in the future we hope to support multiple credentials per user.*

RemoveCredential - removes a credential type from the user, leaving the user with no means of logging in.

 

Setting the password to “blah” is the same as saying

                soUser.AddCredential "CRM5/PASSWORD", "blah", ""

 

**Admin**

<see cref="SOAdmin.AddSystemUser">AddSystemUser</see>( name )

<see cref="SOAdmin.AddAnonymousUser">AddAnonymousUser</see>( name )

                You will need the appropriate admin license to create the user.

 

    set sys1 = db.Admin.AddSystemUser("Sys01")
    sys1.Password = "foobar"
    sys1.save

 

**Database**

<see cref="SuperOffice.COM.SuperOfficeDB.SOStringResources">StringResources</see>.FromId( id )

                1234 -&gt; “bla bla”

StringResources.FromName( name )

                “\[SR\_BLA\]” -&gt; “bla bla”

StringResources.FromString( string )

                “\[SR\_XYZ\]\[SR\_BLA\]:” -&gt; “abc bla bla:”

set db = CreateObject("SuperOfficeDB.Database")
msg = msg & db.StringResources.FromId(30979) & vbcrlf
msg = msg & db.StringResources.FromName("\[TIU\_YEAR\]") & vbcrlf
msg = msg & db.StringResources.FromString("This is TIU\_YEAR '\[TIU\_YEAR\]'") & vbcrlf
msgbox msg,,"Strings"

 

New Eventserver events
======================

**Contact Events**

ContactBeforeMerge(SourceContactId, DestinationContactId )
ContactAfterMerge(ContactId)
ContactBeforeCopy(ContactId)
ContactAfterCopy(SourceContactId, DestinationContactId)

**Person Events**

PersonBeforeMove(PersonId, NewContactId)
PersonAfterMove(PersonId)
PersonBeforeMerge(SourcePersonId, DestinationPersonId)
PersonAfterMerge(PersonId)

**Sale Events**

CurrentSaleStageChanged(oldStage, newStage)
CurrentSaleTypeChanged(oldType, newType)

**Project Events**

ProjectBeforeMerge(SourceProjectId, DestinationProjectId)
ProjectAfterMerge(ProjectId)