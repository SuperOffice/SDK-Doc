---
uid: guideCustomArchivePlugin
title: Custom Archive Plugins
---

In SoCrm 7.0, every main archive view, browser view, mini card view and primary dialogs can host one or more *Custom Archive* filled with rows from a standard or custom NetServer ArchiveProvider.


<img src="../images/custom-archive.gif" id="img_424ad8fe-8592-491d-9f8f-dbdb6e3172c1" />


This is [configured using XML configuration files](@guideCustomArchiveConfig).

The config file [describes which .net class to use](@guideCustomArchiveProvidername), and [where to display the list in the GUI](@guideCustomArchiveConfigHost).

The archive provider can be configured by [restricting its output](@guideCustomArchiveParams), [defining its default appearance](@guideCustomArchiveColumns), and [enhanced through client-side scripting](@guideCustomArchiveMethods).



There are some [debugging and developer tools](@guideCustomArchiveReconfigure) that can be enabled to make it easier to see what is going on.

For more programming information, consult the NetServer Data documentation.