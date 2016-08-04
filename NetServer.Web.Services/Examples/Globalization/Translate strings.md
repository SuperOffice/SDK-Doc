<properties date="2016-08-04"
SortOrder="11"
/>

Translate strings from resource id to translated value using the DCF globalization utility.
The Resource Manager handles reading the resource strings from various sources. The sources are specified in the config file:

```
  <SuperOffice>
    ...
    <Client>
      <Application name="WebClient" instance="Web" />
      <Globalization>
        <ResourceProviders>
          <add name="DllFile" rank="20" assemblyname="SuperOffice.DCF" objecttype="SuperOffice.Globalization.ResourceDllProvider" params="SuperOffice.Web.Globalization.ResourceStrings;SuperOffice.Web.Globalization" />
          <add name="FieldLabelFromDB" rank="10" assemblyname="SuperOffice.DCF" objecttype="SuperOffice.Globalization.FieldLabelProvider" />
          <add name="ResxFile" rank="30" assemblyname="SuperOffice.DCF" objecttype="SuperOffice.Globalization.ResXmlFileProvider" params=".\TestXmlResources" />
        </ResourceProviders>
      </Globalization>
    </Client>
  </SuperOffice>
```

This specifies that the ResourceManager should first load the FieldLabel provider - which reads from the database.
Next, the resource DLL "SuperOffice.Web.Globalization" is loaded using the Resource DLL provider, and the strings in the bundle "SuperOffice.Web.Globalization.ResourceStrings" are read in.
Finally, the xml text file "TestXmlResources.resx" is loaded using the ResXml file provider.
Resx file
---------

```
  <?xml version="1.0" encoding="utf-8"?>
  <root>
  <!--     Microsoft ResX Schema -->
    <data name="SR_FOOBAR">
      <value>This is funked up beyond all recognition.</value>
    </data>
  </root>
```

Assuming the resource file contains a string id "SR\_FOOBAR", then the program can get the translated value using:
```
   string resid = "SR_FOOBAR";
   string res_out = SuperOffice.Globalization.ResourceManager.GetString(resid);
   Console.Out.WriteLine("{0}={1}", resid, res_out);
```

Note that the resource manager also handles resource names that are decorated with square brackets for you. This is the same as the above:
```
   string resid = "[SR_FOOBAR]";
   string res_out = SuperOffice.Globalization.ResourceManager.GetString(resid);
   Console.Out.WriteLine("{0}={1}", resid, res_out);
```

------------------------------------------------------------------------

**See Also:** [String resource reference](../../Reference/Reference.md)
