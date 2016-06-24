<properties date="2016-05-11"
SortOrder="122"
/>

If you have written a custom factory that is overriding a factory that NetServer has provided you should define it in this section. Once you define it, whenever you call the NetServer factory that you have overridden, NetServer will load the custom factory you have customized instead of the NetServer factory. 

```
<add key="SuperOffice.HDB.ContactRow"
value="CustomContactRow.HDB.dll" />
```

 

An Important Point to Remember!

In this key value combination, you should define the full name of the NetServer factory that you’re overriding and ensure the value is the DLL name that contains your custom factory.
