---
uid: ActivityLinksSubobjectOnModels
title: Activity Links Sub-object On Models
---

### Appointments, Documents, Sales can Link to each other

Activity/Document links has changed since CRM 5. The new system uses the relation table (same table that person/contact relations use).

This replaces the old single-value DocumentLink property that Appointment and Sale used to have.

The new system uses the relation table to allow many-to-many links between all activities. Currently we only support document-related links (i.e. you can't link activities and sales yet - this will be added in the next major version of SuperOffice 6)

 ![](../Images/ScreenCap4.png)

This appointment is saved with appointment\_id = 743

![](../Images/LinksAppointmentRecord.png)

To find all the links from this appointment:

select \* from relations where source\_table=9 and source\_record=743

![](../Images/LinksRelations.png)

These links are all defined by reldef\_id = 9, which looks like this:

Select \* from relationdefinition

![](../Images/LinksRelDefList.png)

Note that a relationship definition can apply to more than one table. In this case, the link can be to appointments, documents or sales:

Select \* from relationtarget where reldef\_id = 9

![](../Images/LinksRelDef.png)

 

To summarize in diagram form:

![](../Images/LinkDiagram.png)

 


### See Also:

[relationdefinition Table](../Tables/relationdefinition.md)
[relations Table](../Tables/relations.md)
[relationship Table](../Tables/relationship.md)
[relationtarget Table](../Tables/relationtarget.md)