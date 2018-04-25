---
uid: WebClientMergeFiles
title: Web Client Customizations
date: 2018-04-17
SortOrder: 1
---
# Web Client Customizations

 Adding and modifying existing UI elements and their behaviors are all web client customizations third-parties are able to do by simply modifying the products configuration files. While possible, there are downsides to this approach. Product upgrades, for example, replaces all existing files and thereby wipe away all modified files.

A better approach is to define a location not affected by ugrades where configuration overrides reside and adopted at runtime. The *client configuration provider* helps solve this problem.

## ClientConfigurationProvider

Configuration options declared in the **ClientConfigurationProvider** element, located in the `web.config` file, tell the client where to locate customization files. ClientConfigurationProvider are listed below.

|Options                | Description                                                 |
|-----------------------|-------------------------------------------------------------|
|CustomPath             | defines a path that contains configuration and merge files. |
|CacheConfigurations    | determines if configuration is cached                       |
|ValidateConfigurations | determines of GUI config data is validated at runtime.      |

### CustomPath

To begin custom customizing SuperOffice web add a custom path directive in the ClientConfigurationProvider element. The custom path key name must start with the text **CustomPath**, but can be longer is desired. Multiple custom paths are supported with additional entries, and the only requirement is each key must be unique.

```xml

<SuperOffice>
    ...
    <ClientConfigurationProvider>

     <!-- add path to customization files -->
      <add key ="CustomPath_Common" value ="C:\WebClient\Common" />
      <add key ="CustomPath_Feature" value ="C:\WebFeature\MyFiles" />
      <add key ="CustomPath_ThirdParty" value ="C:\Thirdparty\MyFiles" />

    </ClientConfigurationProvider>
    ...
<SuperOffice>

```

It's recommended to separate custom paths based on a feature or third-party name to ensure no naming conflicts with existing or future customizations occur.

```xml

<SuperOffice>
    ...
    <ClientConfigurationProvider>

     <!-- add path to customization files -->
      <add key ="CustomPath_Common" value ="C:\WebClient\Common" />
      <add key ="CustomPath_Feature" value ="C:\WebFeature\MyFiles" />
      <add key ="CustomPath_ThirdParty" value ="C:\Thirdparty\MyFiles" />

      <!-- disable cache during development -->
      <add key ="CacheConfigurations" value ="false" />

    </ClientConfigurationProvider>
    ...
<SuperOffice>

```

Files in custom path folders take precedence over all standard web-client configuration files. This means if a configuration file called **SoApplicationConfiguration.config** exists in a CustomPath, it will take priority and be used instead of the default **SoApplicationConfiguration.config** in the web applications installation folder.

Be aware that when defining a custompath, you need to create a structured set of folders following the following convention - using the application name and instance name:

`c:\MyPath\MyFiles\[applicationname]\[instancename]\[mynamedfolder]\Myconfig.config`

The __applicationname__ and __instancename__ must be the same as defined in the `Client` element of the web.config. They may or may not be explicitly defined, but the defaults are WebClient and Web, respectively.

```xml

<Client applicationname="WebClient" instancename="Web">

</Client>

```

This same folder structure is seen in the web client where it stores all configuration files.

![Web Client Configuration Folder](Customization%20and%20Deployment%20article_files/web-client-configuration-file-folders.png)

Therefore, all customizations should reside in a folder path that adheres to the convention.

```text
CustomPath\applicationname\instancename
```

Subfolder structure is a personal-preference that does not matter to the platform; they are optional, but searched for files automatically.

The following three examples demonstrate a few of, but not limited to, the possibilities.

Approach #1:

```text
C:\WebClient\Common\WebClient\Web\SoApplicationConfiguration.config
C:\WebClient\Common\WebClient\Web\SoArchiveLists.merge
C:\WebClient\Common\WebClient\Web\SoMenuConfiguration.config
```

Approach #2:

```text
C:\WebFeature\MyFiles\WebClient\Web\Inventory\SoCustomInventoryPage.config
C:\WebFeature\MyFiles\WebClient\Web\Inventory\SoCustomInventoryDialog.config
C:\WebFeature\MyFiles\WebClient\Web\Inventory\SoCustomInventoryMenus.merge
```

