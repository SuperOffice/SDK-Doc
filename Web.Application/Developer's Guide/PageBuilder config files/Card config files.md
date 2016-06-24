<properties date="2016-06-24"
SortOrder="15"
/>

Card config files
=================

What appears inside the card tag is the config data for the many views that a card can have. Let’s take the below config section from the card config file that was referenced above “MiniCard”.

```
<card id="MiniCard" placeholderid="rightpanel" type="SoTabbedCard" cardtype="MiniPanelCard">
  <views>
    <view id="MiniMonthView" type="SoView" soprotocol="minimonth" current="month" renderonlywhenselected="true">
      <caption>[SR_MINICARD_MONTH]</caption>
      <tooltip></tooltip>
      <controlgroups>
        <controlgroup id="mainminimonthgroup" type="SoControlGroup" position="absolute" left="0px " top="10px" bottom="5px" right="0px">
          <controls>
 
            <control id="minimonth" type="SoMonthCollection" width="100%" position="absolute"  top="0px" bottom="0px">
 
              <config>
                <onaftersplitterresize>CalendarManager.ResizeMiniMonth(\"{0}\")</onaftersplitterresize>
              </config>
            </control>
 
          </controls>
        </controlgroup>
      </controlgroups>
      <triggers>
        <trigger type="current">month</trigger>
        <trigger type="current">day</trigger>
        <trigger type="current">week</trigger>
        <trigger type="current">diaryowner</trigger>
      </triggers>
    </view>
  </views>
</card>
```

 

This is a part of the actual config file for the mini card in the CRM.web application. The top most tag in the config file is the Card tag like the Panel tag was the top most in the Panel config file. Actually what appears inside the card is the config data for the different views that can appear in a card. If we take the top most line of the above config file

```
<card id="MiniCard" placeholderid="rightpanel" type="SoTabbedCard" cardtype="MiniPanelCard">
```

 

It explains the config for the card. It says the card id is MiniCard; the place holder is the right panel. The placeholderid refers to the pane id defined in the panel config.

<img src="../Pagebuilder%20config%20files_files/image001.gif" width="680" height="422" />

The card type here tells us what the type of the card within the page is since there can be many types of cards within a page like the Archive card, the Mini card etc. Within the card come the Views tag which group the config data for the views within a given card. The config data for a view can appear in two ways; within the views tag or in a separate config file. The config data for a view will appear as a separate config file because we have referenced the views within the cards like below.

```
<cards>
    <card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <view id="MainView" reference="MainView"></view>
</views>
    </card>
</cards>
```

 

The reference “MainView” in the &lt;view&gt; tag means that the definition can be found in the file SoMainViewconfig. (“So” + reference + tagname + “config”).

Now we will discuss about the view config files.
