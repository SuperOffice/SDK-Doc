<properties date="2016-05-11"
SortOrder="10"
/>

 

SODataReader also facilitates us in obtaining Category Lists. Here you have to query the database to retrieve the Category List. The following example demonstrates how it is done.

```
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Create a category table and a categoryheadingtable
    CategoryTableInfo categoryTable =
TablesInfo.GetCategoryTableInfo();
    CategoryHeadingLinkTableInfo categoryHeading =
TablesInfo.GetCategoryHeadingLinkTableInfo();
 
    //Writing the Query to retrieve the Items coming under each
heading in the categoryheadinglink table
    Select selectCategory = S.NewSelect();
    selectCategory.ReturnFields.Add(categoryTable.CategoryId,
categoryTable.Name, categoryHeading.HeadingId);        
selectCategory.JoinRestriction.LeftOuterJoin(categoryTable.CategoryId.Equal(categoryHeading.CategoryId));
    selectCategory.GroupBy.Grouping.Add(categoryHeading.HeadingId,
categoryTable.CategoryId, categoryTable.Name);
    SoConnection con = ConnectionFactory.GetConnection();
    SoCommand cmd = con.CreateCommand();
    cmd.SqlCommand = selectCategory;
    con.Open();
 
    //Execute the Query
    SoDataReader reader = cmd.ExecuteReader();
    //Write the category Id , category name and heading id on the
list view
    while (reader.Read())
    {
       ListView.Items.Add(reader[0].ToString() + " " +
reader[1].ToString() + "     " + reader[2].ToString());
    }
}
```

 

Here we make a query to retrieve the Category List from the category table in the database. If any Category has a heading then there will be a link provided in the categoryheadinglink table. We have grouped items in the Category List according to their headings. If any record in the category table doesn’t have a heading then “0” will be returned as the HeadingId. Similarly you can obtain the history items by querying the history table.
