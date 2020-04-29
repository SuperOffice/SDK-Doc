---
title: Select multiple relations
path: /Blogic/Screen Elements/Select multiple relations
sortOrder: 69
---


This element is used for selecting several relations (i.e. primary id's from a table). It is consequently quite similar to "Select relation", but is used when more than one relation is required. The relations are displayed in a grid.




###The element accepts the following configuration values:###


 - "FlagRadioForPrimary": If this field is set, then there will be a leftmost column with radio buttons for selecting the primary entry.
 - <b>"FlagCheckbox"</b>: If this field is set, then there will be a leftmost column with checkboxes for each row.
 - <b>"FlagOnlyOne"</b>: If this field is set, then this control will only allow one entry (use this control instead of "Select relation"). Available from 4.0.
 - <b>"FlagNotEmpty"</b>: If this field is set, then an empty relation is not allowed. Available from 4.0.
 - <b>"FlagNoNewButton"</b>: This this field is set, the no new button is added. Available from 4.2.21.
 - <b>"idField"</b>: The field containing the id-value for the relation.
 - <b>"limit"</b>: will set the limit of search results. Default is 25.




###The query is specified against the database with the following array of fields:###


 - "column.length"
 - "column.n.displayField": The database field to display in this column.
 - "column.n.searchField": The database field to search for this column value.
 - "column.n.operator": The operator used when searching this column, e.g. "OperatorBeginsWith", "OperatorEquals", "OperatorContains".
 - "column.n.label": The header for this column.


...and with the following criteria:


 - "criteria.length"
 - "criteria.n.field"
 - "criteria.n.operator": E.g. "OperatorEquals"
 - "criteria.n.value"
 - "criteria.n.rowOperator"
 - "criteria.n.indent": The indent for the criteria


..and with the following field order:


 - "order.length"
 - "order.n.field"
 - "order.n.desc": 1 for descending, 0 for ascending order




###Functions:###


 - setFieldValue(string, Map):
    - <b>"addId"</b>: Adds a row to the table with the entry with given id. The rest of the values are looked up in the database. Populate Map:
        - <b>"id"</b>
        - <b>"checked"</b>
    - <b>"addRow"</b>: Adds a row to the table. Populate map:
         - <b>"id"</b>
         -<b>"checked"</b>
         -<b>"hidden"</b>
         - "field.n": with n ranging from 0 to the number of columns minus 1
    - <b>"addCriteria"</b>: Adds a criteria. Popluate map:
         - <b>"field"</b>
         - <b>"operator"</b>
         - <b>"value"</b>
         - <b>"rowOperator"</b>
         - <b>"indent"</b>
    - <b>"addColumn"</b>: Adds a column: Populate map:
         - <b>"displayField"</b>
         - <b>"searchField"</b>
         - <b>"operator"</b>
         - <b>"label"</b>
    - <b>"clearCheckedIds"</b>: Clears the checked rows. Available from 4.2.21.



 - `getFieldValue(string)`:
    - <b>"primaryId"</b>: Returns the id of the selected row if FlagRadioForPrimary is set
    - <b>"rows"</b>: The number of rows.
    - <b>"columns"</b>: The number of columns.
    - "row.n.id": The id of row n.
    - "row.n.m": The content of row n, column m.
    - <b>"checkedRows"</b>: Ids of checked rows as a comma-separated list


This component also support fetching result set from ejscript given with the keyword "ejScriptIncludeId = myScriptIncludeId". A very simple example script:


    #setLanguageLevel 2;
    print("<results overflow='false'>\n");
    String idField = "category.id";
    for (Integer i = 0; i < 20; i++)
    {
      print("  <result>\n");
      String idField = i.toString();
      idField = idField.xmlEncode();
      print("    <id-field>" + idField + "</id-field>\n");
      print("    <display-fields>\n");
      print("    <display-field>" + idField + "-1" + "</display-field>\n");
      print("    <display-field>" + idField + "-2" + "</display-field>\n");
      print("    <display-field>" + idField + "-3" + "</display-field>\n");
      print("    </display-fields>\n");
      print("  </result>\n");
    }
    print("</results>\n");



In the script you also have access to the config values - you can use:


- getVariable("displayField.length");
- getVariable("displayField." + X);
- getVariable("whereField.length");
- getVariable("whereField." + X);
- getVariable("whereValue." + X);
- getVariable("rowOperator." + X);
- getVariable("whereField." + X);
- getVariable("whereIndent." + X);
- getVariable("orderField.length");
- getVariable("orderField." + X);
- getVariable("orderDirection." + X);
- getVariable("limit." + X);


