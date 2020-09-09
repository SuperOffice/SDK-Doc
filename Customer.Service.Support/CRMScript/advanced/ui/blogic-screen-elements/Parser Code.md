---
title: Parser Code
path: /Blogic/Screen Elements/Parser Code
sortOrder: 48
---


This element allows one to display any HTML text, which may contain data from the database as Parser-variables. The database query is defined using eJournals one-line query syntax, by entering the following fields:


fields.length: The number of fields to query
fields.n.field: The field n to fetch

where.length: The number of where conditions
where.n.field: The field for where condition n
where.n.operator: The operator
where.n.value: The value
where.n.valueId: If set to true, then the active id for the page will be used for the value.
where.n.rowOperator: The row operator
where.n.critPriority: The indent of the row

order.length: The number of order fields
order.n.field: The field to order by
order.n.direction: "asc" or "desc".

limit: Limits the number of found rows

Furthermore, the body fields contains the HTML text to use for the element. The results from the query will be stored in the parser as the name of the queried fields, e.g. "ticket.title", "ticket.id", "customer.display\_name". Try using %PARSER\_TREE% to view all the available values.



###This component also supports ajax. Here is a simple example:###

\<script language='javascript' src='/javascript/ajax.js'>\</script>
\<script language='javascript' src='/javascript/xml.js'>\</script>
\<script>
function `fetchStuff()`

    {
      var message = "<someCommand ejScriptIncludeId='testAjax'>\n";
      message += "  <someNode>100</someNode>\n";
      message += "  <someNode>200</someNode>\n";
      message += "</someCommand>\n";
    
      ajax_addRequest("myTestControl", "EjScript", message)
    }
    
    function EjScript_processResponse(p_xmlNode)
    {
      var name = getAttribute(p_xmlNode, "name");
      var elem = document.getElementById("myTestField");
      elem.value = name + ": ";
    
      for (var i = 0; i < getLength(p_xmlNode.childNodes); i++)
      {
          if (getNodeName(getChild(p_xmlNode, i)) == "result")
            elem.value = elem.value + getText(getChild(p_xmlNode, i)) + " ";
      }
    }
    </script>
    
    <input type="text" name="myTestField" id="myTestField" value="">
    <input type="submit" name="testScript"  id="testScript" value="testScript" onClick="fetchStuff();return false;">



The function EjScript\_processResponse(p\_xmlNode) is called by the ajax framework, and if you have several such ajax based controls, you can test for a name match in the xml so you know what control to update. The name is what you used in  "ajax\_addRequest("myTestControl", "EjScript", message)". An ejscript is run by the ajax application on the server, you select which ejscript in the xml request.



###The ejscript may do something like this:###


    #setLanguageLevel 2;
    
    print("  <result>\n");
    print("Number of nodes: " + getVariable("nodes.length"));
    print("  </result>\n");
    
    for (Integer i = 0; i < getVariable("nodes.length").toInteger(); i++)
    {
      print("  <result>\n");
      print("Node " + i.toString() + ": " + getVariable("nodes." + i.toString() + ".name") + "-" + getVariable("nodes." + i.toString() + ".value"));
      print("  </result>\n");
    }




