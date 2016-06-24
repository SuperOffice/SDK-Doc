<properties date="2016-05-11"
SortOrder="68"
/>

 

Each application that uses the NetServer functionality should contain a well defined configuration file. This is imperative, irrespective of the fact that the application is a Windows based or Web based application. A Windows application will contain an exe.config file while a Web application contains a web.config file. An example of how these file names should be represented is given below:

Windows Application : MyApplication.exe.config

Web Application        : web.config

A typical configuration file that you have to define in your application should have a section group defined as " SuperOffice" as the main section group under the configSections of your config file. Under the main " SuperOffice" section group, you should define other sections and section groups that NetServer extracts information from.

 

```
<configSections>
    <sectionGroup name="SuperOffice">
      <sectionGroup name="Security">
<section name="Cryptography"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
      </sectionGroup>
<section name="ClientConfigurationProvider"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="Diagnostics"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
      <sectionGroup name="Data">
<section name="Session"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="Database"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="ImplicitAnonymous"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="Explicit"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
      </sectionGroup>
      <sectionGroup name="Factory">
<section name="CustomFactories"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="DynamicLoad"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
      </sectionGroup>
<section name="Documents"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="Globalization"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
<section name="Services"
type="System.Configuration.NameValueSectionHandler, System,
Version=1.0.5000.0, Culture=neutral,
PublicKeyToken=b77a5c561934e089" />
    </sectionGroup>
  </configSections>

 
```

 

In the above given example, you may notice that there are section groups defined under the main " SuperOffice" section group. In a NetServer configuration file, there are three section groups that you have to define under the main " SuperOffice" section group.

Security

Data

Factory

  Once you define the sections, then you must elaborate each key value combination in the sections that you have defined.

 

```
<Security>
      <Cryptography>
<add key="SymmetricKey"
value="mbiNaaa+3wWcbzGWCnvCvRBoLg8NADQiXaaChJ38W1w=" />
<add key="SymmetricIV" value="aBL3Kh0mXHzn+NvXkSS/Lg==" />
<add key="SymmetricSecret" value="SuperOffice NetServer 1.0
Alpha lab-testing" />
      </Cryptography>
</Security>
```

 
