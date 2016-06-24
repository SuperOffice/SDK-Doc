<properties date="2016-06-24"
SortOrder="11"
/>

Enter the codebehind of your new user control, and have the class of your user control inherit

SuperOffice.CRM.Web.UI.Controls.UserControlBase. This will give you access to a few new methods that you can override.

The next thing we want to do is to override the Initialize method. This method takes in an XML node as an argument, and will contain the settings you have specified in the &lt;config&gt; section of the configuration file for the page in which the user control resides.

public override void Initialize(System.Xml.XmlNode config, string id)

    {
    base.Initialize(config, id);
    }

In the Initialize method you can e.g. show or hide parts of your user control, or change the set of columns to be retrieved, or whatever you want. This lets you use the same user control for different purposes, when e.g. getting data from the same tables, but with slightly different restrictions.

Like in our case we will have two panels use the same user control, but with different data to be shown. We will do this by sending in a different value for the config setting that we define from the two panels.

We will return to the Initialize event later on, after we have set up the control in the configuration file of the page where we want to use it.
