

##SUMMARY


This function will replace template variables in a string with the specified information, e.g. replace the &lt;name&gt; template variable <NAME>with SuperOffice AS. If you want to create your own template systems, you can access our substitution engine using this function. This will fill the values based on the logged in user.
 
<A href="guideTemplateVariables.html">Read more</A>



##EXAMPLE

**Replace template variables**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](../../Examples/vbs/Database.SubstituteTemplateVars.vbs.txt)




##RETURNS

String – the text with the template variables replaced





##PARAM: SourceString

The string containing the template variables





##PARAM: lContactId

Contact id of the company you want info about





##PARAM: lPersonId

Person id of the person you want info about





##PARAM: lProjectId

Project id of the project you want info about





##PARAM: lDocumentId

Document id of the document you want info about





##PARAM: bIsMailMergeDraft

Default FALSE, TRUE if merge draft. Will not replace all template variables, only the SourceString





##PARAM: bUseHtmlBrackets

Default FALSE, TRUE if you use { and } instead of &lt; and &gt;





##PARAM: bIsUrlEncoded

DEFAULT FALSE, TRUE if SourceString is an url. If true you will get ANSI encoding.



