---
uid: guideDefiningDynamicSelection
title: Defining a Dynamic Selection
---

Here we will create a dynamic selection with a couple of criteria using the SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.

using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{
   //Create a new Selection instance
   SOSelection newSelection = newDb.CreateSelection();
   //Assign default values to the created Selection
   newSelection.SetDefaults();
   //Set values to the properties of the Selection   
   newSelection.Type = ESelectionType.enSelTypeDynamicContact;
   newSelection.Name = "Test Selection 1";
   //Save the created Selection
   newSelection.Save();
   //Create a new Criteria instance
   SOCriteria newCriteria = newSelection.Criteria;
   //Assign the Column and the operator for the criteria
   SOCriterion newCriterion = newCriteria.NewCriterion("contact.name", EnCriterionOperator.enBeginsWith);              
   //Assign the values of the restriction
   newCriterion.Values.AddString("s"); 
   //Assign the created criteria to the Selection
   newSelection.Criteria.Add(newCriterion);
   //Save the created Selection
   newSelection.Save();   
}
else
   Console.WriteLine("Incorrect Username or Password");

When going through the above code that we have used when creating a new Selection it can be noticed that the Selection has been saved twice. This is done because it is necessary to save the selection before any criteria has been assigned to it.

SOCriterion newCriterion = newCriteria.NewCriterion("contact.name", EnCriterionOperator.enBeginsWith);
newCriterion.Values.AddString("s");

Once the SoCriteria object has been instantiated we can use its NewCriterion() method to create an Instance of the SoCriteria. The method requires the name of the column to which the criterion should apply and the operator to be used. The Values.AddString() method add the value that should be compared with the column. Once the criterion has been created we can assign the criteria object that been created to the selection.
The created Selection can be seen on the SuperOffice Application as shown below.
 
![](../../images/DynamicSelection.png)

Once the selection is saved the following tables are modified as well.
Selection Table
![](../../images/DynamicSelectionTable.png)

SearchCriteria Table
![](../../images/DynamicSearchCriteriaTable.png)

SearchCriteriaGroup Table

![](../../images/DynamicSearchCriteriaGroupTable.png)
 
SearchCriterion Table

![](../../images/DynamicSearchCriterionTable.png)
 
SearchCriterionValue Table

![](../../images/DynamicSearchCriterionValueTable.png)
