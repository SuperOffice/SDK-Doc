<properties date="2016-06-24"
SortOrder="20"
/>

```
using SuperOffice;
 
//Creating a new user Session
SoSession newSession = SoSession.Authenticate("sam", "sam");
//using the created Session
using (newSession)
{
      //Validating the created Session
      if (newSession.Equals(null))
            MessageBox.Show("No session is created");     
      else
            MessageBox.Show("Session is successfully created.Logged on UserName is " + SoContext.CurrentIdentity.Name);
      newSession.Close();                   
}
```

        

The example above shows us how we can create session. The session is created using the SoSession class located in the SuperOffice namespace. Once Authenticate() method evaluates the entered username and password, a session will be created if the data entered is valid. The SoContext class is used to retrieve the information about the currently logged in user.
