<properties date="2016-06-24"
SortOrder="50"
/>

Just to set the mood right, here is the complete configuration file for our demo page;



 

&lt;page id="DevNetContactDialog" &gt;

    &lt;title binding="resources"&gt;DevNet Custom Contact Dialog&lt;/title&gt;
    &lt;data&gt;
        &lt;datahandlers&gt;
            &lt;datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"&gt;&lt;/datahandler&gt;
            &lt;datahandler id="ArchiveColumnConfigDataHandler" type="ArchiveColumnConfigDataHandler"&gt;
                &lt;config&gt;
                    &lt;archivecolumninfos&gt;
                        &lt;archivecolumninfo guiname="DevNetContactPersonArchive" providername="person"/&gt;
                    &lt;/archivecolumninfos&gt;
                &lt;/config&gt;
            &lt;/datahandler&gt;
        &lt;/datahandlers&gt;
    &lt;/data&gt;
    &lt;panels&gt;
        &lt;panel id="DevNetContactPanel" type="SoDialogPanel" soprotocol="devnetcontact" paneltype="Main" placeholderid="MainPlaceHolder" &gt;
            &lt;cards&gt;
                &lt;card id="DevNetContactCard" type="SoDialogCard" placeholderid="DialogCardPlaceHolder" cardtype="MainCard" &gt;
                    &lt;views&gt;
                        &lt;view id="ContactMainView" type="SoPlainView" soprotocol="devnetcontactmain" current="contact"&gt;
                            &lt;caption&gt;\[SR\_COMMON\_CONTACT\]&lt;/caption&gt;
                            &lt;tooltip&gt;&lt;/tooltip&gt;
                            &lt;controlgroups&gt;
                                &lt;controlgroup id="mainHeadergroup" type="SoControlGroup" position="absolute" top="5px" left="5px" right="20px" &gt;
                                    &lt;controls&gt;
                                        &lt;control id="ContactMainHeaderControl" type="ContactHeader"&gt;
                                            &lt;datasource&gt;ContactEntityDataHandler.ContactEntity&lt;/datasource&gt;
                                            &lt;config&gt;
                                            &lt;/config&gt;
                                        &lt;/control&gt;
                                    &lt;/controls&gt;
                                &lt;/controlgroup&gt;
                            &lt;/controlgroups&gt;
                            &lt;triggers&gt;
                                &lt;trigger type="current"&gt;contact&lt;/trigger&gt;
                            &lt;/triggers&gt;
                        &lt;/view&gt;

 

                        &lt;view id="ContactPersonArchiveView" type="SoView" soprotocol="devnetcontactpersons" &gt;
                            &lt;caption&gt;\[SR\_PL\_PERSONS\]&lt;/caption&gt;
                            &lt;tooltip&gt;&lt;/tooltip&gt;
                            &lt;controlgroups&gt;
                                &lt;controlgroup id="mainpersongroup" type="SoControlGroup" position="absolute" left="0px" right="0px" top="0px" bottom="0px"&gt;
                                    &lt;controls&gt;
                                        &lt;control id="ContactPersonArchive" type="SoArchiveControl" width="100%" top="0px" left="0px" height="100%" position="absolute" &gt;
                                            &lt;config&gt;
                                                &lt;restrictions&gt;
                                                    &lt;restriction name="contactId" operator="=" binding="current"&gt;contact&lt;/restriction&gt;
                                                &lt;/restrictions&gt;
                                                &lt;providername&gt;person&lt;/providername&gt;
                                                &lt;archivecolumninfo-datasourcename&gt;ArchiveColumnConfigDataHandler.ContactPersonArchive&lt;/archivecolumninfo-datasourcename&gt;
                                                &lt;showheader&gt;true&lt;/showheader&gt;
                                                &lt;showtoolbar&gt;true&lt;/showtoolbar&gt;
                                                &lt;defaultsort&gt;rank&lt;/defaultsort&gt;
                                                &lt;current&gt;person&lt;/current&gt;
                                                &lt;linkhint-prefix&gt;personarchive:&lt;/linkhint-prefix&gt;
                                                &lt;dblclick-action&gt;javascript:Dialog.open('Person','person\[dialog=stop\].main\[mode=edit;new=true\]?person\_id=0','ContactPersonArchiveArchiveControl.RefreshList()');&lt;/dblclick-action&gt;
                                            &lt;/config&gt;
                                        &lt;/control&gt;
                                    &lt;/controls&gt;
                                &lt;/controlgroup&gt;
                            &lt;/controlgroups&gt;
                            &lt;triggers&gt;
                                &lt;trigger type="current"&gt;contact&lt;/trigger&gt;
                                &lt;trigger type="current"&gt;person&lt;/trigger&gt;
                            &lt;/triggers&gt;
                        &lt;/view&gt;
                    &lt;/views&gt;

 

                    &lt;config&gt;
                        &lt;headerviews&gt;
                            &lt;viewref&gt;ContactMainView&lt;/viewref&gt;
                        &lt;/headerviews&gt;
                        &lt;tabbedviews top="40px" bottom="0px"&gt;
                            &lt;viewref&gt;ContactPersonArchiveView&lt;/viewref&gt;
                        &lt;/tabbedviews&gt;
                        &lt;footerviews&gt;
                        &lt;/footerviews&gt;
                    &lt;/config&gt;
                &lt;/card&gt;
            &lt;/cards&gt;
            &lt;config&gt;
            &lt;/config&gt;
        &lt;/panel&gt;
    &lt;/panels&gt;

