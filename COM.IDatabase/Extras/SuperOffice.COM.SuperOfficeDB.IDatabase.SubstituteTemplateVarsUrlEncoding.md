
##EXAMPLE



![](..\..\Examples\vbs\Database.SubstituteTemplateVarsUrlEncoding.vbs.txt)


##SUMMARY

This function will replace template variables in a string with the specified information, e.g. replace the &lt;name&gt; template variable with the text "SuperOffice AS". 
If you want to create your own template systems, you can access our substitution engine using this function. This will fill the values based on the logged in user.

[Read More](../Reference/Using template variables.md)



##ISNEW

16/12/2008


##PARAM: SourceString

The string containing the template variables


##PARAM: lContactId

Contact id of the contact you want info about


##PARAM: lPersonId

Person Id of the person you want info about


##PARAM: lProjectId

Project Id of the project you want info about


##PARAM: lSelectionId

Selection Id of the selection you want info about


##PARAM: lAppointmentId

Appointment Id of the appointment you want info about


##PARAM: lDocumentId

Document Id of the document you want info about


##PARAM: lSaleId

Sale id of the sale you want info about


##PARAM: lAssociateId

Associate id of the associate you want info about


##PARAM: bIsMailMergeDraft

Default FALSE, TRUE if merge draft. Will not replace all template variables, only the SourceString


##PARAM: bUseHtmlBrackets

Default FALSE, TRUE if you use { and } instead of &lt; and &gt;


##PARAM: i_enUrlEncoding

Type of urlencoding, unknown, ansi or unicode


##PARAM: bUseHtmlBreak

Default FALSE, TRUE if linebreaks are to be replaced with &lt;BR&gt; for use in mail and on web

