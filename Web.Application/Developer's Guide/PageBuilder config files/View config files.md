<properties date="2016-06-24"
SortOrder="16"
/>

View config files
=================

A view represents the many faces a card in the CRM.web application can take. If we take the below view config file for example we can see that there is only one view defined in the view config file. That is because SuperOffice has limited one view per a one view config file. The different views of a card appear in a Card of a Panel config file or a Card config file. If our card has many views the config data will appear inside a card tag. If we take one view out and put it in another config file and refer to it, then it becomes a view config file which can only contain one view.

```
<view id="MainView" type="SoView" soprotocol="main" current="contact">
  <caption>[SR_COMMON_CONTACT]</caption>
  <tooltip>The main one</tooltip>
  <controlgroups>
    <controlgroup id="mainHeadergroup" type="SoControlGroup" position="absolute" top="5px" left="5px" right="20px" >
      <controls>
        <control id="ContactMainHeaderControl" type="ContactHeader">
          <datasource>ContactEntityDataHandler.ContactEntity</datasource>
          <config>
          </config>
        </control>
      </controls>
    </controlgroup>
    <controlgroup id="maingroup" type="SoControlGroup" position="absolute" top="29px" bottom="54px" left="5px" right="20px" overflow="hidden">
      <controls>
        <control id="ContactMainControl" type="ContactMainView">
          <datasource>ContactEntityDataHandler.ContactEntity</datasource>
          <config>
          </config>
        </control>
      </controls>
    </controlgroup>
    <controlgroup id="contactmainpageoneudefgroup" type="SoHookedControlGroup" width="100%" udeftype="contact" udefview="more">
      <controls>
      </controls>
      <config>
        <grouptype>alternatinggrid</grouptype>
        <controlhookid>PageOneFields</controlhookid>
      </config>
    </controlgroup>
  </controlgroups>
</view>
```

 

The above config file represents only one view of the main card of the contact page in the CRM.web application. Now if we take a look at the below config section of the main card of the contact page we can clearly see how the view have been arranged inside a card and what a view represents inside a card.

 

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <card id="ContactMainCard" type="SoTabbedCard"
placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <view id="MainView" reference="MainView"></view>
        <view id="more" type="SoView" soprotocol="udef" current="contact">
  <view id="interests" type="SoView" soprotocol="interest"
   current="contact"></view>
  <view id="WWW" reference="WWW" readonly="true"></view>
</views>
      <functional-rights>
<config>
    </card>
    <card id="ContactMiniCard" reference="MiniCard"></card>
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard"
     cardtype="ArchiveCard"></card>
  </cards>
  <config>
  <function-rights></function-rights>
  </config>
</panel>
```

 

Here we can see that under the Views tag of the ContactMainCard there are four views defined. Those are the actual four views that the main card of the contact page can have. We can see that out of the four one view has been reference to another config file so this config file becomes a view config file and that is the view config we have as the first example under this section. So now it is clear to us what a view meant to be and how a view config file comes into existence.

A view config contains config data of the control groups and within the control groups config data for the individual controls of a page. These are the controls that are visible to us on a page. The PageBuilder framework may add controls to a page on information on the database. For example, The Navigator view can contain custom buttons that display web-panels. The web-parcel buttons are defined in the SOADMIN and are stored in the database. Given below is a typical config a control group.

```
<controlgroup id="maingroup" type="SoControlGroup" position="absolute" top="29px" bottom="54px" left="5px" right="20px" overflow="hidden">
      <controls>
        <control id="ContactMainControl" type="ContactMainView">
          <datasource>ContactEntityDataHandler.ContactEntity</datasource>
          <config>
          </config>
        </control>
      </controls>
    </controlgroup>
```

 

In the above config section we can see that there are controls in a given control group section. The config data for the control is used to customize the control. For example, an ArchiveList controls uses the config section to specify which columns to display as default. Not all controls use the config section. From the datasource tag it will tell us which data provider will provide data for this particular control.

The above different config file types make up a CRM.web page. These config files are the main source of data for the PageBuilder frame work to build a given page. [PageBuilder Framework](Page%20config%20files.md)

 
