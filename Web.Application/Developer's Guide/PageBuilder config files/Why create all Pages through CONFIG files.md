<properties date="2016-06-24"
SortOrder="12"
/>

Why create all Pages through “CONFIG” files?
============================================

The main reason here is ability to customize the application through only editing few XML config files. Since all these config files are controlled and managed by the PageBuilder framework any third party customizations can be plugged in a way that the PageBuilder framework will understand the customization.

The second reason for using XML config files is that it allows customizations to be done without altering the HTML files directly. This makes keeping track of customizations easier when upgrading to a new version of CRM.web.

The other reason is when we use XML and if we have a proper structure in them we can validate the files very easily. If the system is going to depend on the config files validation is very important since you can catch most of the issues at compile time rather than when executing the code.

An Important Point to Remember!

 Before we go into the more detail on the config files it is better to read through the PageBuilder section of the help documents. (TODO: link to the PageBuilder section)
