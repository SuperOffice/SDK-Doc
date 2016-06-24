<properties date="2016-06-24"
SortOrder="6"
/>

Changing the Default Columns in the Project Archive
===================================================

The default columns list of all archives is contained in the SoArchiveColumnList.config file. The config file contains a default column list as well as an ignored column list for all providers available through the CRM.web. It is important to remember that if we change the default column list of a provider, in all places it is used the new column list will be shown. The chosen columns for each user are stored at database level in the “superlistcolumnsize” table.

In the example below our goal is to add two columns i.e. Project Associates – First Name and Last Name columns to the Project view displayed in the Company Page.

What we have to do to achieve our goal is to change the SoArchiveColumnList.config as follows.

```
<?xml version="1.0" encoding="utf-8" ?>
<archives>
  <!--Other providers and there defaukt columns-->
  <archive providername="contactprojects" guiname="contactprojectsarchive">
    <columns type="mandatory">
      <column name="type"/>
    </columns>
    <columns type="default">
      <column name="name"/>
      <column name="type" orderby="1:A"/>
      <column name="status"/>
      <column name="associateId"/>
      <!--Columns added by us />-->
      <column name="projectAssociate/firstName"/>
      <column name="projectAssociate/contactName"/>
      <!--END-->
    </columns>
    <columns type="ignore">
      <column name="contactId"/>
      <column name="projectUrl/URLDescription"/>
      <column name="projectAssociate/contactDepartment"/>
      <column name="projectAssociate/lastName"/>
      <column name="projectAssociate/middleName"/>
      <column name="projectAssociate/contactId"/>
      <column name="projectAssociate/mrMrs"/>
      <column name="projectAssociate/title"/>
      <column name="projectAssociate/associateId"/>
      <column name="projectAssociate/contactFullName"/>
    </columns>
  </archive>
  <!--Other providers and there default columns-->
</archives>
```

 

What we have done with the above code is add two columns i.e. projectAssociate/firstName and projectAssociate/contactName to the contactprojectsarchive. What we did was to remove the above two columns from the ignore column list and added them to the default column list. Once the above is done the changes can be seen as in the images below.

Project View before the Columns have been added.

<img src="../User%20Control%20Archives_files/image002.jpg" width="605" height="409" />

Project View after the Columns have been added.

<img src="../User%20Control%20Archives_files/image003.jpg" width="604" height="438" />

Note that if the user has customized the columns in this archive, then the default no longer applies, and the new columns won’t appear automatically. However, the new columns will appear in the archive customization dialog so that the user can add them to the customized view.
