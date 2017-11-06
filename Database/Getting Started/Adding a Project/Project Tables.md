---
uid: startProjectTables
title: Project Tables
---
<properties 
SortOrder="1"
/>

![Project card](../../Images/so-project.gif)

 

The project record contains the name and the ids of some of the other items.

The Project Type comes from the ProjType table. The Project table contains a type\_idx field which contains the foreign key of the ProjType record we want. The name and tooltip are stored in the ProjType table.

The Project Status is similar – the project table contains the foreign key in the status\_idx field, and the actual name of the status is held in the ProjStatus table.

Both these fields are examples of [list items](../../Developer Guide/MDO lists.md).

The text description is stored in the Text table. We have the text\_id stored in the project record.

![Project tables](../../Images/so-project-tables.gif)

 

The Responsible field is showing us an employee’s person name. The employees are stored in the Associate table. The Project table has an associate\_id field that we use to look up the associate record. The associate record refers to a Person record through its person\_id.

The three fields below the Responsible field are all user-defined. They values are stored in a table called UDProjectSmall, while the labels and default values for these fields  are stored in a table called UdefField.

There is a field called “Web site” which can contain zero or more web addresses. There is no url field in the project record, but there is a table called URL which contains a many-to-one relation through its project\_id field.

The relations are one-to-one mostly. At this level the database structure isn’t terribly complicated.

Note: The name in the Associate table is not the full name – it is actually the login name, the user name. The full name is stored in the person record.

So putting together a project display is just a matter of reading the right record, and then following the relations arrows out to the right tables.