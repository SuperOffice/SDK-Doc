<properties date="2016-06-24"
SortOrder="50"
/>

Just to set the mood right, here is the complete configuration file for our demo page;




```xml
<page id="DevNetContactDialog" >

    <title binding="resources">DevNet Custom Contact Dialog</title>
    <data>
        <datahandlers>
            <datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"></datahandler>
            <datahandler id="ArchiveColumnConfigDataHandler" type="ArchiveColumnConfigDataHandler">
                <config>
                    <archivecolumninfos>
                        <archivecolumninfo guiname="DevNetContactPersonArchive" providername="person"/>
                    </archivecolumninfos>
                </config>
            </datahandler>
        </datahandlers>
    </data>
    <panels>
        <panel id="DevNetContactPanel" type="SoDialogPanel" soprotocol="devnetcontact" paneltype="Main" placeholderid="MainPlaceHolder" >
            <cards>
                <card id="DevNetContactCard" type="SoDialogCard" placeholderid="DialogCardPlaceHolder" cardtype="MainCard" >
                    <views>
                        <view id="ContactMainView" type="SoPlainView" soprotocol="devnetcontactmain" current="contact">
                            <caption>\[SR\_COMMON\_CONTACT\]</caption>
                            <tooltip></tooltip>
                            <controlgroups>
                                <controlgroup id="mainHeadergroup" type="SoControlGroup" position="absolute" top="5px" left="5px" right="20px" >
                                    <controls>
                                        <control id="ContactMainHeaderControl" type="ContactHeader">
                                            <datasource>ContactEntityDataHandler.ContactEntity</datasource>
                                            <config>
                                            </config>
                                        </control>
                                    </controls>
                                </controlgroup>
                            </controlgroups>
                            <triggers>
                                <trigger type="current">contact</trigger>
                            </triggers>
                        </view>



                        <view id="ContactPersonArchiveView" type="SoView" soprotocol="devnetcontactpersons" >
                            <caption>\[SR\_PL\_PERSONS\]</caption>
                            <tooltip></tooltip>
                            <controlgroups>
                                <controlgroup id="mainpersongroup" type="SoControlGroup" position="absolute" left="0px" right="0px" top="0px" bottom="0px">
                                    <controls>
                                        <control id="ContactPersonArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" >
                                            <config>
                                                <restrictions>
                                                    <restriction name="contactId" operator="=" binding="current">contact</restriction>
                                                </restrictions>
                                                <providername>person</providername>
                                                <archivecolumninfo-datasourcename>ArchiveColumnConfigDataHandler.ContactPersonArchive</archivecolumninfo-datasourcename>
                                                <showheader>true</showheader>
                                                <showtoolbar>true</showtoolbar>
                                                <defaultsort>rank</defaultsort>
                                                <current>person</current>
                                                <linkhint-prefix>personarchive:</linkhint-prefix>
                                                <dblclick-action>javascript:Dialog.open('Person','person\[dialog=stop\].main\[mode=edit;new=true\]?person\_id=0','ContactPersonArchiveArchiveControl.RefreshList()');</dblclick-action>
                                            </config>
                                        </control>
                                    </controls>
                                </controlgroup>
                            </controlgroups>
                            <triggers>
                                <trigger type="current">contact</trigger>
                                <trigger type="current">person</trigger>
                            </triggers>
                        </view>
                    </views>



                    <config>
                        <headerviews>
                            <viewref>ContactMainView</viewref>
                        </headerviews>
                        <tabbedviews top="40px" bottom="0px">
                            <viewref>ContactPersonArchiveView</viewref>
                        </tabbedviews>
                        <footerviews>
                        </footerviews>
                    </config>
                </card>
            </cards>
            <config>
            </config>
        </panel>
    </panels>

</page>
```

This might look intimidating at first glance, but there is logic to it all. And what’s more, you can replace pretty much everything with your own controls, data handlers, etc that extend the ones from the SIX framework.

Every page is defined with the **&lt;page&gt;** element. Every page needs a unique id, like e.g. **&lt;page id=”DevNetContactDialog”&gt;**. To view all existing pages already defined in CRM web, have a look at **SoApplicationConfiguration.config**; all pages are defined in the **&lt;pages&gt;** section. When examining the pages here, notice that the id of the pages do not match the ids defined in the corresponding page configuration files.

The way to let CRM web know about our new page is by defining it in the SoApplicationConfiguration.config file. Notice that all ids here need to be specified in lowercase.

```xml
<page id="devnetcontact" type="dialog" height="500px" width="650px" />
```

The id of the page is _“devnetcontact”_, and since the page is of type “dialog”, the id of the page itself will have to be like this (from the config file listed above):

```xml
<page id="DevNetContactDialog">
```

In the page configuration file you do not need to use lowercase for the id.

In addition, notice that the name of the config file itself also has its own naming convention, where every page needs to be named using the following syntax;

So**PageId**Page.config

The pageId in this case would be the one from the definition in SoApplicationConfiguration, so the name of our file will be SoDevNetContactPage.config.

A page in CRM.web consists of at least these three main elements, with their subelements;

```xml
<title />
<data>
    <datahandlers>
        <datahandler />
    </datahandlers>
</data>
<panels>
    <panel>
        <cards>
            <card>
                <views>
                    <view>
                        <controlgroups>
                            <controlgroup>
                                <controls>
                                    <control />
                                    </controls>
                            </controlgroup>
                        </controlgroups>
                    </view>
                </views>
            </card>
        </cards>
    </panel>
</panels>
```

The &lt;title&gt; element is a given – it specifies the title of your page. You can type in a title directly or use the localized text constants like e.g. \[SR\_COMMON\_CONTACT\].

The &lt;data&gt; element contains a &lt;datahandlers&gt; element, which is simply a placeholder for one or more &lt;datahandler&gt; object elements, defining the datahandlers used by the controls used on the page.

The &lt;panels&gt; element is also just a placeholder for one or more &lt;panel&gt; object elements, which in turn contains a &lt;cards&gt; placeholder for one or more &lt;card&gt; object elements. The &lt;card&gt; element in turn contains a &lt;views&gt; placeholder for one or more &lt;view&gt; object elements, where we will be placing the controls we’ll be using.

Every element I referred to as object elements; DataHandler, Panel, Card and View, are all objects that you will find in the CRM web SDK, and all of them are declared with at least an id and a type. The id needs to be unique within the current page, and the type declares e.g. the type of DataHandler to use. You can of course extend all of the standard objects and use your own versions if you need to make changes to any of these, like e.g. creating your own DataHandler for the Sales page to extend what happens when you click the Save-button. We will be looking into creating our own DataHandlers later in this series.