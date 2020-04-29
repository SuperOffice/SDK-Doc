---
title: Arrays
path: /EJScript/Other language constructs and operators/Arrays
intellisense: 1
langref: 1
sortOrder: 9548
---

As of SuperOffice Customer Service v3.0.11, ejScript support arrays. Arrays can only contain one single type, but are unlimited in length and number of dimensions. Arrays are constructed with the regular square brackets as in C, however the brackets must be immediately following the type (and not the variable name as in C).



###Examples:###


    String[] s1;         // Creates an empty one-dimensional string array
    String[5][5] s2;   // Creates an 2-dimensional string array, initialized to 5x5
                             // empty strings.
    Ticket[10] t;       // Creates an one-dimentional array of tickets, initialized to
                             // 10 unloaded (empty) tickets.
    Float[][][] f;       // Creates an empty 3-dimentional cube of floats.
    



###Elements may be accessed using the same brackets, as in C. The indeces start at zero, and may of course be the result of any statement returning an integer:###


    print("First element in s1: " + s1[0]);
    print("Element in float cube: " + f[0][2 + count][someFunction()].toString(2));
    

Indeces out of range will throw a run-time exception. Furthermore, one may not assign to a cell out of range. Example:


    String[1] s;  // Create an array initialized to 1 element
    print(s[0]);  // This is ok.
    print(s[1]);  // This will throw a run-time exception.
    

The `length()` function may be used for determining available indices. The array functions are described below.

NOTE: All arrays are considered variables which are passed, copied, etc. by reference. Consider this:


    String[][] a;
    String[] b;
    a.pushBack(b);
    b.pushBack("test");
    print(a[0][0]);             // will print "test"
    
    b[0] = "foo";
    print(a[0][0]);             // will print "foo"
    



###Functions may return arrays just like you would expect:###


    String[] myFunction()
    {
      String[] tmp;
      tmp.pushBack("test");
    
      return tmp;
    }
    
    print(myFunction()[0]); // will print "test".




1. autolist

