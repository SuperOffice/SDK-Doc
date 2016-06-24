<properties date="2016-06-24"
SortOrder="21"
/>

The ObjetcMapping file maps the type to the actual object.  It is possible to extend or replace object definitions in the ObjectMapping by using merge files.

 

A typical entry in SoObjectMapping.config:

```
<object
  type="IPanel"
  mappingname="SoPanel"
  assemblyname="SuperOffice.CRMWeb"  
  objectname="SuperOffice.CRM.Web.UI.Controls.Panel">
</object>
```

This is an example of adding a new textbox control using an ObjectMapping merge file:

```
<objects>
  <object
    type="Control"
    mappingname="MySoTextBox"
    assemblyname="CustomSeven"
    objectname="CustomSeven.MySoTextBox">
  </object>
</objects>
```

This is an example of how to override the standard textbox control in the webclient:

```
<objects>
  <object
    type="Control"
    mappingname="SoTextBox"
    assemblyname="CustomSeven"
    objectname="CustomSeven.MySoTextBox">
  </object>
</objects>
```
