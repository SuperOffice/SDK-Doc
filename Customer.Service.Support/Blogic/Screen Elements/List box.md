---
title: List box
path: /Blogic/Screen Elements/List box
sortOrder: 41
---


This element adds a drop down menu to your screen.




###The following configuration values are available:###


 - "options.length": The number of items.
 - "options.i.value"
 - "options.i.name"
 - "options.i.selected": From 7.5SR1. If true, will set the option as selected by default.
 - javascript = \<html code>


Example of \<html code>:

    javascript = onblur="alert('Wow! You changed it!');"
    



 - setFieldValue(string, Map): From 7.0 SR1 the function setFieldValue is supported.
    - <b>"add"</b>
         - <b>"name"</b>
         - <b>"value"</b>
    - <b>"remove"</b>: Remove all options with the given value
         - <b>"value"</b>
    - <b>"clear"</b>: Remove all options
 - `toString()` returns the selected value
 - `toInteger()` returns the selected value


