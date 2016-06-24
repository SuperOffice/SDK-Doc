<properties date="2016-06-24"
SortOrder="21"
/>

```
using SuperOffice;
 
SoSession newSession = SoSession.Authenticate("sam", "sam");
using (newSession)
{
      //validating the created user session
      if (SoContext.CurrentIdentity != null)
            MessageBox.Show("Logged on user is : " + SoContext.CurrentIdentity.Name);
      else
            MessageBox.Show("Pending a Session");
      //Suspending the session
      string state = newSession.Suspend();
      if (SoContext.CurrentIdentity == null)
            MessageBox.Show("Session suspened");
      else
            MessageBox.Show("The user " + SoContext.CurrentIdentity.Name + " is not yet suspened");
                   
      //continue the session
      newSession = SoSession.Continue(state);
      if (SoContext.CurrentIdentity == null)
            MessageBox.Show("Session is still suspended");
      else
            MessageBox.Show("The user " + SoContext.CurrentIdentity.Name + " is Continued");
                   
      //Close the session
      newSession.Close();                
}
```

 

The example above shows us how we may suspend a created user session. In order to suspend a session we need to make use of the Suspend() method exposed in the created instance of the SoSession class.

```
      string state = newSession.Suspend();
```

 

With the execution of the above code segment, a string containing the suspended session’s id is returned. Once a session is suspended, the CurrentIdentity will be set to “null”.

The Continue() method exposed in the SoSession class is used as shown below to re-activate a suspended session.

```
      newSession = SoSession.Continue(state);
```

 

With the execution of the Close() method the created session will be closed and the CurrentIdentity will be set to null.

An important point to remember!

The Continue method uses the value returned from the Suspend() method. This allows continuing a session without login in again. This can be very useful in web servers.

 

 

 
