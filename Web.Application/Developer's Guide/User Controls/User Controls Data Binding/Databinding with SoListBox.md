<properties date="2016-06-24"
SortOrder="14"
/>

The HTML code segment below shows how we can configure a SoListBox by CRM.web. This code segment is taken from the SoProjectMemberPickPage.config file. The SoListBox id is set as a “leftListBox”. AddMembersDataHandler is the datahandler which has been bound to the control, to retrieve the data.

```
<control id="leftListBox" type="SoListBox" position="absolute" top="30px" width="100%" bottom="0px">
                      <datasource>AddMembersDataHandler.ContactPersonList</datasource>
                      <config>
                        <noupdatedatasource>true</noupdatedatasource>
                        <multiselect>true</multiselect>
                        <ondblclick>javascript:copySelectedProjectMemberRows(leftListBox_List_ListParser,SelectionMembersArchiveArchiveControl,'contactMDO','projectFuncMDO','desc','selectionMemberHidden');</ondblclick>
                      </config>
</control>
 
```

Once the user clicks on the “project” button, then in the ProjectMembers archive panel “Add” button is shown and once we click on the “Add” button a new window will open, which is shown below.

The shown listbox is generated because of the above HTML code segment.

<img src="../User%20controls%20Data%20Binding_files/image002.jpg" width="604" height="631" />
