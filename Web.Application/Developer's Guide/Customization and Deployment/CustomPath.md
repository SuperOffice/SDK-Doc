<properties date="2016-06-24"
SortOrder="17"
/>

The first step when customizing the web-client is adding you won custom path. The custom path is added to the ClientConfigurationProvider section found in Web.config.  Multiple entries are allowed and the key must start with CustomPath.

You should never add your own config files in the standard configuration path. Always use your own custom path. You should keep out of other people’s custom paths as well. Make your own.

 

Add the custom path and turn off caching. While developing you should always turn off caching.

```
<ClientConfigurationProvider>
      <add key="CustomPath_1" value="C:\MyPath\MyFiles"/>
      <add key="CacheConfigurations" value="false"></add>
</ClientConfigurationProvider>
```

The files put in the custom folder will automatically be used by the web-client.

`*.config` files will override existing files in the client. `*.merge` files will be merged into config files specified within the merge file.

Be aware of that after custompath you need to make subfolders, using the application name and instance name:

`c:\MyPath\MyFiles\[applicationname]\[instancename]\[mynamedfolder]\Myconfig.config`

On standard installations it would look like this:

`C:\MyPath\MyFiles\WebClient\Web\CustomSeven\SoCustomSevenPage.config`
