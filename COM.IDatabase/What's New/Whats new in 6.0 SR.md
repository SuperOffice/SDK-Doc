---
uid: whatsnew6SR
title: What's new in 6.0 SR
---

SR 3
====

-   Added "said", "sanu" and "owid" template variables (overview of all on [techdoc](http://techdoc.superoffice.com/?sixTemplate.html))
    said = Sale id (hidden field)
    sanu = Sale number field
    owid = Own company contact\_id (hidden field)
-   SoCache is now located in Local Settings folder rather than Windows dir by default.
    Location can be controlled by SuperOffice.Ini setting as well.
-   New events: BeforeDelete on Appointment, contact, document, person, project, selection and relation. ProjectMemberEvents added to SuperOfficeEvents with events for ProjectMemberChanges, ProjectMemberAdded and ProjectMemberRemoved
-   <span lang="EN-US" lang="EN-US">Doc plugin API fixed – edit/open called depending on sentry rights on document, property changes always call Notify API</span>

 
-

<span lang="EN-US" lang="EN-US">SR 2</span>
===========================================

-   <span lang="EN-US" lang="EN-US">Database.Find.FirstMatch was not returning string values safely. Values were subject to corruption on multiple calls to FirstMatch.</span>
-   <span lang="EN-US" lang="EN-US">GetListItem revert to old behavior – returns item even if item is hidden by MDO group filtering. GetList fixed to return only filtered items</span>
-   <span lang="EN-US" lang="EN-US">SODocument.PrivateToGroup was not working. Visible-for system was always setting default-user-group. Fixed so it only sets default-user-group if visible-for-group is not already set.</span>
-   <span lang="EN-US" lang="EN-US">On creating new Selection, the selection\_saved message was called out, which caused the event OnCurrentSelectionSaved to fire twice. Now, the selectionmodel only calls out selection\_added, and COMCurrentChangeListener handles the rest.</span>
-   <span lang="EN-US" lang="EN-US">When a new is created, we execute the following scripts\\events (in order) CurrentXXXBeforeSave, CurrentXXXCreated, CurrentXXXSaved.
    Applies to: Contact, Project, Person, Selection, Appointment, Sale, Document and Relation</span>
-   <span lang="EN-US" lang="EN-US">Exception when you call GetList for enTableProb fixed</span>
-   <span lang="EN-US" lang="EN-US">Add selection members performance problem fixed</span>

SR 1
====

-   Memory leak with Database.Refresh fixed
-   objSO.CurrentContact.Emails.Remove (1)
    objSO.CurrentContact.Urls.Remove (1)
    objSO.CurrentContact.Phones.Remove (1)
    No longer returns an exception

-   GetListItem and GetListItemByName for enTableProb no longer returns an exception

-   binf, binl, btyp, bfre template variables now work.

-   Eventserver: CurrentContactSaved was not fired on new contacts. To keep compatibility for existing interfaces, we will now execute both CurrentXXXSaved and

    CurrentXXXCreated. When creating a new (contact, proiect, etc...) We will first execute CurrentXXXCreated and then CurrentXXXSaved (in that order)

-   Scripting now available on travel

-   Added XXXBeforeSave event

-   Scripting: encryption support for scripts.

-   External persons CorrespondingAssociate now returns a valid associate object

-   SOProtocol new commands:
    flush - emulates shift+F5
    refresh - emulates a simple F5 (will cause archives to reload)
    reload - It slightly less of a sledge hammer than refresh and will
    typically only reload archives. (Same as simple &lt;F5&gt;)

Database.GetListItem broke
--------------------------

Calling GetListItem on an item that was hidden by MDO would return NULL rather than a filled out list item object.

This was a change from previous versions.