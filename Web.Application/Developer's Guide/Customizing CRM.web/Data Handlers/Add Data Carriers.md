<properties date="2016-06-24"
SortOrder="15"
/>

We need to override the Initialize method in order to add more data carriers to the data handler. The data carriers are, what the name implies, objects that hold any type of data; that could be just a simple data type like a string or an int, or a more complex one, like an array, generic list, or an instance of any class. In other words, the data carriers can carry any type of data. This data will be available to any of the controls that you add to the page that uses this data handler (when specified correctly in the page configuration file, mind you).

So if we continue with the two views that we added to the page in the last article, we will need a data carrier for each of the controls in these views.

public override void Initialize(System.Xml.XmlNode config, string id)

    {
    \_dataCarriers.Add("ForeignKeyDeviceOne", null);
    \_dataCarriers.Add("ForeignKeyDeviceTwo", null);
    base.Initialize(config, id);
    }

The data carriers of a data handler are stored in the generic dictionary \_dataCarriers, coming from the DataHandlerBase class.
