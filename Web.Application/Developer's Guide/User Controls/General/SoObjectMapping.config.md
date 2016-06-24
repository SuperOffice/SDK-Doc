<properties date="2016-06-24"
SortOrder="9"
/>

In the CRM.web application, since all rendering and building of pages are dependent on XML configuration files, we require a mechanism that maps the objects of the pages to the actual objects of the system. These config files contain details such from which assembly a specific user control is taken from.

For example, the line below tells us,

```
<object type="Control" mappingname="SoToolButton" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.UI.Controls.SoToolButton"></object>
```

 

that the object is referred to as SoToolButton in other config files. The assemblyname tells us in which assembly this particular object resides in, i.e. SuperOffice.CRMWeb.DLL. The objectname tells us the actual name of the object inside the given assembly, i.e. SuperOffice.CRM.Web.UI.Controls.SoToolButton. The type tells us what role the object plays in the PageBuilder framework. Once the object has been identified in the SoObjectMapping.config file as above, it could be used in any config file with statements similar to the one shown below.

```
<control id="selectionButton" type="SoToolButton">...... </control>
```

 

See Also:

[PageBuilder config files Document](../../PageBuilder%20config%20files/PageBuilder%20config%20files.md)
