<properties date="2016-05-11"
SortOrder="3"
/>

 

There are several lists Used in SuperOffice CRM, most of them are stored in tables in the database. An explanation of all the lists that exists in the SuperOffice CRM is beyond the scope of this section so we will take the category list as an example. All the lists manipulation can be done the same way so the knowledge that you gain in this section can be applied to manipulating all the lists.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//create a category  row
      CategoryRow myCtaegory = CategoryRow.CreateNew();
      myCtaegory.SetDefaults();
      //give it a name
      myCtaegory.Name = "This is a category test";
      //set the rank
      myCtaegory.Rank = 5;
      //give a tool tip
      myCtaegory.Tooltip = "This is test tooltip";
      //save the row
      myCtaegory.Save();
 
      //create a category group link row
      CategoryGroupLinkRow myGroupLinkRow =
CategoryGroupLinkRow.CreateNew();
      //set the group id that you want
      myGroupLinkRow.GroupId = 2;
      //set the category id
      myGroupLinkRow.CategoryId = myCtaegory.CategoryId;
      //save the category row
      myGroupLinkRow.Save(); 
}
```

 

In the above example we have used purely rows to get the job done. We have created a category row and filled some basic properties of the row and saved it. This means that we have a new category and we can now use this category. We have not stopped at creating a category but we have a created a category group link row as well. If we create a category we must create a group link row as well to specify that this category belongs to this group. Creating a category group link row makes the category appear for the given group in the GUI.
