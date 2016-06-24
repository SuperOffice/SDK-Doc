<properties date="2016-05-11"
SortOrder="9"
/>

Sometimes it is necessary to suspend one session and switch in to another. Following example shows how this is done.

```
using SuperOffice;
 
SoSession newSession = SoSession.Authenticate("SAL0", "");
 
if (SoContext.CurrentIdentity != null)
{
    MessageBox.Show("Logged on user is : " +
SoContext.CurrentIdentity.Name);
}
else
   MessageBox.Show("Pending a Session");
 
//Suspending the session
string state1 = newSession.Suspend();
 
if (SoContext.CurrentIdentity == null)
{
   MessageBox.Show("Session is suspened");
}
else
{
   MessageBox.Show("The user " + SoContext.CurrentIdentity.Name + "
is not yet suspened");
}
 
//creating another session
SoSession newSession2 = SoSession.Authenticate("SAL1", "");
if (SoContext.CurrentIdentity != null)
{
   MessageBox.Show("Newly Loggedin user is : " +
SoContext.CurrentIdentity.Name);
}
else
   MessageBox.Show("Pending new Session");
 
/*suspend the newly created session. We need to keep the return
value, so that we can resume this session later and close it
properly*/
string state2 = newSession2.Suspend();
 
//continue the former session
newSession = SoSession.Continue(state1);
if (SoContext.CurrentIdentity == null)
{
   MessageBox.Show("Session is still suspended");
}
else
{
   MessageBox.Show("The user " + SoContext.CurrentIdentity.Name + "
is Continued");
}
//Close the session
newSession.Close();

Here we have first created a session and suspended it. Then
we have created another new session. Later the secondly created
session is suspended and the former session is continued to show
how you may switch between sessions.
```

 
