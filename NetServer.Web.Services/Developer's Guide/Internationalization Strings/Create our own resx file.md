<properties date="2016-08-04"
SortOrder="5"
/>

Since we are unable to modify the resx files that have been used by the SIX.web it is possible for us to create our own resx file and by using the ResXmlFileProvider we can call our own strings.

In order for us to use our resx file we would need to make a minor modification as shown below to the config file, i.e. the ResXmlFileProvider should be added.

```
<Client>
  <Application name="WebClient" instance="Web" />
  <Globalization>
    <ResourceProviders>
      <!-- Other providers used by the client -->
      <!-- ResXmlFileProvider which is used to call string that are available through resx files-->
      <add name="ResXmlFileProvider" rank="25" assemblyname="SuperOffice.DCF" objecttype="SuperOffice.Globalization.ResXmlFileProvider" params="NewResourceStrings" />
    </ResourceProviders>
  </Globalization>
</Client>
```

 

In the ResXmlFileProvider tag params refers to the name of the resx file that contains are strings.

Next step is to create a resx file containing our own strings. Here we have created a resx file for the default language.

An important point to remember!

SIX.Web application contains resx files for each language based on the default resx file. For example if the default resx file is ResourceStrings.resx the translation of this in French would be stored as ResourceStrings.fr.resx, “fr” is the abbreviation of the language.

In the Visuals Studio development environment we can create a new resx file and add our custom string.

<img src="../internationalization%20strings_files/image001.jpg" width="605" height="424" />

The inserted string can be seen in XML as below.

```
<?xml version="1.0" encoding="utf-8"?>
<root> 
  <xsd:schema id="root" xmlns="" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata"> <!--Some other Code--> </xsd:schema>
  <resheader name="resmimetype"> <!--Some other Code--></resheader>
  <resheader name="version"> <!--Some other Code--></resheader>
  <resheader name="reader"> <!--Some other Code--></resheader>
  <resheader name="writer"> <!--Some other Code--></resheader>
  <!--Our custom String-->
  <data name="customString" xml:space="preserve">
    <value>Navigator Panel</value>
  </data>
</root>
```

 

The file above is saved as NewResourceStrings.resx – the default resources which are used if no translation can be found.

Note that the file name “NewResourceStrings” is used in the web.config file as a parameter to the ResXmlFileProvider component.

The NewResourceStrings.no.resx file for the Norwegian translation looks like this:

```
<?xml version="1.0" encoding="utf-8"?>
<root> 
  <xsd:schema id="root" xmlns="" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata"> <!--Some other Code--> </xsd:schema>
  <resheader name="resmimetype"> <!--Some other Code--></resheader>
  <resheader name="version"> <!--Some other Code--></resheader>
  <resheader name="reader"> <!--Some other Code--></resheader>
  <resheader name="writer"> <!--Some other Code--></resheader>
  <!--Our custom String-->
  <data name="customString" xml:space="preserve">
    <value>Navigasjonspanel</value>
  </data>
</root>
```

 

When we need to use our custom string in the SIX.web page config we need to call it by the “name”,  i.e. “customString” as shown in the below example.

```
<control id="myLabel" type="SoLabel" context-style="Heading" width="100%">>
  <caption>[customString]</caption>
</control>
```

 

The above code segment has been included inside the SoNavigatorPanels.config file’s controls tag. Once the file has been saved our custom String can be seen.

<img src="../internationalization%20strings_files/image002.jpg" width="608" height="495" />

------------------------------------------------------------------------

**See Also:** ResXmlFileProvider
