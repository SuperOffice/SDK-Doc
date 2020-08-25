<properties date="2016-06-24"
SortOrder="5"
/>

Execution
=========

The best way to test an Expander Data Exchange task is to execute the dbi.exe program from a dos window. Then you will be able to view any print statements inside the ejScript, as well as the XML which is sent to the agent. To do this, you need to know the numeric id of the task you just executed, which can be found in the URL when you edit (or hover the link to edit) the task ("http://.../..&id=x"). Then you can execute the following command:

    dbi.exe -debug -asap 1 -force -maxDebug -dump support.company.com

The parameters for this command are:

* "-debug": print debug statements in ejScript.
* "-asap 1": execute this task right away.
* "-force": execute right now, even if schedule says something else.
* "-maxDebug": print lots of info.
* "-dump": show the Xml we will send to the agent.
* "support.company.com": our hostname.

Your output should (hopefully) look something like this:

<img src="Creating%20a%20Custom%20Data%20Exchange%20Agent_files/image004.jpg" id="Picture 10" width="513" height="269" />

...and inside CS you should now be able to find the entries:

<img src="Creating%20a%20Custom%20Data%20Exchange%20Agent_files/image005.jpg" id="Picture 13" width="597" height="353" />
