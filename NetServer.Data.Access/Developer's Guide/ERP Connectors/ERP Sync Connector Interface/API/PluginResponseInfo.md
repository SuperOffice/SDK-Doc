<properties date="2016-05-11"
SortOrder="7"
/>

### [PluginResponse]() Info

PluginResponseInfo exists for the connector to be able to respond with more than just a true/false, but also an explanation. For user interaction methods (such as creating an actor from the SO GUI), the explanation can be directly displayed to the user.

However, for the background synchronisation tasks (detecting changes and transferring them to the other side), we will have to log them and possibly find a way to display urgent messages to the user in an asynchronous way.

**Note** : As can be seen in the return types of IErpConnector, there are numerous types of PluginResponseInfo objects. These are all inherited from PluginResponse, and are given an extra property that will actually contain the main object that Erp Sync is interested in. The PluginResponse object will in these cases be a carrier which can report back to Erp Sync about any messages, warnings or failures that may have happened during the operation at the Sync Connection side. Error/exception messages should be sent back using these carriers; exceptions should not be thrown if at all avoidable.

 

Members:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><pre class="c40"><code>bool
 IsOk</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>Answer to the question / An indication if the operation went well.</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>public
 
ResponseState
 State</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>More detailed status than IsOk. See “Enum ResponseState” below</p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>string
 UserExplanation</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>A localized explanation to the answer, preferably readable by a user.<br />
Example:</p>
<p>US:\&quot;Text in English\&quot;;NO:\&quot;Text in Norwegian\&quot;;GE:\&quot;Text in German\&quot;FR:\&quot;Text in French\&quot;;</p>
<p>...and so on</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>string
 TechExplanation</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>Always in English. May contain more technical details than UserExplanation (e.g. stacktrace, etc.).</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>string
 ErrorCode</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>An error code, if available</p>
<p> </p></td>
</tr>
</tbody>
</table>

 

 

### []() [Enum ResponseState]()

This is used in PluginResponse to give a more detailed status than just true or false. If the value is anything other than “Ok”, the UserExplanation and/or TechExplanation fields should be used to provide more info.

 

Values:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><pre class="c40"><code>Ok</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The operation completed normally</p>
<p> </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>OkWithInfo</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The operation completed, but there is some information that should be shown or logged</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><pre class="c40"><code>Warning</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The operation completed, possibly in a degraded fashion. The user should be warned</p>
<p>               </p></td>
</tr>
<tr class="even">
<td><pre class="c40"><code>Error</code></pre>
<pre class="c40"><code> </code></pre></td>
<td><p>The operation did not complete. The user should be told of the error</p>
<p> </p></td>
</tr>
</tbody>
</table>

 

 



