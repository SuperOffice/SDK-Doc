<properties date="2016-06-24"
SortOrder="4"
/>

The Datahandler
---------------

Datahandlers are defined at the top in a page definition. Datahandlers are responsible for fetching the information displayed in a page when rendered, as well as persisting changes when complete.

Similar to the initialization of a control, this is an opportune time for the datahandler to instantiate any types required for conducting datahandler operations.

The Initialize method signature is the same as the UserControlBase Initialize method, however, unlike the UserControlBase, the DataHandlerBase does not automatically parse the XmlNode argument. Not doing so also means that public properties with the same name are not automatically populated. Listing Four demonstrates one way to accomplish the same using code. It simply loops over all the nodes in the XmlNode and looks for the elements with the same names as the properties declared in the datahandler and sets the value.

using System;

using SuperOffice.CRM.Services;

using SuperOffice.CRM.Web;

using SuperOffice.CRM.Web.Data;

 

namespace ControlsAndDataHandlers

{

    /// &lt;summary&gt;
    /// Register in ObjectMapping.config
    /// &lt;/summary&gt;
    public class PersonalColorDataHandler : DataHandlerBase
    {
        private const string PERSONAL\_COLOR         = "PersonalColorCarrier";
        private const string COLOR\_LIST                   = "PersonalColorList";
        private const string PERSON\_CARRIER          = "PersonCarrier";
        private const string PERSON\_DATA\_SOURCE = "PersonDataSourceName";
        private const string PERSON\_UDF\_PROG\_ID  = "UDFieldProgId";
        private const string PERSON\_UDF\_LIST\_ID    = "UDListId";

 

        private PersonalColorCarrier \_personalColorCarrier = null;
        private IPersonAgent \_personAgent;

 

        public string PersonDataSourceName { get; set; }
        public string UDFieldProgId { get; set; }
        public string UDListId { get; set; }

 

        /// &lt;summary&gt;
        /// The PrimaryCurrent is set in the constructor.
        /// For the PersonalColorDataHandler 'person' is the primary current.
        /// &lt;/summary&gt;
        public PersonalColorDataHandler() :
           base(ApplicationDefs.CurrentNames.Person)
        {
        }

 

        public override void Initialize(System.Xml.XmlNode config, string id)
        {
            foreach (System.Xml.XmlNode item in config.ChildNodes)
            {
                if (item.Name == PERSON\_DATA\_SOURCE)
                    PersonDataSourceName = item.InnerText;
                else if (item.Name == PERSON\_UDF\_PROG\_ID)
                    UDFieldProgId = item.InnerText;
                else if (item.Name == PERSON\_UDF\_LIST\_ID)
                    UDListId = item.InnerText;
            }

 

            base.Initialize(config, id);

 

            \_personAgent = AgentFactory.GetPersonAgent();
            this.\_dataCarriers.Add(PERSONAL\_COLOR, null);
            this.\_dataCarriers.Add(COLOR\_LIST, null);
            this.\_dataCarriers.Add(PERSON\_CARRIER, null);
        }

 

        public override void Load(string CarrierId)
        {
        }

 

        public override void Save()
        {
        }
    }

} 

Once all the datahandlers for a page have completed initialization, the controls defined in that page are initialized as discussed in the previous section.
