<properties date="2016-08-04"
SortOrder="13"
/>

Once the user has been authenticated he will be directed to this page. The page allows the user to enter some requirements and based on the entered requirements the data is retrieved using the NetServer services layer.

```
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Appointments.aspx.cs" Inherits="Appointments" %>
 
<%@ Register TagPrefix="so" Namespace="SuperOffice.Web.UI.Controls" Assembly="SuperOffice.Web.UI.Controls" %>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Appointments</title>
</head>
    <body>
        <form id="form1" runat="server">
            <div style="text-align: center">
                <div style="position: absolute; top: 25px; left: 400px; white-space: nowrap; ">
                    <asp:Label ID="LabelPage" runat="server" Text="Appointments" Font-Bold="True" />
                </div>          
                <div style="position: absolute; top: 75px; left: 250px; white-space: nowrap; ">
                    <asp:Label ID="lblAssoicate" runat="server" Text="Associate ID" Font-Bold="True" />
                </div>       
                <div style="position: absolute; top: 75px; left: 350px">
                    <so:SoTextBox Width="184px" TabIndex="1" MaxLength="60" runat="server" ID="assoicateID" />                   
                </div>            
                <div style="position: absolute; top: 95px; left: 250px; white-space: nowrap; ">
                    <asp:Label ID="lblActivedate" runat="server" Text="Active Date" Font-Bold="True" />
                </div>
                <div style="position: absolute; top: 95px; left: 350px">
                    <so:SoTextBox Width="184px" TabIndex="1" MaxLength="60" runat="server" ID="activeDate" />                   
                </div>
                <div style="position: absolute; top: 115px; left: 250px; white-space: nowrap; ">
                    <asp:Label ID="lblEndDate" runat="server" Text="End Date" Font-Bold="True" />
                </div>
                <div style="position: absolute; top: 115px; left: 350px; white-space: nowrap">
                    <so:SoTextBox Width="184px"  MaxLength="60" ID="endDate" TabIndex="1" runat="server" />
                </div>
                <div style="position: absolute; Top: 170px; right: 20px; width: 80px; left: 470px; ">
                    <so:SoButton ID="datesBtn" runat="server" TabIndex="4" Text="Submit" Font-Bold="True" OnClick="datesBtn_Click" />
                </div>  
                <div style="position: absolute; Top: 210px; right: 20px; width: 80px; left: 350px; ">
                    <table id="tblid" runat="server" style="width: 250px; ">
                        <tr>
                            <td style="font-weight: bold">Date</td>
                            <td style="font-weight: bold">Day</td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>
    </body>
</html>
```

 

The above code reflects the GUI of the login page, it consists three of SoTextBoxes and a SoButton. These GUI elements have been added in the same way as in the login page and the ids of the textboxes are used to link them to the code behind. Once the “Submit” button of the page has been clicked it will execute a “datesBtn\_Click” method. Once the method has been executed the “Submit” button will disappear and instead a table containing the result will appear. This is also done through the code behind file.

The code behind file of the Appointments.aspx is as follows.

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
 
public partial class Appointments : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if(!IsPostBack)
        this.tblid.Visible = false;
        else
        this.tblid.Visible = true;
    }
 
    protected void datesBtn_Click(object sender, EventArgs e)
    {     
        using (SoSession mySession = SoSession.Authenticate(Session["UserName"].ToString().Trim(), Session["passWord"].ToString().Trim()))
        {
            //retrieve user inputs and store them in variables
            TextBox ai = form1.FindControl("assoicateID") as TextBox;
            TextBox ad = form1.FindControl("activeDate") as TextBox;
            TextBox ed = form1.FindControl("endDate") as TextBox;
 
            //converting the values to the format required by the method
            int personID = int.Parse(ai.Text);
            DateTime activeDate = DateTime.Parse(ad.Text);
            DateTime endDate = DateTime.Parse(ed.Text);
 
            //retrive the appointments list using the Agent
            IAppointmentAgent newAppAgt = AgentFactory.GetAppointmentAgent();
 
            ActivityInformationListItem[] newAppArr = newAppAgt.GetActivityInformationListByDatesAndAssociate(activeDate, endDate, 103);
           
            //Displaying the Appointments between a given date range of and Associate
            for (int i = 0; i < newAppArr.Length; i++)
            {
                //Instantiate table rows and table cells
                HtmlTableCell tblcelldate = new HtmlTableCell();
                HtmlTableCell tblcellday = new HtmlTableCell();
                HtmlTableRow tblrow = new HtmlTableRow();
 
                //Assigning data to the table
                tblcelldate.Controls.Add(new LiteralControl(newAppArr[i].Date.Date.ToString("dd/MM/yyyy")));
                tblcellday.Controls.Add(new LiteralControl(newAppArr[i].Date.DayOfWeek.ToString()));
                tblrow.Controls.Add(tblcelldate);
                tblrow.Controls.Add(tblcellday);
                tblid.Controls.Add(tblrow);
                datesBtn.Visible = false;
            }           
        }
    }
}
```

 

The Page\_Load() method is used to switch the visibility state of the table that is used to display the results based on the data entered by the user. Once the “Submit” button of the page has been clicked it will execute the datesBtn\_Click() method. The method checks and evaluates the Session using session variables. The values of the session variables have been updated when the user authenticates him/her self in the login page.

Once the user has been validated the data entered into the SoTextBoxes are converted into TextBox types of the .NET framework. And then these are converted into the respective types that is accepted by the GetActivityInformationListByDatesAndAssociate() method of the IAppointmentAgent. The IAppointmentAgent is created using the AgentFactory.

The appointments retrive from the agent are stored in a array of ActivityInformationListItem type. A for loop is used to fetch the data from this array and display them on the Appointments page using a HTML table. When the results are displayed the ”Submit” button would become invisible.

Following is an image of the Appointments page before the ”Submit” button has been clicked.

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image005.jpg" width="467" height="230" />

Below is the screen shot of the Appointments page after the ”Submit” button has been clicked and the Appointments data has been retrived.

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image006.jpg" width="448" height="386" />
