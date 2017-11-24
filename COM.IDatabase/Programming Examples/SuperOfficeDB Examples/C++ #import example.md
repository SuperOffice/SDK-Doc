---
uid: exampleCPPimport
title: C++ \#import example
---

This example shows how you would use the COM API from Visual C++

The key here is the Microsoft specific \#import keyword.

We need to use no\_namespace to avoid writing namespace qualifiers all the time.

We use the rename("EOF","IsEOF") macro to avoid a naming collision with a built-in COM function EOF.

 

The first example does a simple search, and shows how a SafeArray can be traversed in C++.

[screenshot](../../images/import%20demo.gif)

 

The second example shows how a UDEF property can be used to modify a udef property from C++.