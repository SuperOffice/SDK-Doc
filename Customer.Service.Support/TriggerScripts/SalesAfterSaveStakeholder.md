# SalesAfterSaveStakeholder (1102)

Called after a sale stakeholder is saved.

Input values:

* `NewMembers` = "§" separated rows, each containing '|' separated columns: id, contact id, contact name, person id, stakeholder role id
* `ContactPersonList` = list of persons
* `CurrentContactName` = name string
* `CurrentContactId` = contact id
* `CurrentEntityName` = sale
* `SelectedId` = highlighted id
* `ExtraInfo`



## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("SelectedId");
```
