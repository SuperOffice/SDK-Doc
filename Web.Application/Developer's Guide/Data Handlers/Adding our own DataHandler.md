<properties date="2016-06-24"
SortOrder="7"
/>

 

The DataHandler that we are going to add is called “MyDataHandler” which is used to display the current date and time on the Company’s Interests view. In order for us to create are own handler we need to create a class library project. When creating the class library project it is necessary to remember that we are required to add the necessary references that we plan to use. The following code is an example of a custom data DataHandler.

```
using System;
using System.Collections.Generic;
using System.Text;
 
using SuperOffice.CRM.Web.Data;
 
namespace MyTestDataHandler
{
    ///<summary>
    ///The ContactEntityDataHandler handles the ContactEntity
    ///</summary>
    ///
    public class MyDataHandler : DataHandlerBase
    {
        #region IDataHandler Members
 
        /// <summary>
        /// Initializing the datahandler
        /// </summary>
        /// <param name="config">Datahandler configuration</param>
        /// <param name="id">Datahandler id</param>
        public override void Initialize(System.Xml.XmlNode config, string id)
        {
            base.Initialize(config, id);
            //Adds the specified key and value to the Dictionary
            _dataCarriers.Add("mySysDate", DateTime.Now);           
        }
        #endregion
    }  
}
```

 

Here we have created a custom DataHandler by using the DataHandlerBase class which is located in the SuperOffice.CRM.Web.Data namespace. Since we are inheriting from the DataHandlerBase class we can override all its virtual methods, i.e. new(), new(String carrierId), Initialize(), Clear(), Delete(), Load() and Save() methods and by using these methods we could create our own custom data handler. It is not necessary to override all of these methods. What we have done in the code above is that we have overridden the Initialize() method by calling the base class’s initialize() method and then adding a data carrier to it. The carrier consists of a key which is of type string that is used to identify the carrier and a value of type object.

Once this class project has been compiled we are required to add the dll i.e. MyDataHandler.dll to the bin directory of the CRM.web. The default path of the bin directory is “C:\\Program Files\\SuperOffice\\SuperOffice CRM.web\\SuperOffice\\bin”.

The next step is to add the created dll to the “SoObjectMapping.config” file. This can be done by adding the following code piece inside the &lt;objects&gt; &lt;/objects&gt; tags.

```
<object type="IDataHandler" mappingname="MyDataHandler" assemblyname="MyDataHandler" objectname="MyTestDataHandler.MyDataHandler"></object>
```

 

In the above code segment the type tells us the type of the object and from the mapping name it tells us in the other config files the name that this object is given. The assemblyname tells us which assembly this particular object resides in and from the object name it tells us the actual name of the object inside the given assembly.

Now our assembly can be used in any of the config files.

We will use our created assembly to show the system date and time in the Company’s Interests view.

Since we are using our created datahandler in the SoContactPanel.config file it should be first identified in the SoContactPage.config file under the &lt;datahandlers&gt; &lt;/datahandlers&gt; tag as follows.

```
<datahandler id="MyDiaryDataHandler" type="MyDiaryDataHandler"></datahandler>
```

 

Next we move on to the SoContactPanel.config file’s Intrests view and add the following code segment that retrieves the system date and time using our data handler.

```
<controlgroup id="interestHeadergroup2" type="SoControlGroup" position="absolute" top="100px" left="15px" right="20px">
  <controls>
    <control id="newTextBox" type="SoTextBox" context-style="Heading" width="100%">
      <datasource>MyDataHandler.mySysDate</datasource>
    </control>
  </controls>
</controlgroup>
```

 

The above tag can be placed in side the &lt;controlgroups&gt; &lt;/controlgroups&gt; tags.

Interests View before system date and time have been added.

<img src="../Data%20Handlers_files/image002.jpg" width="605" height="424" />

Interests View after system date and time have been added.

<img src="../Data%20Handlers_files/image003.jpg" width="604" height="458" />

 

 

See Also: [PageBuilder config files](../PageBuilder%20config%20files/PageBuilder%20config%20files.md)
