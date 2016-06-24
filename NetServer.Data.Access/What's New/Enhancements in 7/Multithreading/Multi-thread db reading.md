<properties date="2016-05-11"
SortOrder="52"
/>

<img src="EW%202010%20NetServer%20Enhancements_files/image017.jpg" id="Picture 16" width="413" height="249" />

It’s the ThreadManager.Invoke call that does the magic. Its parameter is an array of Actions, where an Action is a delegate that takes no parameters and returns void; i.e., a method that simply does something. Then we use the lamda syntax to eliminate the syntactical hassle of saying new Action( MyMethod ) and having to write the methods elsewhere: () =&gt; simply means «I declare a parameterless block of code, which is as follows».

Note how the firstSearch and lastSearch local variables are «captured» into the lambda, and become part of the code that is sent off to the Invoke method for execution. This is a **very powerful** mechanism, called «scope capture», which you can use to pass along all kinds of values. But beware of one thing: **Never, ever update such values from inside the parallel code, if they are shared between multiple methods**. That would break the initial assumption, that your parallel tasks are **independent**; as soon as they share any kind of variable, that is no longer true and **you** become responsible for synchronizing access.
