<properties date="2016-05-11"
SortOrder="113"
/>

 

The Documents section contains seven settings related to SuperOffice documents. It is used as a method for NetServer to identify the location of the document archive and the temporary directory to be used. As access to the document archive can be restricted to certain users, to access the required directories NetServer must impersonate a user with read and write access.

```
<Documents>
      <add key="ArchivePath"
value="\\\\qa-build\\StateZeroSoArc" />
      <add key="TemporaryPath" value="c:\\temp" />
      <add key="ImpersonateUser" value="true" />
      <add key="ArchiveUser" value="SuperBuilder" />
      <add key="ArchivePassword" value="CRM5myd" />
      <add key="ArchiveDomain" value="SUPEROFFICE_ASA" />
      <add key="BufferSize" value="256" />
</Documents>

 
```

1. autolist
