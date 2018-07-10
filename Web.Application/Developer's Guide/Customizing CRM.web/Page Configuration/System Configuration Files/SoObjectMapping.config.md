---
uid: WebClientObjectMappingSettings
title: Object Mapping Settings
date: 2018-07-07
SortOrder: 3
---
SoObjectMapping maps element types used in page configuration files to actual implementation classes defined in assemblies, such as user controls and web controls.

## Explicit Object Mapping

The excerpt below declares an SoPanel type in **SoObjectMapping.config**. It states that the class _Panel_ in the _SuperOffice.CRM.Web.UI.Controls_ namespace, located in the _SuperOffice.CRMWeb_ assembly is referenced by **mappingname** SoPanel.

Next, the file declares an SoNavigatorButton type. It states that a class _SoNavigatorButton_ in the _SuperOffice.CRM.Web.UI.Controls_ namespace, located in the _SuperOffice.CRMWeb_ assembly is references by **mappingname** SoNavigatorButton.

```xml
<!-- SoObjectMapping.config -->
<objects>
    <object
        type="IPanel"
        mappingname="SoPanel"
        assemblyname="SuperOffice.CRMWeb"
        objectname="SuperOffice.CRM.Web.UI.Controls.Panel" />
    <object
        type="Control"
        mappingname="SoNavigatorButton"
        assemblyname="SuperOffice.CRMWeb"
        objectname="SuperOffice.CRM.Web.UI.Controls.SoNavigatorButton" />
</objects>
```

Looking at the SoNavigatorPanel.config file, the contents of which define all the navigator controls on the left side of SuperOffice, is where the panel type declares the object mappingname, **SoPanel**. Additionally, nested deep in a card, view, controlgroup and controls element is where several SoNavigatorButton types are declared that represent the buttons in the panel.

```xml
<!-- SoNavigatorPanel.config -->
<panel id="Navigator" type="SoPanel" paneltype="Navigator" ...>
...
    <control id="dashboardButton" type="SoNavigatorButton" >
    ...
    </control>
    ...
</panel>
```

## Implicit Object Mapping

An alternative approach to adding a type in the SoObjectMapping.config file is to in code decorate the class with the SoWebObject attribute, and inherit the IWebObject interface. The IWebObject doesn't contain any methods that must be implemeted, it's only for discoverability purposes by the plugin system. The SoWebObject parameter becomes the mappingname is used to reference the control in configuration files.

``` csharp
[SoWebObject("SoDialogSimpleCard")]
public class DialogSimpleCard :Card, IWebObject
{
    ...
}
```