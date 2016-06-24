<properties date="2016-06-24"
SortOrder="14"
/>

Building the Carrier
--------------------

Carriers are data containers - nothing more, nothing less. **Listing Eleven** shows the PersonalColorCarrier type. The sole purpose of this class is to demonstrate how you can construct complex types that contain data, and become the data source for controls defined on a page.

**Listing Eleven**: The PersonalColorCarrier source code.

using System;

namespace ControlsAndDataHandlers

{

    public class PersonalColorCarrier
    {
        private BasicColor \_color;
        private string \_name;

 

        public string Name
        {
            get { return \_name; }
            set { \_name = value; }
        }

 

        public BasicColor SelectedColor
        {
            get { return \_color; }
            set { \_color = value; }
        }

 

        private DateTime \_date;
        public DateTime BirthDate
        {
            get { return \_date; }
            set { \_date = value; }
        }
    }

 

    public enum BasicColor
    {
        //These numbers match the field values
        //in the UDLIST table of the SO database
        White = 1,
        Black,
        Grey, 
        Blue, 
        Green,
        Red,  
        Yellow,
        Brown,
        Orange,
        Violet           
    }

}

There is nothing complicated about the PeronalColorCarrier class. The key here is to look back at **Listing Ten** and see how this class instance is populated and added to the DataCarriers collection. Then look and see how it is referenced in the SOML page – in the control datasource element.

It would probably had been cleaner and simpler to only use the PersonEntity class for all data sources for the controls on the user control. However, at least now you have some idea about how flexible the framework is, and how easy it can be to incorporate your own data into controls defined on a page.

See Also: PersonEntity

 
