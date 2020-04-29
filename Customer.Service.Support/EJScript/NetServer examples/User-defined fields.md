---
title: User-defined fields
path: /EJScript/NetServer examples/User-defined fields
sortOrder: 9545
---


    // here we are looking up udef fields on a person, and we want to know metadata about the udef field, like the type and tooltip
    // thus we need to first retrieve the metadata for udefs on persons , and then use this when we look up the udef fields on a person entity
    
    NSUserDefinedFieldInfoAgent udefAgent;
    
    NSUserDefinedFieldInfo[] udefInfoList = udefAgent.GetUserDefinedFieldList(8); // Contact=7, Person=8, Project=9, Sale=10, Appointment=12, Document=13
    
    // since we get the udef progid from the person entity, we put it in a map so we can easily look up the index from a progid
    // like this: udefInfoList[udefIndex.get(the progid).toInteger()]
    Map udefIndex;
    
    for (Integer c = 0; c < udefInfoList.length(); c++)
      udefIndex.insert(udefInfoList[c].GetProgId(), c.toString());
    
    
    Integer personId = 123;
    
    NSPersonAgent personAgent;
    
    NSPersonEntity person = personAgent.GetPersonEntity(personId);
    
    // the progid is the key, the field value is the value
    Map personUdefs = person.GetUserDefinedFields();
    
    for (personUdefs.first(); !personUdefs.eof(); personUdefs.next())
    {
      NSUserDefinedFieldInfo udefInfo = udefInfoList[udefIndex.get(personUdefs.getKey()).toInteger()];
    
      Integer type = udefInfo.GetFieldType(); //  Field type: 0 = leadtext only, 1 = Edit, 2 = CheckBox, 3 = dropdown, 4 = listbox
      String tooltip = udefInfo.GetTooltip();
      Integer length = udefInfo.GetTextLength();
    }


