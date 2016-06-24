<properties date="2016-06-24"
/>

Config file customization
====================================================

The CRM.web config files are updated whenever you repair or re-install or upgrade the CRM.web application. This means that any changes you make disappear.

To avoid having to manually patch the CRM.web config files, you can place your customization in a separate folder. This folder won’t be touched by the installer – leaving your customizations in place during an upgrade.

 

Web.config
----------

You need to add a custom path to the client config provider section in the web.config file.

   &lt;ClientConfigurationProvider&gt;
      &lt;add key="CacheConfigurations" value="false" /&gt;
      &lt;add key="FilePath" value="C:\\Program Files\\SuperOffice\\SuperOffice CRM.web\\Example\\App\_Data" /&gt;
    &lt;/ClientConfigurationProvider&gt;

 

Add this line to the ClientConfiguratonProvider

      &lt;add key="CustomPath" value="C:\\Program Files\\SuperOffice\\SuperOffice CRM.web\\Example\\App\_Custom" /&gt;

 

Custom folder
-------------

Make a new folder to hold your custom files – this folder will mirror the App\_Data folder, allowing you to override App\_Data with your own custom files.

e.g. App\_Data contains a WebClient folder. Therefore your App\_Custom folder must contain a corresponding WebClient folder.

The WebClient folder contains a Web folder that contains the config files. Your App\_Custom\\WebClient folder needs to have a Web folder for your custom config files.

<img src="Config%20file%20customization_files/image001.jpg" width="406" height="193" />

 

Custom Config files
-------------------

You can now place your customized config files into this folder – and the CRM.web will load the custom config files instead of the standard config files if they are present.

You can only replace files – you can’t replace parts of a config file – so you still need to check if there are changes you want to merge over from the standard config files after an upgrade – but hopefully that is easier than patching in your changes every time there is an upgrade.
