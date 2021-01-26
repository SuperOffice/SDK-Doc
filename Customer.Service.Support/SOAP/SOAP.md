<properties date="2016-06-24"
/>

**Service SOAP interface **

**Reference Manual v1.1**

 

This document is intended to be the reference guide to the SOAP interface of Service. Currently this covers the Customer port which contains methods to cover the customer interface.

The structures passed and received from the methods are described in this document, but we recommend that you use the WSDL file as a reference to the methods and arguments when developing. If using a WSDL editor like the free CapeStudio 4.0 WSDL Editor (available from [www.capeclear.com](http://www.capeclear.com/)) you will get an excellent overview of all methods and structures.

To access the WSDL file you enter the following URL:

http://\[cs.mycompany.com\]/scripts/SOAP?action=customer

You replace the domain with your own Service URL. *Customer* indicates that this is the *customer* port. For other ports alter this. For IIS you might have to write *soap.exe* instead of *soap*.

All examples below are written in C\# (Microsoft Visual Studio .NET), but it should be easy to convert this to any other language. All examples assume that there is a web reference named *customer*. Note that the word *ticket* and *request* are used interchangable throught the text.

1. autolist
