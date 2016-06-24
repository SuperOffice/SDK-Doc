<properties date="2016-05-11"
SortOrder="5"
/>

The individual properties of each Provider are described in the sections of one or more of the following interfaces. Each interface contains one aspect of the provider. These include IArchiveProviderDoesExtend, IArchiveProviderExtensible, IArchiveProviderHasColumns, IArchiveProviderHasEntities and IArchiveProviderHasRows, which are contained in the SuperOffice.CRM.ArchiveLists namespace.

IArchiveExtender, IArchiveQueryProvider and IArchiveMultiQueryProvider are a group of interfaces, which describes the combination of properties that may be implemented by individual providers. Individual providers can implement these. In addition to these, the methods and properties that make the implementation easier are added here.

IArchiveProvider is the external standard interface of Archive Providers exposed to the Service layer and the world in general. The interface aggregates the extensible and provider properties of Archive provider classes such as ActivityArchiveProvider, ProjectMemberProvider and many more. This acts as an intermediate stage between the pure property interface and the actual provider class that have queries.

Most of the ArchiveProviders work in a similar manner and therefore any of the ArchiveProvider plugins can be used in a similar way.

 In the example below the written provider, which is called MyPlugin, is used instead of the SelectionAddMembersProvider given in NetServer.

```
using SuperOffice.Util;
 
namespace MyPlugin
{
      //Indicates that this is an externally visible provider
      [ArchiveProvider(ProviderName, int.MaxValue / 3)]
      public class mySelectionAddMembersProvider :
AliasProviderBase<SelectionDynamicContactProvider>
      {
            //Declaration of Variables
            public const string ProviderName =
"SelectionStaticContactAddMembers";
 
            //Declaration of Archive Restrictions
            ArchiveRestrictionInfo tname = new
ArchiveRestrictionInfo("name", "begins", "StateZero");
            ArchiveRestrictionInfo allPerson = new
ArchiveRestrictionInfo("includePersonRestriction", "=", "all");
            ArchiveRestrictionInfo retired = new
ArchiveRestrictionInfo("retired", "=", "1");     
       
            //Class Constructor
            public mySelectionAddMembersProvider()
: base(SelectionDynamicContactProvider.ProviderName)
            {
                  AddEntityOverride("dynamicContact", "contact",
"[SR_SINGULAR_CONTACT]");
                  SetDesiredColumns("contactId", "personId",
"associateId", "name");
                  SetRestriction(tname, allPerson,
retired);//(name, /*xstop, */firstPerson);
                  SetPagingInfo(200, 0);
            }
      }
}
```

This provider is similar to that of SelectionAddMembersProvider. The intention at this stage is to show you have to add your own customized providers instead of the NetServer default provider.

The name of the plugin is MyPlugin, which is in fact the namespace in which the custom provider (mySelectionAddMembersProvider) is located. The location of this .dll should give in the config as follows.

```
 
      <Factory>
            <DynamicLoad>
                  <add key="MyPlugin" value="C:\\TestApps\\SDK
Documents\\MyPlugin\\MyPlugin\\bin\\Debug\\MyPlugin.dll" />
            </DynamicLoad>
      </Factory>
```

This would make sure that the custom provider is called instead of the default provider.

```
 
            [ArchiveProvider(ProviderName, int.MaxValue / 3)]
            public class mySelectionAddMembersProvider :
AliasProviderBase<SelectionDynamicContactProvider>
```

The Keyword ArchiveProvider indicates an externally visible provider, which can be accessed through the provider factory. A class marked with this attribute should implement the SuperOffice.CRM.ArchiveLists.IArchiveProvider interface. Here the created class has inherited from AlliasProviderBase, which in fact has been inherited from the IArchiveProvider interface.

ArchiveProvider requires two parameters that are, ProviderName of string type and the priority, which is of type integer. ProviderName is the public name of the provider that is used to call the service. MaxValue/3 is used as the priority value since when NetServer uses MaxValue / 2 the provider names with the lowest priority value will called.

In the example, we have overridden two methods available in the base class. Other methods, which are also provided, can be overridden in a similar manner.

```
            AddEntityOverride("dynamicContact", "contact",
"[SR_SINGULAR_CONTACT]");
            SetDesiredColumns("contactId", "personId",
"associateId", "name");
            SetRestriction(tname, allPerson, retired);//(name,
/*xstop, */firstPerson);
            SetPagingInfo(200, 0);

 

Once the plugin is built and, its location has been added to
the config file as shown above with use of a code as below the
programmer may be able to check the written plugin.
```

```
 
            IArchiveProvider provider =
ArchiveProviderFactory.Create(SelectionAddMembersProvider.ProviderName);
```



    See Also: 


    Archive
    Provider Example
     
     
     

 

 
