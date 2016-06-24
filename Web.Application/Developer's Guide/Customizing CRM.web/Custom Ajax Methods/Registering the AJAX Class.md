<properties date="2016-06-24"
SortOrder="16"
/>

Like with all objects and control you want to add to CRM.web, you will have to register classes that are to be used by the AjaxMethodDispatcher in the SoObjectMapping.config file.

The object type is â€œAjaxMethodâ€, and as with custom user controls, the MappingName, AssemblyName and ObjectName properties refer to the name you want to reference the object with in CRM.web, the name of the assembly (DLL), and the fully qualified name of the class, respectively.

You also need to set the xusing\_ajaxnet property to true.

&lt;object type="AjaxMethod" mappingname="AjaxDemo" assemblyname="CustomizingSIXwebPart6" objectname="CustomizingSIXwebPart6.AjaxDemo" xusing\_ajaxnet="true"&gt;&lt;/object&gt;
