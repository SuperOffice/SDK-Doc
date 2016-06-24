<properties date="2016-06-24"
SortOrder="26"
/>

Once we have completed the CRM.web installation, the SuperOffice Product Configuration program should be launched. Provided we selected **I would like to launch CRM.web Configuration** in the final step of the installation the program will be launched automatically. Otherwise, we can start it manually by selecting **Start &gt; All Programs &gt; SuperOffice &gt; CRM.web &gt; Product Configuration (instance name)**, where "instance name" is the name of the instance we want to.

Configuration steps are as follows.

1. In the welcome screen, click **Next**.

<img src="../../Setup%20configuration_files/image017.jpg" width="540" height="466" />

2. In the **Mode** dropdown in the**SuperOffice services** dialog, we select which mode we would like for NetServer's retrieval of information from CRM.web. We have two options, but we should select **Remote**:

* **Local**: We select this option if we would like CRM.web to use a local instance of NetServer to communicate directly with the database.

* **Remote**: We select this option if we would like CRM.web to use a remote NetServer application server using Web services. In the **Remote base URL field**, specify the physical location of the remote NetServer application server with Web services.

When we are done, click **Next**.

<img src="../../Setup%20configuration_files/image009.jpg" width="536" height="462" />

3. In the **Symmetric key** and **Symmetric IV (Initialization Vector)** fields, specify the keys to be used for encrypting and decrypting the user credentials. The default values are retrieved from the configuration file, but we can click **Generate keys** to generate new encryption keys automatically.

In the **Symmetric secret text** field, specify a user‑defined secret text string used to distinguish this NetServer application from others. This can be any string.

An important Point to remember!

 It is very important that we use individual keys. This can be ensured by clicking the **Generate keys** button and then entering a string in the **Symmetric secret text** field.

Click **Next** to continue.

<img src="../../Setup%20configuration_files/image011.jpg" width="528" height="454" />

4. In the **SuperOffice Diagnostics** dialog, do the following:

* If we want error reports to be sent to SuperOffice, select **Log to SuperOffice Research and Product Development**.

An important point to remember!

Only errors are reported to SuperOffice, not warnings, information, etc. The information reported comprises database serial number, name or IP addresses for servers, user name of the currently logged-in user and other information that allows SuperOffice R&D to detect the cause of the error. The error report does not contain passwords. This information is used to help improve the next releases of SuperOffice CRM.web.

* If we want to log data to the built-in Windows event log, select **Log to event log**. We can access this log from **Administrative Tools** in the Windows Control Panel.

* If we want to log data to a plain text file, select **Log to file**, and specify the path and file name. This option is selected by default, and the default file path is **C:\\temp**.

* If we want to specify advanced logging settings, select **Display Advanced Settings**, and continue to the next step. If not, skip to step 6.

5. If we select **Display Advanced Settings**, the **Level of detail to include in logs** section appears in the bottom half of the SuperOffice Diagnostics dialog, with a number of additional logging settings.

An important point to remember!

Turning on extensive logging to files will produce large log files and degrade performance significantly. There is a significant risk that log files will fill up the hard drive if it is left on for a long period of time. Extensive logging should only be used while diagnosing faulty situations. It is important that extensive logging is turned off on the completion of the diagnosis.

<img src="../../Setup%20configuration_files/image018.jpg" width="528" height="455" />

 

Do the following:

* Select which types of information we want to log: errors, warnings, etc. This information is saved in the **(date).log** file.

* Select **Log service calls** if we want to log calls from the CRM.web GUI (and any other external sources) to the service layer. This information is saved in the **Service‑(date).log** file. Specify which parameters we want to log, in the **Parameters to be logged** field, separated by commas.

* If we want to log instances where database queries take longer than intended, select **Log long-running database queries to a special log file**. This information can be used for performance monitoring, and is saved in the **Query‑(date).log** file.

* In the **Number of milliseconds a query can run before being logged** field, specify the maximum time a query can run before being considered long-running and thereby being logged.

When we have selected the desired settings, we click **Next**.

<img src="../../Setup%20configuration_files/image019.jpg" width="551" height="475" />

[6.    In the **SuperOffice Product Configuration Complete** dialog, we get a summary of the installation settings we have selected. We may click **Back** to go back and make any necessary changes. When we are done, click **Finish**.]()
