<properties date="2016-06-24"
SortOrder="12"
/>

ID and References
=================

Each element (panel, card, view, control) in a page is uniquely identified by the ID of that object.

As a general rule, a card, view or control may have a reference instead of actual content. In that case, a configuration fragment of that type and with the name specified in the reference attribute value will be fetched and merged into the configuration.

```
         <view id="MainView" reference="MainView"></view>
```

 

This will cause the system to look for a view configuration fragment with the reference name MainView. In the SoMainViewView.config the file name is constructed from the reference name: “So&lt;reference-name&gt;&lt;TagName&gt;.config”.
