<properties date="2016-06-24"
SortOrder="2"
/>

Page Configuration – the Inevitable View
-------------------------------------------------------------------

There are configuration choices to consider when extending the web client. More specifically, a choice must be made that decides how the controls will be defined. The options are to completely define the layout using solely SuperOffice Markup Language (SOML) in the page configuration file, or build custom controls that are then referenced in SOML.

In the first part of this article, I will construct a simple dialog, shown in **Figure Three,** using just SOML. In the second part of this article, I will demonstrate how to accomplish a similar, but slightly more complex, page using a custom control. Demonstrating both options will allow you to see the similarities and differences in both scenarios.

**<img src="Page%20Configuration_files/image001.jpg" width="348" height="347" />**

**Figure Three**: A simple custom dialog.

 

The page configuration defines everything about a rendered view, or web page. A page defines the title, datahandlers and controls displayed in the browser. Technically, a page configuration is not considered a MVC view until it has been parsed, transformed and rendered as an ASP.NET page.

Whether just using built-in controls or referencing custom controls, the basic SOML configuration is similar. **Listing One** shows an excerpt from the single view element used in the SoPersonalColorPage.config file. Do not confuse a view element here with a MVC view; they are not the same. A view element in SOML is a content placeholder for controlgroups and controls.

The framework will parse and use all the SOML in the page to construct the MVC view shown in **Figure Three**. The view element in **Listing One** declares one control group that contains two built-in controls: a SoTextBox and a SoDateSelector.

**Listing One**: Defining control layout using purely markup.

&lt;view id="PersonalColorExampleControl" type="SoDialogView" soprotocol="main"&gt;

  &lt;caption&gt;Personal Information&lt;/caption&gt;

  &lt;controlgroups&gt;

    &lt;controlgroup id="DateControlsControlGroup" type="SoControlGroup" top="10px"
                    height="100%" width="100%" left="10px" right="0px" position="absolute"&gt;
      &lt;controls&gt;
        &lt;control id="FullNameTextBox" type="SoTextBox" top="10px" height="25px"
                width="200px" left="10px" right="0px" position="absolute" &gt;
          &lt;datasource&gt;PersonalColorDataHandler.PersonalColorCarrier.Name&lt;/datasource&gt;
          &lt;config&gt;
          &lt;/config&gt;
        &lt;/control&gt;
        &lt;control id="myDateTime" type="SoDateSelector" top="30px" height="25px"
                width="200px" left="10px" right="0px" position="absolute" &gt;
         &lt;datasource&gt;PersonalColorDataHandler.PersonalColorCarrier.BirthDate.Date&lt;/datasource&gt;
          &lt;config&gt;
          &lt;/config&gt;
        &lt;/control&gt;
      &lt;/controls&gt;
    &lt;/controlgroup&gt;

  &lt;/controlgroups&gt;

&lt;/view&gt;

If this is your first time viewing SOML, **Listing One** might seem a little intimidating at first. Deconstructing each element will hopefully make things more readable.

Each element in SOML requires a unique id. With the exception of the page element, the element id can be anything. The general guideline here is to make it relevant to the displayed information,or context.

Most SOML elements also require a type. Although not shown in **Listing One**, the card element that encapsulates this view element is declared as a SoTabbedCard type. The view is declared as the SoDialogView type. The result of having these types combined is visible in the view output, a card-looking tab with SuperOffice shading around the top, right and bottom.

The sole purpose of the controlgroups element and controlgroup element is positioning. These elements are strictly containers that are used to position the controls they contain.

The controls inside a controlgroup element also have positioning attributes, but more important is the control child element; datasource. The datasource element defines what data the framework will bind to the control. I'll discuss databinding further very soon.

Once a page configuration has been created, they only way the framework can discover it is if it is declared in the SoApplicationConfiguration.config file. For example:

&lt;page id="personalcolor" type="dialog" height="400px" width="400px" /&gt;

 

Any changes to SoApplicationConfiguration.config file will require an IIS reset to be recognized. This same philosophy also applies to SoObjectMapping.config.

 

See Also: SoTextBox, SoDateSelector, SoTabbedCard

 
