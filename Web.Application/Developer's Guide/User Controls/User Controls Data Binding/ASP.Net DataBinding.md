<properties date="2016-06-24"
SortOrder="11"
/>

Data Binding is binding controls to data from databases. With data binding we can bind a control to a particular column in a table from the [database](http://www.startvbdotnet.com/aspsite/ado/databinding.aspx) or we can bind the whole table to the data grid. Data binding provides simple, convenient, and powerful way to create a read/write link between the controls on a form and the data in their [application](http://www.startvbdotnet.com/aspsite/ado/databinding.aspx).

ASP.net data-binding causes the values in a grid to be automatically populated from a data source. If the user edits a value on the page, the ASP.net framework automatically updates the data source with the new value.

The PageBuilder framework uses a slightly different form of data-binding, since it overrides the standard ASP.net page model with a new AJAX update model. The PageBuilder framework does not use view-state, which means there is much less data to transmit back and forth, but it does mean that the server has to do a bit more work to figure out what has to be updated.

 
