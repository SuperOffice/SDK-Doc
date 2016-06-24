<properties date="2016-06-24"
SortOrder="9"
/>

This is the code for our new page.

```
<page id="TestPage">
  <data>
    <!--This section contains the data handlers to be used by the page -->
    <datahandlers>
      <datahandler id="NavigatorDataHandler" type="NavigatorDataHandler"></datahandler>
      <datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"></datahandler>
      <datahandler id="PersonEntityDataHandler" type="PersonEntityDataHandler"></datahandler>
      <datahandler id="ProjectEntityDataHandler" type="ProjectEntityDataHandler"></datahandler>
      <datahandler id="DiaryDataHandler" type="DiaryDataHandler"></datahandler>
      <datahandler id="MyDataHandler" type="MyDataHandler"></datahandler>
      <datahandler id="MiniCardDataHandler" type="MiniCardDataHandler">
        <config>
          <archivecolumninfos>
            <archivecolumninfo guiname="SelectionMemberMiniCardArchive" providername="contactselection"/>
            <archivecolumninfo guiname="ProjectMemberMiniCardArchive" providername="projectmember"/>
          </archivecolumninfos>
        </config>
      </datahandler>
      <datahandler id="ArchiveColumnConfigDataHandler" type="ArchiveColumnConfigDataHandler">
        <config>
          <archivecolumninfos>
            <archivecolumninfo guiname="ContactPersonArchive" providername="person"/>
            <archivecolumninfo guiname="ContactRelationArchive" providername="relation"/>
            <archivecolumninfo guiname="ContactActivityArchive" providername="contactactivity"/>
            <archivecolumninfo guiname="ContactProjectsArchive" providername="contactprojects"/>
          </archivecolumninfos>
        </config>
      </datahandler>
    </datahandlers>
  </data>
  <!--Identifies the Panels used by the Page-->
  <panels>
    <panel reference="Menu" />
    <panel reference="ButtonBar" />
    <panel reference="Navigator" />
    <panel reference="Test" />
  </panels>
</page>
```

 

The id in the app settings determines the file name. The &lt;panel reference=”Test”&gt; implies the existence of a SoTestPanel.config file containing the definition of the panel. And a reference to this page should be placed in the SoApplicationConfiguration.config file.

```
<?xml version="1.0" encoding="utf-8" ?>
<applicationsettings defaultprefsection="SuperMode">
  <pages prefsection="SuperMode" prefkey="MainPanel">
    <!--Some other Page references-->
    <!--Reference to our page-->
    <!—The id determines the file name. The page would be called SoTestPage.config-->
    <page id="test" type="mainpage" function-right="hide-company"/>
    <!--Some other Page references-->
  </pages>
  <currents>
    <!--Some current tab references-->   
  </currents>
</applicationsettings>
```

 

The &lt;page&gt; tag for our page should be added between the pages tag of the file.

An important point to remember!

All id attributes should be in lower case since these will be matched with the SoProtocol query string pages. The query pages maps the panels with the SuperMode in the database.

------------------------------------------------------------------------

**See Also:**
TODO link to PageBuilder Config files document

 
