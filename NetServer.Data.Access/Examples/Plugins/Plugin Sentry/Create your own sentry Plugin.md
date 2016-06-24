<properties date="2016-05-11"
SortOrder="7"
/>

In NetServer there are many built-in sentry mechanisms like contact sentry, person sentry, project sentry, etc. Our intention in this section is to develop our own sentry mechanisms on top of what already is in NetServer.

To make this easy to follow we are going to make a silly example: we will make read-only companies not owned by the current user, whose department name ends in an underscore.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p> Name, Department </p></td>
<td><p> Owner </p></td>
<td><p> Result </p></td>
</tr>
<tr class="even">
<td><p> <strong>SuperOffice, Research</strong> </p></td>
<td><p>You</p></td>
<td><p>No change</p></td>
</tr>
<tr class="odd">
<td><p> <strong>SuperOffice, Research_</strong> </p></td>
<td><p>You</p></td>
<td><p>Read-only</p></td>
</tr>
<tr class="even">
<td><p> <strong>SuperOffice, HQ</strong> </p></td>
<td><p>Me</p></td>
<td><p>No change</p></td>
</tr>
<tr class="odd">
<td><p> <strong>SuperOffice, HQ_</strong> </p></td>
<td><p>Me</p></td>
<td><p>No change</p></td>
</tr>
</tbody>
</table>

 

 

```
using System;
using System.Collections.Generic;
using System.Text;
 
using SuperOffice.CRM.Security;
using SuperOffice.Data.SQL;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Entities;
 
namespace Sentry_Plugin
{
    [SentryPlugin("contact")] 
    public class ContactSentryPlugin : ISentryPlugin
    {
        /// <summary>
        /// Storing reference to the sentry the plugin works on
bahalf of.
        /// </summary>
        SuperOffice.CRM.Security.Sentry _sentry = null;
 
        /// <summary>
        /// Default constructor, we do nothing here.
        /// </summary>
        public ContactSentryPlugin() { }
 
        #region ISentryPlugin Members
 
        /// <summary>
        /// here we intialize sentry type we want. the parameter
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
        /// <param name="rights">Rights object to
modify</param>
        /// <remarks>Hide the post-it if <see
cref="ModifyTableRights"/>
        /// made everything read only because of the trailing '_'.
</remarks>
        public void ModifyFieldRights(FieldRights rights)
        {
            // no changes in field rights
        }
 
        /// <summary>
        /// Modify table rights.
        /// </summary>
        /// <param name="rights">Rights object to
modify.</param>
        /// <remarks>Set everything to read only if
department ends with '_' unless the current user is the
owner.</remarks>
        public void ModifyTableRights(TableRights rights)
        {
            //get the value of the Dept
            string department =
GetFieldValue(QueryInfo.MainTable.Department) as string;
            
            //check to see dept value not empty, ans the value ends
with a
            //"_" and the logged in user is not the owner.
            if (!string.IsNullOrEmpty(department) 
                && department.Trim().EndsWith("_") 
                && _sentry.GetRecordOwnershipIndex() !=
EOwnershipIndex.Owner)
            {
                //modify the rights
                foreach (TableInfo ti in rights.Keys.ToArray())
                    rights[ti] = rights[ti] &
RightsFactory.Get(ETableRight.R, "make all read only since dept
value ends with '_'");
            }
        }
 
        #endregion
 
        #region helpers
        /// <summary>
        /// Casting <see cref="sentry.SentryQueryInfo"/>to
<see cref="ContactSentryQueryInfo"/>.
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
contact.
    ///</summary>
    ///<remarks>The field Department is forced to be in
queries so rights can be calculated.</remarks>
    [SentryPluginQueryTableUpdater("contact")]
    public class SentryPluginQueryTableUpdaterContact :
ISentryPluginQueryTableUpdater
    {
        #region ISentryPluginQueryTableUpdater Members
 
        public void ModifySelect(Select sql, TableInfo tableInfo)
        {
            //we force dept field to return fields
           
sql.ReturnFields.Add(((ContactTableInfo)tableInfo).Department);
        }
        #endregion
    }
}
```

The above example is bit long and complex but if we analyze it carefully we can understand what it is trying to do. First we make our whole class a sentry plugin for the contact sentry. This class will act as a Plugin and enhance the standard NetServer contact sentry mechanism. This example aims to modify the contact sentry right if the department name of a contact ends with “\_”. For example if the department name of a given contact looks like this “XYZ Department\_” then we change the sentry rights.

The most important method is the ModifyTableRight method. NetServer will pass in a TableRights object as the parameter. This object is the rights object that we intend modify according to the rules that we have defined. In this method first we retrieve department name using the GetFieldValue helper method that we have developed.  The GetFieldValue method will use the QueryInfo method that we have developed to cast the sentry type that we have set in the Init method of the class to a ContactSentryQueryInfo type. Using the ContactSentryQueryInfo we can obtain any field info of the MainTable that exists within the ContactSentryQueryInfo. Here we have retrieved the department field info object and pass it to the GetFieldValue method. So this method will return us the field value. Now we have the value of the department field.

Then we will check whether the field is empty, the value ends with a “\_” and the logged in user is not the owner of the record. The owner of the record will anyway have full rights to the record, changing that will not be logical. If these conditions are satisfied we go ahead and modify the rights of the rights object that we received as a parameter. Here we make them all to read only. Now we have developed a sentry mechanism that will be triggered only if the department value ends with “\_”.

We can notice that we have developed another class called SentryPluginQueryTableUpdaterContact which implements the IsentryPluginQueryTableUpdater interface. The only method that we have to implement in this interface is the ModifySelect method. We can notice that we have marked this class as a SentryPluginQueryTableUpdater for the contact object using attributes. Now NetServer knows that we have developed SentryPluginQueryTableUpdater for the contact entity. So the moment that we try to retrieve a contact entity this method will get fired and our extra field will be added to the sentry SQL. We have to cast the TableInfo object that we receive to the TableInfo type we want in this case it is ContactTableInfo. Then we can add our extra field to sentry SQL. In fact out of all the methods in the above class this is the method that will be fired first. We can understand this well when we get into the explanation of the calling program of this Plugin.

The next important method is ModifyFieldRights method which accepts a FieldRights object as the parameter. Here what we can restrict access to the individual fields of the contact object. In this case we don’t do anything special, but the same principle applies as for the TableRights. You modify the collection passed in as a parameter with new values for the fields you want to restrict.

The rest of the methods that appear in the above class are helper methods that will be used in the above explained methods.

Now that we have understood our Plugin lets look at how we can use this.
