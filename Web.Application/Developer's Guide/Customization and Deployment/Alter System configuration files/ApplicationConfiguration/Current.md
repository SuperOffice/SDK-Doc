<properties date="2016-06-24"
SortOrder="20"
/>

The ApplicationConfiguration is also the place to define your own currents. The current system helps you maintain state between requests and even between sessions if needed.

 

Extend your merge file with some current definition:

```
<applicationsettings defaultprefsection="SuperMode">
  <pages prefsection="SuperMode" prefkey="MainPanel">
...
  </pages>
  <currents>
    <current
      id="customsevencurrent"
      type="history"
      providername="SoProtocolProvider" />
  </currents>
</applicationsettings>
```

The current can be set by using a SoProtocol

**PageUpdate('soprotocol:CustomSeven?customsevencurrent\_id=100','');**
