---
title: Anchor line
path: /Blogic/Screen Elements/Anchor line
sortOrder: 12
---

This element will display a horizontal line of clickable url's, as the one viewed at the top of the list ticket screen.



###The configuration will accept the following values:###


 - <b>"table"</b>: from version 4.0 this value can be set to one of the following to get a default set of Urls
     - <b>"ticket"</b>
     - <b>"customer"</b>
     - <b>"person"</b>
     - <b>"company"</b>
     - "cust\_company"
     - <b>"contact"</b>



 - <b>"items"</b>: array of items to display
     - "items.n.label": The label of item n.
     - "items.n.url": The url of item n.
     - "items.n.appendId": If true, then the URL will have the active ID appended to it.
     - <b>"iconUrl"</b>: adds custom icons to the url with iconUrl, version 4.0
     - "items.n.target": The (optional) target of the URL
     - "items.n.alt": The (optional) alternative text of the URL
     - "items.n.special" checks for special links





###Example:###
    

table = customer - will have Edit Customer, New Ticket, Send Password, List Invoices and Connect Customer urls.
items.length = 2
items.0.label = New ticket
items.0.url = /bin/ticket?action=newTicket
items.1.label = New customer
items.1.url = /bin/ticket?action=newCustomer
items.0.iconUrl = /doc/icons/clickme.gif

From version 3.1.8 you can add keyboard shortcuts to the labels.
If you write : "items.0.label = &New ticket", then the label will be New Ticket, with an underscore under N. When pressing Alt+n the link will be opened.



###Functions:###


 - setFieldValue(string, Map)
    - <b>"addEntry"</b>: will add an entry with
        - <b>"label"</b>
        - <b>"url"</b>
        - <b>"target"</b>
        - <b>"alt"</b>
        - <b>"icon"</b>
        - <b>"index"</b>
        - <b>"warningMessage"</b>
        - <b>"disabled"</b>
        - <b>"onClick"</b>
    - <b>"delEntry"</b>: will delete the entry or group:
        - <b>"index"</b>
        - <b>"group"</b>



 - `getFieldValue(string)`:
        - <b>"numEntries"</b>: returns the number of anchors in the line
        - "entry.x.icon": returns the icon of entry x
        - "entry.x.label": returns the label of entry x
        - "entry.x.url": returns the url of entry x
        - "entry.x.target": returns the target of entry x
        - "entry.x.warningMessage": returns the warning message of entry x
        - "entry.x.disabled": returns if the entry x is disabled. 1 if disabled, else 0


