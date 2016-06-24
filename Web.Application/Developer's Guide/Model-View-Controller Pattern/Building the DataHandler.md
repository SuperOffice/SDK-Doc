<properties date="2016-06-24"
SortOrder="13"
/>

Building the DataHandler
------------------------

Below, Listing Ten contains the datahandler source code. It declared a few constant variables that contain a value equal to the element names defined in the datahandlers section of Listing Nine. As stated earlier, the datahandler base class does not as of this writing support populating properties with the values defined in elements from the config section with the same name. Therefore, it is done explicitly in this datahandlers Initialize method.

Two other members of interest are the PersonColorCarrier and IPersonAgent types. The PersonColorCarrier type is the class that will hold the personal information about the current person, while the IPersonAgent is used to fetch that information.

The constructor calls into the base and specifies that this datahandlers PrimaryCurrent property is to contain the keyword that represents the current person, which is “person”. This is not necessary, but used rather as a convenience. It is used here to look up the current person id in the Load method.

**Listing Ten**: PersonalColorDataHandler source code.

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
        private const string PERSON\_DATA\_SOURCE = "PersonDataSourceName";
        private const string PERSON\_UDF\_PROG\_ID = "UDFieldProgId";
        private const string PERSON\_UDF\_LIST\_ID = "UDListId";

 

        private const string PERSONAL\_COLOR     = "PersonalColorCarrier";
        private const string COLOR\_LIST         = "PersonalColorList";
        private const string PERSON\_CARRIER     = "PersonCarrier";

 

        private PersonalColorCarrier \_personalColorCarrier = null;
        private IPersonAgent \_personAgent;

 

        public string PersonDataSourceName { get; set; }
        public string UDFieldProgId { get; set; }
        public string UDListId { get; set; }

 

        /// &lt;summary&gt;
        /// The PrimaryCurrent is set in the constructor.
        /// For the PersonalColorDataHandler 'person' is the primary current.
        /// &lt;/summary&gt;
        public PersonalColorDataHandler() : base(ApplicationDefs.CurrentNames.Person)
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
            if (CarrierId == PERSONAL\_COLOR && \_dataCarriers\[PERSONAL\_COLOR\] == null)
            {
                \_personalColorCarrier = new PersonalColorCarrier();

 

                                                         //"person", set in the ctor
                int currentPersonId = SuperStateManager.GetCurrentId(PrimaryCurrent);
                string id = Id;

 

                if (currentPersonId &gt; 0)
                {

 

                    PersonEntity p = \_personAgent.GetPersonEntity(currentPersonId);
                    \_dataCarriers\[PERSON\_CARRIER\] = p;

 

                    if (!string.IsNullOrEmpty(

 

 

                            p.UserDefinedFields\[UDFieldProgId + ":DisplayText"\]))
                    {
                        \_personalColorCarrier.SelectedColor =
                         (BasicColor)Enum.Parse(typeof(BasicColor),
                          p.UserDefinedFields\[UDFieldProgId + ":DisplayText"\]); ;
                    }
                    \_personalColorCarrier.Name = p.FullName;
                    \_personalColorCarrier.BirthDate = p.BirthDate;
                }
                else
                {
                    \_personalColorCarrier.SelectedColor = BasicColor.White;
                    \_personalColorCarrier.Name = "";
                    \_personalColorCarrier.BirthDate = DateTime.MinValue;
                }

 

 

                \_dataCarriers\[PERSONAL\_COLOR\] = \_personalColorCarrier;
            }
        }

 

        public override void Save()
        {
            //TODO: Persist the values to the data store... (redundant here)
            \_personalColorCarrier = (PersonalColorCarrier)\_dataCarriers\[PERSONAL\_COLOR\];

 

            //Save the PersonEntity
            \_personAgent.SavePersonEntity((PersonEntity)\_dataCarriers\[PERSON\_CARRIER\]);

 

        }
    }

} 

The most common scenario involving a datahandler is leveraging it as a data source container. The last three lines in the initialize method are dedicated to preparing the DataCarriers collection by populating it with keys, or carrier names, that will later be used to store data. DataCarriers are normally populated in the Load method, when the carrier name is equal to the CarrierId argument.

The Load method is invoked when a control attempts to retrieve the datasource and get or set the value the datasource contains. In the sample code, when the DataBind method in the PersonalInformation user control is called, one of the first things to occur is that the controls data source is cast to the type it contains, a PersonalColorCarrier instance. The moment the DataSource property is accessed, the datahandler Load method is invoked and used to populate the requested DataCarrier with current data.
