<properties date="2016-08-04"
SortOrder="26"
/>

WHen a user enters a value, it needs to be converted into a formatted value before being sent back to the web-service for processing. This conversion needs to happen on the client, where we know the localization settings (the current culture).
If the user types in "1234,5" (a norwegian floating point value) we need to turn this into a floating point value.

```
    using SuperOffice.CRM.Globalization;
    
    string encoded = "1234,5";
    double theNumber;
    Double.TryParse(out encoded);
    string formatted = CultureDataFormatter.EncodeDouble( theNumber );
    // formatted = "[D:1234.5]" 
```
