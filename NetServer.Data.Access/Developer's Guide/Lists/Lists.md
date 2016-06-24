<properties date="2016-05-11"
SortOrder="82"
/>

This section will expose the NetServer List layer which can be used to access and use the various Lists in NetServer in your own applications.

For the purpose of this report we have Categorized Lists according to the different list providers present in the NetServer List layer. The main reason for this grouping is that the outputs of lists vary with the list provider and in this section we will give you an idea about different list providers and places where each of them becomes important.  

This section explains the Lists that are provided under the SuperOffice.CRM.Lists namespace. The SoListProviderFactory can be used to retrieve various types of Lists.

There are several different types of SoListProviders. Any List can be retrieved by varying the parameters passed to the Create() method of the SoListProviderFactory. In the rest of this section, we will be explaining with examples, how to retrieve various types of Lists.

 

1. autolist
