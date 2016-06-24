<properties date="2016-05-11"
SortOrder="47"
/>

What does ”1,000” mean?

* ”one point zero zero zero” ?

* ”one thousand” ?

Making everything into a string can be practical, but also disastrous

To avoid misunderstandings, we say  ”\[I: 1000\]”

Which may not be the most elegant format, but it is human-readable and unambiguous

CultureDataFormatter, in SoCore, is your friend when faced with such a string

The parsing methods are quite format-tolerant.  In addition to strings like “\[I:1234\]”, they will also accept simply ”1234”.

 

LocalizeXXX methods return formatted strings, using the current culture.  You can selectively encode datetime, date, or time

ArchiveProviders use this format for the DisplayText return value. If you make your own archive provider components, you should do so too

 

------------------------------------------------------------------------

**See Also:** [CultureDataFormatter](../NetServer%20Enhancements%20in%207/CultureDataFormatter.md)
<img src="EW%202010%20NetServer%20Enhancements_files/image014.jpg" width="345" height="43" />

fromInt = “\[I:1234\]”

fromDate = “\[DT:11/12/2010 09:49:35.9227577\]”

 

<img src="EW%202010%20NetServer%20Enhancements_files/image015.jpg" id="Picture 14" width="345" height="39" />

localInt = 1234

localDate2 = 12.11.2010 9:49 AM
