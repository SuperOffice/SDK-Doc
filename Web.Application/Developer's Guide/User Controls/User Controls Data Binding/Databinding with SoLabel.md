<properties date="2016-06-24"
SortOrder="13"
/>

HTML code segment to illustrate the SoLabel from ContactMainView.ascx file.

```
  <td width="1%">
   <so2:SoLabel ID="TelephoneLabel" Caption="SR_CC_PHONE" CaptionBinding="Resources" runat="server" ContextStyle="Important">
    </so2:SoLabel>
   </td>
```

 

Above HTML code segment mentioned how the UserControl calls the SoLabel. The SoLabel is identified by its ID. Caption is another main property of the SoLabel. For example in above SoLabel Caption property is set to “SR\_CC\_PHONE”. The CaptionBinding property is set to “resources”, since actual caption is looked up using something similar to data-binding.

In run time to get the caption of "SR\_CC\_PHONE", the dynamic dll call SuperOffice.Web.Globalization.resources.dll is used. This is generated in CRM.web by using the  SuperOffice.Web.Globalization. Several culture specific resourece files are included in this.

For example in ResourceStrings.en-us.resx it sets the caption of "SR\_CC\_PHONE" to “Telephone”, the XML element below shows the convention.

 

```
<data name="SR_CC_PHONE">
    <value>Telephone:</value>
</data>
```

 
