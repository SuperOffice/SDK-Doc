---
title: Text
path: /Blogic/Screen Elements/Text
sortOrder: 87
---

This element is a one-line text input field.



###The element supports the following configuration values:###


- <b>"isPassword"</b>: If true, then this field expects a password input.
- <b>"isSingleEmail"</b>: If true, then this field expects a single email address.
- <b>"isMultipleEmail"</b>: If true, then this field expects one or more email addresses.
- <b>"notEmpty"</b>: If true, then the field cannot be empty.
- <b>"notEditable"</b>: If true, then the field cannot be changed.
- <b>"isSingleSms"</b>: If true, then the field expects a valid SMS message
- <b>"maxLength"</b>: The maximum length of the field (defaults to 255).
- <b>"size"</b>: The size (in characters) of the field (displayable).
- <b>"placeholder"</b>: A placeholder string (from 8.4R08)


From version 7.1, the field supports "isNumber ", which will make the control a number-only accepting control. In this mode, the following configuration values are supported:


 - "isNumber"
        - <b>"notEmpty"</b>: If true, then the field cannot be empty
        - <b>"precision"</b>: The number of digits after a comma for floating point values.
        - <b>"minValue"</b>: The minimum value of the control.
        - <b>"maxValue"</b>: The maxium value of the control.
        - <b>"noRangeCheck"</b>: If true, then range is not checked.





###Functions:###


 - `setValue()` sets the contents of the field.
 - `toString()` returns the contents of the field.


