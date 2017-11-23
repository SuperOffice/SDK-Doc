---
uid: guideDocuments
title: Creating Documents
---

When you hit the Write button in the CRM client, two things happen:

-   A template file is copied to the user’s folder.
    The placeholder tags are search-and-replaced with the current company’s name and address.
    The resulting file is opened using the default editor according to Windows.
-   Two records are created.
    A Document record with the filename, and
    an Appointment record with the date+time and type of document.

 

When you’re using these components, things are a little different:

**Creating a Document object does not create the document file.**

You can create the document file like this:

-   copy a file to the appropriate place in the SO\_ARC directory yourself
    (this is what the <see cref="Database.AddDocument">Database.AddDocument</see> method does)
-   use the <see cref="SODocument.GenerateDocumentFile">Document.GenerateDocumentFile</see> method
    (this will copy a template and substitute the correct values, just like the dialog does)

 

### Document.GenerateDocumentFile

This will create a new document from scratch, just like the Write button in the CRM client.

You need to have set the document’s contact, person, project properties, and set the template type to something sensible. If the template type is not set, then the GenerateDocumentFile function will not know which template file to use as a basis for the new document.

This function will create a filename for you (and write it into the Document object) unless you provide a new filename+path as a parameter.

If the createMergeDraft parameter is true, then only some of the template tags are substituted. The idea is that you can use this document as a template for a second call to GenerateDocumentFile – for example if you were building your own mail-merge system.

### Database.AddDocument

This will copy a document from somewhere else to the SO\_ARC, and create a Document object for you to represent the document.

This is like dragging a document from the desktop into the CRM client.

 

### Example

Remember to edit the script and replace the name and password before running.

Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
if not loginOk then
   msgbox "Unable to log in"
   WScript.Quit
end if
Set contact = db.GetContact(2)
Set doc = db.CreateDocument
doc.SetDefaults
doc.Contact = contact
doc.Header = "This is a new document"
doc.Save
doc.GenerateDocumentFile
MsgBox doc.FullPath, 0, "File generated"

 

Check the SO\_ARC folder after running this script to see if the document has been created. Open it to see what values are in the document.