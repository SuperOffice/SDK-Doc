<properties date="2016-05-11"
SortOrder="4"
/>

[Search in ERP]()
------------------------------

There are two ways of searching for ERP actors – either a “simple search” that is driven by a search string and returns a set of fields; or a criteria-driven search where the user is present with a “Find Dialog” (see sketch below) where various criteria – offered by the connector – can be filled in.

The search functionality is used when connecting a SuperOffice CRM Entity to an ERP Actor the first time (you cannot simply create new ERP Actors without first checking if a candidate already exists); and for mass imports from ERP to CRM.

When connecting a CRM Entity to an ERP Actor, a simple search is performed automatically as the connect dialog is opened, using the name from the CRM side as the search string. If this search proves unsatisfactory, the user can click the Magnifier symbol and get the Find Dialog, where any criteria provided by the connector can be used to do a more advanced, structured search.

The advanced search is performed in two steps. In step 1 the GetSearchableFields method is called, and the connector replies with the field keys of those fields it is prepared to accept as search criteria. In step 2, the SearchActorsAdvanced method is called to perform the search.

Each criterion selected by the user is sent as a SearchRestrictionInfo object, which contains a field key, an operator and a value. For the BETWEEN and IN operators, multiple values are included. The connector should perform the search and return the results, including those fields that have been specified as result fields in the call.

 

<img src="Erp%20Sync%20Connector%20Interface_files/image002.png" id="Picture 15" width="545" height="410" />

2 : An example of a search screen in SuperOffice taking advantage of the extended search interface.

 

 

 



[Advanced search]()
================================

The connector can also choose to offer an advanced search by exposing one or more field names through GetSearchableFields (fields are exposed per actor type). If advanced search is supported, the connector will have to support all required search operators, and a few “special” search keys; see below.

 

[The SearchRestrictionInfo class]()
------------------------------------------------

Describes a search restriction using three properties:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Property</strong></p>
<p><strong> </strong></p></td>
<td><p><strong>Information</strong></p>
<p><strong> </strong></p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>string
 FieldKey</code></pre>
