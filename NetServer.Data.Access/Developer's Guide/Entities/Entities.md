<properties date="2016-05-11"
SortOrder="47"
/>

Here we will expose the NetServer Entities layer which uses Entities in order to represent business objects to the user of NetServer.

We have divided the properties of an Entity as Basic properties, Entity properties, Row properties, EntityCollection properties and Rows properties. This document shows us how to perform CRUD operation on an Entity and its properties in multiple ways, but the result will be the same.

All Entities are provided under the SuperOffice.CRM.Entities namespace. Entities consist of properties which can be of basic data types such as String, Double, Int and of complex types which are peculiar to SuperOffice such Entities, Entity Collections, Row and Rows. Each Entity has its relevant Entity Collection. For example the Appointment Entity has simple properties like ColorIndex and EndDate. It also has complex properties like Contact (a Contact Entity) and AppointmentText (a TextRow object).

1. autolist
