<properties date="2016-06-24"
SortOrder="27"
/>

Fragments can be reused in multiple pages, but when used in the same page you need to ensure unique ids. This can be done with the use of referenceWithIdUpdate attribute.

 

Example of a fragment reference with id update:

```
<controlgroups>
  <controlgroup id="MoreMainHeaderGroup" referenceWithIdUpdate="MyCGFrag"/>
```

All id attributes in the fragment are prefixed with ref. id

```
<controlgroups>
  <controlgroup id="MoreMainHeaderGroup_OrgId"  type=“ControlGroup" />
 
```
