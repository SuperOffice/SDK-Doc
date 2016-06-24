<properties date="2016-05-11"
SortOrder="16"
/>

To begin creating a new Sentry plug-in, you must create a class that inherits from and implements the SuperOffice.CRM.Security.ISentryPlugin interface. In the plugin it is required to access the generated NetServer classes for the UDT. To accomplish this, compile the code generation solution and add a reference to the dll in the Plugin project.

 

```
using System;
using System.Collections.Generic;
using System.Text;
 
using SuperOffice.CRM.Security;
using SuperOffice.Data.SQL;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Entities;
using MyNetServerCode.Data;
 
namespace SentryForCustomTableDll
{
    [SentryPlugin("contact")]
    public class CustomSentryPlugin : ISentryPlugin
    {
        /// <summary>
        /// Storing reference to the sentry the plugin works on
bahalf of.
        /// </summary>
        SuperOffice.CRM.Security.Sentry _sentry = null;
 
        /// <summary>
        /// Default constructor, we do nothing here.
        /// </summary>
        public CustomSentryPlugin() { }
 
        #region ISentryPlugin Members
 
        /// <summary>
        /// Here we intialize sentry type we want. the parameter
will
        /// give us the sentry type.
        /// </summary>
        /// <param name="sentry"></param>
        public void Init(Sentry sentry)
        {
            _sentry = sentry;
        }
 
        /// <summary>
        /// Modify field rights.
        /// </summary>       
        public void ModifyFieldRights(FieldRights rights)
        {
            // No changes in field rights
        }
 
        /// <summary>
        /// Modify table rights.
        /// </summary>     
        public void ModifyTableRights(TableRights rights)
        {
            // No changes in field rights
        }
 
        #endregion
 
        #region helpers
        /// <summary>
        /// Casting <see cref="sentry.SentryQueryInfo"/>to
<see
        /// cref="ContactSentryQueryInfo"/>.
        /// </summary>
        private ContactSentryQueryInfo QueryInfo
        {
            get { return
(ContactSentryQueryInfo)_sentry.SentryQueryInfo; }
        }
 
        /// <summary>
        /// Obtain value of a field without trigging sentry
calculations.
        /// </summary>
        /// <param name="fieldInfo">Field to get value
for</param>
        /// <returns>Value of the field.</returns>
        object GetFieldValue(FieldInfo fieldInfo)
        {
            using (_sentry.Lookups.BeginIgnoreSentryCheck())
            {
                return _sentry.Lookups.GetFieldValue(fieldInfo);
            }
        }
        #endregion
    }
 
    ///<summary>
    ///Demonstration of sentry plugin query table updater for table
Contact.
    ///</summary>
    ///<remarks>Enforce the restriction contacts with the
same business-id as the current user are visible to any
user.</remarks>
   
    [SentryPluginQueryTableUpdater("contact")]
    public class SentryPluginQueryTableUpdaterContact :
    ISentryPluginQueryTableUpdater
    {
        #region ISentryPluginQueryTableUpdater Members
 
        public void ModifySelect(Select sql, TableInfo tableInfo)
        {
          // Get the ContactTableInfo and
SuperOfficeTrainingTableTableInfo
            ContactTableInfo newConTable =
(ContactTableInfo)tableInfo;
            SuperOfficeTrainingTableTableInfo newCustomTable =
MyNetServerCode.Data.CustomTablesInfo.GetSuperOfficeTrainingTableTableInfo();
  
            // Set the restriction
           
sql.RestrictionAnd(newCustomTable.AssociateId.Equal(SuperOffice.Data.S.Parameter(SuperOffice.SoContext.CurrentPrincipal.AssociateId)));
         
            // Join the tables Contact and the custom table
           
sql.JoinRestriction.InnerJoin(newConTable.BusinessIdx.Equal(newCustomTable.BusinessId));
        }
        #endregion
    }
}
```

 

As we can see in the above code segment, we have created another class called “SentryPluginQueryTableUpdaterContact” which implement the SuperOffice.CRM.Security.ISentryPluginQueryTableUpdater interface. This interface has a single method called “ModifySelect” where we have implemented the sentry restriction to retrieve only the contact information where the Business-id of which is same as the currently logged in user’s Business-id.

 TableInfo objects are required for the tables of interest i.e., the Contact table and SuperOfficeTrainingTable. ContactTableInfo is retrieved by casting the TableInfo object passed to the ModifySelect method. Then the restriction is enforced to narrow the data selection to the current user’s business-id. Finally we have specified the join condition so that the custom table is joined in whenever the Contact table is queried upon.

We can see that we have marked this class as a SentryPluginQueryTableUpdater for the Contact table using attributes signaling NetServer that we have developed SentryPluginQueryTableUpdater for the Contact table. So whenever the Contact table is queried upon, this method will get fired.
