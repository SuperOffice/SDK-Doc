<properties date="2016-06-24"
SortOrder="22"
/>

ArchiveProviders provides LinkHints rather than actual links. The SoArchiveLinkInfoTypes.config contains the definition to resolves the linkhint to actual actions. This is mainly used by the ArchiveControl. You can change existing or add your own linkhint def. to support your own archive provider.

Linkhint merge is type/subtype-based. The linkhint merge uses the combination of the type and subtype attributes to the find location.

 

This is an example of how to override an existing linkhint using a merge file (ArchiveLinkInfoTypes.merge):

```
<linkinfos>
  <linkinfo type="personarchive:person" subtype="click">
    <baseurl>javascript:PageUpdate('soprotocol:?person_id={person_id}','');
    </baseurl>
    <target></target>
  </linkinfo>
</linkinfos>
```

 
