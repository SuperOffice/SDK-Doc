<properties date="2016-06-24"
SortOrder="26"
/>

When making a new page you can split the configuration in several fragments for reuse and readability.
You can place the files in any folder as long as it is placed in the custom path folder. The only requirement is a correct naming. This allows you to group your configuration fragments as you please.
Example contact page:

Defined in ApplicationConfiguration:

```
  <page id="contact" type="mainpage"  function-right="hide-company" />
 
```

The file name must then be:  So**Contact**Page.config. The postfix ‘page’ must be the same as the root element name. The name  a fragment of a controlgroup would look like this

    SoMyCGFragControlGroup.config

1. autolist
