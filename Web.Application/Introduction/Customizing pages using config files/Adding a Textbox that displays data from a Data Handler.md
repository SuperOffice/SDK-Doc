<properties date="2016-06-24"
SortOrder="9"
/>

Adding a Textbox that displays data from a Data Handler
=======================================================

The difference between a textbox and a label is that the data displayed through the textbox can be edited by the user where as data displayed through a label is un-editable. What is intended by the example below is to show the Contact Name below the data displayed in the “Interest” view of the “Contact” panel. Since we plan to modify the Contact panel we need to make changes to the SoContactPanel.config file. The next step is to add a text box to Interest view which will be done using the SoTextBox control provided by SuperOffice.

```
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <view id="MainView" reference="MainView"></view>
<!--Some other Code -->
<view id="interests" type="SoView" soprotocol="interest" current="contact">
<!--Some other Code -->
  <!--Our Code Begins here -->             
<controlgroup id="interestHeadergroup2" type="SoControlGroup" position="absolute" top="100px" left="15px" right="20px">
            <controls>
              <control id="newTextBox" type="SoTextBox" context-style="Heading" width="100%">
<datasource>ContactEntityDataHandler.ContactEntity.Name</datasource>
              </control>
            </controls>
          </controlgroup>
<!--Our Code Ends here -->
<!--Some other Code -->
</view>
        </views>
      </card>
    </cards>
  </panel>
```

 

We have made use of the SoTextBox user control above. In order for us to use the control it should be included inside the “control” tag which is inside the “controls” tag. Why we have made use of the “controlgroup” tag is to determine the position where the textbox to be placed. The “datasource” tag which is used inside the “control” tag tells us from where to retrieve the data, i.e. from the ContactEntityDataHandler.

An important point to remember!

A DataHandler to be used in a …Panel.Config file should be first identified in the relevant …Page.config file’s DataHandlers section.

Once the code segment is added to the SoContactPanel.config file the Interests view would looks as below.

<img src="../Customizing%20pages%20using%20config%20files_files/image003.jpg" width="605" height="424" />
