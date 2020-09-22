---
title: Related dropdowns
uid: blogic_related_dropdowns
sortOrder: 18
---

This element is useful where the options in one drop-down depend on the value in another drop-down.

A typical scenario is the selection of fields in related extra tables. For example, you have a table containing products and a table containing modules and the module table has a foreign key to the product table. You want to restrict the user to select only a module that belongs to the selected product.

> [!NOTE]
> The drop-downs will probably be populated by values from different tables, so the IDs probably will be the same in both product and module. Therefore, the **IDs of the nodes must have a prefix** ( for example p for product and m for module) to insure that they are unique in all dropdowns.

## Configuration

| Setting          | Description                                          |
|:-----------------|:-----------------------------------------------------|
| printDownwards   | How to  list drop-downs<br/>true = list one per row<br/>false = list all in one row |
| notEmptyDropdown | The last drop-down that can't be empty. Numbering starts at 0 |
| selectFromTree   | Whether to show drop-downs as a tree chooser (Bool)  |
| labels.n.label   | The drop-down label                                  |
| labels.length    | The count of labels given                            |

## Functions

### getFieldValue( String value")

Returns all IDs of the resulting drop-downs in a comma-separated string.

### setFieldValue(String, Map)

| Action   | Map keys               | Description                         |
|:---------|:-----------------------|:------------------------------------|
| addNode  | id<br/>parent<br/>value<br/>isFolder | Adds node to drop-down.<br/>If parent is set, place node in the drop-down to the right of the parent. If no parent, place node in the first dropdown. |
| addLabel | label                  |                                     |
| set      | notEmptyDropdown<br/>printDownwards |                        |

```crmscript
map.insert("id", \<id>);
map.insert("parent", \<parent>);
map.insert("value", \<value>);
map.insert("isFolder", (0 or 1));
map.insert("notEmptyDropdown", \<int>);
map.insert("printDownwards", boolean (0 or 1));
```

### toString()

Returns all IDs of the resulting drop-downs in a comma-separated string.

## Example

The following is an example with tree dropdowns, for request, customer and the customer's email.

A 'c' is added in front of the ids of the customers, since the IDs of a request and a customer might be equal.

```crmscript
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

for (t.execute(); !t.eof(); t.next()) {
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

for (ts.execute(); !ts.eof(); ts.next()) {
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

for (e.execute(); !e.eof(); e.next()) {
  map.insert("id", e.getField(1));
  map.insert("parent", "c" + e.getField(0));
  map.insert("value",  e.getField(1));
  dd.setFieldValue("addNode", map);
}
```
