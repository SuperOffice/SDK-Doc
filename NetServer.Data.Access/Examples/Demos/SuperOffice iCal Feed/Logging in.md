<properties date="2016-05-11"
SortOrder="12"
/>

Our web site will start off with a simple web form: Username + Password.

<img src="../SuperOffice%20iCal_files/image002.gif" width="367" height="174" />

We will take this and log in to NetServer. If the login is successful, we generate a random GUID and store it as a foreign-key on the user’s associate record.

```
    protected void LoginSubmit_ServerClick(object sender, EventArgs
e)
    {
       SoSession sesh = SoSession.Authenticate(Username.Value,
Password.Value);
 
       if (sesh.IsOpen)
       {
            string guid = Guid.NewGuid().ToString();
            int id = sesh.Principal.AssociateId;
            AssociateRow assoc =
AssociateRow.GetFromIdxAssociateId(id);
 
            int fkDevId = Util.GetFkDevice("SO-iCal");
            assoc.ForeignKeyHelper.Set( fkDevId, "iCal",  guid );
            assoc.ForeignKeyHelper.Save();
            sesh.Close();
 
            string url =
string.Format("Result.aspx?associd={0}&guid={1}", id, guid );
            Response.Redirect( url );
       }
       else
           Result.InnerText = "Unable to log in to SuperOffice as "
+ Username.Value;
   }
   catch(Exception)
   {
       Result.InnerText = "Unable to log in to SuperOffice as " +
Username.Value;
   }
}
```

 

The Util.GetFkDevice is a helper that creates a foreign-key app and device record for us if necessary.

If the login is successful, we store the unique id needed to log in and send the browser to the Result.aspx page.

------------------------------------------------------------------------

**See Also:** [Result page](../SuperOffice%20iCal%20Feed/Result%20page.md)
