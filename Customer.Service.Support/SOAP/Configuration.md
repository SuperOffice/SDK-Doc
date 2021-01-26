<properties date="2016-06-24"
SortOrder="100"
/>

The configuration of the SOAP interface is fairly limited. The only option you have is to limit the access to the different ports by ranges of IP addresses. You should carefully consider which ranges that needs access to the different ports, as SOAP opens for easier brute force exploitation of your system. If malicious hackers get access to the interface this could jeopardize the security of your system.

To configure the interface go to System-&gt;Soap from within the user interface of Service. You need Administrator level rights to do this. On this page you can enter or delete ranges that are permitted to use the different ports. If you try to run a client from an IP address that is not within the permitted ranges an exception will be thrown.
