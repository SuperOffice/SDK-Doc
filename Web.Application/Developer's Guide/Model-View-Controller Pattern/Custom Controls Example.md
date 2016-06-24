<properties date="2016-06-24"
SortOrder="10"
/>

Custom Controls Example
-----------------------

Displayed in **Figure Seven** is a simple dialog containing some personal information; the birthday, name and favorite color of a person.

This may at first appear to be a trivial task, hardly worth using to demonstrate the application design and databinding routine, but I’m confident that by the end of this section you will agree that simplicity here was best to fully examine the underlying design principles, data-flow and constructs.

**Figure Seven**: A custom dialog containing custom control with personal information.

<img src="Custom%20Controls%20Example_files/image001.jpg" width="348" height="319" />

 

To create a new list in SoAdmin is a very simple task. It’s as easy as clicking on the Lists button and then clicking Add to create a new list. For this example I called the new list "Favorite Color". For the sake of this demonstation, the list name is actually insignificant. What is important is the list id for the Favorite Color list. Thie id is stored in the udlistdefinition table of the database, and is used by the APIs when accessing list values.

**Figure Eight**: User-defined list Favorite Color.

<img src="Custom%20Controls%20Example_files/image002.jpg" width="500" height="512" />

 

The idea of a favorite color really only applies to a person. So, I’ve opted to keep it simple and create a user-defined list in SoAdmin (see **Figure Eight**), and then create a user-defined field on the contact (person) entity that displays a selected item from that list. **Figure Nine** displays the More tab in the person dialog, showing the user-defined field, as well as the Personal Information dialog.

 

**Figure Nine**: Personal Information dialog with data about the person.

<img src="Custom%20Controls%20Example_files/image003.jpg" width="493" height="304" />

 

As seen in **Figure Ten**, the user control is very simple. It consists of three labels and three built-in controls. There is one SoLabel to hold the current person name, one SoDateSelector to display the current person birthday and one SoMDOControl control to display the favorite color for the current person.

**Figure Ten**: PersonInformation usercontrol in Visual Studio..

<img src="Custom%20Controls%20Example_files/image004.jpg" width="476" height="540" />

 

The markup for the user control is shown in **Listing Seven**. Although it may not be obvious, some SuperOffice control properties are different than their ASPX counterparts. Take the SoLabel and asp:Label control for example. Text displayed in an asp:Label control is accomplished by setting the Text property, whereas the SoLabel control instead uses a property called Caption.

**Listing Seven**: The markup for the PersonalInformation.ascx usercontrol.

&lt;%@ Control   Language="C\#" AutoEventWireup="true"

            CodeBehind="PersonalInformation.ascx.cs"
              Inherits="ControlsAndDataHandlers.PersonalInformation" %&gt;

&lt;%@ Register TagPrefix="so2"

             Namespace="SuperOffice.CRM.Web.UI.Controls"
              Assembly="SuperOffice.CRMWeb" %&gt;

&lt;asp:Label ID="lblName" runat="server" Text="Name"&gt;&lt;/asp:Label&gt;

&lt;br /&gt;

&lt;so2:SoLabel ID="lblActualName" runat="server" Caption="FullName" /&gt;

&lt;br /&gt;

&lt;asp:Label ID="lblBirthDate" runat="server" Text="Birthday"&gt;&lt;/asp:Label&gt;

&lt;br /&gt;

&lt;so2:SoDateSelector ID="BirthDate" runat="server" Width="70px"

          ContextStyle="Important"/&gt;

&lt;br /&gt;

&lt;asp:Label ID="lblFavoriteColor" runat="server" Text="Favorite Color"&gt;&lt;/asp:Label&gt;

&lt;br /&gt;

&lt;so2:MDOControl ID="FavoriteColorList" ShowIcons="false" Width="50%" Mode="Normal"

    OnlyHistoryWithEmptySearch="false" searchable="false" runat="server" /&gt;

The code behind file for the PersonalInformation.ascx control is defined in **Listing Eight**. The first thing to pay attention to is the base class, UserControlBase. In general ASP.NET development, there are two types of custom controls, user controls and web controls. For this example, we are building a usercontol, and therefore inherit from UserControlBase. The base class to use when creating a custom control of the web control variety is the SuperOffice.CRM.Web.UI.Controls.ControlBase. Classes that inherit from these will gain support for AJAX callbacks, declarative configuration and layout assistance from the framework.

**Listing Eight**: Code behind for PersonalInformation.ascx file.

using System;

using SuperOffice.Data;

using SuperOffice.CRM.Web;

 

namespace ControlsAndDataHandlers

{

    public partial class PersonalInformation :
                         SuperOffice.CRM.Web.UI.Controls.UserControlBase
    {
        public string PersonDataSourceName { get; set; }
        public string UDFieldProgId { get; set; }
        public string UDListId { get; set; }

 

        protected void Page\_Load(object sender, EventArgs e)
        {
        }

 

        public override void Initialize(System.Xml.XmlNode config, string id)
        {
            base.Initialize(config, id);
            Setup();
        }

 

        private void Setup()
        {
            FavoriteColorList.EditMode = true;
            FavoriteColorList.ListName = "udlist" + UDListId;
            FavoriteColorList.DataSourceName =
             PersonDataSourceName + ".UserDefinedFields." + UDFieldProgId;
            FavoriteColorList.DisplayTextDataSource =
             PersonDataSourceName + ".UserDefinedFields." + UDFieldProgId +
                                    ":DisplayText";

 

            BirthDate.ReadOnly = false;
            BirthDate.EditMode = true;
            BirthDate.DataSourceName = this.DataSourceName + ".BirthDate";
            BirthDate.FieldRight =
             DataDispatcherManager.GetDataDispatcher().GetFieldRight(
                                          this.DataSourceName + ".BirthDate");
        }

 

        public override void DataBind()
        {

 

            PersonalColorCarrier colorCarrier =
             (PersonalColorCarrier)this.DataSource;

 

            if (colorCarrier != null)
            {
                this.lblActualName.Text = colorCarrier.Name;
            }

 

            FavoriteColorList.DataBind();
            BirthDate.DataSource =
             SuperOffice.Globalization.ResourceManager.ConvertToShortDateString(
                                                         colorCarrier.BirthDate);
            BirthDate.DataBind();
        }

 

        public override void UpdateDataSource()
        {
            FavoriteColorList.UpdateDataSource();
            BirthDate.UpdateDataSource();
        }
    }

} 

The sequence of events for this class when rendered is as follows: Initialize, Page\_Load and then DataBind. Once initialization is complete in the base, which if you recall populates the properties with values defined in the SOML, it is a good time to hook up the data bind logic. The Setup method contains all the code necessary to hookup the MDO control and SoDateSelector controls. The control values are then assigned and populated in the DataBind method.

If any of the controls values have changed, those changes have the opportunity to be update their data source in the UpdateDataSource method. SuperOffice controls, with correct data binding set, will automatically update their data source by calling the controls UpdateDataSource method. For non-SuperOffice controls, it is up to the developer to update the data source directly. For example:

((PersonalColorCarrier)this.DataSource).BirthDate = BirthDate.Value;

 

See Also: [Sample MVC Source code](6WebMVC.zip)
