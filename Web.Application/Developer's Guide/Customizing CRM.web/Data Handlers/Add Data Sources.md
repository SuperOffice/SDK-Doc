<properties date="2016-06-24"
SortOrder="16"
/>

The data carriers will work as the data sources for one or several of the controls that you have defined on your page.

To have the two controls we added last time use these data carriers as their data sources, we need to specify that in the following way;

&lt;control id="DevNetDeviceOne" type="DevNetSaleForeignKeys" width="100%" top="0px" left="0px" height="100%" position="absolute" &gt;

    &lt;datasource&gt;EntityDataHandler.ForeignKeyDeviceOne&lt;/datasource&gt;
    &lt;config&gt;
        &lt;ForeignKeyDeviceId&gt;DeviceOne&lt;/ForeignKeyDeviceId&gt;
    &lt;/config&gt;

&lt;/control&gt;

and

&lt;control id="DevNetDeviceTwo" type="DevNetSaleForeignKeys" width="100%" top="0px" left="0px" height="100%" position="absolute" &gt;

    &lt;datasource&gt;EntityDataHandler.ForeignKeyDeviceTwo&lt;/datasource&gt;
    &lt;config&gt;
        &lt;ForeignKeyDeviceId&gt;DeviceTwo&lt;/ForeignKeyDeviceId&gt;
    &lt;/config&gt;

&lt;/control&gt;

The EntityDataHandler is an instance of the data handler that we defined in the &lt;datahandlers&gt;section above, and the names of the data sources need to match the ones we used when adding the data carriers inside the Initialize method. Note that EntityDataHandler matches the ID of the datahandler defined for the page.
