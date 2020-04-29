---
title: pushFront() and pushBack()
path: /EJScript/Other language constructs and operators/Arrays/pushFront() and pushBack()
intellisense: 1
langref: 1
sortOrder: 9553
keywords: and pushBack()
---

These functions will push an empty element to the front or back of the accessed array. The element will be initialized to the correct type and dimensions. I.e. if pushBack is called on a two-dimensional array of String, it will add a one-dimensional array of Strings to the end of the array.




###Example:###
    
    String[][] s;        // Empty two-dimensional array
    s.pushBack();     // Pushes String[] on s. Now we have String[1][0].
    s[0].pushBack(); // Pushes String on s[0]. Now we have String[1][1]
    s[0][0] = "test";  // Sets the value of the single cell in the 2d array.


