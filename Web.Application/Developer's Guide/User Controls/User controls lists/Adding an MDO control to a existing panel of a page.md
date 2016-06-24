<properties date="2016-06-24"
SortOrder="9"
/>

In this section we will focus on adding a MDO control to an existing Six Web page. We are going to add a new MDO control to the find dialog. Below is a screen shot of the find dialog before we add the new control.

<img src="../user%20controls%20-%20lists_files/image001.jpg" width="606" height="492" />

As we can see in the above screen shot there is a large number of controls in the first section of the page. When there is a control group like this SuperOffice has grouped them to rows and columns. So when we are adding a control to a page we must add our control according to these configurations. Below is the code snippet that we are going to add to the SoFindProjectDialogViewView.config file.

```
<control id="newLabel" type="SoLabel" context-style="Normal" row="5" column="2">
<caption>New Control</caption>
</control>
       
<control id="projtemp5_5" type="SoMDOControl" column="3" row="5" width="200px" >
<caption></caption>
      <datasource>FindDataHandler.categoryId.Values[0]</datasource>
      <config>
            <displaytext-datasource>
            FindDataHandler.categoryId.DisplayValues[0]
            </displaytext-datasource>
            <listname>Category</listname>
      </config>
</control>
```

 

From the above code snippet we can see that the control tags we have specified the row number and the column number. So in a case like this if we are inserting a control we have to take note of simple things like this otherwise the controls will overlap. Below is a screen shot of the find dialog after we have added the controls.

<img src="../user%20controls%20-%20lists_files/image002.jpg" width="606" height="491" />

Here we have added two controls: a SoLabel and an MDO control. Since we have given the proper column and row numbers for each control the controls have appeared at the correct location without overlapping the existing controls.

When we add a control to a page in CRM.web we have to take note of the following config file settings.

* The control should have a unique id.
* The controls should appear in a control group section of the main control groups section. The control group section can be an existing one or a newly added one.
* If a column and row tags exists within a control group we have to take note of them.
* We have to take into consideration the different config settings that are native to each control. For example the MDO control will have a datasource tag and a List-datasource tag or a displaytext-datasource depending on the config of the MDO control, but another control may only have a datasource tag. Another example is a MDO control will not have a caption but a SoLabel will have a caption. 
* We have to take careful note of the normal XML rules as well. For example if we open a tag it must be closed.

 

Below is the config section of the control group from the SoFindProjectDialogViewView.config file where we have added our controls.

```
<view id="FindProjectDialogView" type="SoDialogView" soprotocol="findproject" current="" >
  <caption>[SR_SINGULAR_PROJECT]</caption>
  <tooltip></tooltip>
  <controlgroups>
    <controlgroup id="FindProjectGroup" type="SoControlGroup" position="absolute" left="15px" top="0px" width="100%" >
      <controls>
        <!--Some other Code-->       
        <control id="projtemp5_1" type="SoCheckBox" column="0" row="4">
          <caption>[SR_PROJECT_CARD_RESPONSIBLE]</caption>
          <datasource>FindDataHandler.associateId.IsActive</datasource>
        </control>
        <control id="projtemp5_3" type="SoMDOControl" column="2" row="4" width="120px">
          <caption></caption>
          <datasource>FindDataHandler.associateId.Operator</datasource>
          <config>
            <list-datasource>OperatorListDataHandler.staticassociate</list-datasource>
            <propertykey>Type</propertykey>
          </config>
        </control>
        <control id="projtemp5_4" type="SoMDOControl" column="3" row="4" width="200px" >
          <caption></caption>
          <datasource>FindDataHandler.associateId.Values[0]</datasource>
          <config>
            <displaytext-datasource>FindDataHandler.associateId.DisplayValues[0]</displaytext-datasource>
            <listname>Associate</listname>
          </config>
        </control>
 
        <!-- Our Code Starts Here -->       
        <control id="newLabel" type="SoLabel" context-style="Normal" row="5" column="2">
          <caption>New Control</caption>
        </control>       
        <control id="projtemp5_5" type="SoMDOControl" column="3" row="5" width="200px" >
          <caption></caption>
          <datasource>FindDataHandler.categoryId.Values[0]</datasource>
          <config>
            <displaytext-datasource>FindDataHandler.categoryId.DisplayValues[0]</displaytext-datasource>
            <listname>Category</listname>
          </config>
        </control>       
         <!-- Our Code Ends Here --> 
     
         <!--Some other Code
        <control id="ProjectListLabel" type="SoLabel" column="0" row="6">
          <caption>[SR_FIND_MATCH]</caption>
        </control>
      </controls>
      <config>
        <grouptype>grid</grouptype>
        <cellheight>5</cellheight>
        <cellwidths>
          <cellwidth>120px</cellwidth>
          <cellwidth>10px</cellwidth>
          <cellwidth>140px</cellwidth>
          <cellwidth>70%</cellwidth>
        </cellwidths>
      </config>
    </controlgroup>
</controlgroups>
</view>
```

 

We can observe that we have adhered to all the rules given above and the controls appear smoothly on the page.
