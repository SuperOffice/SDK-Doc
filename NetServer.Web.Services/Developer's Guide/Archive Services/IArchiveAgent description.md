<properties date="2016-06-24"
SortOrder="6"
/>

This is the common interface for the Archive agent. Following is a list of methods provided by the agent that helps us to manipulate the content of the Archives.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Method</p></td>
<td><p>Description</p></td>
</tr>
<tr class="even">
<td><p>GetActivityFilter</p></td>
<td><p>GetActivityFilter() method retrieves the ActivityFilter for a specified list. ActivityFilters are restrictions that help place restriction on the output returned.</p></td>
</tr>
<tr class="odd">
<td><p>GetArchiveConfiguration</p></td>
<td><p>The method retrieves the configuration for the given Archive. The configuration is keyed by a combination of an Archive provider name and GUI name. The Archive provider name should match an Archive provider plugin and the GUI name is an arbitrary string used to distinguish multiple occurrences of the same underlying provider in the GUI.</p></td>
</tr>
<tr class="even">
<td><p>GetArchiveList</p></td>
<td><p>The method retrieves a page of data. The columns will be those set as chosen columns.</p></td>
</tr>
<tr class="odd">
<td><p>GetArchiveListByColumns</p></td>
<td><p>GetArchiveListByColumns retrieves a page of results for an archive list, explicitly specifying the restrictions, order by and chosen columns.</p></td>
</tr>
<tr class="even">
<td><p>SetActivityFilter</p></td>
<td><p>The method is used to set the ActivityFilter for a specified list.</p></td>
</tr>
<tr class="odd">
<td><p>SetChosenColumns</p></td>
<td><p>The methods set the chosen columns for the given GUI name / provider name combination. This service corresponds to the Sets elected() method of the SelectableMDOList service for a list called ArchiveColumns and the Archive provider name and GUI name as its additional info.</p></td>
</tr>
<tr class="even">
<td><p>SetChosenEntities</p></td>
<td><p>SetChosenEntities() method selects the Entities for a given GUI name / provider name combination. This service corresponds to the Sets elected() method of the SelectableMDOList service, for a list called ArchiveEntities plus the Archive provider name and GUI name as its additional info.</p></td>
</tr>
<tr class="odd">
<td><p>SetColumnWidths</p></td>
<td><p>The method sets the column widths for the given set of columns and GUI name.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>
