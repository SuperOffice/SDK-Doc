<properties date="2016-06-24"
SortOrder="10"
/>

Adding a Custom Control to an existing view
===========================================

Custom Controls are controls that have been made using tools provided by Visual Studios, such as SoTextBox, SoLable, SoCheckBox, SoRadioButton.

In the example below we will make changes to the Contact main in a way that it displays the Contact’s Interests information as well. In order to do this we have to make changes to the SoMainviewView.config file since SoContactPanel.config file calls earlier config file in order to display the Contact View. The reason for using a separate config file for the Contact view is that the view is used in multiple places and this reduces the number of redundant code. The changes made to the SoMainviewView.config file are shown below.

```
<view id="MainView" type="SoView" soprotocol="main" current="contact">
  <caption>[SR_COMMON_CONTACT]</caption>
  <tooltip>The main one</tooltip>
  <controlgroups>
<!--Some other Code -->
  <!--Our Code Begins here -->
<!--First controlgroup tag -->                      
<controlgroup id="newInterestHeadergroup" type="SoControlGroup" position="absolute" top="205px" left="5px" right="20px">
      <controls>
        <control id="newContactInterestHeaderControl" type="ContactHeader">
          <datasource>ContactEntityDataHandler.ContactEntity</datasource>
          <config>
          </config>
        </control>
      </controls>
    </controlgroup>
<!--Seconds controlgroup tag -->                     
    <controlgroup id="newMaininterestgroup" type="SoControlGroup" position="absolute" top="229px" left="5px" right="20px">
      <controls>
        <control id="newContactInterestCommonHead" type="ContactCommonHeaderView">
          <datasource>ContactEntityDataHandler.ContactEntity</datasource>
        </control>
      </controls>     
    </controlgroup>>
  </controlgroups>
<!--Our Code Ends here -->             
<!--Some other Code -->
</view>
```

 

Here we have added several “controlgroup”, “controls” and “control” tags which includes the code segments that affects a certain part of GUI.

The “first controlgroup tag” determines where the Contact name and the Contacts country flag should be displayed. The “control” tab inside of the “controls” tab gives the control unique id and tells what type of a control it is. The “datasource” tag tells where to retrieve the relevant data from.

The “second controlgroup tag” determines where the Interest data should be shown on the screen.

<img src="../Customizing%20pages%20using%20config%20files_files/image004.jpg" width="606" height="423" />
