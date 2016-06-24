<properties date="2016-06-24"
SortOrder="11"
/>

How Triggers affect a View
==========================

A trigger is used by the PageBuilder to determine if a panel, view or a control needs to be redrawn after the SuperState has changed. In SuperOffice CRM.web triggers are defined with the use of the trigger tags. As we are aware the file SoContactPanel.config which relates to the Contact page of the web GUI that consists of three cards in each multiple views are contained. Each of the views in the different cards is triggered by certain information displayed. For example consider the following screen shot.

<img src="../Customizing%20pages%20using%20config%20files_files/image005.jpg" width="605" height="426" />

The information displayed on Card 2 is based on the information displayed on Card 1. In other words an update on Card 2 is triggered by a change in the Current Contact caused by card 1.

This trigger is affected in SoContactPanel.config file through the following code segment.

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
<!--Some other Code -->
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
      <views>
<!--Some other Code -->
        <view id="ContactProjectArchiveView" type="SoView" soprotocol="projectarchive" >
          <caption>[SR_PL_PROJECTS]</caption>
<!--Some other Code -->
<!--Code that relates to triggers Begins-->
          <triggers>
            <trigger type="current">contact</trigger>
          </triggers>
<!--Code that relates to triggers Ends-->
        </view>
<!--Some other Code -->
        </views>
      <!--Some other Code -->
      </card>
    </cards>
      <!--Some other Code -->
  </panel>
```

 

The following part of the above code:

```
          <triggers>
            <trigger type="current">contact</trigger>
          </triggers>
```

 

Say that the view called “ContactProjectArchiveView”, which is placed inside the “ContactArchives” card, is based on the contact’s information displayed in Card 1. If we were to remove this tag from the config file, the information displayed in the view will not be based on the Contact displayed in the Card 1 and for all Contact the same Project details will be shown.

 

 

 

 
