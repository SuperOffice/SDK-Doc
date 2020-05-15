---
title: Structs
---

A **struct** defines the kinds of data and the functionality their objects will have. This data structure enables you to create your own custom types by grouping together variables of other types and methods.

You can think of a struct as a variable that can contain many values. Unlike arrays, which are limited to a single datatype, the struct can contain different data types and also methods.

Structs can also contain other structs, but not their own type. For example, you can't define a *node* struct and build a recursive tree of *nodes*.

## Defining structs

CRMScripts use immediate allocation. As with variables, methods must be declared before they are used.

The definition has 3 parts:

* keyword **struct**
* the name of the struct
* 1 or more statements enclosed in curly brackets, followed by a semi-colon

```crmscript
struct Car {
  String brand;
  String model;
  Integer modelYear;

  Void print() {
    print( this.brand + " " + this.model + ", " + this.modelYear.toString());
  }
};
```

The keyword **this** refers to ownership. Here, the print statement targets the variable values of a specific instance of the struct. We also need to call the **toString** method because **modelYear** is a number.

## Using structs

From the outside, you create an instance of the struct and then you can use **dot notation** to access its variables and methods.

* structName.methodName
* structName.variableName

```crmscript
Car myCar;
myCar.brand = "Volvo";
myCar.model = "XC60";
myCar.modelYear = 2019;
myCar.print();
```

This will output: Volvo XC60, 2019
