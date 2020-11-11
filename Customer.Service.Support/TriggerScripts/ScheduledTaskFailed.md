# ScheduledTaskFailed (300)

Runs after scheduled task failed

Input values:

* `entryId` = scheduled task id
* `retries` = schedule number of retries
* `disabled` = schedule disabled ? 
* `errorMessage` = error message string
* `nextExecution` = next scheduled start (datetime)
* `executionTime` = int
* `scriptId` = script id to execute
* `scriptName` = name of script
* `scriptIncludeId` = unique id of script


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("entryId");
```
