<properties date="2016-05-11"
SortOrder="6"
/>

[FieldMetadataInfo]()
----------------------------------

<a href="" id="OLE_LINK27"></a> <a href="" id="OLE_LINK9">This carrier is a full description of a field as used and interpreted by the Sync Connector. FieldMetadataInfo objects are used in two areas of Erp Sync:</a>

* Populate a set of configuration controls for setting up a Sync Connection. The connector will supply a set of FieldMetadataInfo objects that describe the set of configuration data needed to set up a working Sync Connection.

    When synchronising/sending data between SO and a Sync Connection, Erp Sync will need to know the details of each field on the ERP side to avoid errors related to things like data type parsing and field length overruns. The Sync Connection will supply FieldMetadataInfo objects for each field it supports (through the GetAvailableActorFields method). Erp Sync will store these details locally for all fields the customer elects to use (for either sync mapping, showing in the GUI and/or setting up for default values. See section “ERP field setup”).
    When an ERP field is set up for use in Erp Sync, the values in the corresponding FieldMetadataInfo object are stored locally in the SO database.
     
    <img src="../Erp%20Sync%20Connector%20Interface_files/image003.png" id="Bilde 5" width="513" height="414" />

3 : Setting up a new connection (requires that a Connector URL has already been set up). The grey area is dynamically showing the configuration fields that the connector has indicated that it needs to define a connection.

     
    FieldMetadataInfo members:
    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td><pre class="c40"><code>string
     FieldKey</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p><a href="" id="OLE_LINK28">Internal name of the field. Used as the key in the dictionary of values.</a></p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><pre class="c40"><code>string
     DisplayName</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>Localized field name – shown in the GUI as the label for the control.</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><pre class="c40"><code>string
     DisplayDescription</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>Tooltip for the field.</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><pre class="c40"><code>FieldMetadataTypeInfo
     FieldType</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p><a href="" id="OLE_LINK45"></a> <a href="" id="OLE_LINK44">String, int, decimal, etc.</a></p>
    <p>Kind of field widget to use:</p>
    <ul>
    <li>Textbox</li>
    </ul>
    <ul>
    <li>Number field</li>
    </ul>
    <ul>
    <li>Password field</li>
    </ul>
    <ul>
    <li>Dropdown list</li>
    </ul>
    <ul>
    <li>Checkbox</li>
    </ul>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><pre class="c40"><code>string
     ListName</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>If the field is a reference to a named list in the Sync Connector, this property contains the name of that list.</p></td>
    </tr>
    <tr class="even">
    <td><pre class="c40"><code>string
     DefaultValue</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p><a href="" id="OLE_LINK51"></a> <a href="" id="OLE_LINK50">A default value for the field.</a> The value in the widget when the configure dialog is opened in Add Connection mode.</p>
    <p>This will vary a bit depending on the type, of course.</p>
    <p>Obviously, if the field is a label, text or password, then the text is used.</p>
    <p>If the field is an int or double, we will try to convert the string into a number. (If the conversion fails, we shall use zero or 0.00 as the default value.)</p>
    <p>If the field is a list, we shall try to find a list item where the fields default value matches the lists item’s ListItemKey.</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><pre class="c40"><code>int
     MaxLength</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>Maximum length for strings, if set.</p>
    <p>0 means no restriction. (Though sooner or later <strong>something</strong> will no doubt overflow if you pile on the gigabytes.)</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><pre class="c40"><code>FieldAccessInfo
     Access</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>Access restrictions on the field</p>
    <p> </p></td>
    </tr>
    </tbody>
    </table>
     
    [** **]()
    ### [Enum FieldMetadataTypeInfo]()
    Describes the different field types that can be offered by the connector:
    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td><pre class="c40"><code>Checkbox</code></pre>
    <pre class="c40"><code> </code></pre></td>
    <td><p>Boolean field. Contains 0 or 1</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><p>Text</p>
    <p> </p></td>
    <td><p>Standard text field</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><p>Password</p>
    <p> </p></td>
    <td><p>Standard text field, but presented with **** masking in a GUI setting</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><p>Integer</p>
    <p> </p></td>
    <td><p>Integer field; whole numbers only</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><p>Double</p>
    <p> </p></td>
    <td><p>Double/decimal field</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><p>List</p>
    <p> </p></td>
    <td><p>Refers to a given list by name. The list items need to be available from the Sync Connection through the GetList and GetListItems methods</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><p>Datetime</p>
    <p> </p></td>
    <td><p>Datetime field</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><p>Label</p>
    <p> </p></td>
    <td><p>Static text. Will not be editable in a GUI setting.</p>
    <p> </p></td>
    </tr>
    </tbody>
    </table>
     
    [** **]()
    ### [Enum FieldAccessInfo]()
    This enum describes access restrictions and mandatory status.
    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td><p>Normal</p>
    <p> </p></td>
    <td><p>Normal field, no particular restrictions</p>
    <p> </p></td>
    </tr>
    <tr class="even">
    <td><p>Mandatory</p>
    <p> </p></td>
    <td><p>This field is mandatory (see section “Default value setup”)</p>
    <p> </p></td>
    </tr>
    <tr class="odd">
    <td><p>ReadOnly</p>
    <p> </p></td>
    <td><p>This field is read-only</p>
    <p> </p></td>
    </tr>
    </tbody>
    </table>
     
     
     
    
    
