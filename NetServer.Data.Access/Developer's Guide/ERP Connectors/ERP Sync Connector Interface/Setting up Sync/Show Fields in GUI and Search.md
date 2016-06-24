<properties date="2016-05-11"
SortOrder="7"
/>

[Showing fields in GUI/Showing fields in search results]()
-----------------------------------------------------------------------

There are two mutually exclusive options for each field: Synchronisation and simply showing the field value in the SO GUI.

Synchronisation means the value is passed between the systems and stored on each side (which way(s) the value passes is determined by the direction values selected in the field mapping GUI.

“Show In ERP Tab” means the value will **not** be stored in SO, but rather retrieved directly from the ERP side when the user views it in the SO client. In addition, these fields will not be editable from the SO client; they will be purely for display purposes.

The main advantage of this option is that ERP values may be made visible in SO without having to synchronise the value to a SO field (either standard or user defined).

 

<img src="../Erp%20Sync%20Connector%20Interface_files/image007.png" id="Picture 4" width="627" height="476" />

Setting up mapping/Show In ERP Tab options for the available ERP fields. Available actor types are added as tabs across the top. Mapping a field disables the ability to show the field in the GUI and vice versa.

 

<img src="../Erp%20Sync%20Connector%20Interface_files/image002.png" id="Picture 4" width="627" height="476" />

The “Show In Search” checkbox tells us which ERP Actor properties to display in the Advanced Search dialog in SuperOffice.
 
