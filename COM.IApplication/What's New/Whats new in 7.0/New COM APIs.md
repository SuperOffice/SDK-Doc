---
uid: New_COM_APIs
title: New COM APIs
---

A summary of the new and changed APIs in 7.0



**SOApplication**

<see cref="SOApplication.HWnd">Hwnd( windowname )</see> - Return window handle for window

-          Windowname = blank, DocumentDlg, AppointmentDlg, PersonDlg, BookingDlg (appointment sub-dialog)

<see cref="SOApplication.CurrentSoProtocol">CurrentSoProtocol</see>  - Get/set GUI context via soprotocol

<see cref="SOApplication.SetSoProtocol">SetSoProtocol( newProto )</see> - Same as set protocol

<see cref="SOApplication.GetArchiveInterface">GetArchiveInterface</see>( provider, guiName) - access the archive grids shown in the GUI. Returns an ApplicationArchive.



**SOContext**

Get / Set - Set the SoProtocol - same as the CurrentSoProtocol name.

<see cref="ISoContext.CurrentPanelName">CurrentPanelName</see> - return part of the SoProtocol

<see cref="ISoContext.CurrentSubModeName">CurrentSubModeName</see> - return part of the SoProtocol

<see cref="ISoContext.CurrentMiniCardName">CurrentMiniCardName</see> - return part of the SoProtocol

<see cref="ISoContext.CurrentArchiveName">CurrentArchiveName</see> - return part of the SoProtocol



**PersonArchive**

<see cref="IPersonArchive.IsLoading">IsLoading</see> - is the archive loading?



**ApplicationArchive** - Generic archive wrapper

<see cref="IApplicationArchive.ProviderName">ProviderName</see> - name of the NetServer class that is providing the data

<see cref="IApplicationArchive.GuiName">GuiName</see> - name to show on the archive tab

<see cref="IApplicationArchive.SoProtocol">SoProtocol</see> - name to use in the soprotocol

<see cref="IApplicationArchive.Restrictions">Restrictions</see> - query constraints to limit which rows are shown

<see cref="IApplicationArchive.OptionalEntities">OptionalEntities</see> - what types of data the provider contains

<see cref="IApplicationArchive.DesiredEntities">DesiredEntities</see> - checkboxes in archive footer

<see cref="IApplicationArchive.Reload">Reload</see> - force a reload of the archive

<see cref="IApplicationArchive.Cancel">Cancel</see> - stop loading

<see cref="IApplicationArchive.IsLoading">IsLoading</see>

<see cref="IApplicationArchive.IsCanceled">IsCanceled</see>

<see cref="IApplicationArchive.IsVisible">IsVisible</see>

<see cref="IApplicationArchive.Show">Show</see>()

<see cref="IApplicationArchive.AllRows">AllRows</see> - get the list of rows

<see cref="IApplicationArchive.SelectedRows">SelectedRows</see> - the highlighted rows in the archive

<see cref="IApplicationArchive.LastSelectedRow">LasSelectedRow</see>

<see cref="IApplicationArchive.ExportToExcel">ExportToExcel</see>( mode, open, pathToFile ) - save archive as excel file



**RowEntity** - Exposes the rows in the archive

<see cref="IRowEntity.tableid">TableId</see>

<see cref="IRowEntity.RecordId">RecordId</see>

<see cref="IRowEntity.RowType">RowType</see>

<see cref="IRowEntity.CustomKey">CustomKey</see>





**Database**

<see cref="IDatabase.Password">Password</see> - Obsolete, use SafeCredentials instead.

<see cref="IDatabase.GetLocationList">GetLocationList</see> - Return resources that are locations

<see cref="IDatabase.GetStagesForSaleType">GetStagesForSaleType( item )</see> - For filtering the stages list correctly.

<see cref="IDatabase.SafeCredentials">SafeCredentials</see> - Ticket from NetServer



**Contact, Person, Project, Sale, Appointment, Document**

<see cref="IContact.ExternalFieldChanged">ExternalFieldChanged</see> - Signal SOCRM that something has happened outside its world – will force a save on model object when AutoSave is triggered. Forces the main record to be updated when object is saved, even if no internal values have changed.

<see cref="IContact.ValidationMessage">ValidationMessage</see> - Signal SOCRM that Save should be blocked on the model object because of some reason.

<see cref="IContact.AutoSaveOnFlush">AutoSaveOnFlush</see> - Save changes when Flush is triggered

<see cref="IContact.AutoSaveOnChangeIdentity">AutoSaveOnChangeIdentity</see> - Save changes when identity is changed.



