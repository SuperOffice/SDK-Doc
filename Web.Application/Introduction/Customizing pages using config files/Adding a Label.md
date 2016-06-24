<properties date="2016-06-24"
SortOrder="8"
/>

Adding a Label
==============

In this example we will add a new label called “Quick Links” to the navigator panel. For this we need to modify the SoNavigatorPanel.config file. We have made use of the control called SoLabel in order to add the label.

```
<panel id="Navigator" type="SoPanel" soprotocol="" paneltype="Navigator" top="20px" left="0px" height="800px" overflow="auto" width="160px" position="absolute" zindex="99">
  <cards>
    <card id="NavigatorCard" type="SoCard" placeholderid="" cardtype="NavigatorCard">
      <views>
        <view id="NavigatorView" type="SoPlainView" overflow="auto" soprotocol="Navigator" >
          <controlgroups>
      <controlgroup id="ButtonGroup" type="SoControlGroup" position="relative" left="16px" top="10px">
              <controls>
            <!--Some other Code -->
      <!--Our Code Begins here -->
                  <control id="newLabel" type="SoLabel" context-style="Heading" row="0" column="0">
                     <caption>Quick Links</caption>
                  </control>
            <!-- Our Code Ends here -->
            <!--Some other Code -->
        </controls>
            </controlgroup>
          </controlgroups>
        </view>
      </views>
    </card>
  </cards>
</panel>
```

 

The change is marked between the two comments marked “Our code begins/ends here” we have added a label with the use of SoLabel. In the control tag we have given an id that could recognize the control and what type of control it is, i.e. SoLabel type control. The caption tag is used to set the text on the label control. Once this code segment is added the navigator pane will look as follows.

<img src="../Customizing%20pages%20using%20config%20files_files/image001.jpg" width="605" height="424" />

Depending on the place we use the control we can change the position of the display. For example if we were to use it under the “ContactButton” control the label would be displayed after the “Company” button.

```
<panel id="Navigator" type="SoPanel" soprotocol="" paneltype="Navigator" top="20px" left="0px" height="800px" overflow="auto" width="160px" position="absolute" zindex="99">
  <cards>
    <card id="NavigatorCard" type="SoCard" placeholderid="" cardtype="NavigatorCard">
      <views>
        <view id="NavigatorView" type="SoPlainView" overflow="auto" soprotocol="Navigator" >
          <controlgroups>
      <controlgroup id="ButtonGroup" type="SoControlGroup" position="relative" left="16px" top="10px">
              <controls>
            <!--Some other Code -->     
            <control id="contactButton" type="SoToolButton">
              <caption>[SR_COMMON_CONTACT]</caption>
              <tooltip>{button_id=TooltipOnLContact}</tooltip>
              <!--Some other Code --> 
            </control>
<!--Our Code Begins here -->
                  <control id="newLabel" type="SoLabel" context-style="Heading" row="0" column="0">
                     <caption>Quick Links</caption>
                  </control>
      <!-- Our Code Ends here -->
      <!--Some other Code -->
        </controls>
            </controlgroup>
          </controlgroups>
        </view>
      </views>
    </card>
  </cards>
</panel>
```

 

<img src="../Customizing%20pages%20using%20config%20files_files/image002.jpg" width="605" height="424" />
