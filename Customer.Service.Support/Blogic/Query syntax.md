---
title: Query syntax
path: /Blogic/Query syntax
sortOrder: 6
---


1. To avoid using complicated SQL queries, which may be database vendor specific, we have developed our own query syntax. The query syntax is line-based and is built from the following elements.



1. A set of fields.
2. A set of criterias (where-conditions).
3. A set of orders.



2. First of all, a query will always have a root table (normally the leftmost table in a set of joins). When specifying a field (for retrieving, using in a where or order clause), the syntax is to start with this table, and then use dots (".") to access fields and relations. For instance, the table ticket has a field title. Given that the ticket table is the root for the query, we may access the title field with "ticket.title". Furthermore, the ticket table has the field "cust\_id" which is a foreign relation to the customer table, which again has a field "company" which is a relation to the company table, which again has a column "name". This field may then be accessed as "ticket.cust\_id.company.name".



3. Sometimes, one need to lookup a relation the other way, i.e. many-to-one, but starting at the "many" table. In this case, the following notation is used, for instance to access something in the message table which is related to the ticket table through the field "message.ticket\_id". So, to get the message's created-at value, starting with the ticket table, we specify "ticket.(message->ticket\_id).created\_at". Notice how, inside the parenthesis, we specify the table to access, and the field in that table which points to the id of the current table.



4. Conditions, or where-clauses are constructed from zero or more lines. Each line will contain a field, an operator, a value, a row-operator and an indent. The field will be compared to the value, using the operator. The row-operator is used to relate this line to the next line (i.e. "OR" or "AND"), and the indent value is used for specifying parentesis around the conditions. For instance, the following lines:


"ticket.status", "OperatorEquals", "1", "OperatorAnd", 0
"ticket.owned\_by", "OperatorEquals", "2", "OperatorOr, 1
"ticket.owned\_by", "OperatorEquals", "3", "OperatorOr, 1

will construct the following sql:

"ticket.status = '1' and (ticket.owned\_by = 2 or ticket.owned\_by = 3)"



###The algorithm for the indent is simple. When reading the lines from top to down, do the following:###


1. Whenever the indent increases from one line to the next, add a left parenthesis.
2. Whenever the indent decreases from one line to the next, add a right parenthesis.



5. Conclusively, a query is defined by adding select-lines, where-lines and order-lines. The joins are defined by the fields used in the query. How lines are added, dependes on the context (i.e. if we are supplined configuration values for a bLogic element, or if we are using ejScript). Furtermore, there are variations on functionality and naming-conventions for difference bLogic elements. Following are two examples, one for ejScript and one for a general bLogic element.



    // Ejscript
    SearchEngine se;
    se.addField("ticket.id");
    se.addField("ticket.title");
    se.addField("ticket.category.fullname");
    se.addField("ticket.cust_id.company.our_contact.email");
    
    se.addCriteria("ticket.category", "OperatorEquals", "10", "OperatorAnd");
    se.addCriteria("ticket.title", "OperatorBeginsWith", "test", "OperatorAnd");
    
    se.addOrder("ticket.id", true); // true = Ascending
    
    // Blogic -- NOTE: the naming convention here will vary for different elements!
    fields.length = 4
    fields.0.field = ticket.id
    fields.1.field = ticket.title
    fields.2.field = ticket.category.fullname
    fields.3.field = ticket.cust_id.company.out_contact.email
    
    criteria.length = 2
    criteria.0.field = ticket.category
    criteria.0.operator = OperatorEquals
    criteria.0.value = 10
    criteria.0.rowOperator = OperatorAnd
    criteria.0.indent = 0
    criteria.1.field = ticket.title
    criteria.1.operator = OperatorBeginsWith
    criteria.1.value = test
    criteria.1.rowOperator = OperatorAnd
    criteria.1.indent = 1
    
    order.length = 1
    order.0.direction = asc


