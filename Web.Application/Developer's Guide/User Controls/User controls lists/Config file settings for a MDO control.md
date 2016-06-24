<properties date="2016-06-24"
SortOrder="8"
/>

Given below is a typical configuration for a MDO control.

```
<control id="projtemp5_4" type="SoMDOControl" column="3" row="4" width="200px" >
<caption></caption>
      <datasource>FindDataHandler.associateId.Values[0]</datasource>
      <config>
            <displaytext-datasource>
      FindDataHandler.associateId.DisplayValues[0]
      </displaytext-datasource>
            <listname>Associate</listname>
      </config>
</control>
```

 

The control id tag will give the control a unique id in the page. The type will give us the type of the control. The column, row and width tags will give us the physical characteristics of the control. Since this list control does not have a caption the caption tag will be empty.

See Also:

[Adding a MDO control to an existing Panel of a Page](Adding%20an%20MDO%20control%20to%20a%20existing%20panel%20of%20a%20page.md)

The datasource tag says where the data for the control will be pulled out from. Notice that it says FindDataHandler.associateId.Values\[0\]. Since the control displays a list it should be bound against an array so this says FindDataHandler.associateId.Values property is holding an array and display the first element of the array which is the zero element.  The next tag is the displaytext-datasource form this it says what data that should be displayed. In the above case it is DisplayValues, so this is the data that user will see. The difference between these two tags is the first one says what is the data item of the array that is used by the application and the second one says what data item will be visible to user.

The last tag which is the listname tells us the MDO provider name which supplies the list of values to the drop down. The list will be created according to the name. I.e. if we have Category here a category list will be displayed. However when you select a category the category id will be set on the associate field. This happens because we have said in the datasource tag we will use the category id for the mappings.

An important point to remember!

In an MDO control configuration the data source tag, display text-datasource tag and the listname tag must match each other. If we have a list name that does not match the other tags it will mess up the data. For example if we have the datasource tag pointing to associateid and if we have the listname as category it will map the category id to associate id field.

The MDO factory will create the control for us. It will use the listname tag to determine the list that we want.

There is another type of configuration for the MDO control.

```
<control id="projtemp5_3" type="SoMDOControl" column="2" row="4" width="120px">
<caption></caption>
      <datasource>FindDataHandler.associateId.Operator</datasource>
      <config>
            <list-datasource>
            OperatorListDataHandler.staticlistany
            </list-datasource>
            <propertykey>Type</propertykey>
      </config>
</control>
```

 

Notice that here two tags have got changed. The data shown to the user is fetched from the list named in the list-datasource tag. The difference is the OperatorListDataHandler has a static list of associates that is built already. A typical use of a configuration like this is when the list is not build out of the database but build from the application using static data.

For example an operator list for an associate list or a category list will be “one of”, “not one of” and “=”. In a case like this the OperatorListDataHandler will take the static list any part and pass it on to the MDO factory along with the provider name for the operator list which is restrictionOperators. 

Inside NetServer, the MDO factory finds the class SuperOffice.CRM.ArchiveLists.OperatorProvider, which is marked as the “restrictionOperators” list. The OperatorProvider uses the RestrictionOperations class to build a list of valid operators for “staticlistany”. The list is returned as a list of SoListItem objects.

The &lt;propertykey&gt;Type&lt;/ propertykey &gt; is used to tell the control what field in the SoListItem to use when setting the datasource.

The static list items look like this:

   (id=1, name=”\[SR\_IS\_ONE\_OF\]”, tooltip=””, type=”isOneOf”)
   (id=2, name=”\[SR\_IS\_NOT\_ONE\_OF\]”, tooltip=””, type=”isNotOneOf”)
   (id=3, name=”\[SR\_IS\_EQUAL\_TO\]”, tooltip=””, type=”=”)

The control would normally bind the id to the datasource, but we want to bind the type to the operator field on the find-data-handler, so propertykey tag says Type.
