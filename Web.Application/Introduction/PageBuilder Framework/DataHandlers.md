<properties date="2016-06-24"
SortOrder="14"
/>

DataHandler is the layer between the GUI and the Web Service. The handlers expose the web service results (the carriers) to the GUI, and take care of sending the modified results back to the Web services when needed.

In the SoContactPage.config file, it states the datahandlers and the panels it is using. Here we can focus on the DataHandler called ContactEntityDataHandler.

```
<page id="ContactPage">
  <data>
    <datahandlers>
      <!-- Some other code-->
      <datahandler id="ContactEntityDataHandler"
      type="ContactEntityDataHandler"></datahandler>
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

 

The ContactEntityDataHandler data handler is called in the contact panel. The below code segment shows the SoContactPanel.config file.

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <!-- Some other code-->       
        <view id="more" type="SoView" soprotocol="udef" current="contact">
          <caption>[SR_MORE_CONTACT]</caption>
          <tooltip>More...</tooltip>
          <controlgroups>
              <!-- Data Handler-->       
            <controlgroup id="moreHeadergroup" type="SoControlGroup" position="absolute" top="5px" left="5px" right="20px">
              <controls>
                <control id="ContactMoreHeaderControl" type="ContactHeader">
                  <datasource>ContactEntityDataHandler.ContactEntity</datasource>
                  <config>
                  </config>
                </control>
              </controls>
            </controlgroup>
            <!--End of Data Handler-->
            <!-- Some other code-->
          </controlgroups>
          <!-- Some other code-->
        </view>
        <!-- Some other code-->
      </views>
      <!-- Some other code-->
    </card>
    <!-- Some other code-->
  </cards>
  <!-- Some other code-->
</panel>
```

 

The ContactEntityDataHandler will fetch the ContactEntity from the web service. With the statement below, we use the name of the DataHandler to retrieve the data from the carrier.

```
<datasource>ContactEntityDataHandler.ContactEntity</datasource>
```

 

PageBuilder framework rendering mechanism gets the data on to the page by using datahandlers.

TODO link to DataHandlers
