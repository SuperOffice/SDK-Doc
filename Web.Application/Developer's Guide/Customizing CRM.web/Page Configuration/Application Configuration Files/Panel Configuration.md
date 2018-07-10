---
uid: WebClientPanelConfigurationFiles
title: Panel Configuration Files
date: 2018-05-07
SortOrder: 3
---
## Overview

A panel configuration file define the UI structure of a panel and contains the layout of Cards in the panel, which in turn contain views and controls.

Panels represent the main containers of a page and are the first elements to support positioning attributes.

Each main entity page has four panels that define the upper menus, left navigator buttons, entity details and lower action buttons.

![PageFramework](..\web-client-pagebuilder-framework2.png)

```xml
<!-- SoExamplePanel.config -->
<panel id="PanelContainerFile" type="PanelType"
       soprotocol="PanelContainerFile" paneltype="Main">
  <caption>Panel Caption</caption>
  <cards>
  <!-- Cards contain views -->
  </cards>
  <config>
  <!-- config values loaded during initialization -->
  <!-- child element are type specific,
       different panel types require
       different configuration settings.
       example below: panes and splitter-boundaries
       are specific where panel type="SplitterPanel"
        -->
    <panes />
    <splitter-boundaries />
  </config>
</panel>
```

## Different Panel Types

|Name|Description|
|---|----|
|MainPanel|Most simple panel without any special capabilities. A blank canvas.|
|SoDialogPanel|Base panel for all dialogs. In edit mode by default.|
|SplitterPanel|Base panel for all main pages that displays classic SuperOffice splitter panel (see image above). Can be used without splitter capability, as seen when viewing the browser panel page by clicking the SuperOffice logo.|

### Recommended Types for Main Panels

|Element Type | Type Attribute |
|-------------|----------------|
|Panel |SplitterPanel|
|Card |SoTabbedCard|
|View |SoView|
|ControlGroup|SoControlGroup|

### Recommended Types for Simple Dialogs

|Element Type | Type Attribute |
|-------------|----------------|
|Panel |SoDialogPanel|
|Card |SoDialogSimpleCard|
|View (main)|SoDialogSimpleView|
|- ControlGroup |SoControlGroup|
|View (footer) |SoDialogSimpleFooterView|
|- ControlGroup (footer) | OkCancelButtonBar

### Recommended Types for Normal Dialogs

|Element Type | Type Attribute |
|-------------|----------------|
|Panel |SoDialogPanel|
|Card |SoDialogCard|
|View (header)|SoDialogHeaderView|
|View (main)|SoDialogView|
|- ControlGroup |SoControlGroup|
|View (footer) |SoPlainView|
|- ControlGroup (footer) | OkCancelButtonBar

