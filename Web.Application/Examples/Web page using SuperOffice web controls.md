<properties date="2016-08-04"
/>

Webpage using SuperOffice Web Controls
--------------------------------------------------------------

The intention of this document is to show the user that it is possible to get the SuperOffice applications look and feel when developing an ASP.Net site.

The first step is to add the necessary references. We need to add the SuperOffice.Web.UI.Controls.dll. When we add these to another bunch of dlls will be added.

<img src="Web%20page%20using%20SuperOffice%20web%20controls_files/image001.jpg" width="273" height="349" />

Next step is to add the Style sheets. These are necessary for us to get the SuperOffice look and feel. It should be noted that the styles sheets be added while maintaining the folder structure of the Six.Web. We have added the “.css” files called the DefaultStyles.css and SuperOffice.Web.UI.Controls.css since these styles sheets contains the styles for the controls that we plan to use in the application. Next we need to add an Image Folder with the relevant images which are used by the style sheets. This should also maintain the same folder structure as the Six.Web application, unless we make the necessary changes to the “.css files”.

<img src="Web%20page%20using%20SuperOffice%20web%20controls_files/image002.jpg" width="271" height="203" />

Once this is done we need to create a web.config file. What we have done is retrieved a copy of the web.config file used by the Six.Web application and made some changes in order to suite are need. One such change is to remove the authentication tags. Next we have made changes to the ImplicitAnonymous tags section to which is reflected below.

&lt;ImplicitAnonymous&gt;

&lt;!-- Implicit Anonymous is what you get when you do not explicitly authenticate as a user. Usually disabled in SIX.web, which uses explicit users --&gt;

&lt;add key="Allowed" value="true"/&gt;

&lt;!-- Database user that NetServer should use to log on --&gt;

&lt;add key="DBUser" value="audience"/&gt;

&lt;!--Password of database user --&gt;

&lt;add key="DBPassword" value="audience"/&gt;

&lt;!-- Should all implicit anonymous users share the same connection --&gt;

&lt;add key="CommonDBConnection" value="True"/&gt;

&lt;!-- SuperOffice anonymous user (associate of type anonymous) to be used --&gt;

&lt;add key="SoUser" value="ANONYMOUS1"/&gt;

&lt;!-- Password of SuperOffice anonymous user --&gt;

&lt;add key="SoPassword" value=""/&gt;

&lt;/ImplicitAnonymous&gt;

 

Once the above steps are done we are ready to develop are web site using SuperOffice controls.

The aim of our site would be to calculate the number of days left for a particular holiday, i.e. Christmas, New Year and Summer Equinox. Below is the code that shows how SuperOffice Controls have been used.

 

&lt;%@ Page Language="C\#" AutoEventWireup="true"  CodeFile="Time2Holiday.aspx.cs" Inherits="Time2Holiday" %&gt;

 

&lt;%@ Register TagPrefix="so" Namespace="SuperOffice.Web.UI.Controls" Assembly="SuperOffice.Web.UI.Controls" %&gt;

 

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;

 

&lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

  &lt;head runat="server"&gt;

    &lt;%--Add the default SO style sheet--%&gt;
    &lt;link href="App\_Themes/Six/DefaultStyles.css" rel="stylesheet" type="text/css" /&gt; 
    &lt;title&gt;Time-To-Holiday&lt;/title&gt;

  &lt;/head&gt;

  &lt;body style="text-align: left"&gt;

    &lt;form id="form1" runat="server"&gt; 
        &lt;asp:Panel ID="soPanel" runat="server"&gt;
            &lt;div style="position: absolute; top: 25px; left: 400px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtPage" runat="server" Text="Time-2-Holiday" EditMode="false" CssClass="SoTextBoxHeading" /&gt;
            &lt;/div&gt;
            &lt;div style="position: absolute; top: 75px; left: 250px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtCurrDate" runat="server" text="Current Date:- " EditMode="false" CssClass="SoTextBoxImportant"/&gt;
            &lt;/div&gt;
            &lt;div style="position: absolute; top: 75px; left: 400px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtCurrDateValue" runat="server" EditMode="false" text="" CssClass="SoTextBox"  /&gt;
            &lt;/div&gt;
            &lt;div style="position: absolute; top: 100px; left: 250px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtChHoli" runat="server" EditMode="false" Text="Choose Holiday" CssClass="SoTextBoxImportant" /&gt;
            &lt;/div&gt;  
            &lt;div style="position: absolute; top: 100px; left: 400px; white-space: nowrap; "&gt;           
                &lt;so:SoDropDownList ID="ddlHoliday" runat="server" CssClass="sodropdownlist"/&gt;
           &lt;/div&gt;
            &lt;div style="position: absolute; Top: 180px; right: 30px; width: 80px; left: 400px; "&gt;
                &lt;so:SoButton ID="LoginBtn" runat="server" TabIndex="4"  Text="Days"  Font-Bold="True" OnClick="LoginBtn\_Click"/&gt;
            &lt;/div&gt;
           &lt;div style="position: absolute; top: 220px; left: 250px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtNumberOfDays" runat="server" text="Number of Days to Holiday:- " EditMode="false" CssClass="SoTextBoxHeading2"/&gt;
            &lt;/div&gt;
            &lt;div style="position: absolute; top: 220px; left: 450px; white-space: nowrap; "&gt;
                &lt;so:SoTextBox ID="txtNumberOfDaysValue" runat="server" text="" EditMode="false" CssClass="SoTextBoxHeading2" /&gt;
            &lt;/div&gt;          
        &lt;/asp:Panel&gt;  
    &lt;/form&gt;

  &lt;/body&gt;

