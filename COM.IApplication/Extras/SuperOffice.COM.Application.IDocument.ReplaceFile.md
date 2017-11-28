

##SUMMARY


There are three different scenarios: 

- The document record exists but filename is empty. The file is saved and the document record is updated with files name 

- The document record exists but not the file. File is saved with name from document record. 

- The document record and file exists. If the content of the files differs the existing content is 



##EXAMPLE

**ReplaceFile**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information. You also need two different files, with different text to verify. The examples use c:\test.doc and c:\test2.doc

![](../../Examples/vbs/SODocument.ReplaceFile.vbs.txt)







##PARAM: bstrFilePath

path to the file you want to archive





##PARAM: deleteFilePath

remove the original once the file is archived, true if it should be deleted



