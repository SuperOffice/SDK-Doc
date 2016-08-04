<properties date="2016-08-04"
SortOrder="26"
/>

The CultureDataFormatter handles conversion to and from the neutral format.

The CultureDataFormatter is strictly not part of the DCF - since it lives in the SoCore assembly.

```
    using SuperOffice.CRM.Globalization;
    
    string encoded = "[I:12345]";
    string localized = CultureDataFormatter.LocalizeEncoded( encoded );
    // localized = "12345"
```

Floating point:
```
    using SuperOffice.CRM.Globalization;
    
    string encoded = "[D:1234.5]";
    string localized = CultureDataFormatter.LocalizeEncoded( encoded );
    // localized = "1234,5" 
```

See Also: CultureDataFormatter
