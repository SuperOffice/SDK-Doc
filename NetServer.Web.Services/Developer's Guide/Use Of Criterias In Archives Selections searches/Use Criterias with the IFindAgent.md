<properties date="2016-06-24"
SortOrder="11"
/>

This is the common interface for the Find agent. The agent exposes methods such as GetCriteriaInformation(), SaveRestricitons(), FindFromRestrictions and many more.

Unlike the ArchiveAgent, the find agent supports saved restrictions, and also handles some behind-the-scenes translation related to reporter criterias that the archive agent does not need to worry about.

See Also:

[Searches](../Search%20Services/Search%20Services.md)

The example below shows the use of the SaveRestrictions() method exposed through the FindAgent.

```
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Globalization;
using SuperOffice.Util;
 
using (SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Inititalizing the FindAgent
      using(FindAgent newFindAgt = new FindAgent())
      { 
          //Declaration of the Local variable
          string storageType = "Criteria";
          string providerName = "findcontact";
          string storageKey = "associate=1236";
          string[] staticColumns = new string[] { "name", "firstName", "lastName" };
     
          //Making use of a method exposed in the FindAgent
          //GetAvailableRestrictionColumns - which Gets a list of
          //the column names corresponding to available restrictions for
          //a certain archive provider and restriction storage provider.
          string[] handledColumns = 
                newFindAgt.GetAvailableRestrictionColumns(storageType, providerName);
     
          //GetSpecifiedCriteriaInformationWithDefaults - Get criteria information from a
          //set of saved criteria, for a specific set of columns.
          CriteriaInformation criteria = 
                newFindAgt.GetSpecifiedCriteriaInformationWithDefaults(
                                  storageType, providerName, storageKey, 
                                  handledColumns, staticColumns);
                       
          //Represents a list of keys and values i.e columns and the conditions.
          Dictionary<string, ArchiveRestrictionInfo> 
                 restrictions = ArchiveRestrictionInfo.ToNameDictionary( 
                                                          criteria.Restrictions );
     
          //Setting the restriction for specific coulumns
          //Udef fields may not run depending on the database.
          //string values
          restrictions["lastName"].SetValue("Tester 5");
          restrictions["lastName"].IsActive = true;
          restrictions["firstName"].SetValue("Tester 5");
          restrictions["firstName"].Operator = "contains";
          restrictions["firstName"].IsActive = true;
     
          //int values
          restrictions["personId"].SetValue( "215" );
          restrictions["contactId"].SetValue( "100", "143" );
          restrictions["contactId"].Operator = "between";
     
          //list
          restrictions["position"].SetValue( "1" );
          restrictions["category"].SetValue( "1", "2", "3", "4" );
     
          //bool
          restrictions["nomailings"].SetValue(true.ToString()); 
          restrictions["contactUdef/SuperOffice:6"].SetValue("1");
     
          //decimal
          restrictions["contactUdef/SuperOffice:8"].SetValue(
                      CultureDataFormatter.EncodeDouble(1.4));
          restrictions["personUdef/SuperOffice:8"].SetValue(
                      CultureDataFormatter.EncodeDouble(1.8), 
                      CultureDataFormatter.EncodeDouble(2.6));
          restrictions["personUdef/SuperOffice:8"].Operator = "between";
          restrictions["personUdef/SuperOffice:8"].IsActive = true;
     
          //datetime                
          restrictions["contactUdef/SuperOffice:4"].SetValue(
                      CultureDataFormatter.EncodeDate(DateTime.Now));
                       
          //Save the restrictions so that it may be used later as search criteria
          newFindAgt.SaveRestrictions(storageType, providerName, 
                      storageKey, CollectionOps.DictionaryValuesToArray(restrictions));
     }
}
```

 

The intention is to store and restore of  a set of restrictions that could be used later as search criteria. The first thing we do is to get the FindAgent instance, the FindAgent that contains the method that we use. Once the initialization is done we declare the variable that we would need to pass in to the different methods we use. Following few lines explains about each of the variables and the use of it.

storageType – The storage type specification of the restriction, which could be “Criteria” or “Reporter” or any possible extension.
providerName – This is the name of the Archive provider which is intended to use the restriction.
storageKey – This is to be interpreted by the restriction storage provider when it fetches the criteria for the search.
staticColumns – This is an array of restrictions that are to be excluded from the CriteriaArchiveRows part of the result. In the Find dialog that corresponds to the “static fields” this variable is used to avoid duplication in the “Match also” criteria list. In place this variable is used it could be stated as “null’ which indicates that all restrictions should be included in the criteria list.
```
string[] handledColumns = 
      newFindAgt.GetAvailableRestrictionColumns(storageType, providerName);
```

handledColumns – This is an array of restrictions that are to be excluded from the CriteriaArchiveRows part of the result. In the Find dialog that corresponds to the “static fields” this variable is used to avoid duplication in the “Match also” criteria list. In places this variable is used it could be stated as “null’ which indicates that all restrictions should be included in the criteria list. When retrieving the list of columns for the variable we have made use of the GetAvailableRestrictionColumns() method, which requires the storageType and providerName as the input parameters. It returns a list of column names corresponding to the available restrictions for the passed in providerName and storageType.
```
CriteriaInformation criteria = 
      newFindAgt.GetSpecifiedCriteriaInformationWithDefaults(
            storageType, providerName, storageKey, handledColumns, staticColumns);
```

With the execution of the above code we have retrieved criteria information from a set of saved criteria, for specific set columns. The results are contained in two forms. Namely,  fully populated ArchiveRestrictionInfo objects, used to display details and for saving changes; and as a list suitable for an Archive control. All columns specified in the call will be present in the results. The method requires five parameters in order to produce the output. The parameters have been explained above.

The next step is to create a variable that could be used to store the restrictions.

```
Dictionary<string, ArchiveRestrictionInfo> restrictions = 
             ArchiveRestrictionInfo.ToNameDictionary( criteria.Restrictions );
```

 

Here we have made use of the Dictionary class located in the System.Collection.Generic namespace, which will store the restrictions as a Key value pair. In the above the key is of string type and the values are of ArchiveRestrictionInfo type, which is a class that carries information such as “contact\_id = 2” which could be used in query of an Archive Provider.

Once this is done we may create and assign different restrictions. The example shows how to assign restriction to multiple types of data as well as user-defined fields.

An important point to remember!

When executing the code for some user an error may occur based on the state of his/her database since he may not have some/all of the user defined fields shown in the example. In such a case, the code will be executable once the user defined fields have being commented or removed.

Once all the required restrictions have being added the created restriction may be saved with the execution of the following statement.

```
      newFindAgt.SaveRestrictions(storageType, providerName, 
                  storageKey, CollectionOps.DictionaryValuesToArray(restrictions));
```

 

With the use of the SaveRestriction() method exposed in the IFindAgent interface the restriction will be saved so that it could later be used in as a search criteria including dynamic search and find statements. The method requires the parameters; storageType, providerName, storageKey and an array of ArchiveRestrictionInfo to be passed into it. Here we have made use of the CollectionsOps class exposed in the SuperOffice.Util class to convert between various collections of data. In this case, from Dictionary type to an array of ArchiveRestrictionInfo type.

 

------------------------------------------------------------------------

**See Also:** IFindAgent, ArchiveRestrictionInfo
