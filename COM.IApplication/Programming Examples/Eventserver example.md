---
uid: exampleEventserver
title: Eventserver example
---

Shows how an event-server can ble written.

This example relies on the fact that all VB6 forms also implement IDispatch -- they are valid COM objects, which is a requirement for the event server listeners.

This example listens to various application events, but not all of them. As you click on the navigator and other buttons, the listbox will fill up with event names.



[screenshot](../images/testappevents.gif)