Approach #3:

```text
C:\Thirdparty\MyFiles\WebClient\Web\Pages\SoThirdPartyPage.config
C:\Thirdparty\MyFiles\WebClient\Web\Pages\SoCustomContactPage.merge
C:\Thirdparty\MyFiles\WebClient\Web\Dialogs\SoThirdPartyDialogPage.config
C:\Thirdparty\MyFiles\WebClient\Web\Scripts\CustomScripts.js
```

There really is no standard way you must configure subfolders, the just have to have the structure including the application and instance names.

With regards to system files, if it is decided to use a copy of the original file in a custom path, try to use one common folder that is shared among third-parties to ensure one does not override the others settings. That said, it is recommended to use a merge file instead.

All ".config" files with the same name will override existing files in the client, and all ".merge" files will be merged into the standard configuration at runtime.

Merge files are a means to apply customizations with more granularity by, not overriding an entire file but, specifying where in an existing file an element should be adopted at runtime.

### CacheConfigurations

There is a performance benefit to enabling CacheConfigurations, however, during development it makes more sense to turn this feature off. When set to false, saved configuration changes are immediately applied and observed in to UI - there is no need to do an IIS reset or issue a _flush_. There are however a few exceptions to this rule.

Caching works for all configuration files except system files. System files are read at application startup and held in memory. Any changes to these files do require an IIS reset.

- SoApplicationConfiguration.config
- SoAdminApplicationConfiguration.config
- SoFilterList.config
- SoObjectMapping.config
- SoArchiveColumnList.config
- SoArchiveControlLinkInfoTypes.config
- SoArchiveCriteriaList.config

#### Archive Column Lists

A quick note about **archive** elements. Once an archive provider is initialized with column definitions defined in configuration files, the column definitions are persisted like preferences in the _SUPERLISTCOLUMNSIZE_ table of the database.

Any changes to the archive configuration will not be observed in the client until the corresponding records in the database are purged. To delete rows from the _SUPERLISTCOLUMNSIZE_ table, use the archive lists guiname field to issue the following delete query.

```sql
-- replace [guiname] with the real archive guiname
DELETE * FROM [CRM7].[DATABASENAME].[SUPERLISTCOLUMNSIZE]
WHERE listOwner = '[guiname]'
```

### ValidateConfigurations

SOML is XML that must conform to a well-defined schema. When set to true, **ValidateConfirations** will validate all configurations based on their schemas to ensure all markup is well-formed. Any errors are found are shown in the browser.

## Configuration lifecycle

Client requests to the server use [soprotocol](web-client-soprotocol). The web server uses a module called SoProtocolModule to parse the soprotocol string, which inturn uses SuperStateManager to update any changed Current values. Changes are then used by the ContextFilter to modify the configuration.

When PageBuilder receives the configuration it has no knowledge of what to render and what to not render, therefore parts of the configuration that are not affected by changes are removed.

In order to reduce response payload and enforce things such as user-rights, the entire page configuration must be parsed multiple times and fully built before the unchanged parts of the page are stripped away. The build process happens in several steps:

1. Fragments are resolved.
2. Data driven configuration, such as WWW panels, are generated.
3. Merge-filter processes merge files.
4. Caching is performed.
5. All other filters

The following illustration shows how the configuration grows and then shrinks from this process.

![web client config file lifecycle](Customization%20and%20Deployment%20article_files/web-client-merge-file-process.png)

## Merge Process

While the system supports modifying configuration files copied directly from the application into a custom path folder, it's generally cleaner to instead use merge files. That is files with a .merge file extension.

Merge files make it easy to add, remove and replace configuration elements without touching the original application files.

Regardless which course is taken, it's important to know how to target a specific location in a configuration file so that the customization appears in the application where it is expected.

First and foremost, configuration files contain different element types and, based on the type, have different identifers to differentiate similar element types from one another. This is important in order to address what element is acted upon, and then where in the configuration. This table defines which element relies on which identifier to ensure uniqueness.

