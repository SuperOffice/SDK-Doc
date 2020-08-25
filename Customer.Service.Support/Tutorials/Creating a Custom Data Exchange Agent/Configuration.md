<properties date="2016-06-24"
SortOrder="4"
/>

Configuration
=============

We can now go ahead and configure this agent, a task and an ejScript to retrieve these companies inside Expander Data Exchange. First, we will create the ejScript with the following code:

```
#setLanguageLevel 3;
DbiControl dbiControl = getDbiControl();
String event = dbiControl.getParameter("dbi.event");
Integer agentId = dbiControl.getParameter("dbi.agentId").toInteger();
Bool debug = dbiControl.getParameter("dbi.debug").toInteger() == 1;
if (event == "receiveObject")
{
  Map object = dbiControl.getObject();
  String id = object.get("column.0");
  String name = object.get("column.1");
  String phone = object.get("column.2");
  Company c;
  c.loadFromAgentAndKey(agentId, id);
  c.setValue("name", name);
  c.setValue("phone", phone);
  c.setValue("dbi_agent_id", agentId.toString());
  c.setValue("dbi_key", id);
  c.setValue("dbi_last_modified", c.getValue("dbi_last_modified"));
  c.setValue("dbi_last_syncronized", getCurrentDateTime().toString());
  Integer newId = c.save();
  if(debug) print("Company: " + newId.toString() + "      \r\n");
}
```

Just create this as a script under "System design" -&gt; "Scripts". Then, we can create our agent:

<img src="Creating%20a%20Custom%20Data%20Exchange%20Agent_files/image002.jpg" id="Picture 4" width="597" height="351" />

Then we can create a task underneath this agent and relate it to our newly created script:

<img src="Creating%20a%20Custom%20Data%20Exchange%20Agent_files/image003.jpg" id="Picture 7" width="596" height="353" />

Choose any schedule you feel like, such as every hour.
