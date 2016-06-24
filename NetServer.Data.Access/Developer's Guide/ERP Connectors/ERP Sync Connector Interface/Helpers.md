<properties date="2016-05-11"
SortOrder="5"
/>

[]() [Helper methods and classes]()
================================================

By referencing SuperOffice.ErpSync.Contract in your Sync Connector, you can take advantage of various helper classes and methods to make creating a connector a bit easier.

 

[ConfigDataHelper]()
---------------------------------

The ConfigDataHelper class contains a GetMetaData() method which parses a given class to generate a set of FieldMetadataInfo objects (used when Erp Sync asks the connector which fields are needed to define a connection, or which fields are supported on a given actor type).

In addition, it also has methods to save and retrieve configuration data to and from persistent storage (using IsolatedStorage); SaveData() and GetData().

 

[ResponseHelper]()
-------------------------------

All return types from a Sync Connector are PluginResponseInfo objects (or objects from one of its derived classes), and the ResponseHelper class is designed to make it as easy as possible to generate these objects.

 

[CultureDataFormatter]()
-------------------------------------

ConnectorWS also contains a copy of CultureDataFormatter (original version found in SoCore), which can help with parsing strings to typed objects and vice versa.

[For more information on the usefulness of this class, see the section “Field value formats and conventions"]()

 

[SearchHelper]()
-----------------------------

The SearchHelper class contains various methods for checking if a given field value is a match to a given SearchRestrictionInfo object. There are various methods available:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Method</strong></p>
<p><strong> </strong></p></td>
<td><p><strong>Information</strong></p>
<p><strong> </strong></p></td>
</tr>
<tr class="even">
<td><p>bool IsMatch</p>
<p>( object testValue, SearchRestrictionInfo restriction)</p>
<pre lang="cs"><code> </code></pre></td>
<td><p>Attempts to determine the type of the given value before sending it off to its respective “typed version” of IsMatch (see last row of this table).</p>
<p>Note: If the type of the value is a string, it will also check to see if it is an encoded string, and if so try to parse it into a typed object first.</p></td>
</tr>
<tr class="odd">
<td><p>bool IsMatch</p>
<p>(object testValue, FieldMetadataTypeInfo testValueType, SearchRestrictionInfo restriction)</p></td>
<td><p>The same as above, but instead of trying to determine the type of the value based on the value itself, it uses the given FieldMetadataTypeInfo object and then attempts to see if the test value can be parsed or cast to the correct type.</p></td>
</tr>
<tr class="even">
<td><p>IsMatchString / IsMatchInt / IsMatchDouble / IsMatchDateTime / IsMatchBool</p></td>
<td><p>“Typed version” of IsMatch, which takes a typed object and checks if it’s a search result match to the given restriction object.</p>
<p><strong>Note #1:</strong> IsMatchString will <strong>not</strong> see if a string is encoded and try to parse it first. <strong>Note #2:</strong> All string comparisons are case insensitive.</p></td>
</tr>
</tbody>
</table>

 

Note: There isn’t a separate method for list values, because each connector will handle lists in its own way. However, since the list item keys are communicated as simple strings from the ERP sync, IsMatchString will probably be useful for checking searches containing list restrictions.

 

[Extension methods]()
----------------------------------

There are also extension methods available for all classes that are duplicated between the web service layer and the host/connector communication layer (such as ErpActor and ErpActorWS), useful for turning one into the other (and vice versa).



 
