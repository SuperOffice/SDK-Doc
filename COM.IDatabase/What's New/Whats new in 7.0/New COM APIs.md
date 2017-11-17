---
uid: New_COM_APIs
title: New COM APIs
---

A summary of the new and changed COM APIs in 7.0

 

**Database**

[Password](SUPEROFFICEDBLib~Database~Password.md) - Obsolete, use SafeCredentials instead.

[GetLocationList](SUPEROFFICEDBLib~Database~GetLocationList.md) - Return resources that are locations

[GetStagesForSaleType( item )](SUPEROFFICEDBLib~Database~GetStagesForSaleType.md) - For filtering the stages list correctly.

[SafeCredentials](SUPEROFFICEDBLib~Database~SafeCredentials.md) - Ticket from NetServer - represents a login session.

 

**Contact, Person, Project, Sale, Appointment, Document**

[ExternalFieldChanged](SUPEROFFICEDBLib~SOContact~ExternalFieldChanged.md) - Signal SOCRM that something has happened outside its world – will force a save on model object when AutoSave is triggered. Forces the main record to be updated when object is saved, even if no internal values have changed.

[ValidationMessage](SUPEROFFICEDBLib~SOContact~ValidationMessage.md) - Signal SOCRM that Save should be blocked on the model object because of some reason.

[AutoSaveOnFlush](SUPEROFFICEDBLib~SOContact~AutoSaveOnFlush.md) - Save changes when Flush is triggered

[AutoSaveOnChangeIdentity](SUPEROFFICEDBLib~SOContact~AutoSaveOnChangeIdentity.md) - Save changes when identity is changed.

 

**Contact**

[Contact.MergeTo( TargetContact )](SUPEROFFICEDBLib~SOContact~MergeTo.md) - Merge this contact with another

[Contact.Copy( newName, new Dept )](SUPEROFFICEDBLib~SOContact~Copy.md) - Make a copy of this contact

 

**Person**

[Person.MergeTo( TargetContact )](SUPEROFFICEDBLib~SOPerson~MergeTo.md) - Merge two persons

[Person.MoveTo( newName, new Dept )](SUPEROFFICEDBLib~SOPerson~MoveTo.md) - Move a person to another contact

[ChatAddresses](SUPEROFFICEDBLib~SOPerson~ChatAddresses.md) - e-mail addresses of type 1

[VoIPAddresses](SUPEROFFICEDBLib~SOPerson~VoIPAddresses.md) - e-mail addresses of type 2

[Urls](SUPEROFFICEDBLib~SOPerson~Urls.md) - homepage links and the like. Urls with person\_id set

 

**Associate**

[Groups](SUPEROFFICEDBLib~SOAssociate~Groups.md) - List all groups user is member of

 

**Appointment**

[Sale](SUPEROFFICEDBLib~SOAppointment~Sale.md) - The sale this appointment is linked to

[SuggestedAppointmentId](SUPEROFFICEDBLib~SOAppointment~SuggestedAppointmentId.md) - This appointment came from a sales guide.

 

**Document** 

[Sale](SUPEROFFICEDBLib~SODocument~Sale.md) - The sale this document is linked to

[SuggestedDocumentId](SUPEROFFICEDBLib~SODocument~SuggestedDocumentId.md) - This document came from a sales guide

[ExtRef](SUPEROFFICEDBLib~SODocument~ExtRef.md) - same as [Reference](SUPEROFFICEDBLib~SODocument~Reference.md)

[ArchiveProviderName](SUPEROFFICEDBLib~SODocument~ArchiveProviderName.md) - string version of ArchiveProvider

 

**Project** 

[Project.MergeTo( project )](SUPEROFFICEDBLib~SOProject~MergeTo.md)

[Project.ActiveLinks](SUPEROFFICEDBLib~SOProject~ActiveLinks.md) – links to other projects, urls, documents etc

 

**ProjectMember**

