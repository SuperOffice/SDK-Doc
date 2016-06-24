<properties date="2016-06-24"
SortOrder="5"
/>

 To remove an existing card all you have to do is delete the card config from the config file. As an exercise for us we will remove the config of the Main card from the project page. Below is a screen shot before we have removed the card.

<img src="../Config%20-%20remove%20an%20existing%20card_files/image001.jpg" width="604" height="438" />

If we were to remove the code section for the Project’s main section as shown below then the card would disappear from the screen. In the code below the main card tag has been removed from the SoProjectPanel.config page.

```
<?xml version="1.0" encoding="utf-8" ?>
  <panel id="Project" type="SplitterPanel" soprotocol="project" paneltype="Main" placeholderid="MainPlaceHolder" width="100%" height="100%">
    <caption>[SR_COMMON_PROJECT]: [current:project_name]</caption>
    <cards>
      <!--The project Main card section which has bbeen commented-->
      <!--<card id="ProjectMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard" width="100%" height="100%">
      <views>
        <!--Some other code-->
      <card id="ProjectMiniCard" reference="MiniCard"></card>
 
      <card id="ProjectArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
    </cards>
  <config></config>
</panel>
```

 

Below is a screen shot of the project page after we have removed the card.

<img src="../Config%20-%20remove%20an%20existing%20card_files/image002.jpg" width="604" height="438" />

Since a Main card is a must for a page we are required to assign a new main card. Since we have removed the main card i.e. “CardType=MainCard”, we have assigned the Archive card as the Main card as shown below.

```
<card id="ProjectArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
```

 

Below is the same code line after we have done the change.

```
<card id="ProjectArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="MainCard">
```

 

If we wish to remove a view from a card then we are required to remove the view tag from the relevant card. In the below example we have removed the event view of the Project Main card.

```
<?xml version="1.0" encoding="utf-8" ?>
<panel id="Project" type="SplitterPanel" soprotocol="project" paneltype="Main" placeholderid="MainPlaceHolder" width="100%" height="100%">
  <caption>[SR_COMMON_PROJECT]: [current:project_name]</caption>
  <cards>
    <card id="ProjectMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard" width="100%" height="100%">
      <views>
        <view id="ProjectMainView" type="SoView" soprotocol="main" current="project"></view>
        <view id="ProjectMoreView" type="SoView" soprotocol="udef" current="project"></view>
        <view id="ProjectImageView" type="SoView" soprotocol="image" current="project"></view>
        <!--Project Event view, This view has been removed from the Project card-->
        <!--<view id="ProjectEventView" type="SoView" soprotocol="event" current="project"></view>-->
        <view id="ProjectSystemView" type="SoView" rendermode="always"></view>
        <view id="WWW" type="SoView" soprotocol="www" current="project"></view>
      </views>
      <!--Some other codes-->    
    </card>
    <card id="ProjectMiniCard" reference="MiniCard"></card>
    <card id="ProjectArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard"></card>
  </cards>
  <config></config>
</panel>
```

 

Once the above modifications have been saved the project page would look as shown below, i.e. without the Event view.

<img src="../Config%20-%20remove%20an%20existing%20card_files/image003.jpg" width="611" height="461" />

After we have removed the card the functionality of the rest of the page will work without an error.

There is one limitation since we are only removing the card and not replacing the card with another card, when we navigate from another page and back to the project page the first pages card will remain in the empty space of the project page. For example we navigate to the Company page from the Project page and now if we navigate back to the project page the main card of the Company page will remain in the Project page as well since that space in the project page is empty. Though the card remains the functionality of the card will not be functional since that card does not have any reference in the config of the Project page. The below screen shot depicts this scenario.

<img src="../Config%20-%20remove%20an%20existing%20card_files/image004.jpg" width="604" height="438" />

As we can see above the company exists in the project page. Except for the company card all the other cards that appear in the page belongs to the project page. This is a scenario we have to avoid in a real life situation if we are removing a card we must a have card that will replace it.