**Contact**

<see cref="IContact.MergeTo">Contact.MergeTo( TargetContact )</see> - Merge this contact with another

<see cref="IContact.Copy">Contact.Copy( newName, new Dept )</see> - Make a copy of this contact



**Person**

<see cref="IPerson.MergeTo">Person.MergeTo( TargetContact )</see> - Merge two persons

<see cref="IPerson.MoveTo">Person.MoveTo( newName, new Dept )</see> - Move a person to another contact

<see cref="IPerson.ChatAddresses">ChatAddresses</see> - e-mail addresses of type 1

<see cref="IPerson.VoIPAddresses">VoIPAddresses</see> - e-mail addresses of type 2

<see cref="IPerson.Urls">Urls</see> - homepage links and the like. Urls with person\_id set



**Associate**

<see cref="IAssociate.Groups">Groups</see> - List all groups user is member of



**Appointment**

<see cref="IAppointment.Sale">Sale</see> - The sale this appointment is linked to

<see cref="IAppointment.SuggestedAppointmentId">SuggestedAppointmentId</see> - This appointment came from a sales guide.



**Document**

<see cref="IDocument.Sale">Sale</see> - The sale this document is linked to

<see cref="IDocument.SuggestedDocumentId">SuggestedDocumentId</see> - This document came from a sales guide

<see cref="IDocument.ExtRef">ExtRef</see> - same as <see cref="IDocument.Reference">Reference</see>

<see cref="IDocument.ArchiveProviderName">ArchiveProviderName</see> - string version of ArchiveProvider



**Project**

<see cref="IProject.MergeTo">Project.MergeTo( project )</see>

<see cref="IProject.ActiveLinks">Project.ActiveLinks</see> – links to other projects, urls, documents etc



**ProjectMember**

<see cref="IProjectMember.ExternalFieldChanged">ExternalFieldChanged</see>

<see cref="IProjectMember.ValidationMessage">ValidationMessage</see>



**Selection**

<see cref="Enumerations.ESelectionType_EN">ESelectionType</see> enum changed! Static, Dynamic, Combination

<see cref="ISelection.TargetTable">TargetTable</see> - what this is a selection of

<see cref="ISelection.Completed">Completed</see> - is the selection marked as done?



**Sale**

<see cref="ISale.ActiveLinks">ActiveLinks</see>

<see cref="ISale.CanBeCompleted">CanBeCompleted</see>() – is the completed checkbox enabled? Requires status = lost or sold.

<see cref="ISale.PostItText">PostItText</see>

<see cref="ISale.NextDueDate">NextDueDate</see>

<see cref="ISale.ReasonStalled">ReasonStalled</see> - mdo list item

<see cref="ISale.ReasonSold">ReasonSold</see> - mdo list item

<see cref="ISale.ReasonLost">ReasonLost</see> - mdo list item

<see cref="ISale.ReopenDate">ReopenDate</see>

<see cref="ISale.SaleType">SaleType</see> - mdo list item

<see cref="ISale.Stage">Stage</see> - mdo list item - valid stages vary according to SaleType - same as old Probability

<see cref="ISale.GetSuggestedAppointments">GetSuggestedAppointments</see>()

<see cref="ISale.GetSuggestedDocuments">GetSuggestedDocuments</see>()



**Settings**

HasLicense( licenseName ) – does user have access to license?

GetNumLicense( licenseName ) – total number of licenses

NetServerOverrides - return the NetServer config file settings needed to log in to the database.

SuperofConfigPath - return the path to the superoffice.config file



**ActivityLinks**

AddProject

RemoveProject

Projects



**User**

CredentialTypes - Returns a list of installed authentication providers. Default = CRM5/PASSWORD + ActiveDirectory

Credentials - List of authentications for user. Currently will only have one item in it.

AddCredential - adds new credential provider to list. Will automatically remove existing credentials. *Currently we have only one credential per user, but in the future we hope to support multiple credentials per user.*

RemoveCredential - removes a credential type from the user, leaving the user with no means of logging in.



Setting the password to “blah” is the same as saying

                soUser.AddCredential "CRM5/PASSWORD", "blah", ""



**Admin**

<see cref="IAdmin.AddSystemUser">AddSystemUser</see>( name )

<see cref="IAdmin.AddAnonymousUser">AddAnonymousUser</see>( name )

                You will need the appropriate admin license to create the user.



    set sys1 = db.Admin.AddSystemUser("Sys01")
    sys1.Password = "foobar"
    sys1.save



**Database**

<see cref="IStringResources">StringResources</see>.FromId( id )

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