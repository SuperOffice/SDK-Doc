<properties date="2016-06-24"
SortOrder="10"
/>

The PageBuilder is the tool used by CRM.web to build a web page. The PageBuilder uses the &lt;pagename&gt;Page.config file in order to build a specific web page. The config tells the PageBuilder about the contents of the page. Like the number of panels and DataHandlers used. The following is an example of the SoConactPage.config file.

```
<page id="ContactPage">
  <data>
    <datahandlers>
      <!-- Some other code-->
      <datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"></datahandler>
      <!-- Some other code-->
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

The code segment above describes the elements structure of the page. This code segment consists of main sections like data section and panels. The data tag tells the PageBuilder where to fetch the data to display on this page. Within the panels tag all the panels are included in the config file by reference, which means that the definition of the panels are in separate files. For example, The Menu panel is defined in the file “SoMenuPanel.config”.

The objects are identified by the relevant config file based on an ObjectMapping file. This file is called SoObjectMapping.config and it maps the objects of the web pages to the actual ASP.net objects. The below code segment is mapped to the ContactEntityDataHandler object.

```
<object type="IDataHandler" mappingname="ContactEntityDataHandler" assemblyname="SuperOffice.CRMWeb" objectname="SuperOffice.CRM.Web.Data.ContactEntityDataHandler"></object>
```

 

The PageBuilder framework controls all these config files. Any third party customizations can be plugged in to the PageBuilder framework. For example, if we were to build our own page using by using SO controls such as UI controls, SoProtocols DataHandlers the PageBuilder framework will be able to identify these controls and construct the web page. For further details regarding the use of config files please refer to TODO link PageBuilder config files document
