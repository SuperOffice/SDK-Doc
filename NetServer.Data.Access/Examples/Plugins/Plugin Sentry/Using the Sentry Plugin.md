<properties date="2016-05-11"
SortOrder="9"
/>

 

For us to use the Plugin that we have developed first we have to tell NetServer that we have a Plugin that will add to the existing functionality. We have to do this through the config file of our application. Below is the section that we have to modify in the config file.

```
<Factory>
      <DynamicLoad>
        <add key="SentryPlugin" value="C:\\TestApps\\Sentry
Plugin\\Sentry
        Plugin\\bin\\Debug\\Sentry Plugin.dll" />
      </DynamicLoad>
</Factory>
```

 

By this config section we have told NetServer that there is Plugin that exists and where the DLL is located. When NetServer loads its own DLLs our Plugin DLL will also be loaded.

The sentry rules will automatically be applied to NetServer, and passed along to the client. SIX.web will respond to the changed tablerights by disabling the EDIT button.

Below is an example that uses this Plugin.

```
using SuperOffice.CRM.Security;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
int contactId;
 
using (SoSession mySession = SoSession.Authenticate("SAL0",""))
{
//Create a New Contact entity
      Contact contactEntity = Contact.CreateNew();
      //set default values
      contactEntity.SetDefaults();
      //Give a name
      contactEntity.Name = "Test ContactSentryPlugin";
      //Give a department name that ends with "_"
      contactEntity.Department = "enable plugin_";
      //Set a text for the info property
      contactEntity.Info.Text = "My own data";
      //retrive the Table right object for the contact
      TableRight tableRight =
     
contactEntity.Row.Sentries.TableRight(contactEntity.TableInfo);
      //check to see if we have the update rights
      bool hasUpdate = tableRight.HasUpdate;
      // returns true, since we are owner
 
      //save the contact
      contactEntity.Save();
      //retrive the id of the saved contact
      contactId = contactEntity.ContactId;
}
//lets login with a different user
using (SoSession mySession = SoSession.Authenticate("adm0", ""))
{
Contact contactEntity = Contact.GetFromIdxContactId(contactId);
      TableRight tableRight =
contactEntity.Row.Sentries.TableRight(contactEntity.TableInfo);
      //lets check for the rights a different user
      bool hasUpdate = tableRight.HasUpdate;
      // returns false, since we are not owner, and ends in
underscore
}
//lets login with the owner of the record again
using (SoSession mySession = SoSession.Authenticate("sal0", ""))
{
Contact contactEntity = Contact.GetFromIdxContactId(contactId);
      TableRight tableRight =
contactEntity.Row.Sentries.TableRight(contactEntity.TableInfo);
      //lets check for the rights of the owner
      bool hasUpdate = tableRight.HasUpdate;
      // returns true, since we are owner
}
```

 

Here we can see that we have not done anything special to turn on the sentry plugin. In the above example we can see that we have created a contact entity and filled some basic properties. Notice that we have given a department name that end with “\_” so that our Plugin will be activated.

Here we have logged in with a particular user and as per NetServer standards the creating user will be the owner of the record. Then we have retrieved TableRight object for the contact entity, this is where our Plugin will be fired and our logic goes into action. If we can remember in our Plugin we do not modify the rights if the logged in user is the owner of the record so now our logic will not be executed. The normal NetServer defined sentry rules will apply.

Now if we check for the rights of the table it should be HasUpdate true. Below is a screen shot of the watch window of the VS IDE for the variables hasUpdate and info.

<img src="../Plugin%20Sentry_files/image001.jpg" width="604" height="47" />

As we can see hasUpdate is true.

Now let’s login with a different user and retrieve the earlier created contact entity. When we check the update rights we get picture like this:

<img src="../Plugin%20Sentry_files/image002.jpg" width="604" height="43" />

Here we can see that hasUpdate is false and. This is because our logic has gone into action and it has modified the rights of the table.

What happens behind the scene is: when we retrieve the saved contact entity, the NetServer sentry mechanism will get fired. The sentry mechanism will execute our plugins. The first method that will get executed in our Plugin will be ModifySelect, since when we retrieve a contact entity NetServer will start executing its own sentry systems. It will gather the columns that are needed for sentry and since we have said that we want to modify and add the department column to its sentry column list it will do so. Then it will jump on to the ModifyTableRights method and execute its logic. So now the logged in user is not the owner of the record and the department name ends with “\_” it will modify the rights and give us only read rights.

Now to verify things lets login with the owner of the record again in this case user “SAL0”. The picture will change to this.

<img src="../Plugin%20Sentry_files/image003.jpg" width="604" height="45" />

So now we can see that our logic is working and we can add our own sentry mechanism on top of what NetServer already has.
