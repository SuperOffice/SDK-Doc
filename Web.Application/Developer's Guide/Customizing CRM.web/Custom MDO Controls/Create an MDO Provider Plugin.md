<properties date="2016-06-24"
SortOrder="9"
/>

The first thing we are going to start with is to create a class that will actually fill the MDO with data. Just add a new class to your project, add the MDOProviderPlugin attribute to it, and inherit SuperOffice.CRM.Lists.LiteralsOnlyBase;

```
[MDOProviderPlugin("DevNetTestList")]
public class testProvider : SuperOffice.CRM.Lists.LiteralsOnlyBase
{

}
```

The name you pass in to the attribute will be what you use to reference the class later from the MDO control itself.

To add items, override the protected AddItems method;

```
protected override void AddItems()
{
    base.RawRootItems.Add(new SoListItem(1, "First item", "This is the first item", String.Empty));
    base.RawRootItems.Add(new SoListItem(2, "Second item", "This would be the second item", String.Empty));
    base.RawRootItems.Add(new SoListItem(3, "Third item", "This is the third and last item", String.Empty));
}
```

The RawRootItems collection contains SoListItem objects, which contain an id, a name, a tooltip string, etc.
