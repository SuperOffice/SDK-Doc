<properties date="2016-06-24"
SortOrder="6"
/>

The following example shows how we can make use of a Data Handler in order to display a certain set of results retrieved through the Web Service.

If we plan to use a Data Handler, like e.g. “ProjectEntityDataHandler”, the handler should be identified in the panel as shown below.

```
<page id="ContactPage">
  <data>
    <datahandlers>
      <!-- Some other Data Handler declarations-->
      <!-- Our Data Handler-->
      <datahandler id="ProjectEntityDataHandler"
                   type="ProjectEntityDataHandler"></datahandler>
<!--End of our Data Handler-->
    </datahandlers>
  </data>
  <!-- Some other code-->
</page>
```

 

Once this part has been added to the “…Page.config” file the handler could be used by using the datahandler id as the identifier name. The following code segments show the use of the above data handler in the “SoContactPanel.config” file.

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
            <!-- Some other code-->
            <!-- Our Data Handler-->        
            <controlgroup id="ProjectMainGroup" type="SoControlGroup" left="500px" position="absolute" right="50px" top="25px">
              <controls>
                <control id="newLabel" type="SoLabel" context-style="Heading" row="0" column="0">
                  <caption>Projects</caption>
                </control>
                <control id="ProjectNameOnContact" type="SoTextBox" width="100%">
                  <datasource>ProjectEntityDataHandler.ProjectEntity.Name</datasource>
                  
                </control>
              </controls>
            </controlgroup>
            <!--End of our Data Handler-->
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

Here we have made use of the earlier identified data handler, i.e. ProjectEntityDataHandler and used it to call the Project Name from the web service. With the statement below we retrieve the Project name by accessing the Project Entity’s name property.

```
<datasource>ProjectEntityDataHandler.ProjectEntity.Name</datasource>                 
```

 

Since we plan to display the results in a text box in the control tab we declared it as giving the type “type=SoTextBox”. Once the above code has been add to the “SoContactPanel.config” the Contact page’s “More” view would look as below.

<img src="../Data%20Handlers_files/image001.jpg" width="604" height="408" />
