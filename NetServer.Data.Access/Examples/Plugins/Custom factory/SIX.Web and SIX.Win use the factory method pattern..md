<properties date="2016-05-11"
SortOrder="6"
/>

User can create their own classes to implement their own methods (functionalities). In factory method user can create classes which can override the supper classes. Customization can be done by the user by creating a new class library and within this class library user can initiate the attribute as shown below.

```
[ClassFactory(typeof(SuperOffice.CRM.Rows.AddressRow),
FactoryPriority=FactoryPriority.High)]
```

 

We make use of the attribute ClassFactory and two parameters to be passed in. First one is type of the attribute and for the second one we set the Priority as FactoryPriority.High.

An important thing to remember!!!!

Once we set the priority as high then only the created class library can override the methods which are alredy included in the SIX.Web and SIX.Win.
