<properties date="2016-06-24"
SortOrder="7"
/>

Adding a Button to the Archive Footer
=====================================

During the following example we plan to add a new button call “Delete” to the Project Archive view. In order to add the above button we need to make changes to the SoContactPanel.config file.  The code segment below shows how a new button has been added to the Project Archive view of the Company page.

```
<?xml version="1.0" encoding="utf-8"?>
<panel id="Contact" type="SplitterPanel" soprotocol="Contact" paneltype="Main" placeholderid="MainPlaceHolder">
  <caption>[SR_COMMON_CONTACT]: [current:contact_name]</caption>
  <cards>
    <!--Some Other Cards-->
    <card id="ContactArchives" placeholderid="bottom" type="SoTabbedCard" cardtype="ArchiveCard">
      <views>
        <!--Some Other views-->
        <view id="ContactProjectArchiveView" type="SoView" soprotocol="projectarchive" >
          <caption>[SR_PL_PROJECTS]</caption>
          <tooltip></tooltip>
          <controlgroups>
            <controlgroup id="mainactivitygroup" type="SoControlGroup">
              <controls>
                <control id="DisableProjectAdd" type="SoScriptControl">
                  <config>
                    <switch value="contact" binding="current">
                      <case operator="equal" value="0">                        SoHelper.DisableElementsBySoId('ContactProjectsArchive_0');
                      </case>
                    </switch>
                  </config>
                </control>
                <control id="ContactProjectsArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" >
                  <menu>
                    <context>archive</context>
                    <subcontext>contactprojects</subcontext>
                    <id binding="none">0</id>
                    <position>belowcursor</position>
                    <click>right</click>
                  </menu>
                  <config>
                    <toolbar>
                      <button caption="[SR_MB_ADD]"
                              icon="images/toolicons/Mini_Add_Passive.gif"                              iconselected="images/toolicons/Mini_Add_Passive.gif"                              iconhover="images/toolicons/Mini_Add_Hover.gif"                              icondisabled="images/toolicons/Mini_Add_Disabled.gif"                              onclick="javascript:PageUpdate('soprotocol:project.main[mode=edit&amp;new=true]?project_id=0','');"
                              dataright="create"
                              tablerightname="project"
                              />
                                           <!--Our Button Begins here-->
                                           <button caption="[SR_MB_DELETE]" tooltip="[SR_MB_DELETE_TOOLTIP]"                              icon="images/toolicons/Mini_Delete_Passive.gif"                              iconselected="images/toolicons/Mini_Delete_Passive.gif"                              iconhover="images/toolicons/Mini_Delete_Hover.gif"                              icondisabled="images/toolicons/Mini_Delete_Disabled.gif"
                              disabled="true"
                              dataright="delete"
                              onrowselect="DisableOnEmpty"
                              linkhint="nav=deleteProject1"
                        />
                                           <!--Our button ends here-->                    
                    </toolbar>
                    <restrictions>
                      <restriction name="contactId" operator="=" binding="current">contact</restriction>
                    </restrictions>
                    <providername>contactprojects</providername>
                    <archivecolumninfo-datasourcename>ArchiveColumnConfigDataHandler.ContactProjectsArchive</archivecolumninfo-datasourcename>
                    <showheader>true</showheader>
                    <showtoolbar>true</showtoolbar>
                    <defaultsort>name</defaultsort>
                    <dblclick-action>javascript:NewProject();</dblclick-action>
                  </config>
                </control>
              </controls>
            </controlgroup>
          </controlgroups>
          <triggers>
            <trigger type="current">contact</trigger>
          </triggers>
        </view>
        <!--Some Other views-->
      </views>
      <!--Some Configurations-->
    </card>   
  </cards>
  <!--Some Configurations-->
  <!--Some Function rights-->
</panel>
```

 

Out of the above code segment the area related to our button can be found in between “&lt;!—our Button…” tags.

```
<button caption="[SR_MB_DELETE]" tooltip="[SR_MB_DELETE_TOOLTIP]"                              icon="images/toolicons/Mini_Delete_Passive.gif"                              iconselected="images/toolicons/Mini_Delete_Passive.gif"                              iconhover="images/toolicons/Mini_Delete_Hover.gif"                              icondisabled="images/toolicons/Mini_Delete_Disabled.gif"
disabled="true"
dataright="delete"
onrowselect="DisableOnEmpty"
linkhint="nav=deleteProject"
/>
```

 

What we have done here is that created a button and assigned properties such as the caption, tooltip hint, and different images that the button could have. The data rights require that the selected row contains the corresponding rights in it table-right property. If the rows does not have the deleted data rights, then the button should be disabled. What is given by “nav=deleteProject” is the name of the linkhint which is used to delete the project. All link info’s are recorded in the “SoArchiveControlLinkInfoTypes.config” file. The linkinfo contains information about which JavaScript to be used and what should be passed into it.

Project View before the Delete button has been added.

<img src="../User%20Control%20Archives_files/image004.jpg" width="605" height="424" />

Project View after the Delete button has been added.

<img src="../User%20Control%20Archives_files/image005.jpg" width="605" height="464" />

See Also

[User Controls: General](../User%20Controls%20General/User%20Controls%20General.md)

[User Controls: Cards, Panels](../User%20Controls%20cards%20panels/UserControls%20cards%20panels.md)

 

 
