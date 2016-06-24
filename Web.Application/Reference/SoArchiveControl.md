<properties date="2016-06-24"
/>

SoArchiveControl
Available elements:
-------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>toolbar</strong></td>
<td>Toolbar</td>
</tr>
<tr class="even">
<td><strong>restrictions</strong></td>
<td>The archives restrictions</td>
</tr>
<tr class="odd">
<td><strong>restriction-mappings</strong></td>
<td>Maps the linkhints to restriction names</td>
</tr>
<tr class="even">
<td><strong>dynamic-filter-excludes</strong></td>
<td>Remove the filter option of columns even if they can restrict</td>
</tr>
<tr class="odd">
<td><strong>providername</strong></td>
<td>The name of the provider to use when fetching data. This is not used when a datasource is specified.</td>
</tr>
<tr class="even">
<td><pre><code>  fetcher</code></pre></td>
<td>The name of the fetcher to use when fetching data. The fetcher must be registered in ObjectMapping.config.</td>
</tr>
<tr class="odd">
<td><pre><code>  autofetch</code></pre></td>
<td>If false the list is not fetched async on initalization.</td>
</tr>
<tr class="even">
<td><strong>archivecolumninfo-datasourcename</strong></td>
<td>The datasource name to the archives configuration. Column information and more.</td>
</tr>
<tr class="odd">
<td><strong>showheader</strong></td>
<td>If true the header is shown.</td>
</tr>
<tr class="even">
<td><strong>enable-dynamic-filter</strong></td>
<td>If true enables the dynamic filter functions.</td>
</tr>
<tr class="odd">
<td><strong>showtoolbar</strong></td>
<td>If true the toolbar is shown.</td>
</tr>
<tr class="even">
<td><strong>defaultsort</strong></td>
<td>If set the icon on the right side is added to the header, using the defaultsort value as orderby name. This is not the default sort order for the archive.</td>
</tr>
<tr class="odd">
<td><strong>linkhint-prefix</strong></td>
<td>Prefixes all the linkhints provided by the ArchiveProvider. This enables the developer to use diffrent linkhints. This is usefull because the archive provider always returns the same linkhint for the same entities.</td>
</tr>
<tr class="even">
<td><strong>indextype</strong></td>
<td>Indicates which value is used for indexing rows.</td>
</tr>
<tr class="odd">
<td><strong>alternating-size</strong></td>
<td>The number of rows before changing style. Default is 3.</td>
</tr>
<tr class="even">
<td><strong>updatedatasource</strong></td>
<td>If true updates the datasource on postbacks/callbacks. Default true. This is only used when a datasource is specified.</td>
</tr>
<tr class="odd">
<td><strong>nocolumnlink</strong></td>
<td>If true the column links is disabled. Only row links are used</td>
</tr>
<tr class="even">
<td><strong>singleselect</strong></td>
<td>Enables/disables the possibility to select more that one row</td>
</tr>
<tr class="odd">
<td><strong>allowrowclickonreadonly</strong></td>
<td>If true allows clicks on rows even if in readonly mode.</td>
</tr>
<tr class="even">
<td><strong>hideentities</strong></td>
<td>If true the entity checkboxes is hidden</td>
</tr>
<tr class="odd">
<td><strong>current</strong></td>
<td>The name of the the current that match the archives entity type. This is used by the ArchiveControl to set the current row selected</td>
</tr>
<tr class="even">
<td><strong>fieldrightname</strong></td>
<td>//The ArchiveControl can use rights from something else than datasource. The fieldrigth must be present in a DataHandler.</td>
</tr>
<tr class="odd">
<td><strong>ignoreheight</strong></td>
<td>If set to true the ArchiveControl will not adjust to its container.</td>
</tr>
<tr class="even">
<td><strong>empty-list-link</strong></td>
<td>The link to show when the list is empty.</td>
</tr>
<tr class="odd">
<td><pre><code>  caption</code></pre></td>
<td>Caption of the link.</td>
</tr>
<tr class="even">
<td><pre><code>  linkcaption</code></pre></td>
<td>The actual link text.</td>
</tr>
<tr class="odd">
<td><strong>pagesize</strong></td>
<td>The size of each page. Default is 50.</td>
</tr>
</tbody>
</table>

Example of a configuration:
---------------------------

```
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <toolbar>
    <button id="string value" caption="string value" tooltip="string value" icon="string value" iconselected="string value" iconhover="string value" icondisabled="string value" disabled="false" dataright="string value" onrowselect="string value" onnorowselect="string value" linkhint="string value" onclick="string value" tooltip-binding="string value" datasourcename="string value" tablerightname="string value" fieldright="string value" halign="string value">
      <tooltip>string value</tooltip>
      <function-rights>
        <function-right type="string value">string value</function-right>
      </function-rights>
      <role-rights>
        <role-right type="string value">string value</role-right>
      </role-rights>
      <data-checks>
        <data-check type="string value" entity="string value">
          <data property="string value" operator="string value">string value</data>
        </data-check>
      </data-checks>
      <parameter-checks>
        <parameter-check type="string value" value="string value">string value</parameter-check>
      </parameter-checks>
      <license-rights>
        <license-right type="string value" reason="string value">string value</license-right>
      </license-rights>
      <userpreferences>
        <userpreference type="string value" section="string value" key="string value" defaultvalue="string value">string value</userpreference>
      </userpreferences>
      <sentry-rights>
        <sentry-right type="string value" tableright="string value">string value</sentry-right>
      </sentry-rights>
    </button>
  </toolbar>
  <restrictions>
    <restriction name="string value" operator="string value" binding="string value">string value</restriction>
  </restrictions>
  <restriction-mappings>
    <restriction-mapping source="string value" target="string value" />string value</restriction-mappings>
  <dynamic-filter-excludes>
    <dynamic-filter-exclude columnname="string value" />string value</dynamic-filter-excludes>
  <providername fetcher="string value">string value</providername>
  <archivecolumninfo-datasourcename>string value</archivecolumninfo-datasourcename>
  <showheader>true</showheader>
  <enable-dynamic-filter>false</enable-dynamic-filter>
  <defaultsort>string value</defaultsort>
  <togglerow-linkinfo>string value</togglerow-linkinfo>
  <linkhint-prefix>string value</linkhint-prefix>
  <dblclick-action>string value</dblclick-action>
  <indextype>string value</indextype>
  <alternating-size>string value</alternating-size>
  <singleselect>false</singleselect>
  <allowrowclickonreadonly>false</allowrowclickonreadonly>
  <current>string value</current>
  <fieldrightname>string value</fieldrightname>
  <ignoreheight>false</ignoreheight>
  <empty-list-link caption="string value" linkcaption="string value">string value</empty-list-link>
  <pagesize>string value</pagesize>
</config>
```

See Also: SoArchiveControl
