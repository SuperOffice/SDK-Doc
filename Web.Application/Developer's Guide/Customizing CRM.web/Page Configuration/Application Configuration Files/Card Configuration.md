---
uid: WebClientCardConfigurationFiles
title: Card Configuration Files
date: 2018-05-07
SortOrder: 4
---
## Overview

A card configuration file define the UI structure of a card and contains the layout of views in the card, which in turn contain controls.

Cards are placeholders inside panels and use layout positioning, and are responsible for invoking relevant datahandlers for save and delete actions.

![PageFramework](\..\web-client-pagebuilder-framework2.png)

```xml
<!-- SoExampleCard.config -->
<card id="ExampleCard" type="Card"
       placeholderid="OnePanePlaceHolder"
       cardtype="SoTabbedCard">
  <views>
    <view />
  </views>
  <config>
    <datahandlers-to-save>
      <datahandler-reference>ExampleDataHandler</datahandler-reference>
    </datahandlers-to-save>
    <datahandlers-to-delete>
      <datahandler-reference>ExampleDataHandler</datahandler-reference>
    </datahandlers-to-delete>
    <keep-params-onsave />
    <customcssclass />
    <editmode />
  </config>
</card>
```

## Different Card Types

|Name             |Description|
|-----------------|----|
|[SoDialogCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DialogCard.htm)       |Used with DialogPanel.             |
|[SoDialogSimpleCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Cards_and_Views_DialogSimpleCard.htm) |Used with DialogPanel.             |
|[SoDiaryCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_DiaryCard.htm)        |Adds an associate chooser to the card.              |
|[FloatingCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_FloatingCard.htm)       |Not used                    |
|[SoFindCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_FindCard.htm)           |                    |
|[SoTabbedCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_CRM_Web_UI_Controls_TabbedCard.htm)         |Used to add tab container for views                    |
|[SoWizardCard](https://community.superoffice.com/documentation/SDK/SO.Web.Application/html/T_SuperOffice_DCF_Web_UI_Controls_WizardCard.htm)         |As seen in MailMerge and Add todo task.                    |
