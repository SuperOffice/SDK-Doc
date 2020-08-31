---
title: Generic data type
uid: crmscript_datatypes_generic
sortOrder: 80
---

Generic is the base type of all other intrinsic CRMScript data types. Any variable can be up-casted to Generic.

There's a close connection between Generic and [structs](../fundamentals/structs.md).

* simpler iteration of variables (struct members)
* easier to access and set new variables in structs
* possible to change which variables are members without having to hard-code each field

By using this datatype, especially with structs, you can limit the amount of code. You won't have to create as many duplicate functions to handle different types - simply place all logic inside 1 function and let it act accordingly to the type.

## Type and value

### String getTypeName(Generic generic)

`getTypeName()` returns the type of a variable.

```crmscript!
printLine(getTypeName(getCurrentDateTime()));
```

### Generic getGenericValue(String name)

`getGenericValue()` returns a variable from the run-time environment given its name and independent of its type.

```crmscript!
Integer age = 42;
Generic g = getGenericValue("age");
printLine(g);
```

> [!NOTE]
> If the variable name is unknown, an [exceptions](../fundamentals/try-catch.md) is thrown.

## Generic and arrays

### Integer getTypeDimensions(Generic generic)

`getTypeDimensions()` returns the number of array dimensions for a variable. The argument is automatically be up-casted to a Generic.

```crmscript!
Integer[][] i;
printLine(getTypeDimensions(i));
```

> [!NOTE]
> This is the number of dimensions in, **not the length** of, the array!

## Generic and structs

These examples build on the following struct:

```crmscript
struct Person {
  String name;
  Integer age;
};
```

### Bool typeIsStruct(Generic generic)

`typeIsStruct()` checks whether a variable is a struct.

Check whether a variable is a struct or not. The argument is automatically be up-casted to a Generic.

```crmscript
struct Person {
  String name;
  Integer age;
};

Person p;
if (typeIsStruct(p)) {
  printLine("10-4");
}
```

### String[] getStructMembers(String name)

`getStructMembers()` returns the variable names of a struct given its name.

> [!NOTE]
> This is the names, **not the actual values**. To get those, call `getGenericValue()` using the member names.

### Generic getGenericValue(Generic struct, String name)

A variant of `getGenericValue()` that returns a variable from the run-time environment **inside a struct** given its name and independent of its type.

```crmscript
struct Person {
  String name;
  Integer age;
};

Person person;
person.age = 42;
Generic g = getGenericValue(person, "age");
```

> [!NOTE]
> If the variable name is unknown or you're not referencing a struct, an [exceptions](../fundamentals/try-catch.md) is thrown.

### String convertGenericToString(Generic generic)

`convertGenericToString()` returns the string representation of a variable.  The argument is automatically be up-casted to a Generic.

This works for all **basic** types. Complex types might can't be serialized as easy, and might not support this conversion. In that case, they'll return “[complex]”.

```crmscript!
Integer age = 42;
Generic g = convertGenericToString(age);
printLine(g);
```

### Void setGenericFromString(Generic generic, String value)

`setGenericFromString()` sets the value of a variable from a string.

It supports only basic types. Attempting to set an array or a complex type will throw an exception.

The value **must be formatted** according to the constructor of that type. Specifically, Date, DateTime, and Time must be on the YYYY-MM-DD HH:MI:SS format.

> [!TIP]
> In combination with `getStructMembers()` and `getGenericValue()`, this function can be used to iterate a struct and set all its members programmatically instead of having to explicit hard-code each of them.

## Down-casting

You can convert a Generic variable to these basic types.

* Bool GenericToBool(Generic generic)
* Integer GenericToInteger(Generic generic)
* Float GenericToFloat(Generic generic)
* String GenericToString(Generic generic)
* DateTime GenericToDateTime(Generic generic)
* Date GenericToDate(Generic generic)
* Time GenericToTime(Generic generic)
* TimeSpan GenericToTimeSpan(Generic generic)
* Byte GenericToByte(Generic generic)
* Generic[] GenericToArray(Generic generic)

Together with `getTypeName()`, these methods can be used to create an explicit typed variable.

```crmscript
Generic g = getCurrentDateTime();
if (getTypeName(g)) {
  DateTime dt = GenericToDateTime(g);
}
```
