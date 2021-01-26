<properties date="2016-06-24"
SortOrder="160"
/>

*Description*:

Retrieves information about all extra tables and all columns in each extra table.

 

The flags returned for extra fields are a bit combination of the following:

 

      FlagSearchable                              = (1&lt;&lt;0),            // The field is searchable
      FlagPublic                                       = (1&lt;&lt;1),            // The field is public (external) 
      FlagInNewTicket                           = (1&lt;&lt;2),            // The field is viewed in new-ticket form 
      FlagSetWhenClicked                    = (1&lt;&lt;3),            // The field is set (datetime) when clicked  
      FlagCannotChange                       = (1&lt;&lt;4),            // The field cannot change after being set 
      FlagDropDown                               = (1&lt;&lt;5),            // The field is a dropdown (extra string fields) 
      FlagReadable                                 = (1&lt;&lt;6),            // The field is directly readable from database 
      FlagDontEscape                            = (1&lt;&lt;7),            // Do not HTML-escape the value when displaying field 
      FlagDeleted                                     = (1&lt;&lt;8),            // The field is deleted 
      FlagIsId                                           = (1&lt;&lt;9),            // The field is the id 
      FlagIsForeignId                              = (1&lt;&lt;10),         // The field is a foreign id 
      FlagReadOnly                                = (1&lt;&lt;11),         // The field is not writeable 
      FlagUseDefault                              = (1&lt;&lt;12),         // Use default value for field if no value is supplied 
      FlagListRelations                           = (1&lt;&lt;13),         // List relations 
      FlagViewInList                               = (1&lt;&lt;14),         // View this field when listing rows 
      FlagHideHeaderIfEmpty             = (1&lt;&lt;15),         // Hide the header for this list if there are no entries 

 

*In Parameters*:

* sessionKey            - A valid session key.

*Out Parameters*:

* errorCode  - See appendix for error codes

* extraTables         - An array of all extra tables

  * id   - the id

  * name    - the name

  * flags    - the flags for this field (see above)

  * fields   - array of fields

* id

* name

* datatype    - see appendix

* flags          - see description

 

*Example*:
```
string sessionKey;

ticket.ticketService ticketService = new ticket.ticketService();

if(ticketService.login("test","test", out sessionKey) == "0")
{

       ticket.ExtraTablesStruct[] extraTables;
       string res = ticketService.getExtraTables(sessionKey, out extraTables);
       if(res == “0”)
       {
          foreach(i ticket.ExtraTableStruct in extraTables)
          {
            ...doStuffWithExtraTables...
          }
       }

}
```