---
uid: Configure_archives
title: Configure archives
---

In SoCrm 7.0, every main archive tab view can host one or more Partner Archive in a tab.

For the time being this is configured with the local SuperOffice.config file where partner provider assemblies must added to the Factory/DynamicLoad section and an additional .ini file for every external assembly added.

Example SuperOffice.config section:

    &lt;Factory&gt;
      &lt;DynamicLoad&gt;
        &lt;add key="Twitter" value="Twitter.dll" /&gt;
        &lt;add key="GroupActivities" value="GroupActivities.dll" /&gt;
      &lt;/DynamicLoad&gt;
    &lt;/Factory&gt;

Here we tell NetServer that there are 2 extra assemblies to load at run time.

When SoCrm starts, it will query NetServer for all dynamically loaded assemblies and search for an accompanying .config file.

When SoCrm starts, it wil read xml .config files that it expects to find in a subdirectory of the application directory.

The name of this directory is derived from the application name plus *" Custom Archives"* with a leading space. This will allow us to have application specific configurations. For SoCrm.exe, this will thus be the folder *SoCrm Custom Archives*.
For the above example this will be **SoCrm Custom Archives\\Twitter.config** and **SoCrm Custom Archives\\GroupActvities.config**. These .config files will contain declarations that SoCrm can interpret.