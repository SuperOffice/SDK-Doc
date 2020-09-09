---
title: CK editor
path: /Blogic/Screen Elements/CK editor
sortOrder: 20
---


This html element allows you to create messages with html, where you can insert images tables, paragraphs etc.


    See http://docs.cksource.com/CKEditor_3.x/Users_Guide for a guide on using the CK editor
    



###The following configuration values are available:###


 - "valueId": If true, ticket id is set to entry id
 - <b>"attachmentName"</b>: Set this to the name of the attachment element. This will ensure that if the show insert text element is used to add reply templates or messages with attachments, the attachments will be shown in the attachments element.
 - <b>"contactRecipientsName"</b>: Set this to the name of the contact recipients elements. This will ensure that parser variables in reply templates uses the correct customer (the one selected with the radio button)
 - <b>"actionType"</b>: 0 means new request, 1 means add message, 2 means edit request.
 - <b>"showInsertText"</b>: Default true. If true it will show the control for inserting reply templates, FAQ entries or previous messages below the editor.
 - <b>"plainText"</b>: Default false. If true, shows a simple textarea with no options.
 - <b>"CKConfig"</b>: Will pass config values to the CK editor. For example "CKConfig.toolbarStartupExpanded = true" will hide the CK editor toolbar on startup. See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html for possible config values
 - <b>"hasAttachments"</b> - Default true. Allows the editor so add attachments.
 - <b>"hasSlevel"</b> - Default true. Enables specification of access level of editor entry.
 - <b>"hasTimeSpent"</b> - Default true. Turns on functionality that shows time spent on editor entry.
 - <b>"noBorder"</b> - Default true. Removes the border around the editor. Useful to set to false to show border f the editor is placed in an element table with other elements.




###Functions:###


 - setFieldValue(string, Map)
     - <b>"selectInsertTextValues"</b>: Will pass on config values to the select insert text element.
    - <b>"startupFocus"</b>: Populate map with:
        - <b>"focus"</b>: bool



 - `getFieldValue(string)`
     - <b>"plainText"</b>: returns true if the editor has been set up as a plaintext editor



 - `setValue(string)`: sets the content of the editor to value



 - `toString()`: returns the content of the editor




The CK editor element must be inside an elementtable, or it will not fill out the width of the page. This is especially important when the editor is inside a pane element together with other elements, all the elements must be inside an elementtable which again is inside the pane element.



###The element overview should look like this:###

    1 Element table
    2 - - Panes
    3 - - - - Pane
    4 - - - - - - Element table (All elements inside the pane is "wrapped" in the element table)
    5 - - - - - - - - CK Editor
    6 - - - - - - - - Contact and recipient control
    7 - - - - - - Group end
    8 - - - - Group end
    9 - - Group end
    10 Group end
    



###And not look like this:###

    1 Element table
    2 - - Panes
    3 - - - - Pane
    4 - - - - - - CK Editor (The CK editor is not inside an element table, it will not resize correctly)
    5 - - - - - - Contact and recipient control
    6 - - - - Group end
    7 - - Group end
    8 Group end
    
    

For the CK editor to fill out the screen vertically, the config variable "verticalSpace = rest" must be set.
If it is inside a pane the Panes element must also have this config variable.


