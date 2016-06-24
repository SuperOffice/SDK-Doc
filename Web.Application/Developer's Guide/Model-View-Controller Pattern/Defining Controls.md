<properties date="2016-06-24"
SortOrder="3"
/>

Defining Controls
-----------------

One or more controls are defined within a controlgroup element. Control elements are used to declare built-in controls, such as SoLabel and SoTextBox. They may also contain references to custom controls, such as an ASP.NET User Control or Web Control. Before a custom control is able to be resolved and rendered in a page file, it must first be declare in SoObjectMapping.config first. For example, as seen in SoObjectMapping.config, a control is declared using the object element:

&lt;object type="UserControl" mappingname="PersonalColorUserControl"

assemblyname="ControlsAndDataHandlers"

objectname="~/UserControls/PersonalColorPreference.ascx"&gt;&lt;/object&gt;

 

Defining a control in a page is fairly straight forward. The control must have unique id and the type must be the same text as the “mappingname” assigned to it in SoObjectMapping. Other attributes in a control element are styling attributes, such as width, height, top, left, right and bottom settings.

Data Sources and Configuration Settings
---------------------------------------

Child elements of a control element include the datasource and config elements, but can have many more that define additional control behavior. These elements are used by both superoffice controls and custom controls alike.

The datasource element is used by the built-in controls to automate databinding tasks. What this means for you as a developer is that the responsibility for getting or setting the datasource of built-in controls is not up to you, but up to the framework. For example, the datasource of a SoTextBox might reference a string property of a datacarrier – which could be the PersonEntity FirstName property. The framework will get that string out of the carrier and set the text property of the SoTextBox automatically. This occurs when the framework calls Databind on the page. The built-in SoTextBox will check for changes and persist the new value back into the carriers property for you too. How this is accomplished will be shown a little later when dicussing custom controls.

The config element is not used by all controls, but can contain any number of custom elements that are passed to the control during initialization. The config child elements are very useful for custom controls as they will be passed in as a parameter of type XmlNode to the controls’ Initialize method. The argument can then be used to populate class member variables of the control for later use. Consider the following custom control definition.

&lt;control id="PersonalColorControl" type="PersonalColorUserControl" width="100%"

           top="0px" left="0px" height="100%" position="absolute" &gt;

  &lt;datasource&gt;PersonalColorDataHandler.PersonalColorCarrier&lt;/datasource&gt;

  &lt;config&gt;

   &lt;PersonDataSourceName&gt;PersonalColorDataHandler.PersonCarrier&lt;/PersonDataSourceName&gt;
    &lt;UDFieldProgId&gt;SuperOffice:2&lt;/UDFieldProgId&gt;
    &lt;UDListId&gt;31&lt;/UDListId&gt;

  &lt;/config&gt;

&lt;/control&gt;

 

The control is a custom control called PersonalColorPreference.ascx that maps to an object elment with a mapping name of PersonalColorUserControl, defined in SoObjectMapping.config.

As seen in **Listing Three**, the first argument of the Initialize method is an XmlNode type. During initialization, this argument is populated with all elements defined in the config section of the control.

Take careful notice of the public properties with the same names as the elements defined in the config element. The UserControlBase class does a wonderful job here by automatically populating the property with the values defined in the config file. The simplest way to think about this is to compare it to userSettings in the web.config file. Only now, looking up the values and setting the properties are automatically done for you!

**Listing Three**: Skeleton Custom Control

using System;

 

namespace ControlsAndDataHandlers

{

    public partial class PersonalColorPreference :
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
        }

 

        public override void DataBind()
        {
         }

 

        public override void UpdateDataSource()
        {
        }
    }

}

 

The process of initialization is shown in **Figure Four**. It starts when a request for a page reaches the web server. The framework constructs the view by first checking the cache to see if this page has been previously created and cached. If it has not, it parses the page SOML and creates the MVC view based on the page definition. The page is then rendered to the client and cached for future requests.

**Figure Four**: Invoking a control process

<img src="Defining%20Controls_files/image001.jpg" width="493" height="408" />

 

See Also: PersonEntity, UserControlBase

 
