<properties date="2016-06-24"
SortOrder="51"
/>

In our demo page we have two &lt;view&gt; elements defined, which is actually where all controls will be placed;

```xml
 <view id="ContactMainView" type="SoPlainView" soprotocol="devnetcontactmain" current="contact">
   . . .
 </view>
 <view id="ContactPersonArchiveView" type="SoView" soprotocol="devnetcontactpersons" >
   . . .
 </view>
```



The first view is defined as type SoPlainView, which has no borders, whereas the second one is of type SoView, which does have borders, and is ideal to use inside a tab control.

The View object has the following properties (and more):

* &lt;caption&gt; – the caption used on the tab (if the view is inside a tab control)
* &lt;tooltip&gt; – text showing when placing your mouse (hovering) over the caption
* &lt;controlgroups&gt; – placeholder for one or more &lt;controlgroup&gt; object elements
* &lt;controlgroup&gt; - typically of type SoControlGroup
* &lt;controls&gt; - placeholder for one or more &lt;control&gt; object elements
* &lt;control&gt; - here’s an actual user control!

Both &lt;caption&gt; and &lt;tooltip&gt; are optional, and are actually only useful if your view resides within a tab control.

We are using two different types of controls in our demo page;

* One of type ContactHeader, which is the standard user control used in the Contact card for showing the name and flag of the current company.
* One of type SoArchiveControl, which is a more general control using the new ArchiveProviders

Here’s the definition of the ContactHeader control;

```xml
<control id="ContactMainHeaderControl" type="ContactHeader">
     <datasource>ContactEntityDataHandler.ContactEntity</datasource>

     <config>
     </config>
</control>
```

The only thing you need to specify for using this control is the datasource, which is one of the datahandlers that are defined in the &lt;page&gt;&lt;data&gt;&lt;datahandlers&gt; section;

```xml
<datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"></datahandler>
```

You can think of it as declaring a variable of type ContactEntityDataHandler that you call ContactEntityDataHandler. So when defining the &lt;datasource&gt; for the control we can use the id of the datahandler (or the name of the variable if you will), to reference methods and properties within the instance of that object. In this case we have access to the ContactEntity, which is actually an instance of the ContactEntity from the service layer, and it will contain all properties as expected from an entity. Actually the ContactHeader control only uses a couple of these properties, you can create your own control for showing what you like.

Let’s move on to the more dynamic ArchiveControl;

```xml
<control id="ContactPersonArchive" type="SoArchiveControl"
            width="100%" top="0px" left="0px" height="100%" position="absolute" >
    <config>
        <restrictions>
            <restriction name="contactId" operator="="
                   binding="current">contact</restriction>
        </restrictions>
        <providername>person</providername>
        <archivecolumninfo-datasourcename>
            ArchiveColumnConfigDataHandler.DevNetContactPersonArchive
        </archivecolumninfo-datasourcename>
        <showheader>true</showheader>
        <showtoolbar>true</showtoolbar>
        <defaultsort>rank</defaultsort>
        <current>person</current>
        <linkhint-prefix>personarchive:</linkhint-prefix>
        <dblclick-action>
            javascript:Dialog.open(
               'Person',
               'person[dialog=stop].main[mode=edit;new=true]?person_id=0',
               'ContactPersonArchiveArchiveControl.RefreshList()');
        </dblclick-action>
    </config>
</control>
```

The things to note about this definition are:

* The &lt;restriction&gt; definition tells the control to add a restriction saying “contactId = current contactId” when retrieving data. The restriction defined here is used to create one or more ArchiveRestrictionInfo instances that establish a criteria. This effectively is similar to a WHERE clause in an SQL statement.

* The &lt;providername&gt; specifies what ArchiveProvider to use. We are using the standard one for Person, but you could easily create your own.

* &lt;archivecolumninfo-datasourcename&gt; defines what set of columns to use (more about that below)

The other settings are pretty self-explanatory.

An SoArchiveControl object also needs a datahandler;

```xml
<datahandler id="ArchiveColumnConfigDataHandler" type="ArchiveColumnConfigDataHandler">
    <config>
        <archivecolumninfos>
            <archivecolumninfo guiname="DevNetContactPersonArchive" providername="person"/>
        </archivecolumninfos>
    </config>
</datahandler>
```

This datahandler is different in the way that it has its own &lt;config&gt; section for specifying which columns to use in the &lt;archivecolumninfo&gt; element.