<pre lang="cs"><code> </code></pre></td>
<td><p>Describes which field should be searched (will always be one of the fields the connector exposes through GetSearchableFields).</p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>string Operator</code></pre></td>
<td><p>Describes which operator to use for the search. See <strong>SearchOperators</strong> below.</p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>string[] Values</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The value(s) to search for. This array will usually only have a single value, unless the operator describes otherwise (e.g. the operators “OneOf” and “NotOneOf”.</p>
<p>These values will be encoded in the same way as normal field values elsewhere (see <strong>Field value formats and conventions</strong>)</p></td>
</tr>
</tbody>
</table>

 

 

[SearchOperators]()
--------------------------------

Each field type will require supporting a different set of search operators (e.g. equals, not equals, one of, contains, etc). These operators are conveniently available as string constants in the classes **StringOperators**, **IntOperators**, **DoubleOperators**, **BoolOperators**, **DateTimeOperators** and **ListOperators** in the SuperOffice.ErpSync.Contract assembly. For a complete list, see the appendix section of this document.

 

[SpecialSearchKeys]()
----------------------------------

In addition to the required operators, there are a couple of special values that need to be supported for the **FieldKey** property of a **SearchRestrictionInfo** object. These special keys are available as constants in the SpecialSearchKeys class in the Contract assembly.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>FieldKey value</strong></p>
<p><strong> </strong></p></td>
<td><p><strong>Information</strong></p>
<p><strong> </strong></p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>“ParentErpKey”
 / 
const
 
string
 PARENT_ERPKEY</code></pre>
<pre lang="cs"><code> </code></pre></td>
<td><p>If this is passed in as a search restriction, the search should restrict itself to only searching for actors with a specified parent actor key.</p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>&quot;ParentActorType&quot; / const string PARENT_ACTORTYPE</code></pre></td>
<td><p>If this is passed in as a search restriction, the search should restrict itself to only searching for actors with a specified parent actor type.</p></td>
</tr>
</tbody>
</table>

 

[Search operators]()
--------------------

Here are the operators the connector will need to support for the different field types if it exposes fields available for advanced search (code copied from the various search operator classes in SuperOffice.ErpSync.Contracts):

### [String operators]()

```
/// <summary>
/// Supported operators for string fields through advanced search
/// </summary>
public static class StringOperators
{
        /// <summary>
        /// "Equals" operator. Should not be case sensitive
        /// </summary>
        public const string EQUALS = "=";
 
        /// <summary>
        /// "Begins with" operator. Should not be case sensitive
        /// </summary>
        public const string BEGINS_WITH = "begins";
 
        /// <summary>
        /// "Contains" operator. Should not be case sensitive
        /// </summary>
        public const string CONTAINS = "contains";
 
        /// <summary>
        /// "Ends with" operator. Should not be case sensitive
        /// </summary>
        public const string ENDS_WITH = "ends";
 
        /// <summary>
        /// "Does not begin with" operator. Should not be case
sensitive
        /// </summary>
        public const string NOT_BEGINS_WITH = "notbegins";
 
        /// <summary>
        /// "Does not contain" operator. Should not be case
sensitive
        /// </summary>
        public const string NOT_CONTAINS = "notcontains";
 
        /// <summary>
        /// "Does not end with" operator. Should not be case
sensitive
        /// </summary>
        public const string NOT_ENDS_WITH = "notends";
 
        /// <summary>
        /// "Does not equal" operator. Should not be case sensitive
        /// </summary>
        public const string NOT_EQUALS = "isnot";
 
        /// <summary>
        /// "Between" operator. Search values are presented in
desired order. Should not be case sensitive
        /// </summary>
        public const string BETWEEN = "between";
}
 

 
```

### [Integer operators]()


    /// <summary>
    /// Supported operators for int fields through advanced search
    /// </summary>
    public static class IntOperators
    {
            /// <summary>
            /// "Equals" operator.
            /// </summary>
            public const string EQUALS = "=";
     
            /// <summary>
            /// "Greater than" operator.
            /// </summary>
            public const string GREATER_THAN = ">";
     
            /// <summary>
            /// "Less than" operator.
            /// </summary>
            public const string LESS_THAN = "<";
     
            /// <summary>
            /// "Greater than or equals" operator.
            /// </summary>
            public const string GREATER_OR_EQUAL = ">=";
     
            /// <summary>
            /// "Less than or equals" operator.
            /// </summary>
            public const string LESS_OR_EQUAL = "<=";
     
            /// <summary>
            /// "Does not equal" operator.
            /// </summary>
            public const string NOT_EQUALS = "!=";
     
            /// <summary>
            /// "Between" operator. Search values are presented in
    desired order.
            /// </summary>
            public const string BETWEEN = "between";
    }

 

### [Double operators]()

```
/// <summary>
/// Supported operators for double fields through advanced search
/// </summary>
public static class DoubleOperators
{
        /// <summary>
        /// "Equals" operator.
        /// </summary>
        public const string EQUALS = "=";
 
        /// <summary>
        /// "Greater than" operator.
        /// </summary>
        public const string GREATER_THAN = ">";
 
        /// <summary>
        /// "Less than" operator.
        /// </summary>
        public const string LESS_THAN = "<";
 
        /// <summary>
        /// "Greater than or equals" operator.
        /// </summary>
        public const string GREATER_OR_EQUAL = ">=";
 
        /// <summary>
        /// "Less than or equals" operator.
        /// </summary>
        public const string LESS_OR_EQUAL = "<=";
 
        /// <summary>
        /// "Does not equal" operator.
        /// </summary>
        public const string NOT_EQUALS = "!=";
 
        /// <summary>
        /// "Between" operator. Search values are presented in
desired order.
        /// </summary>
        public const string BETWEEN = "between";
}
```

 

### [Bool operators]()

```
/// <summary>
/// Supported operators for boolean fields through advanced search
/// </summary>
public static class BoolOperators
{
        /// <summary>
        /// "Equals" operator
        /// </summary>
        public const string EQUALS = "=";
}
```

 

### [List operators]()

```
/// <summary>
/// Supported operators for list fields through advanced search
/// </summary>
public static class ListOperators
{
        /// <summary>
        /// "Equals" operator
        /// </summary>
        public const string ONE_OF = "oneof";
 
        /// <summary>
        /// "Does not equal" operator
        /// </summary>
        public const string NOT_ONE_OF = "notoneof";
}
```

 

### [DateTime operators]()

**Note on datetime comparisons:** The connector itself will be responsible for determining the best comparison method for DateTime values. In some cases, the correct way is to only compare the Date part of the value, while in other cases it will probably be better to also compare the Time.

The **IsMatchDateTime** method takes an optional parameter of type DateTimeOperators.MatchType (defaults to DateAndTime\_IgnoreSeconds) which the connector can use to tell the method how to compare the restriction and search values.

```
/// <summary>
/// Supported operators for datetime fields through advanced search
/// </summary>
public static class DateTimeOperators
{
        public enum MatchType
        {
                DateOnly,
                TimeOnly,
                TimeOnly_IgnoreSeconds,
                DateAndTime,
                DateAndTime_IgnoreSeconds
        }
 
        /// <summary>
        /// "Equals" operator
        /// </summary>
        public const string EQUALS = "=";
 
        /// <summary>
        /// "Before" operator   /// </summary>
        public const string BEFORE = "before";
 
        /// <summary>
        /// "After" operator
        /// </summary>
        public const string AFTER = "after";
 
        /// <summary>
        /// "Before or equal" operator
        /// </summary>
        public const string BEFORE_OR_EQUAL = "beforeOrEqual";
 
        /// <summary>
        /// "After or equal" operator
        /// </summary>
        public const string AFTER_OR_EQUAL = "afterOrEqual";
 
        /// <summary>
        /// "Between" operator
        /// </summary>
        public const string BETWEEN = "between";
}
```

 
