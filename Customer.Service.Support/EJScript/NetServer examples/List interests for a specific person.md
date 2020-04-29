---
title: List interests for a specific person
path: /EJScript/NetServer examples/List interests for a specific person
sortOrder: 9542
---


    // Here we load in a person and list out the interest registered on that person
    
    Integer personId = 123;
    
    NSPersonAgent personAgent;
    
    NSPersonEntity person = personAgent.GetPersonEntity(personId);
    
    NSSelectableMDOListItem[] interests = person.GetInterests();
    
    print("Interests for " + person.GetFirstname() + " " + person.GetLastname() + "\n");
    
    for (int c = 0; c < interests.length(); c++)
    {
      print(interests[c].GetName() + "\n");
    }


