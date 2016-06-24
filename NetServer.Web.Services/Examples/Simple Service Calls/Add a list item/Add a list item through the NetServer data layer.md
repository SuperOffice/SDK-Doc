<properties date="2016-06-24"
SortOrder="5"
/>

Add a list item through the NetServer data layer
================================================

The following code is one way of adding a list item with the use of the NetServer data layer.

```
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
//Creating a Category Row
CategoryRow newCategoryRw = CategoryRow.CreateNew();
 
//Assigning default values to the created Category Row
newCategoryRw.SetDefaults();
 
//Assinging values to the Properties of the Country Row
newCategoryRw.Name = "Cat-Dush";
newCategoryRw.Rank = 11;
 
//Saving the Category Row
newCategoryRw.Save();
 
//Adding GroupLInk Table Values
CategoryGroupLinkRow newCategoryGrLiRw1 = CategoryGroupLinkRow.CreateNew();
newCategoryGrLiRw1.SetDefaults();
newCategoryGrLiRw1.CategoryId = newCategoryRw.CategoryId;
newCategoryGrLiRw1.GroupId = 3;
newCategoryGrLiRw1.Save();
 
CategoryGroupLinkRow newCategoryGrLiRw2 = CategoryGroupLinkRow.CreateNew();
newCategoryGrLiRw2.SetDefaults();
newCategoryGrLiRw2.CategoryId = newCategoryRw.CategoryId;
newCategoryGrLiRw2.GroupId = 2;
newCategoryGrLiRw2.Save();
 
//Adding HeadingLInk Table Values
CategoryHeadingLinkRow newCategoryHeLiRw1 = CategoryHeadingLinkRow.CreateNew();
newCategoryHeLiRw1.SetDefaults();
newCategoryHeLiRw1.CategoryId = newCategoryRw.CategoryId;
newCategoryHeLiRw1.HeadingId = 6;
newCategoryHeLiRw1.Save();
}
```

 

In the above code we have created a new Category called “Cat-Dush” which is stored in the Category table in the database. Then we have created two entries into the CategoryGroupLink table by creating and saving instances of the CategoryGroupLinkRow. This tells us to which user groups the Category is visible to. Next we have added an Entry to the CategoryHeadingLink table which determines under which heading the created category should be displayed. The created Category can be seen on the SuperOffice CRM Admin Applications as shown below.

<img src="../Add%20a%20List%20Item_files/image001.jpg" width="605" height="445" />

See Also:

[Get the Category List](../Get%20the%20category%20list/Get%20the%20category%20list.md)

[Get a List of People](../Get%20a%20List%20of%20People/Get%20a%20List%20of%20People.md)

 

 

 
