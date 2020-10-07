---
title: RadioButtons
path: /Blogic/Screen Elements/RadioButtons
sortOrder: 51
---


   
**Adds radiobuttons to your screen. The following configuration values are available:**   



- "buttons.value"
- "buttons.label"
- "buttons.checked"





###Configuration example:###
    
    buttons.0.value = lunch
    buttons.0.label = Lunch
    buttons.0.checked = true
    buttons.1.value = dinner
    buttons.1.label = Dinner
    buttons.length = 2
    



###Functions:###


- `getValue()`: returns the value of the checked button.
- `toString()`: works just like `getValue()`.




###For adding buttons:###


- setFieldValue("addButton", Map)




###Map values:###

    values.insert("value", <buttonValue>);
    values.insert("label",< buttonLabel>);
    values.insert("checked", <buttonChecked> (0 or 1) );
    



###For setting the checked button:###


- setFieldValue("setChecked", Map)




###Map values:###

    values.insert("buttonValue", value of button to be checked);


