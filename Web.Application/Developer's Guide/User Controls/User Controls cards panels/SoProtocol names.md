<properties date="2016-06-24"
SortOrder="15"
/>

SoProtocol names
================

The SoProtocol allows you to control the user interface without using scripts. This protocol gives you the possibility of sending a link to user which opens another specific panel based on the information sent.

Configuration files use a tag called soprotocol inside the Panels and views .For example the following code segments in SoContactPanel.config shows how we can set the values to soprotocol tag.

```
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
```

 

```
<view id="interests" type="SoView" soprotocol="interest" current="contact">
```

[http://localhost/SuperOfficeWeb/default.aspx?contact.interest](http://localhost/SuperOfficeWeb/default.aspx?contact.interest)

Above link opens the contact page by activating the interest tab in the main card. Soprotocol value of the panel is “contact” and the soprotocol value set in the interest view in the main card is “interest”. These values are used to open the page which is requested by us. Panels and views are arranged in a page according to the information sent by the SoProtocol part of the URL.

 

**An important point to remember!**       

In a config file if we include the same soprotocol value for several views, once the page opens there will be a conflict on which tab to be activated. Within a config file we should use unique soprotocol values for each view.

Many soprotocol tags are used in the SoContactPanel.config . Some of them are listed below.

```
<view id="interests" type="SoView" soprotocol="interest" current="contact">
```

 

```
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
```

 

```
<view id="more" type="SoView" soprotocol="udef" current="contact">
```

 

```
<view id="ContactPersonArchiveView" type="SoView" soprotocol="personarchive">
```

 

```
<view id="ContactRelationArchiveView" type="SoView" soprotocol="relationarchive">
```

 

```
<view id="ContactProjectArchiveView" type="SoView" soprotocol="projectarchive" >
```

 

```
<view id="ContactActivityArchiveView" type="SoView" soprotocol="activityarchive" >
```

 

The soprotocol names defined in the view and panel tag are not listed anywhere else. You can define your own soprotocol names by changing the value in the soprotocol attribute.

CRM.web uses the SoUdefConfiuration.config file to determine which set of user-defined fields to load in to the udef controls used in the various views.

```
<?xml version="1.0" encoding="utf-8"?>
<udefs>
  <udef controlgroup="contactmainmoreudefgroup" udeftype="Contact" viewtype="More" datahandler="ContactEntityDataHandler.ContactEntity.UserDefinedFields." />
  <udef controlgroup="contactmainpageoneudefgroup" udeftype="Contact" viewtype="PageOne" datahandler="ContactEntityDataHandler.ContactEntity.UserDefinedFields."/>
  <udef controlgroup="projectmoreudefgroup" udeftype="Project" viewtype="More" datahandler="ProjectEntityDataHandler.ProjectEntity.UserDefinedFields." />
  <udef controlgroup="projectmainpageoneudefgroup" udeftype="Project" viewtype="PageOne" datahandler="ProjectEntityDataHandler.ProjectEntity.UserDefinedFields." />
      <udef controlgroup="salemoregroup" udeftype="Sale" viewtype="More" datahandler="EntityDataHandler.SaleEntity.UserDefinedFields." />
      <udef controlgroup="salepageoneudefgroup" udeftype="Sale" viewtype="PageOne" datahandler="EntityDataHandler.SaleEntity.UserDefinedFields." />
      <udef controlgroup="AppointmentMoreGroup" udeftype="Appointment" viewtype="More" datahandler="EntityDataHandler.AppointmentEntity.UserDefinedFields." />
      <udef controlgroup="personmoreudefgroup" udeftype="Person" viewtype="More" datahandler="PersonEntityDataHandler.PersonEntity.UserDefinedFields." />
  <udef controlgroup="personmainudefgroup" udeftype="Person" viewtype="PageOne" datahandler="PersonEntityDataHandler.PersonEntity.UserDefinedFields."/>
  <udef controlgroup="documentmoregroup" udeftype="Document" viewtype="More" datahandler="EntityDataHandler.DocumentEntity.UserDefinedFields." />
</udefs>
```

 
