---
uid: Usingtemplatevariables
title: Using template variables
---

Here is a brief overview of how to use the variables in the templates:

-   You can also use template variables in URL and filename strings in the Application list. In this case you do not need to use fill characters.
    For example, you can define an application button to launch the program "MAGIC.EXE" with the parameter  "company=&lt;name&gt;".
-   You can access template variable expansion using the [Database.SubstituteTemplateVars](SUPEROFFICEDBLib~Database~SubstituteTemplateVars.md) and [Database.SubstituteTemplateVarsEx](SUPEROFFICEDBLib~Database~SubstituteTemplateVarsEx.md) methods in the COM API.

The full list of template variables are described on [Techdoc](http://techdoc.superoffice.com/?sixTemplate.html).

NetServer integration
=====================

Because XML documents use the angle-brackets to denote tags, template variables should be surrounded with curly-brackets instead of angle-brackets in XML and HTML content.

e.g. use {name} instead of &lt;name&gt; in XML documents.

| Template     | Description                                                                                                                                             |
|------|----------------------------------------------------------------------------------------------------------------------------------------------|
| user | User login name - is not affected by the selected diary, unlike auth tag.                                                                    |
| usec | NetServer Base64 encoded secret. Send this along with user to get integrated login with netserver.                                           |
| usid | User login record id (hidden id). The associate id of the currently logged in user. Is not affected by the selected diary user, unlike alid. |

 

Example:

You could define a Web panel url like this in SOADMIN:

     http://server/testapp/default.aspx?Associate=&lt;user&gt;&Secret=&lt;usec&gt;

 

This turns into the following web panel request inside the client:

     http://server/testapp/default.aspx?Associate=ERIK&Secret=WbhBGrPXjYHvfgQHTfWblw%3D%3D

  

This is the code to perform the authentication in NetServer

``` 
private void Page_Load(object sender, System.EventArgs e)
{
    string associate = Request["Associate"];
    string secret = Request["Secret"];

    SoCredentials cred = new SoCredentials();
    cred.AuthenticationType = SoAuthenticationType.CRM5;
    cred.UserId = associate;
    cred.Secret = secret;

    using (SoSession session = SoSession.Authenticate(cred))
    {
           if (session == null)
           {
                 _info.Text = "Authentication failed (Arguments: Default.aspx?Associate="+associate+"&Secret="+secret+")";
           }
            else
           {
                 PersonRow person = new PersonRow.IdxPersonId(SoContext.CurrentPrincipal.PersonId);
                 _info.Text = "Authenticated as " + PersonNameFormatter.GetFormalName(person);
           }
    }
}
```

**NOTE**: there appears to be a bug in the URL encoding in the original SIX release, so that + signs are not properly escaped.  The work-around for this is to convert any spaces in the secret string into + symbols.