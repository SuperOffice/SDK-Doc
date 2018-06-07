---
uid: netserver_configuration_messaging
title: NetServer Messaging Element
date: 2018-06-06
SortOrder: 83
---
Configuration values for SuperOffice.CRM.Messaging and the SoMessaging.dll.

```xml
<Messaging>
  <add key="MessagingSoAuthentication" value="" />
  <add key="MessagingSoUser" value="" />
  <add key="MessagingSoPassword" value="" />
  <add key="BrokerBroadcastAddress" value="" />
</Messaging>
```

|Name|Description|
|------------|-|
|MessagingSoAuthentication|False will indicate process being authenticated with NetServer or Anonymous user.|
|MessagingSoUser|SuperOffice user to authenticate with.|
|MessagingSoPassword|Password for MessagingSoUser.|
|BrokerBroadcastAddress|Broadcast address for the message broker to send to other machines.  Default is broadcast address: 255.255.255.255.|
|BrokerExternalListeningAddress|Address the message broker is listening on for external messages. Default value is Any IP address: 0.0.0.0.|
|BrokerInternalListeningAddress|Address the message broker is listening on for internal messages.  Default value is Loopback adapter: 127.0.0.1.|
|ClientBroadcastAddress|Address ther message clients (normally sending messages through the message broker) is broadcasting on.  Default value is Loopback adapter: 127.0.0.1.|
|ClientListeningAddress|Address the message clients (noirmally recieving messages from the message broker) is listening on.  Default value is Any IP address: 0.0.0.0.|
|BrokerBroadcastPort|The port the message broker is sending messages on to other machines.  Default value is port 19107.|
|BrokerExternalListeningPort|The port the message broker is listening for messages from other machines.  Default value is port 19107.|
|BrokerInternalListeningPort|The port the message broker is listening for messages from internal clients.  Default value is port 19108.|
|ClientBroadcastPort|The port the message client is broadcasting messages on (normally to the message broker).  Default value is port 19108.|
|ClientListeningPortStart|The start of the range clients listen to messages on (normally from the message broker).  Default value is 19109.|
|ClientListeningPortEnd|The end of the range clients listen to messages on (normally from the message broker).  Default value is 19999.|
|ClientAutoCreateBroker|Should the message client automatically create a local message broker if one does not exist?  Default value is true.|
|BrokerAutoAliveMessage|Should the message broker automatically send alive messages?  Default value is true.|
|ClientAutoAliveMessage|Should the message client automatically send alive messages? Default value is true.|
|BrokerAutoAliveMessageInterval| Interval for the message broker to send alive messages.  Default value is 60 (sec).|
|ClientAutoAliveMessageInterval|Interval for the mesage client to send alive messages.  Default value is 60 (sec).|
