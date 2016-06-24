<properties date="2016-05-11"
SortOrder="13"
/>

The result page shows us the link that we can give to other systems for reading the calendar.

<img src="../SuperOffice%20iCal_files/image003.gif" width="587" height="96" />

This page just checks that the id and GUID match. If they match, then we construct the link to the iCal page.

We don’t have the user’s login info here, so we can’t login as the user. Instead we log in as a system user (login info is read from the config file AppSettings).

```
int associd = 0;
int.TryParse(Request.QueryString["associd"], out associd);
string guid = Request.QueryString["guid"];
 
string souser = ConfigurationSettings.AppSettings["SOUser"];
string sopass = ConfigurationSettings.AppSettings["SOPass"];
using (SoSession sesh = SoSession.Authenticate(souser, sopass))
{
    AssociateRow assocRow =
AssociateRow.GetFromIdxAssociateId(associd);
    if (assocRow.AssociateId == associd)
    {
        int fkDevId = Util.GetFkDevice("SO-iCal");
 
        if (guid == assocRow.ForeignKeyHelper.Get(fkDevId, "iCal"))
        {
            string tmpUri = Request.Url.AbsoluteUri;
            tmpUri = tmpUri.Replace("Result.aspx", "iCal.aspx");
            ResultInfo.InnerHtml =
   "<b>Success!</b> You can add the following link to
Google Calendar: <br>"
 + "<a href=\"" + tmpUri + "\">" + tmpUri +
"</a><br>\n"
 + "<p>Note that old links you may have created will stop
working. Only one link is valid at a time.";
        }
    }
}
```

 

The system user bypasses the sentry security restrictions, and is therefore allowed to read and publish the user’s private appointments. This is not so important here, but is more important on the next page, the iCal Results.

------------------------------------------------------------------------

**See Also:** [iCal Results](../SuperOffice%20iCal%20Feed/iCal%20Results.md)
