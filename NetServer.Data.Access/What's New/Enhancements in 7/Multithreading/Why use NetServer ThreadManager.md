<properties date="2016-05-11"
SortOrder="50"
/>

SoContext, SoDatabase and other variables that are in the environment are managed for you.

If you Impersonate inside a thread, we keep track of that.

If multithreading is disabled in the config file, your code will be nicely executed in sequence.

We perform throttling to avoid killing the machine with a gazillion threads
