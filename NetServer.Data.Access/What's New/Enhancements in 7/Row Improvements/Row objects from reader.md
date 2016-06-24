<properties date="2016-05-11"
SortOrder="40"
/>

<img src="../EW%202010%20NetServer%20Enhancements_files/image006.jpg" id="Picture 6" width="416" height="196" />

Points to note: 

1)       ReturnFields.Add has an overload that takes a TableInfo\[\], so you can add all fields in a table by one parameter. You can of course add any other odd fields you want as well (in a separate .Add.

2)       Select (and many other places that have restrictions) has a RestrictionAnd(r), which is short form for if( Restriction == null ) Restriction = r else Restriction = Restriction.And(r).  This again eases flow and makes the code easier to read

3)       You can construct Row objects from a reader, just as long as you have all the fields available; this will also transfer all Sentry info

4)       You can also GetXXX any fields at any time, of course
