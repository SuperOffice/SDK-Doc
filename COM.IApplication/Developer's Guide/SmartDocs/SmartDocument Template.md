---
uid: guideSmartDocsTemplate
title: SmartDocument Template
---

Create Your Own SmartDocument Template
======================================

HOW TO MAKE YOUR OWN SMART DOCUMENT TEMPLATE:

1. Add the SuperOffice custom properties to the document.
   These properties are:
      document-id      &lt;doid&gt;
      appointment-id  &lt;apid&gt;
      contact-id          &lt;cuid&gt;
      person-id          &lt;atid&gt;
      project-id          &lt;prid&gt;

2. Attach the XML SmartDoc Solution to the document using the Tools menu:
       Tools, Templates and Add-ins..., XML Expansion Packs, Attach!
   This will automatically also attach the SuperOffice XML schema to the document if it was not already attached.

3. Hit CTRL+F1 to open the task pane if it is not visible.

4. Go to the "XML Structure" task panel.

5. Click on the tag "sodoc" in the lower right panel. A dialog box will appear asking "attach tag to what?"

6. Click the "Apply to entire document" button in the dialog.
   You can now optionally tag parts of the document to trigger further actions.
   The only tags of interest are:
      sale  -- triggers the sale dialog
      bodytext -- triggers the appointment dialog
      title -- is copied into the sale dialog

   The other tags are not used at the moment.

7. Save the document in the TEMPLATE folder.

8. Add a new template in the SOADMIN client using the document you've just saved.