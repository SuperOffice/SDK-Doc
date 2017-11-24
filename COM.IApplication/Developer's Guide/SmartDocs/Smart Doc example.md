---
uid: exampleSmartDoc
title: Smart Doc example
---

To use the SuperOffice SmartDocs example in Word/Office 2003

0. Copy all the stuff in this zip file to the TEMPLATE folder in SO\_ARC

1. Load the "disableManifestSecurityCheck.reg" into the registry.
   Office 2003 supports code signing, but it's still broken unfortunately.

2. Open Word 2003 and change Macro security to Medium or Low.
   If the code signing stuff worked, we could run it at High, but
   until then we need to change this security setting.
   (Tools menu, Macro, Security...)

3. Open the SMARTDOC.DOC file.
   This will prompt you to install the SmartDoc solution into Word.
   The SMARTDOC.DOC file contains a reference to the manifest.xml file, which
   tells Word which files are needed and what needs to be installed.
   Answer YES.
   This will make WORD install the DLLs and bitmaps into its SOLUTION folder
   and handle all the updating automatically (sort of like SOLOADER does) by
   using the MANIFEST.XML file

   You will get a question about "Enabling manifest security?"
   Answer NO - this is the security we turned off using the
   REG file in step 1.

   This will also register the SuperOffice SmartDoc schema
   with Word. You can check that this has worked by looking
   at the XML Schema tab in the dialog.
   (Tools menu, Templates and Add ins...)

   In the Templates dialog, go to the third tab
   (XML Expansion packs)

4. Close Word down.
   Word is now configured to use the smartdoc solutions.

5. Add a new SmartDoc template to your database using the admin client.

6. Start SuperOffice.
   Write a SmartDoc document.
   The smartDoc panel should appear automatically on the right
   inside the Word window.



[Screenshot](../../images/smartdoc.gif)
