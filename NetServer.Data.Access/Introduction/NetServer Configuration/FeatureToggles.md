---
uid: netserver_configuration_featuretoggles
title: NetServer FeatureToggles Element
date: 2018-06-06
SortOrder: 79
---
Configuration values for Feature Toggles; see the SuperOffice.FeatureToggles.dll assembly for definitions. Toggles not mentioned here will be OFF.

```xml
<FeatureToggles>
  <State>
    <add key="NewFeature" value="True" />
  </State>
</FeatureToggles>
```

|Name|Description|
|------------|-|
|State|Contains key/value (feature name/true or false) pair elements that represent the features to toggle.|