&lt;/html&gt;

 

Before any control is used it is necessary to register the namespace that contains them.

&lt;%@ Register TagPrefix="so" Namespace="SuperOffice.Web.UI.Controls" Assembly="SuperOffice.Web.UI.Controls" %&gt;

 

Next step is link the So Style sheet since we want are web page maintain the SO look.

    &lt;link href="App\_Themes/Six/DefaultStyles.css" rel="stylesheet" type="text/css" /&gt; 

 

Now we are ready to use SO Controls. In the example we have made use of controls such as SoTextBox, SoDropDownList and SoButton. When going through all the tags it can be see that in order to give the correct look we have made use of the CssClass property to get the correct style from our style sheet.

Once the page design has been done we are now ready to construct the logic, i.e. code behind of the application.

using System;

using System.Data;

using System.Configuration;

using System.Web;

using System.Web.Security;

using System.Web.UI;

using System.Web.UI.WebControls;

using System.Web.UI.WebControls.WebParts;

using System.Web.UI.mdControls;

 

public partial class Time2Holiday : System.Web.UI.Page

{

    protected void Page\_Load(object sender, EventArgs e)
    {
        //Display the current date
        TextBox txtCurDate = soPanel.FindControl("txtCurrDateValue") as TextBox;
        txtCurDate.Text = System.DateTime.Now.ToString();

 

        //Add values to the drop down list
        if (!IsPostBack)
        {           
            ddlHoliday.Items.Add("Christmas");
            ddlHoliday.Items.Add("New Year");
            ddlHoliday.Items.Add("Summer Equinox");
        }
    }
    protected void LoginBtn\_Click(object sender, EventArgs e)
    {       
        //Varable Declaration
        //Current Date related varaibles
        DateTime currentDate = DateTime.Today.Date;
        int currentYear = DateTime.Today.Year;

 

        //Holidays related variables
        DateTime christmas = new DateTime(currentYear, 12, 25);
        DateTime newYear = new DateTime(currentYear + 1, 1, 1);
        DateTime sumEqui = new DateTime(currentYear, 6, 20);

 

        //Variable related to the number of days in between
        TimeSpan numberOfDays;
        int numberDays = 0;

 

        //DropDownlist instantiation
        DropDownList newHolidayList = soPanel.FindControl("ddlHoliday") as DropDownList;
   
        //TextBox instantiation which is used to display the numbers
        TextBox txtNumDays = soPanel.FindControl("txtNumberOfDaysValue") as TextBox;

 

        //Calucalation of the Number of days in between
        //If the Holiday is Christmas
        if (newHolidayList.SelectedValue.Equals("Christmas"))
        {
            numberOfDays = christmas - currentDate;
            if (numberOfDays.Days &lt; 0)
            {
                numberDays = 365 + numberOfDays.Days;
                txtNumDays.Text = numberDays.ToString() + " days to Christmas";
            }
            else
                txtNumDays.Text = numberOfDays.Days.ToString() + " days to Christmas";
        }

 

        //If the holiday is the new year Date
        if (newHolidayList.SelectedValue.Equals("New Year"))
        {
            numberOfDays = newYear - currentDate;
            txtNumDays.Text = numberOfDays.Days.ToString() + " days to New Year";
        }

 

        //If the Holiday is Summer Equinox
        if (newHolidayList.SelectedValue.Equals("Summer Equinox"))
        {
            numberOfDays = sumEqui - currentDate;
            if (numberOfDays.Days &lt; 0)
            {
                numberDays = 365 + numberOfDays.Days;
                txtNumDays.Text = numberDays.ToString();
            }
            else
                txtNumDays.Text = numberOfDays.Days.ToString() + " days to Summer Equinox";
        }   
    }

}

 

When looking at the above code it can be seen that the SO controls can be used in a similar way to that of ASP.net controls.

Below is a screen view of the developed webpage.

<img src="Web%20page%20using%20SuperOffice%20web%20controls_files/image003.jpg" width="479" height="270" />

The sample code of the above example can be found at TODO Link

In order to run the code in addition to following the above steps the &lt;Database&gt;&lt;/Database&gt; tags of the web.config file should be modified to reflect the SuperOffice Database of machine that the site is been run on. Further the Images and the App\_Themes folders should be copied from the Six.Web installation folder.
