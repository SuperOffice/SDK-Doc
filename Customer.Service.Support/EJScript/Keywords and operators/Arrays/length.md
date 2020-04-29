---
title: length()
path: /EJScript/Other language constructs and operators/Arrays/length()
intellisense: 1
langref: 1
sortOrder: 9551
keywords: length()
---



###Returns the length of the array at the given level. Example:###


    String[1][2][3] s;   // 3d array of one floor, 2 rows and 3 cells.
    
    print("Floors: " + s.length().toString()); // Will print 1
    print("Rows: " + s[0].length().toString()); // Will print 2
    print("Cells: " + s[0][0].length().toString()); // Will print 3.
    

NOTE: since multidimensional arrays technically are arrays of arrays, they can grow independently per dimension. For instance if we change the array above a bit:


    s[0][0].pushBack("test");
    

Now, s[0][0].length() Will return 4, while s[0][1].length() will return 3. This is because it looks like this in memory

Floor 0:
  Row 0: "", "", "", "test"
  Row 1: "", "", ""


