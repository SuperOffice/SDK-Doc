
##EXAMPLE

**Add file to the current contact**



![](..\..\Examples\vbs\Application.AddDocument.vbs.txt)


##SEEALSO

Target="SOCRM.Interop~SuperOffice.COM.Application.IDocument", Caption="IDocument Object"


##SUMMARY


Gives the same result as drag &amp; drop document on the the windows client (SOCRM.exe) 

The user may then choose what customer to archive the document on, default it adds the current contact or current person.

Tip: If you set Contact, Person or Project, also set context to the correct contact for the user. 

This method will use the correct type of document (incoming Word document).



##PARAM: i_FilePath

Full path to the document you want to add to SuperOffice CRM


##PARAM: i_RemoveOriginal

TRUE if you want SuperOffice to delete the source document after it is added


##PARAM: i_ContactId

Contact this document should be attached to


##PARAM: i_PersonId

Person this document should be attached to


##PARAM: i_ProjectId

Project this document should be attached to

