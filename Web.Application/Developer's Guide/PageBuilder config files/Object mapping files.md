<properties date="2016-06-24"
SortOrder="17"
/>

Object mapping files
====================

Since all the rendering and building of a page in the CRM.web application is depended on XML configuration files we need a mechanism map the objects in the of the pages to the actual objects of the system. For example in which assembly a particular control is taken from. Below the actual object mapping config file of the CRM.web application again some parts of it have been taken off since it is too long to be shown in this document.

```
<objects>
  <!-- rendering framwork-->
  <object type="IPanel" mappingname="SoPanel" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.Panel"></object>
  <object type="IPanel" mappingname="SoMainPanel" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.MainPanel"></object>
 
  <object type="ICard" mappingname="SoCard" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.Card"></object>
  <object type="ICard" mappingname="SoTabbedCard" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.TabbedCard"></object>
 
  <object type="IView" mappingname="SoView" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.View"></object>
  <object type="IView" mappingname="SoPlainView" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.PlainView"></object>
 
  <object type="IControlGroup" mappingname="SoControlGroup" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.ControlGroup"></object>
  <object type="IControlGroup" mappingname="SoHookedControlGroup" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.HookedControlGroup"></object>
 
  <object type="IViewStateProvider" mappingname="SoProtocolProvider" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.Protocol.SoProtocolProvider" ></object>
  <object type="IViewStateProvider" mappingname="SoMiniPreviewProvider" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.Protocol.SoMiniPreviewProvider" ></object>
 
    <!-- Datahandlers -->
  <object type="IDataHandler" mappingname="DiaryDataHandler" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.Data.DiaryDataHandler"></object>
  <object type="IDataHandler" mappingname="ContactEntityDataHandler" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.Data.ContactEntityDataHandler"></object>
 
  <!-- Validations -->
  <object type="IValidation" mappingname="DateValidation" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Validations.DateValidator"></object>
  <object type="IValidation" mappingname="RangeValidation" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Validations.RangeValidator"></object>
 
  <!-- Usercontrols -->
  <object type="UserControl" mappingname="ContactMainView" assemblyname="SuperOffice.CRMWeb" objectname="~/WebParts/Contact/ContactMainView.ascx"></object>
  <object type="UserControl" mappingname="Contact2PersonMainView" assemblyname="SuperOffice.CRMWeb" objectname="~/WebParts/Contact/Contact2PersonMainView.ascx"></object>
 
 
  <!-- Find Dialog -->
  <object type="UserControl" mappingname="SoCriteria" assemblyname="" objectname="~/WebParts/Find/CriterionControl.ascx"></object>
  <object type="UserControl" mappingname="SoCriteriaDialog" assemblyname="" objectname="~/WebParts/Find/CriterionDialogControl.ascx"></object>
 
  <object type="Control" mappingname="SoHiddenField" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.SoHiddenField" ></object>
  <object type="Control" mappingname="SoButton" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.SoButton"></object>
 
  <object type="IArchiveAction" mappingname="UpdateRows" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.UpdateRows"></object>
  <object type="IArchiveAction" mappingname="ToggleActivities" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.ToggleActivities"></object>
    
  <object type="AjaxMethod" mappingname="Appointment" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.AjaxMethods.Appointment" xusing_ajaxnet="true"></object>
  <object type="AjaxMethod" mappingname="DiaryUpdate" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.AjaxMethods.DiaryUpdate" xusing_ajaxnet="true"></object>
 
  <!-- filters -->
  <object type="IFilter" mappingname="FreetextFindFilter" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Filters.FreetextFindFilter"></object>
  <object type="IFilter" mappingname="ContextFilter" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Filters.ContextFilter"></object>
   
  <!-- Archive data fetchers-->
  <object type="IArchiveControlDataFetcher" mappingname="SoArchiveFetcher" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.SoArchiveFetcher"></object>
  <object type="IArchiveControlDataFetcher" mappingname="SoArchiveFindFetcher" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.SoArchiveFindFetcher"></object>
   
</objects>
```

 

So by the type it tells us what is the type of the object and from the mapping name it tells us in the other config files what is the name that this object is given. For example the below line tells us

```
<object type="IPanel" mappingname="SoPanel" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.Panel"></object>
```

 

the object that is represented by this line is referred to as SoPanel in other config files. By the assemblyname it tells in which assembly this particular object resides and from the objectname it tells us what is the actual name of the object inside the given assembly. When you have the mapping like this in a config it is very easy for a class factory to come in and use these configurations to build the actual objects itself. By using this method we can gain another advantage that is we can very easily extend the object library and we can add customization versions very easily as well. The logic behind this is if the name of the object does not change we can alter the behavior of the object and the PageBuilder framework will not know the difference.
