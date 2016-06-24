<properties date="2016-06-24"
SortOrder="13"
/>

Master and Content Pages
========================

Defining a Master Page is just like defining a normal page. Master Pages can contain markup, controls, or code, or any combination of these elements. However, a Master Page can contain a special type of control, called a ContentPlaceHolder control. A ContentPlaceHolder defines a region of the master page rendering that can be substituted with content from a page that derives from the master. The syntax of a ContentPlaceHolder control is given below:

```
<div id="container" style="width:100%;height:100%;visibility:hidden">
         <asp:ContentPlaceHolder ID="WebClientPlaceHolder" Runat="server">
         </asp:ContentPlaceHolder>
</div>
```

 

To differentiate a Master Page from a normal page, a Master Page is saved under the .master file extension. A page can derive from a Master Page by defining a MasterPageFile attribute on its Page directive, as demonstrated below. A page that derives from a Master Page is called a Content Page.

```
<%@ Page Language="C#" MasterPageFile="~/Masterpages/Master.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Default" Title="SuperOffice CRM.web" %>
```

 

A Content Page can declare Content controls that specifically override content placeholder sections in the Master Page. A Content control is associated to a particular ContentPlaceHolder control through its ContentPlaceHolderID property. A Content Page may only contain markup and controls inside Content controls; it cannot have any top-level content of its own. It can, however, have directives or code.

```
<%@ Page Language="C#" MasterPageFile="~/Masterpages/Master.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Default" Title="SuperOffice CRM.web" %>
 
<%@ Register TagPrefix="so2" Namespace="SuperOffice.CRM.Web.UI.Controls"  Assembly="SuperOffice.CRMWeb" %>
 
 
<asp:Content ContentPlaceHolderID="WebClientHeadPlaceHolder" runat="server">
</asp:Content>
 
<asp:Content ID="Content1" ContentPlaceHolderID="WebClientPlaceHolder" Runat="Server">
     
<!--ClientScripts-->
<div id="scripts">
</div>
 
<!--Initialize scripts are added here-->
<div id="InitializeScripts" visible="false"></div>
 
<!--Dialog Scripts are added here-->
<div id="DialogScripts" visible="false"></div>
 
<!-- This is the placeholder for the pagebuilder, do not remove -->
<so2:PageBuilder ID="PageContent" runat="server">
 
</so2:PageBuilder>
 
<input type="text" style="display:none" id="dummyinput" />
    TEST<!--StartupScripts-->
 
</asp:Content>
```

 

The above example demonstrates the relationship between Master and Content page. The Master Page in this case defines ContentPlaceHolder regions, named WebClientHeadPlaceHolder and WebClientPlaceHolder, along with some default content for this region. Individual content pages in CRM.web inherit the common site layout and look-and-feel from the Master Page.
