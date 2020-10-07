---
title: Data table
path: /Blogic/Screen Elements/Data table
sortOrder: 22
---

Please use this element instead of static tables, etc.

This is a new version of the old Screen element "Table", but with more features.
When giving databasefields and criterias, the table is automatically filled with data.



###The following configuration values are required:###


 - "fields"
    - "fields.n.label": the header of column n
    - "fields.n chop": set this to max count of characters in column n
    - "fields.n.footerFunction"
   
**Either:**   
    - "fields.n.field": the database field for column n
   
**Or:**   
    - "fields.n.function"
        - "fields.n.functionParams"




###Optional values on fields:###


 - "fields.n.hidden": true if column n should be hidden
 - "fields.n.selectRow": set this to true if you want this column to contain checkboxes.
 - "fields.length": Count of fields




###To constrain which data to have in the table:###


 - "criteria"
    - "criteria.n.operator": the operator for criteria n
    - "criteria.n.field": the database field for criteria n
    - "criteria.n.rowOperator": operator between criteria n and the next criteria.
    - "criteria.n.indent": the count of parenthesis surrounding the criteria
    - "criteria.length": count of criterias. Must be given even if there is only one criteria
   
**Either:**   
    - "criteria.n.value": the value for criteria n
   
**Or:**   
    - "criteria.n.valueId" if true, then value is automatically set to the screen's entryId. Criteria must contain either value or valueId




###Orders and groups are optional:###


 - "orders.n.column": the database field to order
 - "orders.n.direction": the direction to order, 0 is ascending, 1 is descending
 - "orders.n.orderByInteger"
 - "orders.length": count of orders



 - "groups.n.column": the database field to group by
 - "groups.n.direction"
 - "groups.n.orderByInteger"
 - "groups.length": count of groups




###The following values are optional:###


 - "maxHeight": set this to the count of pixels for maximum height of the table
 - <b>"pageSize"</b>: set this to the count of rows on each side in the table. If the result contains more rows than pageSize, there will be links at the bottom of the table with next page and previous page.
 - <b>"width"</b>: set this to the width of the table 100%, 150 px, ..
 - <b>"limit"</b>: set this to the maximum count of rows to list.
 - <b>"url"</b>: set this to the url. The same url on the entire row.
 - <b>"distinct"</b>: the database field that will be distinct in the result
 - <b>"dbDistinct"</b>: the database field that will be distinct in the result (The distinct operation is done by the database)
 - <b>"orderColumn"</b>: the database field that will have the default order
 - <b>"orderAsc"</b>: if true then default order is ascending, else it will be descending
 - <b>"showTicketStatus"</b>: If you set this to true, and your table contains a column ticket.status, then the entries in this will get an envelope on their left who are blue, yellow or red according to the read status of the ticket. The text will be bold if the read status is yellow or red.
 - <b>"showContactColors"</b>: If you set this to true, the text color is grey if the contact is deleted, and the color is red/black if the contact is stopped.
 - <b>"showPersonColors"</b>: If you set this to true, the text color is grey for persons that is retired. Only use this if you are listing persons.
 - <b>"newItemCommandField"</b>: Use this to add a commandbutton at the bottom of the table. These two are used in the tables in the company screen:
     - "ticket.cust\_id"  gives a button to add a new request to that customer
     - "person.contact\_id" gives a button to add a new person to the company
 - <b>"colorField"</b>: The field that have the information about the color of the row.
 - <b>"colorFieldCodes"</b>
 - <b>"profileBaseTable"</b>:
 - <b>"table"</b>
 - <b>"linkUrl"</b>
 - <b>"linkAppendField"</b> the database field to append to the end of the url. Must be a field in a column
 - <b>"baseUrl"</b>
 - <b>"appendField"</b>


Can be combined with callback functions that change the value of a field. This will be explained further down the page.


 - "callbackInit": the name of a function written in the body pane for initialising the SearchEngine that is working behind the table.
 - <b>"callbackDisplay"</b>: the name of a function written in the body pane that can manipulate the resulting fields that are listed in the table.
 - <b>"callbackSort"</b>: the name of a function written in the body pane that can sort the resulting rows that are listed in the table.


NOTE: this class is inherited from StaticGrid, which means that all setFieldValue and getFieldValue functions for StaticGrid also will work on this one.


Example on these three functions will be given at the end of this section.

Example of a data table containing requests where the request's id is less than 50. The table is listing the title, the owner's username and the status. The id is a hidden field.


    fields.0.field = ticket.title
    fields.0.label = Tittel
    fields.1.field = ticket.owned_by.username
    fields.1.label = Eier
    fields.2.field = ticket.id
    fields.2.hidden = true
    fields.3.field = ticket.status
    fields.3.label = Status
    fields.length = 4
    
    criteria.0.field = ticket.id
    criteria.0.indent = 0
    criteria.0.operator = OperatorLt
    criteria.0.rowOperator = OperatorAnd
    criteria.0.value = 50
    criteria.length = 1
    
    showTicketStatus = true
    url = ticket.exe?action=listTicket&ticketId=
    

For manipulating the colors of the rows and the output of other fields, this is an example for doing that. We continue with the example above.

We add another field that will be hidden, to store the value of the colors.
Which field we choose is not importent but it can not be a field that is already in the table. We have to change fields.length from 4 to 5.

fields.4.hidden = true

    fields.4.field = ticket.author
    fields.length = 5
    



###Then adding the names of the functions:###
callbackDisplay = formatDisplayField
callbackInit = init

    colorField = ticket.author
    

Here is the code added in the body pane


    Void init(SearchEngine se)
    {
      // Here you can manipulate the SearchEngine as you like.
      se.addField("ticket.owned_by");
    }
    
    String formatDisplayField(SearchEngine se, String field)
    {

  /* Here we add a text on the owner's column for the users that have
  status not present */

      if(field == "ticket.owned_by.username")
      {
        User u;
        u.load(se.getField("ticket.owned_by").toInteger());
        if (u.getValue("status") == "2")
          return se.getField(field) + " : Ikke tilstede";
        else
          return se.getField(field);
      }

  /* This is an unfortunate side-effect of using callback functions. You have to
  translate status ids to text */

      else if(field == "ticket.status")
      {
        if(se.getField("ticket.status").toInteger() == 1)
          return "Open";
        else if (se.getField("ticket.status").toInteger() == 2)
          return "Closed";
        else if (se.getField("ticket.status").toInteger() == 3)
          return "Postponed";
        else if (se.getField("ticket.status").toInteger() == 4)
          return "Deleted";
      }
      else if (field == "ticket.author")
      {
        // Here we change the colorfield according to the ticket's status
        if(se.getField("ticket.status").toInteger() == 1)
          return "#8888FF";
        else
          return "#FF8888";
      }
      // default, return the field unchanged.
      return se.getField(field);
    }


