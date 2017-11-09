---
uid: ActivityLinksSubobjectOnModels
title: Activity Links Sub-object On Models
---

### Appointments, Documents, Sales can Link to each other

The system uses the relation table (same table that originally was used only for person/contact relations use). 

This replaced the old single-value DocumentLink property that Appointment and Sale used to have before SuperOffice 6.

The system uses the relation table to allow many-to-many links between all activities. 

 ![](../Images/ScreenCap4.png)

This appointment is saved with appointment\_id = 24

![](../Images/LinksAppointmentRecord.png)

To find all the links from this appointment:

select \* from relations where source\_table=9 and source\_record=24

![](../Images/LinksRelations.png)

These links are all defined by reldef\_id = 8 (appointment), 9 (document) and 10 (sale), which looks like this:

Select \* from relationdefinition

![](../Images/LinksRelDefList.png)

Note that a relationship definition can apply to more than one table. In this case, the link can be to appointments, documents or sales:

Select \* from relationtarget where reldef\_id in (8, 9, 10)

![](../Images/LinksRelDef.png)

 

To summarize in diagram form:

![](../Images/LinkDiagram.png)

 


### See Also:

[relationdefinition Table](../Tables/relationdefinition.md)
[relations Table](../Tables/relations.md)
[relationship Table](../Tables/relationship.md)
[relationtarget Table](../Tables/relationtarget.md)