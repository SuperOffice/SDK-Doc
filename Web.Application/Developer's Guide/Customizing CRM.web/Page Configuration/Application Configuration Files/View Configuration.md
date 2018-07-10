---
uid: WebClientViewConfigurationFiles
title: View Configuration Files
date: 2018-05-07
SortOrder: 5
---
## Overview

A view configuration file define the UI structure of a view and contains the layout of all controls in the view.

![PageFramework](../web-client-pagebuilder-framework2.png)

```xml
<!-- SoExampleView.config -->
<view id="ExampleView" type="SoView" soprotocol="example"
      current="example" rendermode="display"
      minwidth="##MAINCARD.MINWIDTH##">
  <caption>View Caption</caption>
  <tooltip>Example Text</tooltip>
  <controlgroups>
    <controlgroup />
  </controlgroups>
  <config>
    <nopadding>true</nopadding>
    <dogear binding="preferences">Functions,DisableContactDogEar</dogear>
    <customcssclass />
    <watermark />
    <editmode />
    <header-controlgroup height="" />
    <footer-controlgroup height="" />
    <tab-controlgroups>
      <tab-controlgroup caption="" visibility="" onclientclick="">
    </tab-controlgroups>
    <no-entity-link tooltip="string value" linkcaption="string value"></no-entity-link>
  </config>
  <triggers>
    <trigger type="current">contact</trigger>
  </triggers>
</view>
```

## Different View Types

|Name             |Description|
|-----------------|----|
|[SoDialogView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogView.htm)             |Used in dialogs only.|
|[SoDialogAbsoluteView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogAbsoluteView.htm)     |Used in dialogs only.|
|[SoDialogHeaderView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogHeaderView.htm)       |Used in dialogs only.|
|[SoDialogSimpleFooterView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogSimpleFooterView.htm) |Used in dialogs only.|
|[SoDialogSimpleView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogSimpleView.htm)       |Used in dialogs only.|
|[SoGenericView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_DCF_Web_UI_Controls_GenericView.htm)            |Basic view|
|[SoPlainView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_PlainView.htm)              |Basic view.|
|[SoSystemView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_SystemView.htm)             |Is not visible, but renders out all content in a hidden layer.|
|[SoTabbedView](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_TabbedView.htm)             |View with inline tabs|
