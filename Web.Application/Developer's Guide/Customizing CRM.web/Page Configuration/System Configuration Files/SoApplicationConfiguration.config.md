---
uid: WebClientApplicationSettings
title: Application Configuration Settings
date: 2018-07-07
SortOrder: 2
---

The SoApplicationConfiguration.config file can contain declarations for:

- pages
- dialogs
- currents
- consts
- jsincludes
- cssincludes

The following example demonstrates how to add a page, current, javascript and css file.

```xml
<applicationsettings>
  <pages>
    <!-- new feature !!! -->
    <page id="customfeature" type="mainpage" />
  </pages>
  <currents>
    <!-- new current !!! -->
    <current id="customfeature" type="none" providername="SoProtocolProvider" />
  </currents>
  <jsincludes>
    <!-- new feature script dependency !!! -->
    <jsinclude path="~/scripts/customfeature.js" />
  </jsincludes>
  <cssincludes>
    <!-- new feature styles dependency !!! -->
    <cssinclude path="~/styles/customfeature.css" />
  </cssincludes>
</applicationsettings>
```

When the application starts, these elements are read into the memory representation of **ApplicationConfiguration.config** and ready to be used by the application when called upon.

Assuming a file called SoCustomFeature.config exists that contains the page definition for _customfeature_, it can be called and shown using SoProtocol:

```javascript

PageUpdate('soprotocol:CustomFeature','');

```

A global SuperOffice method PageUpdate issues an SoProtocol string to the server. In addition to navigation and changing the viewed configuration, SoProtocol can also update currents.

```javascript
// JavaScript.
var id = 10;
PageUpdate('soprotocol:?customfeature_id=' + id,'');
//or use SuperOffice.PageBuilder
SuperOffice.PageBuilder.setCurrent("customfeature", id);

```

To get a current value, use the SuperOffice.Util.getCurrentId javascript method.

``` javascript
// get current id value
id = SuperOffice.Util.getCurrentId("customfeature");
```