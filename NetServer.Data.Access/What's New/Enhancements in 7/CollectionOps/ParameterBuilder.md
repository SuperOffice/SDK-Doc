<properties date="2016-05-11"
SortOrder="46"
/>

A class that will take n string items and concatenate them with front, middle and end delimiters

Eliminates all those pesky if( !first ) AddComma(); first = false; constructions

Has a static method that does everything at once

Use it to make useful error messages!

MiddleDelimiter will be dropped when relevant (empty items)

 

**How to build an error message**
(restrictions is an ArchiveRestrionInfo\[\])

<img src="../EW%202010%20NetServer%20Enhancements_files/image012.jpg" id="Picture 12" width="401" height="34" />

The error message contains multiple, indented lines, each showing one restriction

Since ArchiveRestrictionInfo has an overridden ToString() method, meant for debugging, this is easy & useful

So easy that you should really do it

 

**Making a tooltip**

<img src="../EW%202010%20NetServer%20Enhancements_files/image013.jpg" id="Picture 13" width="388" height="145" />

 

See ParameterBuilder
