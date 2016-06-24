<properties date="2016-05-11"
SortOrder="9"
/>

Once the data are retrieved we can filter the data according to the search text specified by the user.

```
 
private void searchText()
{
    // iterate through the DataGridViewRow collection of the
gridview
    foreach (System.Windows.Forms.DataGridViewRow datarow in
this.grdActivityData.Rows)
    {
        //  checking the 'Description' column of the current row to
see if it contains the search text
 
        if
(datarow.Cells["Description"].Value.ToString().Contains(this.txtSearch.Text.Trim()))
        {
            // make the datarow visible if it contains the search
text
            datarow.Visible = true;
        }
        else
        {
            this.grdActivityData.CurrentCell = null;
            datarow.Visible = false;
        }
    }       
}
 
```

 

The DataGridViewRow collection of the data grid view is iterated for each activity data row and the Description column is checked to see if the description contains the search text. If the activity description does not contain the specified text the row is made invisible.This method is invoked in the TextChanged event of the search text box as shown below.

```
using (SoSession newSession = SoSession.Authenticate("p", "p"))
{
     // populate the grid with all the activities for the given
period
     this.setDataGrid();
     // filter the records
     this.searchText();                   
}

 
```
