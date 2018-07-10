---
uid: WebClientPageConfigurationFiles
title: Page Configuration Files
date: 2018-05-07
SortOrder: 2
---
## Overview

A page configuration file define the UI structure of a page or dialog, as well as declares what datahandlers are loaded for data binding and processing. A page configuration defines the layout of panels on a page, which in turn contain cards, views and controls.

```xml
<!-- SoExamplePage.config -->
<page id="UniquePageIdentifier">
  <title>Page Title</title>
  <data>
    <datahandlers>
      <!--
      datahandlers act like controllers and
      contain bindable data viewmodels/datacarriers
       -->
    </datahandlers>
  </data>
  <panels>
    <panel reference="PanelContainerFile" />
  </panels>
</page>

```

A page element is used for defining both dialogs and main pages types. The main difference is that a dialog contains one panel of type SoDialogPanel, and most main pages contain four panels; for the top menu, main content area, navigator buttons on the left and the button bar at the bottom.

The following process occurs when a page loads:
1. Initialize all datahandlers.
2. Get the page title.
3. Initialize all panels.
4. Iterate over each panel and load datahandlers.
    * Subsequently loads each card, view and control.

Each panel the initializes itself and loads each card, then each card initializes itself and loads each view, and so on.