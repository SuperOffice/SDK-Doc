<properties date="2016-06-24"
SortOrder="13"
/>

Page config files
=================

As the name implies this is the config that will contain the elements of the page. Below is a diagram that shows all the components that exists in a page.

<img src="../Pagebuilder%20config%20files_files/image001.gif" width="680" height="422" />

As we can see in the above diagram there are many components that build up a page. The top most level of the design of the page is the page element itself. Only in the page element will the other elements that make up a page exist. Given below is the actual config file for the contact page of the CRM.web application.

```
<page id="ContactPage">
  <data>
    <datahandlers>
      <datahandler id="NavigatorDataHandler"
      type="NavigatorDataHandler"></datahandler>
      <datahandler id="ContactEntityDataHandler"
      type="ContactEntityDataHandler"></datahandler>
      <datahandler id="PersonEntityDataHandler"
      type="PersonEntityDataHandler"></datahandler>
      <datahandler id="DiaryDataHandler"
      type="DiaryDataHandler"></datahandler>
      <datahandler id="MiniCardDataHandler" type="MiniCardDataHandler">
        <config>
          <archivecolumninfos>
            <archivecolumninfo guiname="SelectionMemberMiniCardArchive"
            providername="contactselection"/>
            <archivecolumninfo guiname="ProjectMemberMiniCardArchive"
            providername="projectmember"/>
          </archivecolumninfos>         
        </config>
      </datahandler>
      <datahandler id="ArchiveColumnConfigDataHandler"
      type="ArchiveColumnConfigDataHandler">
        <config>
          <archivecolumninfos>
            <archivecolumninfo guiname="ContactPersonArchive"
            providername="person"/>
            <archivecolumninfo guiname="ContactRelationArchive"
            providername="relation"/>
            <archivecolumninfo guiname="ContactActivityArchive"
            providername="contactactivity"/>
            <archivecolumninfo guiname="ContactProjectsArchive"
            providername="contactprojects"/>
          </archivecolumninfos>
        </config>      
      </datahandler>
 
    </datahandlers>
  </data>
  <panels>
    <panel reference="Menu" />
    <panel reference="ButtonBar" />
    <panel reference="Navigator" />
    <panel reference="Contact" />
  </panels>
</page>
```

 

The config file contains some config on data and some references to few panels. Now if we look at the diagram above that depicts the elements of the page we can see that the second element of a page is a panel and inside the panel only the elements of a page exists. The data section of the file tells us where the data for this page is fetched from. The section of the config file shown below says which data handlers will be used to fetch the data for the archive panel.

&lt;datahandler id="ArchiveColumnConfigDataHandler"

```
      type="ArchiveColumnConfigDataHandler">
        <config>
          <archivecolumninfos>
            <archivecolumninfo guiname="ContactPersonArchive"
            providername="person"/>
            <archivecolumninfo guiname="ContactRelationArchive"
            providername="relation"/>
            <archivecolumninfo guiname="ContactActivityArchive"
            providername="contactactivity"/>
            <archivecolumninfo guiname="ContactProjectsArchive"
            providername="contactprojects"/>
          </archivecolumninfos>
        </config>      
      </datahandler>
```

 

The XML fragment above says the data handler for the archive panel is ArchiveColumnConfigDataHandler. The CRM.web Contact page archive panel consists of four different tabs showing four different types of data. ArchiveColumnInfos section tells us which providers the data for the different tabs are fetched from. [Data Handlers](../User%20Controls/User%20Controls%20Data%20Binding/User%20Controls%20Data%20Binding.md)

So the data section tells us how the data is fetched for a page. So now where does the config info of the rest of the elements of the page exist? That is where the below bit of code of the above config file comes in.

```
<panels>
    <panel reference="Menu" />
    <panel reference="ButtonBar" />
    <panel reference="Navigator" />
    <panel reference="Contact" />
</panels>
```

 

Here it tells us the config data for the rest of the page exists in the files that are referenced here. For example the config data for the main panel of the contact page exists in the SoContactPanel config file. But here it has only referenced “Contact” and the system knows through its config file naming convention that it has to look in the SoContactPanel.config for the config data of the contact main panel. In the next sections let’s discuss panel config files.
