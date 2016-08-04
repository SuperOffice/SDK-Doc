<properties date="2016-08-04"
SortOrder="11"
/>

To make the web controls look like SuperOffice, you need to copy the SIX theme from SIX.web to the new web site, and include a Theme directive in the web.config file:

```
    <pages theme="Six" validateRequest="false"
           enableEventValidation="false" viewStateEncryptionMode="Never">
    </pages>
```

 

Add the Theme folder to ASP.net (via the special ADD ASP.NET FOLDER menu) and copy the DefaultStyles.css from SIX.web to the folder.

Add the IMAGES folder to the website to complete the look:

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image002.jpg" width="355" height="374" />