[ExternalFieldChanged](SUPEROFFICEDBLib~SOProjectMember~ExternalFieldChanged.md)

[ValidationMessage](SUPEROFFICEDBLib~SOProjectMember~ValidationMessage.md)

 

**Selection**

[ESelectionType](SUPEROFFICEDBLib~Enumerations~ESelectionType_EN.md) enum changed! Static, Dynamic, Combination

[TargetTable](SUPEROFFICEDBLib~SOSelection~TargetTable.md) - what this is a selection of

[Completed](SUPEROFFICEDBLib~SOSelection~Completed.md) - is the selection marked as done?

 

**Sale**

[ActiveLinks](SUPEROFFICEDBLib~SOSale~ActiveLinks.md)

[CanBeCompleted](SUPEROFFICEDBLib~SOSale~CanBeCompleted.md)() – is the completed checkbox enabled? Requires status = lost or sold.

[PostItText](SUPEROFFICEDBLib~SOSale~PostItText.md)

[NextDueDate](SUPEROFFICEDBLib~SOSale~NextDueDate.md)

[ReasonStalled](SUPEROFFICEDBLib~SOSale~ReasonStalled.md) - mdo list item

[ReasonSold](SUPEROFFICEDBLib~SOSale~ReasonSold.md) - mdo list item

[ReasonLost](SUPEROFFICEDBLib~SOSale~ReasonLost.md) - mdo list item

[ReopenDate](SUPEROFFICEDBLib~SOSale~ReopenDate.md)

[SaleType](SUPEROFFICEDBLib~SOSale~SaleType.md) - mdo list item

[Stage](SUPEROFFICEDBLib~SOSale~Stage.md) - mdo list item - valid stages vary according to SaleType - same as old Probability

[GetSuggestedAppointments](SUPEROFFICEDBLib~SOSale~GetSuggestedAppointments.md)()

[GetSuggestedDocuments](SUPEROFFICEDBLib~SOSale~GetSuggestedDocuments.md)()

 

**Settings**

[HasLicense](SUPEROFFICEDBLib~SOSettings~HasLicense.md)( licenseName ) – does user have access to license?

[GetNumLicense](SUPEROFFICEDBLib~SOSettings~GetNumLicense.md)( licenseName ) – total number of licenses

[NetServerOverrides](SUPEROFFICEDBLib~SOSettings~NetServerOverrides.md) - return the NetServer config file settings needed to log in to the database.

[SuperofConfigPath](SUPEROFFICEDBLib~SOSettings~SuperofConfigPath.md) - return the path to the superoffice.config file

 

**ActivityLinks**

[AddProject](SUPEROFFICEDBLib~IActivityLinks~AddProject.md)

[RemoveProject](SUPEROFFICEDBLib~IActivityLinks~RemoveProject.md)

[Projects](SUPEROFFICEDBLib~IActivityLinks~Projects.md)

 

**User** 

CredentialTypes - Returns a list of installed authentication providers. Default = CRM5/PASSWORD + ActiveDirectory

Credentials - List of authentications for user. Currently will only have one item in it.

AddCredential - adds new credential provider to list. Will automatically remove existing credentials. *Currently we have only one credential per user, but in the future we hope to support multiple credentials per user.*

RemoveCredential - removes a credential type from the user, leaving the user with no means of logging in.

 

Setting the password to “blah” is the same as saying

                soUser.AddCredential "CRM5/PASSWORD", "blah", ""

 

**Admin**

[AddSystemUser](SUPEROFFICEDBLib~SOAdmin~AddSystemUser.md)( name )

[AddAnonymousUser](SUPEROFFICEDBLib~SOAdmin~AddAnonymousUser.md)( name )

                You will need the appropriate admin license to create the user.

 

    set sys1 = db.Admin.AddSystemUser("Sys01")
    sys1.Password = "foobar"
    sys1.save

 

**Database**

[StringResources](SUPEROFFICEDBLib~SOStringResources.md).FromId( id )

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