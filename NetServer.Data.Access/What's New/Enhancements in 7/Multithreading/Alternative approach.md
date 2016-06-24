<properties date="2016-05-11"
SortOrder="53"
/>

<img src="EW%202010%20NetServer%20Enhancements_files/image018.jpg" id="Picture 17" width="413" height="288" />

Here we have moved the parallel code into a separate method, and use scope capture in the lambdas to send different parameters to them in a very nice and clean way. Recommended, whenever your lambda would otherwise become large, or you see too many similarities.
