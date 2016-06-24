<properties date="2016-06-24"
SortOrder="5"
/>

```
<!--my SoTextBox Starts-->
<controlgroup id="sotextbox" type="SoControlGroup" position="relative" top="5px" left="26px">
<controls>
            <control id="ContactSoTextBox" type="SoTextBox" width="50px" >
                  <datasource>ContactEntityDataHandler.ContactEntity.Name
            </datasource>
      </control>
</controls>
</controlgroup>
<!--my SoTextBox Ends-->
```

 

**An important point to remember!**       

In above code segment position shoud be set to ”relative” and ”top” and ”left” attributes should be set according to the place where we want to have them.

SoTextBox binds data from the ContactEntityDataHandler. Data is fetched from data base.

 

 

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Navigator" type="SoPanel" soprotocol="" paneltype="Navigator" top="20px" left="0px" height="800px" overflow="auto" width="160px" position="absolute" zindex="99">
  <cards>
    <card id="NavigatorCard" type="SoCard" placeholderid="" cardtype="NavigatorCard">
      <views>
        <view id="NavigatorView" type="SoPlainView" overflow="auto" soprotocol="Navigator" >
          <controlgroups>
            <!--my SoTextBox Starts-->
            <controlgroup id="sotextbox" type="SoControlGroup" position="relative" top="5px" left="26px">
              <controls>
                <control id="ContactSoTextBox" type="SoTextBox" width="50px" >
                  <datasource>ContactEntityDataHandler.ContactEntity.Name</datasource>
                </control>
              </controls>
            </controlgroup>
            <!--my SoTextBox Ends-->
            <!--Code for another controlgroup-->
            <!--Code for another controlgroup-->
            <!--Code for another controlgroup-->
            <!--Code for another controlgroup-->
            <!--Code for another controlgroup-->
           
           
           
          </controlgroups>
          <config>
          </config>
        </view>
        <view id="NavigatorSystemView" type="SoSystemView" soprotocol="">
          <caption>SystemView</caption>
          <tooltip></tooltip>
          <controlgroups>
            <controlgroup id="NavigatorSystemGroup" type="SoControlGroup">
              <controls>
                <control id="NavigatorSetActive" type="SoScriptControl">
                  <config>
                    <switch value="NavigatorDataHandler.CurrentPage" binding="data" >
                      <case operator="equal" value="contact">SetActiveNavButton('contactButton_image');</case>
                      <case operator="equal" value="diary">SetActiveNavButton('diaryButton_image');</case>
                      <case operator="equal" value="project">SetActiveNavButton('projectButton_image');</case>
                      <case operator="equal" value="selection">SetActiveNavButton('selectionButton_image');</case>
                      <case operator="equal" value="mail">SetActiveNavButton('mailButton_image');</case>
                    </switch>
                  </config>
                </control>
              </controls>
            </controlgroup>
          </controlgroups>
        </view>
      </views>
    </card>
  </cards>
</panel>
 
```

 

The output generated from the CRM.web is shown below; the SoTextBox we added is shown in the red rectangle.

<img src="../Config-add%20new%20components%20to%20existing%20page_files/image001.jpg" width="548" height="345" />

In SoNavigatorPanel.config file the data is bound by using the ContactEntityDataHandler Id.

```
<datasource>ContactEntityDataHandler.ContactEntity.Name</datasource>
```

 

In order to have field updated automatically we need to make the field be triggered based on the current Contact. I.e. this will cause are textbox to be updated when the Contact changes. This change can be done as follows.

```
<panel id="Navigator" type="SoPanel" soprotocol="" paneltype="Navigator" top="20px" left="0px" height="800px" overflow="auto" width="160px" position="absolute" zindex="99">
  <cards>
    <card id="NavigatorCard" type="SoCard" placeholderid="myPlc" cardtype="NavigatorCard">
      <views>
        <view id="NavigatorView" type="SoPlainView" overflow="auto" soprotocol="Navigator" >
          <controlgroups>
            <!--Some other Code-->   
          </controlgroups>
          <config>
          </config>
          <!--Our trigger begins here-->
          <triggers>
            <trigger type="current">contact</trigger>
          </triggers>
          <!--Our trigger Ends here-->
        </view>
        <view id="NavigatorSystemView" type="SoSystemView" soprotocol=""></view>
      </views>
    </card>
  </cards> 
</panel>
```
