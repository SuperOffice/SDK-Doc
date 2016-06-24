<properties date="2016-06-24"
SortOrder="17"
/>

So far the data carriers of the new data handler (and thus the data sources of our two controls) do not contain anything. The next thing we want to do is to populate them with some data.

There is a sample project that you can download for this article (see link to the top right). Within this project you will find a class; DevNetForeignKey, that holds properties for everything we need to create a new Foreign Key for the sale.

If you take a look at the codebehind for the SaleForeignKeys user control, you see that there is a private property of type DevNetForeignKey defined, and that this property is populated in the Page\_Load method of the user control;

private DevNetForeignKey \_fk = new DevNetForeignKey();

 

protected void Page\_Load(object sender, EventArgs e)

    {
    // Get current sale ID
    \_saleId = SuperOffice.CRM.Web.SuperStateManager.GetCurrent("sale").Id;
    if (\_saleId &gt; 0 && !String.IsNullOrEmpty(\_fkDeviceId))
    {
        \_fk.DeviceId = \_fkDeviceId;
        \_fk.RecordId = \_saleId;

 

        // Get all foreign keys for current sale
        GetList();
    }
    }

In order to populate the data source of the user control, we need to override the UpdateDataSource method, and set the DataSource of the base object to whatever we want it to be. In this case we want to set it to the just mentioned instance of the DevNetForeignKey class;

public override void UpdateDataSource()

    {
    base.DataSource = \_fk;
    base.UpdateDataSource();
    }

The UpdateDataSource of the base class needs to be called after you set the DataSource.

The UpdateDataSource method is called after Page\_Load, so the DataSource will contain the object with the properties set from the Page\_Load.

In addition to the data source of the user control now having an object assigned to it, the data carrier of the data handler will have access to the same object.
