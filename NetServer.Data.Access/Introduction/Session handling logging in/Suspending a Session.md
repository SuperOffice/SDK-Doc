<properties date="2016-05-11"
SortOrder="8"
/>

It is even possible to suspend a running session. In the following example we have demonstrated how this is done.

 

```
 
using SuperOffice;
 
SoSession newSession = SoSession.Authenticate("SAL0", "");
 
using(newSession)
{
    if (SoContext.CurrentIdentity != null)
    {
        MessageBox.Show("Logged on user is : " +
SoContext.CurrentIdentity.Name);
    }
    else
        MessageBox.Show("Pending a Session");
 
    //Suspending the session
    //Note that we keep the return value so that we can continue
the session later on
    string state = newSession.Suspend();
 
    if (SoContext.CurrentIdentity == null)
    {
       MessageBox.Show("Session is suspened");
    }
    else
    {
       MessageBox.Show("The user " + SoContext.CurrentIdentity.Name
+ " is not yet suspened");
    }
 
    //continue the session
    newSession = SoSession.Continue(state);
    if (SoContext.CurrentIdentity == null)
    {
       MessageBox.Show("Session is still suspended");
    }
    else
    {
       MessageBox.Show("The user " + SoContext.CurrentIdentity.Name
+ " is Continued");
    }
    //Close the session
    newSession.Close();
 
}
 

 
```

Initially we create a new Session for the user with username SAL0. If authentication fails the current identity property of the SoContext class will be set to null. You can suspend the session by using the Suspend() method which returns a string containing the session id. When a session is suspended the CurrentIdentity will be set to null. If you need to continue this session you can pass the session id returned by the Suspend() method to the Continue() method of the SoSession class which returns the former session. At the end, the newSession is closed by using the Close() method , and thereby the CurrentIdentity is once again set to null.