| Parent | Element | Identifier | File(s)
|------|------------|------|----|
|pages**|page|id|SoApplicationConfiguration|
|currents|current|id|SoApplicationConfiguration|
|jsincludes|jsinclude|path|SoApplicationConfiguration|
|cssincludes|cssinclude|path|SoApplicationConfiguration|
|consts|const|id|SoApplicationConfiguration|
|pages|page|id|So[_abc_]Page|
|archives|archive|providername, guiname|SoArchiveColumnList|
|linkinfos|linkinfo|type, subtype|SoArchiveControlLinkInfoTypes|
|filters**|filter|name|SoFilterList|
|menus**|menu|context, subcontext|SoMenuConfiguration|
|objects|object|mappingname|SoObjectMapping|

** Sometimes elements appear in multiple files.

### Merge Actions

A **mergeaction** attribute is placed in the element to process. The following table lists what actions are available. Note that Insert is the default behavior when no **mergeaction** attribute is specified.

|command|description |
|-------|------------|
|insert | inserts the section (default) |
|replace| replaces the section with same id-value|
|remove | removes the section.|

The following snippet demonstrates how to add a new page to the application configuration pages collection using an _SoApplicationConfiguration.merge_ file.

```xml
<applicationsettings>
  <pages>
    <page id="CustomPage" type="mainpage" mergeaction="insert"/>
  </pages>
</applicationsettings>
```

Keep in mind that not all elements are based on id, so keep that in mind when applying changes and refer to the element/identifier colums in the table above for guidance.

## Page Configuration Files

While element placement might not be important for system configuration files, modifying elements in a page or dialog file is very important and must be structured accordingly.

Knowing that a page contains cards, and cards contain views, and views contain controlgroups and so on, knowing how to structure a merge definition is critical to successfully deploying a change.

### Complete Structure Approach

One way to define a merge file is to create the complete page structure down to the element with a mergeaction attribute. The web application, using this approach, can then accurately determine where and on which element the action must occur.

The following example demonstrates how to replace a controlgroup in the SoContactPage configuration. Take notice how each id along the path is defined for the page, panel, card, view, and finally the controlgroup. Make sure to also include the **< pages >** root element.

With this information, the web application is able to accurately locate the correct element in the configuration graph, and replace the existing controlgroup with an id equal to _maingroup_2_ with this one.

```xml
<pages>
  <page id ="ContactPage">
    <panels>
      <panel id="Contact">
        <cards>
          <card id="ContactMainCard">
            <views>
              <view id="MainView">
                <controlgroups>
                  <controlgroup id="maingroup_2" mergeaction="replace"
                                type="SoControlGroup" position="absolute"
                                top="58px" width="42%" right="20px"
                                overflow="hidden">
                    <controls>
                      <control id="miniImage" type="SoImage">
                        <config>
                          <imagetype>url<imagetype>
                          <src>MyImages/WebClient/Web/image/owl.jpg<src>
                        <config>
                      <control>
                    <controls>
                  <controlgroup>
                <controlgroups>
              <view>
            <views>
          <card>
        <cards>
      <panel>
    <panels>
  <page>
<pages>
```

### XPath Element Approach

Added in SuperOffice 8.1, the xpath element is a new approach for adding page elements. This is a powerful way to ensure that elements, even across fragments, are added.

_This capability only applies to the contents of pages, including dialogs, and **is not applicable to system files**._

```xml
<!-- Example: <filename>.merge                     
  Add a button to all pages that uses the navigationpanel fragment
 -->
<pages>
  <xpath xpath="/page/panels/panel/cards/card/views/view[@id='NavigatorView']/controlgroups/controlgroup[@id='ButtonGroup']/controls">
    <control  id="testButton" type="SoNavigatorButton">
     ...
    </control>
  </xpath>
</pages>
```

Because pages can contain duplicate element ids at various nested levels, care must be taken to ensure no unusual side effects occur when using this approach. The potential for side effects was enough to deem this capability too powerful for replace and remove actions.

## System Configuration Files

System configuration files are the files that declare every application dependency, including web controls, currents, menu items and pages. These files essentially describe the skeleton of the entire web application.

This section includes merge file examples for a few system configuration files.

### SoApplicationConfiguration

This file can contains definitions for:

- pages and dialogs
- currents
- consts
- jsincludes
- cssincludes

