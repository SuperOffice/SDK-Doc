<properties date="2016-05-11"
SortOrder="3"
/>

As the word implies a dynamic selection is a selection that is bound to change dynamically and it’s based on search criteria and not just static members A typical criteria would be ”Add all contacts with a specific business type”. This would cause the member count of this selection to increase each time a new contact is added to the database that match the business type specified as a search criterion for this selection. You may have as many search criterions as you want. In the following section lets discuss how we can create a this type of a selection. This section will only focus on using the entities to create a dynamic selection.  

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0",""))
{
//create a new selection
      Selection mySelection = Selection.CreateNew();
      mySelection.SetDefaults();
      //set the selection type to Dynamic
      mySelection.Seltype = 1;
      //we will include the first person from each company in our
selection
      mySelection.IncludePerson = 1;
      //give it a name
      mySelection.Name = "Dynamic selection with couple of
criteria";
      //save the selection
      mySelection.Save();
               
      //create a restriction array since we are going to give more
than one
      // restriction to add members to our selection
      ArchiveRestrictionInfo[] retrictions = new
ArchiveRestrictionInfo[2];
      //specify the first restriction
      retrictions[0] = new ArchiveRestrictionInfo("business", "is",
"4");
      //specify the second restriction. Here we are restricting the
contact
//to the contacts that starts with “c”
      retrictions[1] = new ArchiveRestrictionInfo("name", "begins",
"c");
      //to store our selection restriction we need a restriction
storage
      IRestrictionStorage storage =
     
RestrictionStorageFactory.GetProvider(RestrictionCriteriaStorage.Stor
      ageType);
      //save the restriction using the provider name and the
selection id
      //as the storage key
               
     
storage.SaveRestrictions(SelectionDynamicProvider.ProviderName,
      "selection=" + mySelection.SelectionId.ToString(),
retrictions);
}
```

 

In the above example we have created a selection using entities and then we have used the providers to add the restriction for the members that should be added to the created selection. The creation of the selection is pretty straight forward so we will just explain how to add search criterions.

We have created an array of ArchiveRestriontionInfo object since we will add more than one restriction. When you are specifying the restriction you have to specify the criteria using three parameters. The first parameter is the field name, the second is the operator and the third is the value. In the example we have said give us the contacts which the name starts with letter “c” and give us the contacts which are in the business that corresponds to the row id 4 of the business table.

Once we have the restrictions ready we need to store them against the selection in order to tell the system that this restriction is for a particular selection. We can do this with a RestrictionCriteriaStorage provider. We can save our restriction using the SaveRestriction method. In the SaveRestriction method the second parameter will act as the key. If you want you can access this criterion using this key. Now we have completed the job now if you open the SuperOffice CRM application and view this selection you can see the contacts that we wanted listed under the selection.

 <img src="Creating%20a%20dynamic%20selection%20with%20a%20couple%20of%20criteria._files/image001.jpg" id="Picture 1" width="420" height="416" /> 

 
