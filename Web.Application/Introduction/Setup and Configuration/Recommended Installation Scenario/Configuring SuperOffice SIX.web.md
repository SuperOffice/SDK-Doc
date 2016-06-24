<properties date="2016-06-24"
SortOrder="20"
/>

Once we have completed the CRM.web installation, the SuperOffice Product Configuration program should be launched. Provided we selected **I would like to launch CRM.web Configuration** in the final step of the installation the program will be launched automatically. Otherwise, we can start it manually by selecting **Start &gt; All Programs &gt; SuperOffice &gt; CRM.web &gt; Product Configuration (instance name)**, where "instance name" is the name of the instance we want to.

Like the installation program, the SuperOffice Product Configuration program is designed as a wizard. The wizard is divided into so-called chapters. In addition to the **Back** and **Next** navigation buttons, we can use the clickable links on the left hand side of the dialogs, which take us directly to the corresponding chapter.

Configuration steps are as follows.

1. In the welcome screen, click **Next**.

<img src="../../Setup%20configuration_files/image006.jpg" width="537" height="463" />

[2.    From the **Database System** dropdown, select the database system to use. Depending on the system we select, the **DB Driver** and **DB Driver Policy** fields may be enabled:]()

* **DB Driver**: Specify the path to the database driver file. This is a DLL file provided by the database vendor.
For example: C:\\Sybase\\SQL Anywhere 9\\win32\\iAnywhere.Data.AsaClient.dll.

* **DB Driver Policy**: Specify the path to the database driver policy file. This is usually the same DLL file as the DB driver.

* **Connection Type**: Specifies the type of the database driver. This is defined by the database vendor.

These fields are disabled if they are not required by the database system selected.

In the **Connection string (ADO.NET)** field, accept the default string retrieved from the configuration file, or make any necessary changes. This string is used when NetServer connects and logs on to the SuperOffice database.

In the **Command timeout** field, type the number of seconds NetServer should try to connect to the database before it times out.

Click **Next**.

<img src="../../Setup%20configuration_files/image007.jpg" width="536" height="465" />

3. In the **Name or IP Address** field, specify the name or IP address of the server where the SuperOffice database is located.

In the **Database/Instance** field, specify the name of the SuperOffice database.

In the **Database user name** and **Database user password** fields, specify the name and password to use when logging in to the database. This user has to be a SuperOffice system user.

Click **Test Connection** to check the connection to the database. Once we have received a message confirming that the test was successful, click **Next**.

<img src="../../Setup%20configuration_files/image008.jpg" width="528" height="455" />

4. In the **Location** section, specify the path where the SuperOffice document archive is located, and the temporary folder to be used. The archive is usually located on a different server, while the temporary path should be a local path. We can click **Browse** to select the paths.

If access to the document archive is not available to the local ASP.NET user, NetServer must impersonate a user with read/write access to the archive. This will be the case for almost all installations, hence select **Impersonate User**.

[The user can either be:]()

* a domain user with read/write access to the document archive and rights to log on to the web server or

* a local user on both the web server and the archive server with the same user name and password, and with read/write access to the document archive.

The latter will be the case for workgroups or other situations where a domain controller is not available to the server running CRM.web or the server holding the document archive.

[]()[In the **Archive Domain** field, specify the name of the domain if a domain user has been specified, or the name of the local computer CRM.web is installed on. The **Archive User** and **Archive Password** fields should contain the user name and password for the user being impersonated.]() Click the **Validate** button to verify that we have entered the password correctly.

[Click **Next**.]()

<img src="../../Setup%20configuration_files/image009.jpg" width="536" height="462" />

 

[5.    In the **Symmetric key** and **Symmetric IV (Initialization Vector)** fields, specify the keys to be used for encrypting and decrypting the user credentials. The default values are retrieved from the configuration file, but you can click **Generate keys** to generate new encryption keys automatically.]()

In the **Symmetric secret text** field, specify a user‑defined secret text string used to distinguish this NetServer application from others. This can be any string.

An important point to remember!

It is important that we use individual keys. This can be ensured by clicking the **Generate keys** button and then entering a string in the **Symmetric secret text** field.

click **Next** to continue.

<img src="../../Setup%20configuration_files/image010.jpg" width="538" height="465" />

 

[6.    In the **Default app. language** drop-down list, select the default language for the application. This value is used to configure SuperOffice language and formats, and to assign country IDs to associates who are not included in the Persons category in SIX. The default is **English (UK)**.]()

Select **Use the default application language for all persons** if the application does not support localization, and if we want all persons to be represented by the language specified in step 6. Click **Next**.

<img src="../../Setup%20configuration_files/image011.jpg" width="528" height="454" />

7. In the **SuperOffice Diagnostics** dialog, do the following:

* If we want error reports to be sent to SuperOffice, select **Log to SuperOffice Research and Product Development**.

An important point to remember!

Only errors are reported to SuperOffice, not warnings, information, etc. The information reported comprises database serial number, name or IP addresses for servers, user name of the currently logged-in user and other information that allows SuperOffice R&D to detect the cause of the error. The error report does not contain passwords. If we want to log data to the built-in Windows event log, select **Log to event log**. We can access this log from **Administrative Tools** in the Windows Control Panel.

* If we want to log data to a plain text file, select **Log to file**, and specify the path and file name. This option is selected by default, and the default file path is **C:\\temp**.

* If we want to specify advanced logging settings, we have to select **Display Advanced Settings**, and continue to the next step. If not, skip to step 9.

8. If we select **Display Advanced Settings**, the **Level of detail to include in logs** section appears in the bottom half of the SuperOffice Diagnostics dialog, with a number of additional logging settings.

An important point to remember!

Turning on extensive logging to files will produce large log files and degrade performance significantly. There is a significant risk that log files will fill up the hard drive if it is left on for a long period of time. Extensive logging should only be used while diagnosing faulty situations. It is important that extensive logging is turned off on the completion of the diagnosis.

<img src="../../Setup%20configuration_files/image012.jpg" width="516" height="445" />

 

Do the following:

* Select which types of information we want to log: errors, warnings, etc. This information is saved in the **(date).log** file.

* Select **Log service calls** if we want to log calls from the CRM.web GUI (and any other external sources) to the service layer. This information is saved in the **Service‑(date).log** file. Specify which parameters we want to log, in the **Parameters to be logged** field, separated by commas.

* If we want to log instances where database queries take longer than intended, select **Log long-running database queries to a special log file**. This information can be used for performance monitoring, and is saved in the **Query‑(date).log** file.

* In the **Number of milliseconds a query can run before being logged** field, specify the maximum time a query can run before being considered long-running and thereby being logged.

When we have selected the desired settings, click **Next**.

<img src="../../Setup%20configuration_files/image013.jpg" width="527" height="454" />

[9.    In the **SuperOffice Product Configuration Complete** dialog, we get a summary of the installation settings we have selected. We can click **Back** to go back and make any necessary changes. When we are done, click **Finish**.]()
