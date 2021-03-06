---
title: NSArchiveListItem[] GetArchiveList2(String guiName, String providerName, String sortOrder, String restriction, String entities, Integer page, Integer pageSize)
path: /EJScript/Classes/NSArchiveAgent/Member functions/NSArchiveListItem[] GetArchiveList2(String p_0, String p_1, String p_2, String p_3, String p_4, Integer p_5, Integer p_6)
intellisense: 1
classref: 1
sortOrder: 1106
keywords: GetArchiveList2(String,String,String,String,String,Integer,Integer)
---


Get a page of data for an archive using a restriction string. The columns returned will be those set as chosen columns, using either the SetChosenColumns service or the corresponding SelectableMDOList.SetSelected.



* **guiName:** The GUI name of the archive list, used to retrieve the currently configured set of columns (otherwise manipulated using the ArchiveConfiguration service)
* **providerName:** The name of the archive provider to use; it will be created via the ArchiveProviderFactory from a plugin
* **sortOrder:** Sort order for the archive. Can be null, which indicates 'no particular order'
* **restriction:** Archive restrictions as string. e.g. "name = 'baz' or category oneOf (1,2,3)". Archives will generally throw an exception if no restrictions are set. Pass in an empty array if you really do not want restrictions, but remember that you may end up fetching the first page of millions of rows.
* **entities:** Comma separated list of entities to include. Can be null, which indicates 'include all entities'
* **page:** Page number, page 0 is the first page. Negative page numbers are interpreted as number of rows to skip.
* **pageSize:** Page size, which should be kept reasonable (say, no more than 1000 rows at a time)
* **Returns:** Array of archive list items, where each item represents one row of data (row level data + the requested columns)


