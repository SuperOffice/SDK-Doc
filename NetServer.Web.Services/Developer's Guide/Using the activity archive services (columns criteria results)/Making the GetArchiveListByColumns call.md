<properties date="2016-06-24"
SortOrder="8"
/>

In the example we have made use of the GetArchiveListByColumns() method which is exposed through the IArchiveAgent. The method requires the following parameters to be passed into it in order to generate the required output.

```
      ArchiveListItem[] arcLstItm = 
      newArcAgt.GetArchiveListByColumns(
            archiveProviderName, archiveColumns, archiveSrtOrd, archiveRest, 
            desiredEntities, page, pageSize);
```

 

As we can see the method requires seven parameters to be passed into it. We will now take a look at how we create the required parameters.

The first parameter that is required is the provider name. This is the name of the provider that will be used to retrieve the required information. In the example, the “ContactActivityArchiveProvider” has being used. The provider will be created with the use of the ArchiveProviderFactory from a plugin.

```
      string archiveProviderName = ContactActivityArchiveProvider.ProviderName;
```

 

Next parameter is the list of columns that needs to be returned by the method. This is the part that is different compared to the other specific archives such as Sale, Contact etc. The ActivityArchive allows us to take columns from multiple archives as shown below.

```
      string[] archiveColumns = new string[] { 
                        "contact/name", "associate/fullName", 
                        "person/fullName", "saleId", "currency" };
```

 

The columns that have been retrieved include Name of the Contact from the Contact Entity, Full Name of the Associate from the Associate entity, Full Name of the Person from the Person Entity and SaleId and Currency from the Sale Entity. These retrieves would be impossible if we were to have an Appointment column or a Document column.

An important point to remember!

The names of the columns differ from the names that have been given in the database. It is advisable to use the IArchiveProvider to retrieve the columns that are available under a particular column.

          IArchiveProvider newArchive = new ContactActivityArchiveProvider();
          List<ArchiveColumnInfo> availableColumns = newArchive.GetAvailableColumns();
          List<ArchiveEntityInfo> availableEntities = newArchive.GetAvailableEntities();

Next parameter that is required by the method is the sort order in which the returned data should be sorted. The sort order can be null which ‘indicates no particular order’.

```
      ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
      archiveSrtOrd[0] = new ArchiveOrderByInfo("saleId ", 
                              SuperOffice.Util.OrderBySortType.DESC);
```

 

GetArchiveListByColumns() method requires the sort order which is an array of type ArchiveOrderByInfo. Here we are sporting by the saleId, with the highest saleId first in the list. Any row that doesn’t have a saleId will be sorted as value 0 and would be shown at the end of the list.

The forth parameter that the method requires is an array of ArchiveRestrictionInfo which contains the restriction on which the retrieved archive list is based on.

```
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo(
                              "contact/contactId", "=", "68");
```

 

The archives will generally throw an exception if no restrictions are set. If we do not want any restriction, pass in an empty array, but we have to remember that we may end up fetching the first page of millions of rows. What we have done here is set the restriction, as ContactID, which is obtained from the Contact Entity, should equal to the specified value (68). This means that we are retrieving all the Appointments, Documents and Sales records which have the contactId as “68”.

The fifth parameter tells the method to include only the details of all the entities that has being given in the array. The Entities corresponds to “checkboxes” in the Archive GUI. If we remove “document” from this list, the Document records are never fetched from the database and the Documents rows will disappear from the results.

```
      string[] desiredEntities = 
                  { "contact", "sale", "document", "person", "appointment" };
```

 

This parameter can also be null which indicates that all entities will be included.

The last two parameters that should be passed in to the method includes page number where page 0 is the first page and page size which is the number of rows that should be contained in a page.

```
      int page = 1;
      int pageSize = 10;
```
