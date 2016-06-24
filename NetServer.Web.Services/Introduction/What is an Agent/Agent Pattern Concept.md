<properties date="2016-06-24"
SortOrder="5"
/>

SuperOffice has created a set of objects based on the Agent pattern that will perform your work for you. A typical agent on the NetServer will have all useful service methods that are capable of inserting, retrieving, updating and deleting data. An agent represents a set of related services. Each method on an Agent object is a service call. If your services configured to use SOAP, then each method call is a SOAP call which will travel over the network, an agent consumes and returns carrier objects. The goal of the agent pattern is to make it clear when you are making potentially expensive service calls.

The Agent factory returns implementation objects that talk directly to the database or to return proxy objects that talk to the back-end via SOAP. The advantage of this is that it gives flexibility since you can run everything on one box or on two separate boxes without changing the program. Only the config file needs to be changed.

The following section of the config file shows where the web services are turned on.

```xml
<Services>
      <!-- Mode can be Local, Remote, Switch -->
      <add key="DefaultMode" value="Local" />
 
      <!-- Default mode for the switch.  Can be Local or Remote -->
      <add key="SwitchDefault"  value="Remote" />
 
      <!-- Timeout before failover in seconds -->
      <add key="SwitchFailover" value="60" />
 
      <!-- Base URL for remote services -->
      <add key="RemoteBaseURL" value="http://localhost/Webs/SuperOffice.Services.Stub" />
 
      <!-- URL to the Data Set Definition file -->
      <add key="DataSetDefinitionURL" value="http://localhost/Webs/SuperOffice.Services.Stub/dsd.xml" />
    </Services>
```

 

Through a given agent you can manipulate a carrier.

An important point to remember!

A carrier is an object that carries data between the Agent and the NetServer services. The two kinds of carriers that are available through NetServer include Simple Read-Only Carriers and Complex Entity Carriers. The main difference between these two types of carriers is that Complex Entity Carriers can be updated and sent back for saving to the database while Simple Read-Only Carriers cannot be saved back to the database.
