<properties date="2016-06-24"
SortOrder="14"
/>

Panel config files
==================

If we take the same diagram that we had above depicting the components of a page we can see that all the other elements of a page exists only the panel so that means a panel config file contain config data on the other elements as well.

<img src="../Pagebuilder%20config%20files_files/image001.gif" width="680" height="422" />

Inside a panel there can be many cards and inside a card there can be views and inside a view there can be many controls (Which are not shown in the diagram). Below is a part of the actual SoContactPanel that we mentioned in the earlier section. Some parts of the file have been cut off since the full file is too long to be shown in this document.

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <view id="MainView" reference="MainView"></view>
      </views>
      <functional-rights>
        <functional-right>project</functional-right>
      </functional-rights>
      <config>
        <only-visible-views>true</only-visible-views>
        <system-view>SystemView</system-view>
        <datahandlers-to-save>
          <datahandler-reference>ContactEntityDataHandler</datahandler-reference>
        </datahandlers-to-save>
      </config>
    </card>
    <card id="ContactMiniCard" reference="MiniCard"></card>
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
      <views>
        <view id="ContactPersonArchiveView" type="SoView" soprotocol="personarchive" >
          <caption>[SR_PL_PERSONS]</caption>
          <tooltip></tooltip>
          <controlgroups>
            <controlgroup id="mainpersongroup" type="SoControlGroup" position="absolute" left="0px" right="0px" top="0px" bottom="0px">
              <controls>
                <control id="DisablePersonAdd" type="SoScriptControl">
                  <config>
                    <switch value="contact" binding="current">
                      <case operator="equal" value="0">
                        SoHelper.DisableElementsBySoId('ContactPersonArchive_0');
                      </case>
                    </switch>
                  </config>
                </control>
                <control id="ContactPersonArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" >
                  <menu>
                    <context>archive</context>
                    <subcontext>header</subcontext>
                    <id binding="none">0</id>
                    <position>belowcursor</position>
                    <click>right</click>
                  </menu>
                  <config>
                    <restriction-mappings>
                      <restriction-mapping source="person_id" target="personId"/>"
                    </restriction-mappings>
                    <toolbar>
                      <button caption="[SR_MB_ADD]"
                              icon="images/toolicons/Mini_Add_Passive.gif"
                              iconselected="images/toolicons/Mini_Add_Passive.gif"
                              iconhover="images/toolicons/Mini_Add_Hover.gif"
                              icondisabled="images/toolicons/Mini_Add_Disabled.gif"
                              onclick="javascript:Dialog.open('Person','person[dialog=stop].main[mode=edit;new=true]?person_id=0','ContactPersonArchiveArchiveControl.RefreshList()');"
                              dataright="create" 
                              datasourcename="ContactEntityDataHandler.ContactPersonEntity"
                              xtablerightname="person"
                              />
                      <button caption="[SR_MB_DELETE]"
                              icon="images/toolicons/Mini_Delete_Passive.gif"
                              iconselected="images/toolicons/Mini_Delete_Passive.gif"
                              iconhover="images/toolicons/Mini_Delete_Hover.gif"
                              icondisabled="images/toolicons/Mini_Delete_Disabled.gif"
                              disabled="true"
                              dataright="delete"
                              onrowselect="DisableOnEmpty"
                              linkhint="nav=deletePerson"
                              />
                    </toolbar>
                    <restrictions>
                      <restriction name="contactId" operator="=" binding="current">contact</restriction>
                    </restrictions>
                    <providername>person</providername>
                    <archivecolumninfo-datasourcename>ArchiveColumnConfigDataHandler.ContactPersonArchive</archivecolumninfo-datasourcename>
                    <showheader>true</showheader>
                    <showtoolbar>true</showtoolbar>
                    <defaultsort>rank</defaultsort>
                    <current>person</current>
                    <linkhint-prefix>personarchive:</linkhint-prefix>
                    <dblclick-action>javascript:Dialog.open('Person','person[dialog=stop].main[mode=edit;new=true]?person_id=0','ContactPersonArchiveArchiveControl.RefreshList()');</dblclick-action>
                  </config>
                </control>
              </controls>
            </controlgroup>
          </controlgroups>
          <triggers>
            <trigger type="current">contact</trigger>
            <trigger type="current">person</trigger>
          </triggers>
        </view>
      </views>
      <config>
        <only-visible-views>true</only-visible-views>
      </config>
    </card>
  </cards>
  <config>
    <panes>
      <pane id="leftpanel">ContactMainCard</pane>
      <pane id="rightpanel">ContactMini</pane>
      <pane id="bottompanel">ContactArchives</pane>
    </panes>
  </config>
  <function-rights>
    <function-right type="hide">hide-company</function-right>
  </function-rights>
</panel>
```

 

As we can see though some parts of it have been cut off the above config file of the panel is very long but if we analyze it carefully we can grab the important points we need. The essential structure of the panel configuration looks like this:

```
<panel id="Contact" type="SplitterPanel" paneltype="Main" placeholderid="MainPlaceHolder">
  <cards>
    <card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
      <views>
        <view id="MainView" reference="MainView"></view>
      </views>
    </card>
    <card id="ContactMiniCard" reference="MiniCard"></card>
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
      <views>
        <view id="ContactPersonArchiveView" type="SoView" soprotocol="personarchive" >
        </view>
      </views>
    </card>
  </cards>
</panel>
```

 

The top most tag in this config file is the Panel tag and the very end you can see that the Panel tag has been closed. All the other config data are inside this tag so that means the config data inside this tag makes up the config for the Panel. The second level here is the Cards tag that is the tag that holds the config data for all the cards in the config. That means a Panel can hold many cards and the config data for those cards are grouped together by the Cards tag.

The placeholderid is a reference to a region of a page – where the content of this section should be placed. These names are defined in the master page. Type and Cardtype indicates which rendering interface should be used. These are defined in the SoObjectMapping.config file.

The next level of the config file is the Card tag. The config data for the card can appear in two ways either it can appear inside the Cards tag itself like below

```
<card id="ContactMainCard" type="SoTabbedCard" placeholderid="leftpanel" cardtype="MainCard">
...
</card>
```

 

Or it can be referenced inside the Cards tag like below.

```
<card id="ContactMiniCard" reference="MiniCard"></card>
```

 

If it is referenced there will be a separate config file for the card.
