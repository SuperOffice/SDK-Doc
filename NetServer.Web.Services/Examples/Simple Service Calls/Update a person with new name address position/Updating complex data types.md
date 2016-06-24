<properties date="2016-06-24"
SortOrder="7"
/>

Updating complex data types
===========================

However, complex data types cannot be modified in such away. For example if we need to update the Address property of the Person we need to first create a localized field array and store the new address in the declared variable. Only once this is done can it be assigned to the Address property of the PersonEntity.

```
      LocalizedField[][] newAddress = newPerAgt.GetAddressByCountry(4, 144);
newAddress[0][0].Value = "65, Sky Lane, LayLand.";
      newPerEnt.Address = newAddress;
```

 

Another example of a complex type is properties, which are of entity element types. In the above example, we have created an EntityElement array and assigned values to the properties of the declared variable.

```
      EntityElement[] newEmailArr = new EntityElement[1];
      newEmailArr[0] = new EntityElement();
      newEmailArr[0].Value = "luke@example.com";
      newEmailArr[0].Description = "Testing";
```

 

Once the assignment is done, the created email can be added to Emails property of the PersonEntity by executing the statement below.

```
      newPerEnt.Emails = newEmailArr;
```

 

The above would appear as a new email in the emails list of the Person. However, if we are required to modify an already existing email the goal could be archived as follows.

```
      newPerEnt.Emails[0].Value = "lukeUpdated@example.com";
      newPerEnt.Emails[0].Description = "Test Updated";
```

 

Here we give the index of the Person’s Email location that need s to be changed.

```
      newPerEnt.Position = newLstAgt.GetPosition(1);
```

 

With the execution of the above statement a value to Position property of the Person will be assigned. It should be noted that this is a pre-defined SO value which is different from the title.

Once the required properties of the PersonEntity have been modified the modifications could be saved to the database with the execution of the below statement.

```
      newPerAgt.SavePersonEntity(newPerEnt);   
```

 

See Also:

[Entity Service](../../../Developer's%20Guide/Entity%20Services/Entity%20Services.md)

[Get a Contact Entity](../Get%20a%20contact%20entity.md)

------------------------------------------------------------------------

**See Also:** IPersonAgent, PersonEntity
 
