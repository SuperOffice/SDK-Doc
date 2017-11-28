

##SUMMARY


New in Seven.


There are new methods to support notification when an entities fields have changed. Today there exists the OnCurrentXxxFieldChanged event, which is raised when on field on an entity has been altered. This has been seen as a chatty method. The new OnXxxFieldsChanged (plural) methods support a single atomic notification when an entity has changed, and gives more context to the actual change. The old methods still exist and can, but are not required to, be disabled through preferences in the SoAdmin client.

In addition to decreasing chatter, the new methods enable greater access to notification in areas there were previously inaccessible, i.e. when an appointment was accepted or rejected.





##EXAMPLE

![](../../Examples/vbs/ClientScript.OnRelationFieldsChanged.vbs.txt)





