<properties date="2016-06-24"
SortOrder="7"
/>

The following codes has been created using NetBeans IDE 5.5 and explanations are based on the above IDE.

In order to use a web service in a java application we are required to create a web service client. Following is an explanation on how the web service client was created for the example.

From the Projects window or Files window, right-click a node in the project and choose New &gt; File/Folder. The New File wizard appears. Under Categories, select Web Services. Under File Types, select Web Service Client then Click Next.

To Access the WSDL file of the web service that the web service client is to consume which is from a running web service, click WSDL URL, then type or paste the web service's URL.

An important point to remember!

If you are behind a corporate firewall, click Proxy Settings and set your proxy host and port number.

The WSDL file is downloaded when you finish the wizard.

Following is an image of the screen that is used to create a web service client.

<img src="../Calling%20from%20Java_files/image001.jpg" width="604" height="417" />

Once the Finish button has being clicked and returned to the development environment the added web service can be seen as follows on the left side of the screen on both the Files and Projects tabs.

<img src="../Calling%20from%20Java_files/image002.jpg" width="236" height="308" /> 

The image shows how the added web service client can be seen on the projects tab.

<img src="../Calling%20from%20Java_files/image003.jpg" width="237" height="304" />

In the files tab once the client has being loaded it will allow the programmer to see the class file and java files available.
