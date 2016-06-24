<properties date="2016-06-24"
SortOrder="8"
/>

The DataCarrier
---------------

DataCarriers reside in the DataCarriers property of a datahandler. The DataCarriers property is simply a collection of non-typed objects. The collection is generally used as the storage place for all data that populates the controls on a page. It may also contain additional data needed during the lifetime of a Model.

It’s quite normal for the type of a DataCarrier item be a complex type, such as a PersonEntity or ContactEntity, and used as a data source for controls displayed in a rendered view.

So how does a DataCarrier become the data source for a control? It all starts in the SOML of a page. **Listing Five** contains the declaration for each datahandler in the contact page. Each datahandler has their own collection of carriers that provide information to the various controls defined in the contact page.

&lt;page id="ContactPage"&gt;

  &lt;data&gt;

    &lt;datahandlers&gt;
      &lt;datahandler id="NavigatorDataHandler" type="NavigatorDataHandler"&gt;&lt;/datahandler&gt;
      &lt;datahandler id="ContactEntityDataHandler" type="ContactEntityDataHandler"&gt;&lt;/datahandler&gt;
      &lt;datahandler id="PersonEntityDataHandler" type="PersonEntityDataHandler"&gt;&lt;/datahandler&gt;
      ...

  &lt;/data&gt;

  &lt;panels&gt;

    &lt;panel reference="Menu" /&gt;
    &lt;panel reference="ButtonBar" /&gt;
    &lt;panel reference="Navigator" /&gt;
    &lt;panel reference="Contact" /&gt;

  &lt;/panels&gt;

&lt;/page&gt; 

Drilling down into the page configuration, eventually getting to the MainView View element, **Listing Six** shows the ContactMainHeaderControl declaration. ContactMainHeaderConrtol is a custom control that must map to a mapping name defined in the SoObjectMapping.config file.

What is important here is the datasource element. It defines that data source for this control. It specifies that the data source location is in the ContactEntityDataHandler.DataCarriers collection. The key used to access the DataCarrier in the collection is "ContactEntity". You can conceptually view that carrier value is accessed like a collection indexer, i.e. DataCarriers\[“ContactEntity”\] in C\#.

**Listing Six**: The contact page configuration, extracted from SoMainviewView.config. 

&lt;view id="MainView" type="SoView" soprotocol="main" current="contact"&gt;

  &lt;caption binding="resources"&gt;\[SR\_COMMON\_CONTACT\]&lt;/caption&gt;

  &lt;tooltip&gt;The main one&lt;/tooltip&gt;

  &lt;controlgroups&gt;

 

    &lt;controlgroup id="mainHeadergroup" type="SoControlGroup" position="absolute"
                  top="5px" left="5px" right="20px" &gt;
      &lt;controls&gt;
        &lt;control id="ContactMainHeaderControl" type="ContactHeader"&gt;
          **&lt;datasource&gt;ContactEntityDataHandler.ContactEntity&lt;/datasource&gt;**
          &lt;config&gt;
          &lt;/config&gt;
        &lt;/control&gt;
      &lt;/controls&gt;
    &lt;/controlgroup&gt;
   ...

  &lt;/controlgroups&gt;

  ...

&lt;/view&gt;

 

 
