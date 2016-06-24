<properties date="2016-06-24"
SortOrder="50"
/>

User Control: Archives
======================

Archives are tables of rows and columns that contain de-normalized and processed data relating to Persons, Activities and many more. CRM.web uses Archive Services and Archive Providers in NetServer to retrieve search results, multi column archive lists, selection members’ lists and so on. Custom Provider plugins that have been added to NetServer shows up automatically in the Archive Control.

An important point to remember!

**Archive Services –** These exposes Archive Providers through a single API. This includes the use of the IArchiveAgent exposed in the NetServer services layer to access Archived data. The agent provides methods such as GetArchiveList(), GetArchiveListByColumns() and many more.

**Archive Providers –** Providers are plugins created using a Factory class. ArchiveProviders are designed to query data from the database. The provider is capable of handling the complex business logic of filtering and flattening the complex relationships in the database into a simple flat table.

1. autolist

SoArchiveControl is the user control used by “.config” files to indicate that data should be retrieved from an Archive. The controls are capable of loading items using AJAX callbacks. Among other features supported through the controls which include dynamic columns such as, choosing which columns should be displayed in the archive and resizable columns takes a main place. As with other CRM.web pages if we need to update a particular Archive, we are required to update the panel, card or view the particular archive is contained in. For example if we need to modify the Person Archive a page we are required to change SoCantactPanel.config page.

The following code segment explains the standard structure of an Archive setting in the config file.

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <!--Some other Code -->
    <!--Code relating to the Archive Card Begins here -->
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
      <views>
        <!--Begining of the ContactPersonArchiveView -->
        <view id="ContactPersonArchiveView" type="SoView" soprotocol="personarchive" >
          <caption>[SR_PL_PERSONS]</caption>
      <tooltip></tooltip>
      <controlgroups>
        <controlgroup id="mainpersongroup" type="SoControlGroup" position="absolute" left="0px" right="0px" top="0px" bottom="0px">
          <controls>           
            <control id="ContactPersonArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" >
              <menu>
                <context>archive</context>
                <subcontext>header</subcontext>
                <id binding="none">0</id>
                <position>belowcursor</position>
                <click>right</click>
              </menu>
              <config>
                <restriction-mappings>
                  <restriction-mapping source="person_id" target="personId"/>"
                </restriction-mappings>
                <toolbar>
                  <button <!--Code relating to the Button -->/>
                  <button <!--Code relating to the Button -->/>
                </toolbar>
                <restrictions>
                  <restriction name="contactId" operator="=" binding="current">contact</restriction>
                </restrictions>
                <!--Calling the Provider -->
                <providername>person</providername>
                <archivecolumninfo-datasourcename>ArchiveColumnConfigDataHandler.ContactPersonArchive</archivecolumninfo-datasourcename>
                <showheader>true</showheader>
                <showtoolbar>true</showtoolbar>
                <defaultsort>rank</defaultsort>
                <current>person</current>
                <linkhint-prefix>personarchive:</linkhint-prefix>
                <dblclick-action>javascript:Dialog.open('Person','person[dialog=stop].main[mode=edit;new=true]?person_id=0','ContactPersonArchiveArchiveControl.RefreshList()');</dblclick-action>
              </config>
            </control>
          </controls>
        </controlgroup>
      </controlgroups>
      <triggers>
        <trigger type="current">contact</trigger>
        <trigger type="current">person</trigger>
      </triggers>
        </view>
        <!--End of the ContactPersonArchiveView -->
        <!--Some other Archive Views -->       
      </views>
      <!--Some other Code -->
    </card>
    <!--Code relating to the Archive Card Ends here -->
  </cards>
  <!--Some other Code -->
</panel>
```

 

When going through the above code we can identify some of the main keywords relating to the Archive Controls.

In the tag below the type=”SoArchiveControl” indicates that it is an Archive control.

&lt;control id="ContactPersonArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" &gt;

 

The tag below indicates to us from where the Archive data has been retrieved, i.e. the name of the provider used. An “archivecolumninfo-datasourcename” tag tells us about the datahandler that has been used to retrieve the data. The user can configure which columns are displayed. The ArchiveColumnInfo data handler takes care of loading and saving the selected columns in the database. The datasource name keeps the columns chosen for this list separate from the other archives that use the same provider distinguishes the tags such as showheader, showtoolbar and default sort are related to how the retrieved out put should be displayed.

&lt;providername&gt;person&lt;/providername&gt;

```
      <archivecolumninfo-datasourcename>ArchiveColumnConfigDataHandler.ContactPersonArchive</archivecolumninfo-datasourcename>
<showheader>true</showheader>
      <showtoolbar>true</showtoolbar>
      <defaultsort>rank</defaultsort>
      <current>person</current>
```

 

The above code is related to the following area of the CRM.web.

<img src="../User%20Control%20Archives_files/image001.jpg" width="604" height="464" />
