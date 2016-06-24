<properties date="2016-05-11"
SortOrder="30"
/>

We changed our datetime format from seconds-since-1970 to a real datetime

So now we can search for dateparts; all the databases support it

<img src="EW%202010%20NetServer%20Enhancements_files/image001.jpg" id="Picture 1" width="491" height="216" />

Note that using an ArgumentFunction means that the return field no longer has a name (it’s enclosed by the function). Therefore we use the Alias.Name to give it a name that we can then use when calling Reader.GetInt32() – you could always use a position index instead, but that makes the code much more fragile in the face of changes.

See the QueryExecutionHelper class for more help.
