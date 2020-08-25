<properties date="2016-06-24"
SortOrder="2"
/>

Architecture
============

All you really need to create an agent is to create an executable or web service which supports reading our proprietary XML format as input, and return our proprietary XML format as output. The input XML will normally look something like this:

```
<?xml version="1.0" encoding="utf-8" ?>
<request version="1.1">
  <parameters>
    <string name="agentParameter">Any parameter in agents config</string>
    <string name="dbi.agentId">1</string>
    <string name="dbi.debug">1</string>
    <string name="dbi.event">begin</string>
    <string name="dbi.lastExecution">2011-05-06 13:32:35</string>
    <string name="dbi.started">2011-05-06 13:34:34</string>
    <string name="taskParameter">Any parameter in tasks config</string>
  </parameters>
</request>
```

The parameters will contain some default parameters we always add, as well as any custom parameters you have configured for the agent and the task. The resulting output XML should look something like this:

```
<?xml version="1.0" encoding="utf-8" ?>
<response version="1.1">
  <parameters>
  </parameters>
  <object>
    <string name="column.size">3</string>
    <string name="column.0">1</string>
    <string name="column.1">ACME Inc</string>
    <string name="column.2">+1 555 123-4567</string>
  </object>
</response>
```
