<properties date="2016-06-24"
SortOrder="17"
/>

Agents

–      Contains all methods

–      Always prefixed with NS

Entities and carriers

–      Contains the data

–      Always prefixed with NS

–      Use Get and Set to access attributes

–      Declared objects are NOT initialized

The agents contains all the methods in NetServer. Examples of commonly used agents are NSPersonAgent, NSContactAgent and NSAppointmentAgent. ejScript treats an agent as any other object, but it does not have any state. So you only need to declare each agent once.

The entities and carriers contains all the data that are used as input or output from the agent methods. An entity or carrier can contain other carriers. In the end, a carrier will contain only simple basic types like string, integer, boolean or arrays of these.

All entities and carriers are also prefixed with NS.

The access an attribute, you must use a Get or Set method, where Get/Set is the prefix of the attribute name. Get methods always returns another carrier or a basic type. Set takes one carrier or basic type as parameter.

Note that if you declare an entity or carrier, it will not be initialized. This is especially important for objects that uses enums, as these will contain illegal values (and you will get an exception from NetServer trying to use this).

If you plan to create a new entity, use the CreateDefaultEntity method, for example CreateDefaultPersonEntity. For newly created carriers, be sure to set at least enums.

String, integers and arrays will by default be empty (and might be allowed by NetServer, but can be different from method to method).

Example: Simple NetServer call

```
#setLanguageLevel 3;
NSPersonAgent pAgent;
NSPersonEntity personEntity = pAgent.GetPersonEntity(1);
personEntity.SetFirstname("John");
personEntity = pAgent.SavePersonEntity(personEntity);
print(personEntity.GetFullName());
```

 

NetServer calls can be expensive.

Exceptions from NetServer will interrupt your program, and be displayed on the screen

Note that it is not possible to catch exceptions in ejScript, so you should always test every part of your code.

Calling a method in NetServer can be expensive, especially those involving entities with much data, as all data will be serialized and deserialized into XML for transmitting over the wire.

```
#setLanguageLevel 3;
NSPersonAgent pAgent;
NSPersonEntity personEntity = pAgent.GetPersonEntity(1);
personEntity.SetFirstname("John");
personEntity = pAgent.SavePersonEntity(personEntity);
print(personEntity.GetFullName());
```
