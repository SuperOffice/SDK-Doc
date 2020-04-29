---
title: FCK Editor
path: /Blogic/Screen Elements/FCK Editor
sortOrder: 30
---


This html element allows you to create messages with html, where you can
insert images tables, paragraphs etc.



    See http://docs.fckeditor.net/FCKeditor_2.x/Users_Guide for a guide on using the FCK editor
    



###The FCK editor has the following configuration values:###


 - "valueId": If true, ticket id is set to entry id
 - <b>"actionType"</b>: 0 means new request, 1 means add message, 2 means edit request.
 - <b>"showInsertText"</b>: default true. Shows control for inserting reply templates, FAQ entries or previous messages into editor
 - <b>"plainText"</b>: default false, except for browsers that don't support FCKEditor (Opera). If true, shows a simple textarea with no options.
 - <b>"width"</b>: default is 100%
 - <b>"height"</b>: default is 100%
 - <b>"contactRecipientsName"</b>: Set this to the name of the contact recipients elements. This will ensure that parser variables in reply templates uses the correct customer (the one selected with the radio button)
 - <b>"notEmpty"</b>
 - <b>"toolbar"</b>
 - All FCK configurable values starting with FCKConfig can also be used. See docs.fckeditor.net




###Functions:###


 - setFieldValue(string, Map)
     - <b>"config"</b>: Configuration values for FCK editor, separated by semicolons. Will overwrite existing config. See http://docs.fckeditor.net/FCKeditor\_2.x/Developers\_Guide/Configuration/Configuration\_Options for possible values.
     - <b>"selectInsertTextValues"</b>: Will pass on configuration values to element "Select Insert Text"
         - <b>"ticketId"</b>
         - <b>"faqAccess"</b> (default is KB\_ACCESS_PUBLIC\_AUTHENTICATED (3), others: KB\_ACCESS_PRIVATE 1, KB\_ACCESS_INTERNAL 2, KB\_ACCESS_PUBLIC 4)
         - <b>"customerId"</b>
         - <b>"userId"</b>
         - <b>"attachmentIds"</b>



 - `getFieldValue(String field)`
     - <b>"attachmentIds"</b>: returns ids of attachments as a comma-separated list
     - <b>"plainText"</b>: returns true if the editor is set to plaintext mode



 - `setValue(string)` - sets the content of the editor



 - `toString()` - returns the content of the editor




The FCK editor element must be inside an elementtable, or it will not fill out the width of the page. This is especially important when the editor is inside a pane element together with other elements, all the elements must be inside an elementtable which again is inside the pane element.



###The element overview should look like this:###

    1   Element table
    2   - - Panes
    3   - - - - Pane
    4   - - - - - - Element table               (All elements inside the pane is "wrapped" in the element table)
    5   - - - - - - - - FCK Editor
    6   - - - - - - - - Contact and recipient control
    7   - - - - - - Group end
    8   - - - - Group end
    9   - - Group end
    10   Group end
    



###And not look like this:###

    1   Element table
    2   - - Panes
    3   - - - - Pane
    4   - - - - - - FCK Editor               (The FCK editor is not inside an element table, it will not resize correctly)
    5   - - - - - - Contact and recipient control
    6   - - - - Group end
    7   - - Group end
    8   Group end
    
    

For the FCK editor to fill out the screen verticalle, the config variable "verticalSpace = rest" must be set.
If it is inside a pane the Panes element must also have this config variable.


