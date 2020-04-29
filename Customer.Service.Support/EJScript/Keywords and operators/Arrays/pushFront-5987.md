---
title: pushFront(element), pushBack(element) and insert(index, element)
path: /EJScript/Other language constructs and operators/Arrays/pushFront(<element>), pushBack(<element>) and insert(index, <element>)
intellisense: 1
langref: 1
sortOrder: 9554
keywords: pushBack(element) and,element) and)
---

These functions will add element to the array either at the front, the back, or at the given index. The element must be of the same base type as the array, and have the correct number of dimensions (which is one less than the array).




###Example:###
    String[] s;                   // Empty one-dimensional array of Strings.
    s.pushBack("charlie"); // Add the String "charlie" to the back of the array.
    s.pushFront("alpha");  // Add the String "alpha" at the front of array.
    s.insert(1, "bravo");    // Insert the String "bravo" before element at index 1.
    

The resulting array will now contain "alpha", "bravo", "charlie".


    String[][]s2;
    s2.pushBack(s);         // Push a 1d array at the back of a 2d array.


