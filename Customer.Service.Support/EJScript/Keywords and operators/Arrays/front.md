---
title: front() and back()
path: /EJScript/Other language constructs and operators/Arrays/front() and back()
intellisense: 1
langref: 1
sortOrder: 9550
keywords: and back()
---

These functions will return the firstmost or lastmost element in an array. If the array is empty, an out-of-range exception will be thrown. The returned element will have the same base type as the array, and dimension one less than the array.




###Example:###
    String[1][1] s; // Creates a 2d array initialized to 1x1 elements.
    String[] x = s.back(); // Returns a 1d array, the one at index 0 in s.
    String y = s.back().back(); // Returns the element at s[0][0].


