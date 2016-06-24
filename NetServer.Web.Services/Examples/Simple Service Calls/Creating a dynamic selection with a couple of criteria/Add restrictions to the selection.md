<properties date="2016-06-24"
SortOrder="6"
/>

Add restrictions to the selection
=================================

Once a selection as above has been created we may now make use of a code similar to the one below in order to add restrictions on which the selection should be based.

```
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Globalization;
using SuperOffice.Util;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
    //Inititalizing the FindAgent
    using(FindAgent newFindAgt = new FindAgent())
    {
        //Declaration of the Local variable
        string storageType = "Criteria";
        string providerName = "ContactDynamicSelection";
        string storageKey = "selection=61";
        string[] staticColumns = new string[] { "name", "contactId" };
         
        //Making use of a method exposed in the IFindAgent
        //GetAvailableRestrictionColumns - which Gets a list of
        //the column names corresponding to available restrictions for
        //a certain archive provider and restriction storage provider.
        string[] handledColumns = newFindAgt.GetAvailableRestrictionColumns(storageType, providerName);
         
        //GetSpecifiedCriteriaInformationWithDefaults - Get criteria information from a
        //set of saved criteria, for a specific set of columns.
        CriteriaInformation criteria = newFindAgt.GetSpecifiedCriteriaInformationWithDefaults(storageType, providerName, storageKey, handledColumns, staticColumns);
         
        //Represents a list of keys and values i.e columns and the conditions.
        Dictionary<string, ArchiveRestrictionInfo> restrictions = ArchiveRestrictionInfo.ToNameDictionary(criteria.Restrictions);
         
        //Setting the restriction for specific coulumns
        //Udef fields may not run depending on the database.
        //string values
        //Restriction 1
        restrictions["associateId"].SetValue("103");                   
        restrictions["associateId"].IsActive = true;
        //Restriction 2
        restrictions["name"].SetValue("est");
        restrictions["name"].Operator = "contains";
        restrictions["name"].IsActive = true;
         
        //Save the restrictions so that it may be used later as search criteria
        newFindAgt.SaveRestrictions(storageType, providerName, storageKey, CollectionOps.DictionaryValuesToArray(restrictions));
    }
}
 
```

 

The first few lines of the codes initialize and declare the variables that we plan to use in the code. When commenting about the variable used: -

* storageType – The storage type specification of the restriction, which could be “Criteria” or “Reporter” or any possible extension. Since the example is a selection, we use the “Criteria” type.

* providerName – This is the name of the Archive provider which is intended to be used in the restriction. Since we plan to create a Dynamic Selection, Dynamic Selection Providers should be used such as the ContactDynamicSelection provider.

* storageKey – This is to be interpreted by the restriction storage provider when it fetches the criteria for the search. Here we have used “selection=61” since this will allow us to create a restriction for that particular selection\_id. In the statement “selection=61”, “selection” means the name of the table and 61 is the primary key id or basically the selection\_id.

* staticColumns – This is an array of restrictions that are to be excluded from the CriteriaArchiveRows part of the result. In the Find dialog that corresponds to the “static fields” this variable is used to avoid duplication in the “Match also” criteria list. In places this variable is used it could be stated as “null’ which indicates that all restrictions should be included in the criteria list. For example, if you have a criteria such as person/firstname=”John” then all matches on this field will contain the same value “John” and the column can be excluded from the result making more room for the useful information.

```
      string[] handledColumns = newFindAgt.GetAvailableRestrictionColumns(storageType, providerName);
```

 

* handledColumns – This is an array of restrictions that are to be excluded from the CriteriaArchiveRows part of the result. In the Find dialog that corresponds to the “static fields” this variable is used to avoid duplication in the “Match also” criteria list. In place this variable is used it could be stated as “null’ which indicates that all restrictions should be included in the criteria list.

```
      CriteriaInformation criteria = newFindAgt.GetSpecifiedCriteriaInformationWithDefaults(storageType, providerName, storageKey, handledColumns, staticColumns);
```

 

With the execution of the above code we have retrieved criteria information from a set of saved criteria, for specific set columns. In the case of the example this would be empty.

The next step is to create a variable that could be used to store the restrictions.

```
      Dictionary<string, ArchiveRestrictionInfo> restrictions = ArchiveRestrictionInfo.ToNameDictionary( criteria.Restrictions );
```

 

The Dictionary class from the System.Collection.Generic namespace is used to store the restriction as a key and value pair. The key is the name of the field the restriction is on, and the value is the ArchiveRestrictionInfo object that describes the restriction itself.

Once this is done we may add the necessary restrictions as shown below.

    //Restriction 1

restrictions\["associateId"\].SetValue("103");                   

restrictions\["associateId"\].IsActive = true;

    //Restriction 2

restrictions\["name"\].SetValue("est");

restrictions\["name"\].Operator = "contains";

restrictions\["name"\].IsActive = true;

 

Once all the required restrictions have being added the created restriction can be saved by executing the following statement.

```
      newFindAgt.SaveRestrictions(storageType, providerName, storageKey, CollectionOps.DictionaryValuesToArray(restrictions));
```

 

See Also:

[Use of Criteria in Archives Selections Searches](../../../Developer's%20Guide/Use%20Of%20Criterias%20In%20Archives%20Selections%20searches/Use%20Of%20Criterias%20In%20Archives%20Selections%20searches.md)

An important point to remember!

Though we have added only two restrictions explicitly, it can be seen that there are many conditions. This is because we have got the criteria with the use of the GetSpecifiedCriteriaInformationWithDefaults() method which returns all criteria with default values. However this would not be affecting the outcome of the selection since the other criteria are not active – they have no values to search for.
