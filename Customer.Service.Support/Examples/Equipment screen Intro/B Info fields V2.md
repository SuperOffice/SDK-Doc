---
title: B Info fields V2
path: /Examples/Equipment screen Intro/B: Info fields V2
sortOrder: 9571
---

This element will be used to display several info fields about the equipment we have in our database.
Click on "New element" and choose "Info fields v2" from the dropdown. Click the newly added element to edit it


###Use the following code to view name, description, manufacturer and purchase date:###

groups.0.fields.0.field = y\_equipment.x\_eqname
groups.0.fields.0.label = Product
groups.0.fields.1.field = y\_equipment.x\_eqdesc
groups.0.fields.1.label = Description
groups.0.fields.2.field = y\_equipment.x\_eqmanufacturer
groups.0.fields.2.label = Manufacturer
groups.0.fields.3.field = y\_equipment.x\_eqpurchase
groups.0.fields.3.label = Purchase date
groups.0.fields.length = 4
groups.length = 4
header = Equipment
headerIsField = false
width = 100%



###It should look like this, then click Ok and proceed to add the next element:###


