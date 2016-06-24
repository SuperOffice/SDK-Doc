<properties date="2016-06-24"
SortOrder="7"
/>

For the application to run properly, some modifications are required in the application configuration file.The following section illustrates the modifications required in the Documents section of the configuration file.

```
<Documents>
  <!-- Location of SO_ARC -->
  <add key="ArchivePath" value="C:\\SO_ARC" />

  <!-- Location of temporary folder for streaming files. 
    This path must resolve to the same location for farms/culsters. -->
  <add key="TemporaryPath" value="C:\\temp" />

  <!-- Impersonate user when accessing the document archive or the temporary folder  -->
  <add key="ImpersonateUser" value="false" />
</Documents>
```

The ArchivePath specifies the physical location of the archive folder. This applies to the services/server-side.
The TemporaryPath key should have the physical location for temporary files on the server. The service implementation will stream documents to the temp-path before moving them to the archive-path for storage. Temporary files are created on the server at this path. This path is not client specific.

Finally, specify the impersonation key value. Impersonation is for file access. Impersonation should be set to true in a scenario where SO\_ARC is located on a remote server because the web-server user runs as a restricted local account which has no rights to access a file-share on a different server. If the impersonation set to true, the domain, user and the password values for a user that has access to SO\_ARC and temp folder have to be provided. In this example we have set the impersonation false because this is a windows application and the client runs the NetServer code in the same process, and the application inherits the user's identity.
