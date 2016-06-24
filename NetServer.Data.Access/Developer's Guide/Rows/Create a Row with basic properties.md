<properties date="2016-05-11"
SortOrder="16"
/>

To create a basic Row you have to use the CreateNew method of the Row class that you are going to create. After you have created the Row you will want to populate its properties with data. The following example shows how to create a Row and to populate some very basic properties.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
 
    //Create a New Row
    ContactRow myContactRow = ContactRow.CreateNew();
    myContactRow.SetDefaults();
 
    //Assign values to its basic properties
    myContactRow.Name = "SuperOffice ASA";
    myContactRow.Department = "ABC Dept";
 
    //Retrieve a country row and assign the country id of that row
    CountryRow myCountry = CountryRow.GetFromIdxName("Algeria");
    myContactRow.CountryId = myCountry.CountryId;
 
    // Finally save the row
    myContactRow.Save();
 
}

 
```

The example shows how to create a ContactRow and populate its properties with data. When assigning a value to the CountryId property of the ContactRow we have first retrieved a CountryRow by using the IdxName method. Retrieving data will be explained in more detail later. The countryId is retrieved through the countryRow and assigned to the CountryId property of the ContatctRow. You can even assign an integer value to the countryId property directly.

 

An Important Point to Remember!

If you assign an Id of a non existing countryRow to the CountryId property of the ContactRow, no exception will be thrown and that value will be stored in the database. But when you retrieve the CountryId property through ContactEntity you will always get 0 if it’s a non existing row.