Do this by creating a new file names MyApplicationConfiguration.merge and place it in your custom path directory. The following is an example that demonstrates how to add a page.

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

When the application starts your elements are merged into the memory representation of **ApplicationConfiguration.config** and you are good to go.

Assuming the SoCustomFeature.config page exists, it can be called using SoProtocol:

```javascript

PageUpdate('soprotocol:CustomFeature','');

```

A global SuperOffice method PageUpdate issues an SoProtocol string to the server. As stated earlier in this page, in addition to navigation and changing the viewed configutation, SoProtocol also updates currents. Get current's using SuperOffice.Util.getCurrentId.

```javascript
// JavaScript.
var id = 10;
PageUpdate('soprotocol:?customfeature_id=' + id,'');
//or use SuperOffice.PageBuilder
SuperOffice.PageBuilder.setCurrent("customfeature", id);

// get current id value
id = SuperOffice.Util.getCurrentId("customfeature");
```

### SoObjectMapping

SoObjectMapping maps element types used in page configuration files to actual object types defined in assemblies, such as user and web controls.

The excerpt below declares an SoPanel type in **SoObjectMapping.config**. It states that the class _Panel_ in the _SuperOffice.CRM.Web.UI.Controls_ namespace, located in the _SuperOffice.CRMWeb_ assembly is references by **mappingname** SoPanel.

Below that the application declares an SoNavigatorButton type. It states that a class _SoNavigatorButton_ in the _SuperOffice.CRM.Web.UI.Controls_ namespace, located in the _SuperOffice.CRMWeb_ assembly is references by **mappingname** SoNavigatorButton.

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

Looking in the SoNavigatorPanel.config, the contents of which define all the navigator controls on the left side of SuperOffice, is where the panel type is links to the object mappingname, **SoPanel**. Additionally, nested deep in a card, view, controlgroup and controls element is where the SoNavigatorButton types that represent all the buttons located.

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

Below an example demonstrates how to add a new textbox control using an SoObjectMapping.merge file:

```xml
<objects>
    <object
        type="Control"
        mappingname="MySoTextBox"
        assemblyname="CustomFeatures"
        objectname ="CustomFeatures.MySoTextBox" />
</objects >
```

Here is another example that demonstrates how to override the standard web client textbox control:

```xml
<objects>
    <object
        mergeaction="replace"
        type="Control"
        mappingname="SoTextBox"
        assemblyname="CustomFeatures"
        objectname ="CustomFeatures.MySoTextBox"/>
</objects>
```

### SoArchiveControlLinkInfoTypes

Web client data grid controls are called archive controls, and  archive control data sources are called archive providers. Each row has a LinkHints property that is used to construct actual hyperlinks that control what happens when a user clicks a row in the archive control.

The SoArchiveLinkInfoTypes.config file contains all definitions that resolve archive control click actions to executable actions. It's where all custom archive control must add their own linkhint handlers, or **linkinfo** elements, as well.

All linkinfo elements are uniquely identified by a combination of their attributes _type_ and _subtype_. The following is the actual linkinfo that defines what happens when a user clicks on a person row; it issues an SoProtocol that updates the current person id to the selected person.

```xml
<!-- SoArchiveLinkInfoTypes.config -->
<linkinfos>
  <linkinfo type="personarchive:person" subtype="click">
    <baseurl>javascript:PageUpdate('soprotocol:?person_id={person_id}','');</baseurl>
    <target></target>
  </linkinfo>
</linkinfos>
```

Below is an example that demonstates adding a click handler, or linkinfo, that is linked to an archive control that exists on the customfeature page. It does the same thing so as to have a uniform behavior throughout the client application. The only difference is the type value prefix, a linkhint-prefix, which is explained in detail in the [Archive Control Row Client](/crm-client-web/web-common/web-archive-row-click-action.md) documentation.

```xml
<!-- SoArchiveLinkInfoTypes.merge -->
<linkinfos>
  <linkinfo type="customfeature:person" subtype="click">
    <baseurl>javascript:PageUpdate('soprotocol:?person_id={person_id}','');</baseurl>
    <target></target>
  </linkinfo>
</linkinfos>
```

## Conclusion

This page discussed and shared several examples, how to create and deploy SuperOffice web client customizations.