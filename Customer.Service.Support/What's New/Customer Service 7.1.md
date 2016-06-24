<properties date="2016-06-24"
/>

In 7.1 we have added:

* CK Editor support, in addition to the older FCK editor.
* SOAP tickets can be used to authenticate a normal web session.
* New ejScript functions (DateTime.Move, Map, SearchEngine)
* Extra menus have been improved to have a configurable (drop down) list of executables, as well as support for extra tables.
* Extra fields now support three new types related to S & M: Sale relation, Project relation, Appointment relation.
* We now support a new control i custom screens: chart. This control will allow you to show various charts using our embedded chart library. Supported types for now are: pie, line, bar and column. Using ejScript, you can use these charts to visualize pretty much anything stored in our database.
* When an ejScript gives an error because of an unknown variable name or function name, we will suggest alternatives which are similar.

ejScript changes:

* eMail.setValue("envelopeFrom", "...");
* Map: increaseValueForKey(String key, Integer delta). increaseValueForKey(String key, Float delta).
* getVariable("activeUsername") to get the username of the active user in ejscript.
* getSessionVariables(). Will return all session variables available for the current session.
* getVariables(). Will return all variables (such as "url", "activeUserid", etc).
* new constructor: DateTime(year, month, mday, hour, minute, sec).
* SearchEngine has a new function addCriteria which accepts field, operator and value. RowOperator defaults to "OperatorAnd", and indent defaults to 0.
* Company.getFormattedAddress and Company.setFormattedAddress have been updated to return/use the class NSLocalizedFieldArrayArray instead of LocalizedFieldArrayArray.
* MainMenu.addGroup() which accepts a final parameter containing an URL. This will allow you to create menu groups which navigate somewhere.
