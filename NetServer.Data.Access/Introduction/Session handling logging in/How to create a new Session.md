<properties date="2016-05-11"
SortOrder="7"
/>

When someone logs in a new session is created. Sessions are created through the SoSession class. The following example demonstrates how to authenticate a user through the SoSession class.

```
using SuperOffice;
 
SoSession newSession = SoSession.Authenticate("SAL0", "");
using(newSession)
{
    if (newSession == null)
    {
        MessageBox.Show("No session is created");
    }
    else
        MessageBox.Show("Session is successfully created. Logged on
UserName is " + SoContext.CurrentIdentity.Name);
 
    newSession.Close();
}
```

 

Here we have created a new Session via SoSession class. If the authentication data are correct, an instance of the SoSession is created.  We have retrieved some data about the currently logged in user through SoContext class which holds information about the currently logged in user.

The Authenticate method has 3 overloads. If you do not pass any parameters to the Authenticate method then it authenticates the user based upon the currently logged in windows user.
