---
title: Select insert text
path: /Blogic/Screen Elements/Select insert text
sortOrder: 67
---


This element is used to select a predefined text to insert into a message.




###The following configuration variables are available:###


- "htmlEditorName": name of html editor element this element will be connected to
- <b>"customerId"</b>: id of customer to load into parser
- <b>"onlyLeafNodes"</b>: only leaf nodes can be selected


Text can be selected from FAQ entries, reply templates and previous messages.



###Functions:###


- `toString()`: will return the id of the selected entry, prefixed with either "doc.", "faq." or "msg." depending on the type of the selected entry.
- `getFieldValue(string)` will return the text of the selected entry.
    - <b>"selectedInsertText"</b>
    - <b>"attachmentIds"</b>
- setFieldValue(string, values) will set different values.
    - <b>"selectInsertTextValues"</b>
        - <b>"ticketId"</b>
        - <b>"faqAccess"</b> (default is KB\_ACCESS_PUBLIC\_AUTHENTICATED (3), others: KB\_ACCESS_PRIVATE 1, KB\_ACCESS_INTERNAL 2, KB\_ACCESS_PUBLIC 4)
        - <b>"customerId"</b>
        - <b>"userId"</b>
        - <b>"attachmentIds"</b>
These are used for determining what entries can be selected. The screen must include a cgi variable named actionType, with the values 0, 1 or 2 for the above to automatically include messages, faqs, customer and user parser variables.


