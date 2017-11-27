---
uid: TempVarNetServerintegration
title: NetServer integration
---

|Template Code      | Description                                                                                                                     |
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

```cs
private void Page_Load(object sender, System.EventArgs e)
{
    string associate = Request["Associate"];
    string secret = Request["Secret"];

    SoSafeCredentials cred = new SoSafeCredentials();
    cred.Ticket = secret;

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