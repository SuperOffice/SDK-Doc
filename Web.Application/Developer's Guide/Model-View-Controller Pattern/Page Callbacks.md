<properties date="2016-06-24"
SortOrder="6"
/>

Page Callbacks and Postbacks
----------------------------

Once a page is rendered, it’s logical to assume that the information it contains is probably going to change and needs to be persisted back to a data store somehow. When that happens, the same path of code execution occurs. That is to say that the framework re-initializes the datahandlers and then re-initializes the controls. This time, however, a call to the UpdateDataSource method for each control is invoked. This gives the view an opportunity to communicate any changes with the Model – the datahandler, which is then responsible for persisting those changes.

**Figure Five**: Invoking a save process

<img src="Page%20Callbacks_files/image001.jpg" width="493" height="476" />
