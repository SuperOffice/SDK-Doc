---
title: Info Fields
path: /Blogic/Screen Elements/Info Fields
sortOrder: 37
---


This html element is deprecated in 4.0, see Info Fields v2.
OBS OBS!!
Does not work at all from version 4.8


This element will display a grid of information fields, such as the ones displayed at the top of the "listTicket" screen. The information will be based on a query to the database.



###The configuration will accept the following values:###

fields: array of fields to display
fields.n.fields: The field of item n
fields.n.label: The label of item n
fields.n.url: The url of item n. The value of the item will be appended to the url.
cols: The number of columns in the grid.
rows: The number of rows in the grid.


example:
    
    cols = 5
    fields.0.field = ticket.id
    fields.0.label = #
    fields.0.url = /bin/ticket?action=listTicket&ticketId
    fields.1.field = ticket.cust_id.display_name
    fields.1.label = navn
    fields.1.url = /bin/ticket?action=listTicket&ticketId=
    fields.2.field = ticket.last_changed
    fields.2.label = Sist endret
    fields.2.url = /bin/ticket?action=listTicket&ticketId=
    fields.3.field = ticket.title
    fields.3.label = Tittel
    fields.3.url = bin/ticket?action=listTicket&ticketId=
    fields.length = 4
    rows = 5
    width = 100%


