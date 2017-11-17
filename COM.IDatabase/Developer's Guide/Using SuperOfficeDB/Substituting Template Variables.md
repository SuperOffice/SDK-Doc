---
uid: SubstitutingTemplateVariables
title: Substituting Template Variables
---


If you want to create your own template systems, you can access our substitution engine using this function. This is not a document-specific function. You can use it for all sorts of things – so you will find this function on the database object, not the document object.

We use this function for generating personalized HTML bodies when doing  e-mail mail-merges and for generating the URLs we load into the web-integration panels.

Note that you do not need to pad out the template variables with spaces like you do inside a Word document.

 

### Database.SubstituteTemplateVars

Database.SubstituteTemplateVars( sourceString, ContactId, PersonId, ProjectId, DocumentId, isMailMergeDraft, UseHtmlBrackets, IsHtmlStyle )

**SourceString**

> e.g.: "Hello &lt;attn&gt;, How is life in &lt;name&gt;?"

**ContactId, PersonId, ProjectId, DocumentId,**

> These define the values we're going to use to substitute.
>
> ContactId determines what will be used for &lt;name&gt; and so on, while the PersonId sets the &lt;attn&gt; tag, etc. The DocumentId is used for setting the file-name and our-ref template variables.
>
> If any of the ids is zero, then the corresponding template values will be blank.

**IsMailMergeDraft = False**

> If true, then the contact and person values are left alone. This means you can run the resulting string through the function a second time.

**UseHtmlBrackets = False**

> If true, use {name} instead of &lt;name&gt; for matching the template tags. In HTML and XML, the angle brackets are used for marking tags. We let the user change to a different set of brackets  to avoid confusing our template variables with the HTML/XML tags.
>
> e.g. in HTML the &lt;head&gt; tag has a specific meaning. It would be silly for us to replace &lt;head&gt; with the document’s title just because &lt;head&gt; happened to match our template variable. We can use {head} instead for the document title.
>
> So to display the document’s title as the HTML title, we’d use this HTML sequence:
>
> &lt;head&gt;&lt;title&gt;{head}&lt;/title&gt;&lt;/head&gt;

**IsHtmlStyle = False**

> If true, URL encodes special characters:
>
> "Hi &lt;name&gt;" where Contact.Name = "Joe & sons"
>
> --&gt; "Hi Joe%20%26%20sons"
>
> This is useful when you are using a URL as the string, or if you are going to put the string into an HTML hyper-link (HREF) tag.

 

### Database.SubstituteTemplateVarsEx

This is a similar function, but it takes more parameters, allowing more control over what values are used to determine the tags.

For example, this function allows you to set the associate-id used, which controls the &lt;Auth&gt; (Author) tag value used.