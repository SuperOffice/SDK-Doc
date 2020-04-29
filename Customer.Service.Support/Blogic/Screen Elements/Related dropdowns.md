---
title: Related dropdowns
path: /Blogic/Screen Elements/Related dropdowns
sortOrder: 53
---


This element is useful where the options in one dropdown are dependent of the value in another dropdown. A typical scenario can be selection of fields in related extratables.
For example, if you have a table containing products and a table containing modules and the module-table has a foreign key to the product table. You then only want the user to select a module that belongs to the selected product.




###The following configuration values are available:###


- "printDownwards": If true, the dropdowns will be listed one per row. Else, the dropdowns will be listed all in one row.
- <b>"notEmptyDropdown"</b>: An integer for which dropdown is the last of the dropdowns that cannot be empty. Numbering starts at 0
- <b>"selectFromTree"</b>: If true, the dropdowns are printed as a tree chooser (like we use for e.g. categories).
- "labels.n.label": The dropdown label
- "lables.length": The count of labels given




###Functions:###


 - setFieldValue(string, Map):
    - <b>"addNode"</b>: adds a node in a dropdown. Populating map:
        - <b>"id"</b>:
            - map.insert("id", \<id>)
        - <b>"parent"</b>: If set. node is automatically placed in the dropdown to the right of the parent. If no parent, the node is placed in the first dropdown.
            - map.insert("parent", \<parent>)
        - <b>"value"</b>: value is the text to put into the dropdown.
            - map.insert("value", \<value>)
        - <b>"isFolder"</b>: boolean
            - map.insert("isFolder", (0 or 1))
    - <b>"addLabel"</b>: map is populated with label
    - <b>"set"</b>: Populating map:
        - map.insert("notEmptyDropdown", \<int>): Which dropdown is the last of the dropdowns that cannot be empty. Numbers starting at 0
        - map.insert("printDownwards", boolean (0 or 1)): if true, then print the dropdowns one per row, else all dropdowns in one row.



- `toString()`
- `getFieldValue("value")`
Both return all the ids of the resulting dropdowns in a commaseparated string.





###NB:###
The dropdowns will probably be populated by values from different tables, so the ids probably will be the same in both product and module.
Because of that, the id of the nodes have to have a prefix, like p for product and m for module, to insure that they are unique in all dropdowns.

The following is an example with tree dropdowns, for request, customer and the customer's email.
A 'c' is added in front of the ids of the customers, since the ids of a request and a customer might be equal.



###Load script:###

    HtmlElement dd = getHtmlElement("dropdowns");
    Map map;
    
    map.insert("notEmptyDropdown", "0");
    map.insert("printDownwards", "true");
    dd.setFieldValue("set", map);
    
    map.insert("label", "Sak");
    dd.setFieldValue("addLabel", map);
    SearchEngine t;
    t.addField("ticket.id");
    t.addField("ticket.title");
    t.addCriteria("ticket.status", "OperatorLt", "4", "OperatorAnd", 0);
    t.addOrder("ticket.id", true);
    Integer i;
    for (t.execute(); !t.eof(); t.next())
    {
      map.insert("id", t.getField(0));
      map.insert("value",  t.getField(1));
      dd.setFieldValue("addNode", map);
      i = t.getField(0).toInteger();
    }
    
    map.insert("label", "Kunde");
    dd.setFieldValue("addLabel", map);
    SearchEngine ts;
    ts.addField("ticket_customers.ticket_id");
    ts.addField("ticket_customers.customer_id.display_name");
    ts.addField("ticket_customers.customer_id");
    ts.addCriteria("ticket_customers.ticket_id.status", "OperatorLt", "4", "OperatorAnd", 0);
    for (ts.execute(); !ts.eof(); ts.next())
    {
      map.insert("id", "c" + ts.getField(2));
      map.insert("parent", ts.getField(0));
      map.insert("value",  ts.getField(1));
      dd.setFieldValue("addNode", map);
    }
    
    map.insert("label", "Epost");
    dd.setFieldValue("addLabel", map);
    SearchEngine e;
    e.addField("cust_email.cust_id");
    e.addField("cust_email.email");
    for (e.execute(); !e.eof(); e.next())
    {
      map.insert("id", e.getField(1));
      map.insert("parent", "c" + e.getField(0));
      map.insert("value",  e.getField(1));
      dd.setFieldValue("addNode", map);
    }