&lt;/page&gt;

 

This might look intimidating at first glance, but there is logic to it all. And what’s more, you can replace pretty much everything with your own controls, data handlers, etc that extend the ones from the SIX framework.



 

Every page is defined with the &lt;page&gt; element. Every page needs a unique id, like e.g. &lt;page id=”DevNetContactDialog”&gt;. To view all existing pages already defined in CRM.web, have a look at **SoApplicationConfiguration.config**; all pages are defined in the &lt;pages&gt; section. When examining the pages here, notice that the id of the pages do not match the ids defined in the corresponding page configuration files.



 

The way to let CRM.web know about our new page is by defining it in the SoApplicationConfiguration.config file. Notice that all ids here need to be specified in lowercase.



 

&lt;page id="devnetcontact" type="dialog" height="500px" width="650px" /&gt;



 

The id of the page is “devnetcontact”, and since the page is of type “dialog”, the id of the page itself will have to be like this (from the config file listed above):



 

&lt;page id="DevNetContactDialog" &gt;



 

In the page configuration file you do not need to use lowercase for the id.



 

In addition, notice that the name of the config file itself also has its own naming convention, where every page needs to be named using the following syntax;



 

So&lt;pageId&gt;Page.config



 

The pageId in this case would be the one from the definition in SoApplicationConfiguration, so the name of our file will be SoDevNetContactPage.config.



 

A page in CRM.web consists of at least these three main elements, with their subelements;



 

&lt;title /&gt;

&lt;data&gt;

       &lt;datahandlers&gt;
             &lt;datahandler /&gt;
       &lt;/datahandlers&gt;

&lt;/data&gt;

&lt;panels&gt;

       &lt;panel&gt;
             &lt;cards&gt;
                    &lt;card&gt;
                           &lt;views&gt;
                                  &lt;view&gt;
                                        &lt;controlgroups&gt;
                                               &lt;controlgroup&gt;
                                                      &lt;controls&gt;
                                                            &lt;control /&gt;
                                                      &lt;/controls&gt;
                                               &lt;/controlgroup&gt;
                                        &lt;/controlgroups&gt;
                                  &lt;/view&gt;
                           &lt;/views&gt;
                    &lt;/card&gt;
             &lt;/cards&gt;
       &lt;/panel&gt;

&lt;/panels&gt;



 

The &lt;title&gt; element is a given – it specifies the title of your page. You can type in a title directly or use the localized text constants like e.g. \[SR\_COMMON\_CONTACT\].



 

The &lt;data&gt; element contains a &lt;datahandlers&gt; element, which is simply a placeholder for one or more &lt;datahandler&gt; object elements, defining the datahandlers used by the controls used on the page.



 

The &lt;panels&gt; element is also just a placeholder for one or more &lt;panel&gt; object elements, which in turn contains a &lt;cards&gt; placeholder for one or more &lt;card&gt; object elements. The &lt;card&gt; element in turn contains a &lt;views&gt; placeholder for one or more &lt;view&gt; object elements, where we will be placing the controls we’ll be using.



 

Every element I referred to as object elements; DataHandler, Panel, Card and View, are all objects that you will find in the CRM.web SDK, and all of them are declared with at least an id and a type. The id needs to be unique within the current page, and the type declares e.g. the type of DataHandler to use. You can of course extend all of the standard objects and use your own versions if you need to make changes to any of these, like e.g. creating your own DataHandler for the Sales page to extend what happens when you click the Save-button. We will be looking into creating our own DataHandlers later in this series.


