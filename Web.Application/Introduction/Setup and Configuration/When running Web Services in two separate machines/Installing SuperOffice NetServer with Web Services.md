<properties date="2016-06-24"
SortOrder="23"
/>

Sometimes, we may want to install SuperOffice CRM.web on one machine and the NetServer application server with Web services on another. In such cases, we will need to run the installation and configuration procedure on both machines - once for NetServer with Web services, and once for CRM.web. These procedures are described below.

An important point to remember!

 It is recommended that we install NetServer with Web services first, and then install SuperOffice CRM.web on the other machine.

Before starting, we should gather the following information.

* Database server IP/DNS address

* Database server version

* SIX database name

* SIX database prefix/schema name

* SIX database user name

* SIX database password

* SO\_ARC file server name

* SO\_ARC location (UNC path

* SO\_ARC user name (if needed)

* SO\_ARC password (if needed)

* SO\_ARC domain (if needed)

* NetServer server IP/DNS address

* NetServer Web services URL

* NetServer ASP.NET application identity

* CRM.web server IP/DNS address

* CRM.web server URL

* CRM.web ASP.NET application identity

 

 

Do the following to install NetServer with Web services:

1. Follow steps 1-5 in “Installing SuperOffice”" on page 5. The **Setup Type** dialog is displayed:

<img src="../../Setup%20configuration_files/image014.jpg" width="504" height="386" />

2. Select CRM.web & NetServer application server on separate machines, and click Next.

<img src="../../Setup%20configuration_files/image015.jpg" width="504" height="386" />

3. In the SuperOffice Product Installation dialog, select NetServer application server with Web Services, and click **Next**.

4. Follow steps 7-9 on “Installing SuperOffice CRM.web” to create the web application for NetServer Web services.
