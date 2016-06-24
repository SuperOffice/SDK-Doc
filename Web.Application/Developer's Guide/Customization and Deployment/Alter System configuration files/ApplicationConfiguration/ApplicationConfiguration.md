<properties date="2016-06-24"
SortOrder="19"
/>

ApplicationConfiguration.config contains definitions of all pages, dialogs and currents.

Adding a new page requires an entry in ApplicationConfiguration as shown below.

 

```
<applicationsettings defaultprefsection="SuperMode">
  <pages prefsection="SuperMode" prefkey="MainPanel">
    <page id="contact" type="mainpage"  function-right="hide-company" />
    <page id="project" type="mainpage"  function-right="hide-project" />
    <page id="sale" type="mainpage"  function-right="hide-sale" />
    <page id="selection" type="mainpage" function-right="hide-selection" />
    <page id="report" type="mainpage" function-right="hide-reporter" />
    <page id="diary" type="mainpage" />
    <page id="emarketing" type="mainpage" />
    <page id="CustomSeven" type="mainpage" />
```

This should only be achieved by making a merge file.

Name the file `MyApplicationConfiguration.merge`. The content should look something like this:

```
<applicationsettings defaultprefsection="SuperMode">
<pages prefsection="SuperMode" prefkey="MainPanel">
    <page id="CustomSeven" type="mainpage" />
</pages>
</applicationsettings>
```

Your page node will now be merged into the `ApplicationConfiguration.config`. And you are good to go.

The page can be called by using a SoProtocol

**PageUpdate('soprotocol:CustomSeven','');**

1. autolist
