<properties date="2016-05-11"
SortOrder="5"
/>

In NetServer you can develop a list Plugin that will give your own functionality to any of the lists that exists in SuperOffice. In SuperOffice the lists can be of mainly two types’ lists that are constructed from a table in the database and the lists that have been hard coded.

First let’s show you how you can develop a Plugin for a list that is constructed from a table in the SuperOffice database. This example shows how you can manipulate the country list that is constructed from the country table of the SuperOffice database.

```
usingSystem;
usingSystem.Collections.Generic;
usingSystem.Text;
 
using SuperOffice.CRM.Lists;
using SuperOffice.Factory;
using SuperOffice.Data;
 
namespace Plugin
{
    [MDOProviderPlugin("country")]
    public class DemoListPlugin : MDOProviderBase
    {
        /// <summary>
            /// Initialize the class
            /// </summary>
        public DemoListPlugin()
        {
        }
 
        public override void Construct(string tableName, string
  additionalInfo, int[] historyIDs, bool onlyReadHistory, string
  searchValue, bool forceFlatList)
        {
            //here we specify from which table the list should be
made
            base.Construct("country", additionalInfo, historyIDs,
            onlyReadHistory, searchValue, forceFlatList);
            //here we say we want a extra entry in the lsit. this
is the
            //modification we are doing to the list.
           RootItems.Insert(0,new SoListItem(-1, "Default
Country","Default
     Country", string.Empty));
        }
        public override HistoryInfo HistoryInfo
        {
            //specify where the history info should come from
            get { return new HistoryInfo("country", "country", 0);
}
        }   
}
```

 

Notice that the class is preceded by an attribute. This is done to tell the NetServer that this is a Plugin and we give a specific attribute since we want to tell NetServer that this is a Plugin of type MDO list provider and the name MDOProviderPlugin is the name that is given by NetServer for it to identify this is a MDO list plugin. The MDOProviderPlugin attribute must be provided with what is the list that you’re trying to enhance or manipulate as a parameter in the above example it is the country list.

An Important Point to Remember!

It is paramount that we only give one list name as the parameter and that should be the exact name of the table that holds the data and it must be known at compile time.

Now we have told NetServer that we have developed a Plugin and that Plugin will enhance or manipulate the functionality of the country list. We do this by inheriting the MDOProviderBase class and overriding its methods. This is the same class that NetServer uses to implement its own list so when we override its methods we supersede the NetServer functionality of the particular list.

When you inherit from the MDOProviderBase class you have to implement the Construct method and the HistoryInfo method since you have to specify from which table you are going to pull the Root data and from which table you are going to pull the History data. In the above example the Construct method is overridden to say that the data for the list will be pulled out of the country table and in addition we have inserted a list item call Default country and like wise you can do your own implementation of the Construct method to suit your application purpose. So now you have enhanced the country list by adding an item to the list.

There are many methods that can be overridden in the MDOProviderBase class. Like the following:

You can add some text to the tooltip of the list items:

```
protected override string GetItemTooltip(ListTableRow row)
{
//check for the country name
      if (row.GetValue("name").ToString()  == "Norway")
      {
            //add the additional tool tip word to the alreday
            //exsisting tool tip
            return row.Tooltip + " " + "Home Country";
      }
      else
      {
            //if the another country return the default tool tip
            return row.Tooltip;
      }
}
```

 

Now let’s look at how you can manipulate the actual data that is coming to the list. Let’s write some OSQL (Objectified SQL). In the below example we are going to override the GetSimpleListQuery method of the MDOProviderBase class since it is where we have define our query if we want to get some data that we want.

 

 

```
private TableInfo tableInfo = null;
private ListInfo listInfo = null;
 
protected override ListTableRows.CustomSearch GetSimpleListQuery()
{
//get the table info
      tableInfo = TablesInfo.GetTableInfo("country");
      //get the list info
      listInfo = tableInfo.Definition.MDOListInfo;
 
      //declare a query of type ListTableRows.CustomSearch
      ListTableRows.CustomSearch query = new
      ListTableRows.CustomSearch(tableInfo);
 
      //we have to set a common alias for the list item id
      tableInfo.Definition.MDOListInfo.PrimaryKey.Alias = new
      Alias("ListItemId");
      //we are retriving all the fields in the list table
      query.AdditionalReturnFields.Add(listInfo.ListTable.All);
      //lets distinct the results
      query.IsDistinct = true;
 
      //lets not take the deleted ones
      query.Restriction = listInfo.Deleted.Equal(S.Parameter(0));
 
      //order the list by the rank of each item
      query.OrderBy.Add (listInfo.Rank);
           
      //lets take only the countries that starts with A
      query.Restriction =
      query.Restriction.And(listInfo.Name.Like("A%"));
           
      //return query
      return query;
}
```

 

Here we filter out only the countries that start with A. Please refer to the OSQL section of the SDK help for more information  [In depth OSQL](../OSQL/OSQL.md) .

Now that we have developed our Plugin lets discuss how we can use our developed Plugin. How do we inform NetServer that we have developed a Plugin? We have to specify in our app.config file that NetServer should use our new Plugin instead. Below is an example of how we have to configure our Plugin in the app.config file. 

```
<Factory>
      <DynamicLoad>
        <add key="PluginDemos" 
        
value="C:\\TestApps\\Pulgin\\Pulgin\\bin\\Debug\\Pulgin.dll" />
      </DynamicLoad>
</Factory>
```

 

When you declare your Plugin DLL in the DynamicLoad section of the Factory section group of your app.config file NetServer will load your DLL along with its other DLLs. For more information on app.config settings please refer to (TO DO Put the Ref Here to NetServer config section). Now let’s see how we can use the developed Plugin in a normal windows forms based application.

Here we will use the Plugin that we developed to extend the functionality of the country list.

```
using SuperOffice.CRM.Services;
using SuperOffice.CRM.Lists;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the country list. Notice that even though you ha ve not
written
      //a plugin to the country list this is the method that you
will call
      // to get the country list since we have written a plugin
netserver
      //will execute our plugin instead of the netserver one
      ISoListProvider testList = SoLists.GetCountryList();
      if (testList.RootItems.Count > 0)
      {
            listView1.View = View.List;
            listView1.ShowItemToolTips = true;
            int i = 0;
            //add the root items of the list to the list view
            foreach (SoListItem item in testList.RootItems)
            {
                  listView1.Items.Add(item.Name);
                  listView1.Items[i].ToolTipText =
                  testList.RootItems[i].Tooltip;
                  i++;
            }
      }
}
```

 

In the above example when we get the country list using the GetCountryList method of the SoLists class it will create the list using the methods we overrode and it will revert to the original implementation of the methods that we did not override. So here we will only get the countries that start with the letter A.
