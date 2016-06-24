<properties date="2016-06-24"
SortOrder="12"
/>

In the following example we provide a simple login screen which consists of two text boxes prompting the username and the password, and a button. The code corresponding to authentication is written under the button’s click event.

```
<div>
        &nbsp;&nbsp;
        <asp:TextBox ID="txtUserName" runat="server" Style="z-index: 100; left: 372px; position: absolute;
            top: 161px"></asp:TextBox>
        <asp:TextBox ID="txtPassword" runat="server" Style="z-index: 101; left: 372px; position: absolute;
            top: 193px" TextMode="Password"></asp:TextBox>
        <asp:Label ID="Label1" runat="server" Style="z-index: 102; left: 265px; position: absolute;
            top: 163px" Text="Username" Width="77px"></asp:Label>
        <asp:Label ID="Label2" runat="server" Style="z-index: 103; left: 266px; position: absolute;
            top: 198px" Text="Password" Width="77px"></asp:Label>
        &nbsp;
        <asp:Label ID="lblError" runat="server" ForeColor="Red" Style="z-index: 104; left: 321px;
            position: absolute; top: 115px" Text="Authentication Failed" Visible="False"
            Width="174px"></asp:Label>
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click1" Style="z-index: 106;
            left: 348px; position: absolute; top: 248px" Text="Login" Width="48px" />
   
    </div>
```

 

An important HTML coding segment is given above.

```
using System.IO;
using System.Security.Cryptography;
using SuperOffice;
using SuperOffice.Security.Principal;
 
//When the login button is clicked the user is authenticated     
protected void Button1_Click1(object sender, EventArgs e)
{
    //Retrieve the username and password from the text boxes      
    userId = txtUserName.Text;
    password = txtPassword.Text;
    SoSession mySession;
    //Set SoCredentials
    SoCredentials myCredentials = new SoCredentials();
    //set the Authentication type
    myCredentials.AuthenticationType = SoAuthenticationType.CRM5;
    //set the user ID
    myCredentials.UserId = userId;
    //calculate the secret and set it
    myCredentials.Secret = CalculateCredentialsSecret(SoAuthenticationType.CRM5, GetDays(),userId, password);
    //Authenticate using the SoSession class
 
    //Authenticate the user
    mySession = SoSession.Authenticate(myCredentials);
    if (mySession != null)
    {
        //Fill the value to Session Variable    
        Session["MySession"] = mySession.Suspend();
        //If successfully authenticated, direct to the next page.
        Response.Redirect("SalesData.aspx");
                                  
    }
    else
    {   
        //Display the authentication failed message to the user
        lblError.Text = "Authentication Failed";
        txtPassword.Text = "";
        txtUserName.Text = "";
    }    
}
 
public static string CalculateCredentialsSecret(SuperOffice.Security.Principal.SoAuthenticationType authenticationType, int days, params string[] arguments)
{
    string secret = null;
    MemoryStream ms = new MemoryStream();
    StreamWriter sw = new StreamWriter(ms, System.Text.Encoding.UTF8);
 
    // The Authentication type enum as string, e.g. "CRM5"
    sw.Write(authenticationType.ToString());
 
    foreach (string argument in arguments)
        sw.Write(argument);
 
    sw.Write(days.ToString());
 
    sw.Flush();
    int length = (int)ms.Position;
    sw.Close();
    MD5 md5 = MD5.Create();
    byte[] hash = md5.ComputeHash(ms.GetBuffer(), 0, length);
    secret = Convert.ToBase64String(hash);
    ms.Close();
    return secret;
}
 
public static int GetDays()
{
    return (int)((TimeSpan)(DateTime.UtcNow - new DateTime(2000, 1, 1))).TotalDays;
 
}    
```

 

Once the login button is clicked username and password are retrieved from the text boxes. The SoCredentials are set based on the user’s authentication data. Using the Authenticate() method of the SoSession class the user is authenticated [Authentication and SOAP Calls](../../../Introduction/Authentication%20and%20SOAP%20calls/Authentication%20and%20SOAP%20calls.md). If authentication is successful a new session is created and the user is redirected to the Sales page.
