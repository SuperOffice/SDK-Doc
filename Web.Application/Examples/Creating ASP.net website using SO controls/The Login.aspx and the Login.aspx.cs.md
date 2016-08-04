<properties date="2016-08-04"
SortOrder="12"
/>

This is the page that is used by us to authenticate users – denying access to users we don’t recognize. The page consists of SO controls such as SoTextBoxes and a SoButton. Following is the source code for the Login.aspx page.

```
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>
 
<%@ Register TagPrefix="so" Namespace="SuperOffice.Web.UI.Controls" Assembly="SuperOffice.Web.UI.Controls" %>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head id="Head1" runat="server">
        <title>Login Page</title>
    </head>
    <body style="text-align: left">
        <form id="form1" runat="server"> 
            <asp:Login ID="soLogin" runat="server">
                <LayoutTemplate>
                    <div style="position: absolute; top: 25px; left: 400px; white-space: nowrap; ">
                        <asp:Label ID="LabelPage" runat="server" Text="Login Screen" Font-Bold="True" Font-Size="Large" />
                    </div>
                    <div style="position: absolute; top: 75px; left: 250px; white-space: nowrap; ">
                        <asp:Label ID="lblUsername" runat="server" Text="User Name" Font-Bold="True" />
                    </div>
                    <div style="position: absolute; top: 75px; left: 350px">
                        <so:SoTextBox Width="184px" CssClassEditMode="LoginBox" TabIndex="1" MaxLength="60"
                            runat="server" ID="UserName" />
                        <asp:RequiredFieldValidator ID="UsernameValidator" ControlToValidate="UserName" runat="Server">*</asp:RequiredFieldValidator>
                    </div>
                    <div style="position: absolute; top: 95px; left: 250px; white-space: nowrap; ">
                        <asp:Label ID="lblPassword" runat="server" Text="Password" Font-Bold="True" />
                    </div>
                    <div style="position: absolute; top: 95px; left: 350px">
                        <so:SoTextBox Width="184px" CssClassEditMode="LoginBox" TextMode="Password" MaxLength="30" ID="Password" TabIndex="2" runat="server" />
                    </div>
                    <div style="position: absolute; Top: 150px; right: 20px; width: 80px; left: 470px; ">
                        <so:SoButton ID="LoginBtn" runat="server" TabIndex="4"  Text="Submit"  Font-Bold="True" OnClick="LoginBtn_Click" />
                    </div>  
                </LayoutTemplate>
            </asp:Login>  
        </form>
    </body>
</html>
```

 

We have placed all our SO controls inside a &lt;asp:Login&gt;&lt;/asp:Login&gt; tag. Before we use SO Controls we need to register them by using the below statement.

```
<%@ Register TagPrefix="so" Namespace="SuperOffice.Web.UI.Controls" Assembly="SuperOffice.Web.UI.Controls" %>
```

 

Once the registration is declared we can use the SO controls on the page.

For example an SoTextBox is shown below.

```
<div style="position: absolute; top: 75px; left: 350px">
<so:SoTextBox Width="184px" CssClassEditMode="LoginBox" TabIndex="1" MaxLength="60" runat="server" ID="UserName" />
<asp:RequiredFieldValidator ID="UsernameValidator" ControlToValidate="UserName" runat="Server">*</asp:RequiredFieldValidator>
</div>
```

 

We have placed the SoTextBox inside a &lt;div&gt;&lt;/div&gt; tag in order to specify the exact location that we want our control to be placed on the screen. “so:SoTextBox” tells the compiler a control which is of SoTextBox type is used and the ID of it “UserName” is used by the code behind in order to retrieve the user entered data. A required field validator is used to make sure that the user name is not null.

Then next unique SO control that is used by us is the SoButton:

```
<div style="position: absolute; Top: 150px; right: 20px; width: 80px; left: 470px; ">
<so:SoButton ID="LoginBtn" runat="server" TabIndex="4"  Text="Submit"  Font-Bold="True" OnClick="LoginBtn_Click" />
</div>  
```

 

The Submit button is an SoButton. It gets the SuperOffice look, but is otherwise a plain old button. Once the button is clicked it accesses a method called “LoginBtn\_Click” from the code behind.

The code behind of the Login.aspx is as follows.

```
using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.mdControls;
 
using SuperOffice;
using SuperOffice.CRM.Services;
 
public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
 
    }
    protected void LoginBtn_Click(object sender, EventArgs e)
    {
        //Retriving the user name and password and assigning them to Session variables
        //UserName
        TextBox un = soLogin.FindControl("UserName") as TextBox;
        Session["UserName"] = un.Text;
        //Password
        TextBox pw = soLogin.FindControl("Password") as TextBox;
        Session["passWord"] = pw.Text;
 
        using (SoSession mySession = SoSession.Authenticate(Session["UserName"].ToString(), Session["passWord"].ToString()))
        {
            //Transefering to the Appointments page          
            Server.Transfer("Appointments.aspx");           
        }
    }
}
```

 

Since we just want to show how we can use SO controls in an ASP.Net website we have not made a special effort in our code behind file to make any un-necessary validations and make the code lengthy.

What we have done once the “Submit” button is clicked is to retrieve the user entered user name and password and stored them in session variables as shown below.

```
TextBox un = soLogin.FindControl("UserName") as TextBox;
        Session["UserName"] = un.Text;
        //Password
        TextBox pw = soLogin.FindControl("Password") as TextBox;
        Session["passWord"] = pw.Text;
```

 

Next we have used the Session class’s Session.Authenticate() method to validate the entered user name and password. And if the entered data is correct the user will be directed to the Appointments.aspx page. This is shown below.

using (SoSession mySession = SoSession.Authenticate(Session\["UserName"\].ToString(), Session\["passWord"\].ToString()))

{           

      Server.Transfer("Appointments.aspx");           

}

 

The login screen looks as shown below – without the styles or themes in place:

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image003.jpg" width="457" height="244" />

 

With theme and images in place it looks more like SuperOffice:

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image004.jpg" width="398" height="217" />
