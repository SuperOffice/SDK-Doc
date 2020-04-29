---
title: Button Row
path: /Blogic/Screen Elements/Button Row
sortOrder: 16
---


This element adds a row of clickable buttons to your screen.




###The following configuration values are available:###


 - <b>"buttons"</b>
    - "buttons.i.name": adds a name to the name i.
    - "buttons.i.label": adds a value to the label i.
    - "buttons.i.warning": adds a warning message shown in a pop-up box when the button is pressed
    - "buttons.i.iconurl":
    - "buttons.i.style":
 - <b>"align"</b>: can be set to justify the button row. Center is default.
    - <b>"left"</b>
    - <b>"center"</b>
    - <b>"right"</b>





###Example:###
    
    buttons.0.name = ok
    buttons.0.label = Ok
    buttons.1.warning = Are you sure?
    buttons.1.name = delete
    buttons.1.label = Delete
    buttons.2.name = cancel
    buttons.2.label = Cancel
    buttons.length = 3
    



###Functions:###


 - setFieldValue(string, Map)
    - <b>"addButton"</b>
        - <b>"name"</b>
        - <b>"label"</b>
        - <b>"warning"</b>
        - <b>"iconUrl"</b>
        - <b>"className"</b>


The name of the buttons must be mapped to the scripts which may be executed for the current screen.


