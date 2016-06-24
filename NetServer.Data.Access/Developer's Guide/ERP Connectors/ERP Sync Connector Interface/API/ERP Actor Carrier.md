<properties date="2016-05-11"
SortOrder="7"
/>

[ErpActor]()
-------------------------

The ErpActor class describes the primary carrier that is passed to and from a Sync Connection. It is a representation of an ERP actor (see “Glossary and abbreviations”) containing a key set of properties for identification and mandatory fields, along with a key/value list of fields and their values.

 

Members:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><pre class="c40"><code>string
 ActorType</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The actor’s type (subset of a known list; see “Glossary and abbreviations”).</p>
<p>Although passed as a string, it is a textual representation of the internal enumerator ErpActorType.</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>string
 ErpKey</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The local identifier (primary key) for the actor in the given connection. This is proprietary and will only need to be readable by the connector itself. Erp Sync will store the value locally for mapping purposes, but will not need to parse it or understand it.</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>string
 LastModified</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>Describes when the actor was last changed/modified. 100% mandatory; used for timestamp comparison and sync loop retrieval.</p>
<p>This can be “any” timestamp, but there are two basic requirements:</p>
<p>1.        It needs to be incremental, i.e. when comparing two LastModified values on the same actor from the same connection, it must be possible to determine which one is older without knowing the specific format and build-up of the value itself.</p>
<p>2.        It needs to be “global”, which means that if Erp Sync compares the timestamps of two different actors, it must be able to determine which one is newer. For this reason, a “version number” specific to each actor will not be sufficient.</p>
<p> </p>
<p>Good type options are numeric or Datetime values.</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>string
 ParentActorType</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>If the actor has a parent, the parent’s actor type is specified here</p>
<p>E.g. if the actor is a contact person it will probably have a parent actor that might be a customer or vendor</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>string
 ParentErpKey</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The local identifier (primary key) for the parent  actor in the given connection</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>Dictionary
&lt;
string
, 
string
&gt; FieldValues</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>Key/value pairs of field keys and field values. Field keys are supplied as specified by the given connection in the method GetAvailableActorFields. See also Field value formats and conventions.</p>
<p> </p></td>
</tr>
</tbody>
</table>

 

 

### [ErpActorType]()

For the connection, the ErpActorType value in combination with the ErpKey value will be the identifier that uniquely identifies each actor object. For example, an ErpActorType value of “Customer” and ErpKey value of “12345” might probably mean that the connection should look in its customer table for the actor with customer ID 12345.

ErpActorType is an enumerator in SuperOffice.Plugins, but for communication purposes to and from the connector it is sent as a string (“Customer”, “Supplier”, etc.) to minimise future compatibility problems if the enumerator changes over time.

 

Members:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><pre lang="cs"><code>Unknown
 </code></pre></td>
<td><p>Initial value for an undefined actor. Should not be used on actors passed back and forth between SO and a Sync Connection, because the receiving side will not have enough information to process the actor.</p></td>
</tr>
<tr class="even">
<td>Customer</td>
<td><p>ERP customer (receivable account)</p></td>
</tr>
<tr class="odd">
<td>Supplier</td>
<td><p>ERP supplier/vendor (payable account)</p></td>
</tr>
<tr class="even">
<td>Partner</td>
<td><p>An actor that is both a customer and supplier. Not typically supported in all ERP systems.</p></td>
</tr>
<tr class="odd">
<td>Person</td>
<td><p>Contact person. Will generally need to also have information about its parent actor supplied (ParentErpKey and ParentActorType).</p></td>
</tr>
<tr class="even">
<td>Project</td>
<td><p>ERP project</p></td>
</tr>
<tr class="odd">
<td>Employee</td>
<td><p>ERP employee*</p></td>
</tr>
<tr class="even">
<td>Sale</td>
<td><p>ERP offer or order, or other representation of a sale.*</p></td>
</tr>
</tbody>
</table>

\* Not currently supported in Erp Sync, but the connector may choose to offer these types for future compatibility.

 

### [Field value formats and conventions]()

Because field values are all transferred as strings, they should be formatted in a way the connector and the ERP sync can agree on. Although the ERP sync will attempt to parse any value it receives to the best of its abilities, most developers will know the pains of trying to reliably parse things like textual date values with no reference to culture or format. For this reason, we **highly** recommend encoding all values using the provided copy of CultureDataFormatter in the SuperOffice.ErpSync.Contract assembly, and we will **require** the connector to be able to parse field values sent from the ERP sync in the same format.

The CultureDataFormatter will encode any supported field type inside brackets and with a prefix that determines what data type we’re dealing with. For examples, see the table below.

Note: Strings do not need to be encoded; they can be sent “as is”.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Type</strong></p>
<p><strong> </strong></p></td>
<td><p><strong>Parsing/format information</strong></p>
<p><strong> </strong></p></td>
</tr>
<tr class="even">
<td><pre lang="cs"><code>Date/Datetime
 </code></pre></td>
<td><p>CultureDataFormatter.EncodeDateTime will encode a given DateTime values in the format <strong>“[DT:12/31/2013 23:59:59.0000000]”</strong>.</p></td>
</tr>
<tr class="odd">
<td>Double/Decimal/Float</td>
<td><p>CultureDataFormatter.EncodeDouble will encode a double in the format <strong>“[F:12345.6789]”</strong>. It also has an overload which allows you to specify the number of decimals.</p></td>
</tr>
<tr class="even">
<td>Integer</td>
<td><p>CultureDataFormatter.EncodeInt will encode an integer value in the format <strong>“[I:12345]”.</strong></p></td>
</tr>
<tr class="odd">
<td>List</td>
<td><p>List values should use the internal list item ID (as recognised by the connector). Erp Sync will then use the GetList() or GetListItems() methods to retrieve the list itself and get the “readable” value. This value will always be read by and sent from ERP sync as a string (i.e. without any encoding or brackets).</p></td>
</tr>
<tr class="even">
<td>Checkbox/Boolean</td>
<td><p>There is no designated method in CultureDataFormatter for encoding a Boolean value, so you should use CultureDataFormatter.EncodeInt and send in <strong>1</strong> for True or <strong>0</strong> for False.</p>
<p>In other words, Boolean values will be encoded as <strong>“[I:1]”</strong> or <strong>“[I:0]”</strong>.</p></td>
</tr>
</tbody>
</table>

 



