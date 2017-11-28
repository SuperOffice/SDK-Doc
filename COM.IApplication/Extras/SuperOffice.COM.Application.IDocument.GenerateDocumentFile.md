

##SUMMARY

Creates a document and does the tag substitutions (template variables) according to the properties set on the document object. Will generate a filename based on the contact and template type if the target path is blank. Will use the correct file in the template directory in SO_ARC if the templateSource is blank. Copies the template and substitutes the given contact/person/project values


##EXAMPLE

**GenerateDocumentFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](../../Examples/vbs/SODocument.GenerateDocumentFile.vbs.txt)




##RETURNS

Returns false on failure





##PARAM: createMergeDraft

if true this will be a mailmerge draft, and the template variables will not be substituted





##PARAM: templateFilePath

optional path to document template





##PARAM: outputFilePath

optional path to finished document



