<properties date="2016-05-11"
SortOrder="27"
/>

Troubleshooting NetServer
-------------------------------------------------

In this document we have not intended to cover any specific area, but rather to answer some of the questions that have been faced by the users of NetServer 3.0.

Which .Net version
------------------

### Visual Studio 2003

Therefore, if you were trying to reference a NetServer 3.0 dll in VS 2003 it would generate an error message. For example if you try loading SOCore.dll in VS 2003 it would generate “A reference to ‘SOCOre.dll’ could not be added…….” error message. This because VS 2003 supports only .Net framework 1.1.   Another thing that the user should watch out for is when deploying SIX.Web on an ASP.Net/IIS on XP machine since .Net 1.1 is the default framework on XP. In order to overcome this, the user needs to manually set the ASP.Net framework to 2.0.

### Visual Studio 2005

NetServer 3.0 is built on .Net Framework 2.0 taking the advantage of generics and any other advantages available in the package.

### Visual Studio 2008

VS 2008 uses .Net framework 3.5 which is the latest framework class library. Since the FCL compiles to Intermediate Language the Common Language Runtime understands any code built on FCL 2.0, 3.0 and 3.5 would run without any issues with NetServer.

Which Database
--------------

NetServer 3.0 supports the following databases.

Ø   Microsoft SQL Server 7, 2000 and 2005

Ø   Oracle 8, 9i and 10g

Ø   IBM DB2 8 and iSeries

Ø   Sysbase iAnywhere 7,8 and 9

NetServer and IIS7
------------------

When hosting a website on IIS7 that is using NetServer 3.0 create a new project using visual studio and add the required NetServer dlls such as SOCore, SODataBase etc to the project. In the web.config set the necessary properties. Then by using IIS manager create a new website and point it to the earlier created web project. When accepting the setting accept all default settings.

It is not necessary to set up permission on the directory on which NetServer has been installed. When you create your web project and add references such as the NetServer dlls to the project these dlls will be copied to the projects bin directory or discovered in the GAC. When considering permission if the project you are working on is inside inetpub then the required permission has already been set. But if the project is located somewhere else the necessary permission should be given.

Web Services
------------

When fetching data from NetServer via a web service you don’t need to add the SuperOffice dlls to the client side. By adding a web reference to the web service ASMX files and then computing the authentication info which is based on a secret can make the web service work without any specific client code. This has been further explained in the NetServer Services API documentation.

NetServer 3.0 and x64 bit System
--------------------------------

In order to run NetServer on a 64 bit machine certain files of NetServer which have been written on C++ has to be converted 64 bit after which NetServer can run successfully.

An optional method of doing this is to set up a 32 bit WOW compatibility application pool on IIS under server 2008.
