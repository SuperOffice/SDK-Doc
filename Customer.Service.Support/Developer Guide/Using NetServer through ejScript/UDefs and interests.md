<properties date="2016-06-24"
SortOrder="19"
/>

UDefs and interests are not available through SearchEngine, but through NetServer entities

Could be synchronized into an extra field if needed.

Since udefs and interests are not available through SearchEngine, you need to access these through NetServer.

If you need to access udefs or interests with a SearchEngine, or you need to be able to profile these fields, you can for example create a regular task that does this.

Now, let’s look at how you can access the interests registered for a given person. In this example you will also see how a vector of objects in NetServer is represented in ejScript.

Example: display all selected interests for a person

```
#setLanguageLevel 3;
NSPersonAgent pAgent;
NSPersonEntity personEntity = pAgent.GetPersonEntity(1);
NSSelectableMDOListItem[] interests = personEntity.GetInterests();
for (Integer i=0; i<interests.length(); i++)
{
  if (interests[i].GetSelected())
    print(interests[i].GetName() + "\n");
}
```
