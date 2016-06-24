<properties date="2016-06-24"
SortOrder="10"
/>

Create a new web user control, and make sure it inherits SuperOffice.CRM.Web.UI.Controls.UserControlBase. To be able to add an MDOControl, we need to register the SuperOffice.CRM.Web.UI.Controls namespace in the markup;

```
<%@ Register Assembly="SuperOffice.CRMWeb" Namespace="SuperOffice.CRM.Web.UI.Controls" TagPrefix="six" %>
```

Then you will be able to add any of the CRM.web controls to your ascx (or aspx) by referring to them as &lt;six: and then the name of the control you want to use.

Add an MDOControl, and use the name you provided for the MDOProviderPlugin attribute of the class you just built;

```
<six:MDOControl ID="mdoTest" ListName="DevNetTestList" EditMode="true" Width="100px" runat="server" />
```

Make sure that you set the EditMode attribute to "true", or you will not be able to access the control.

**Note:**
A useful feature of the MDOControl is that you can use any of the "list tables", like e.g. the business table, as the source for an MDOControl. So simply by saying ListName="business", the control will be populated with the contents of the business table.
