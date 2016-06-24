<properties date="2016-06-24"
SortOrder="23"
/>

SoMenuConfiguration.config holds the definition of all menus in the web-client.

Menu merge is context/subcontext-based. The menu merge uses the combination of the context and subcontext attributes to the find location.

 

```
<menus>
    <menu context="mainmenu" subcontext="file">
      <menuitems>
        <menuitem id="menufileexit" type="normal">
          <caption>[SR_MENU_FILE_EXIT]</caption>
          <url>javascript:if(confirm('Are you sure?')) {ApplicationExit();}</url>
        </menuitem>
        <menuitem id="" type="divider"/>
        <menuitem id="menufiletest" type="normal" >
          <caption>Open debugwindow</caption>
          <url>Debug.openWindow();</url>
        </menuitem>
      </menuitems>
    </menu>
</menus>
```

 
