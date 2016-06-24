<properties date="2016-06-24"
SortOrder="14"
/>

If you want to do server-side method calls asynchronously, meaning that your client-side javascript will continue execution and not wait for the server-side method to finish. This is the way to do actual AJAX-calls, meaning that the end-user gains back control over the browser even though the server is performing operations, and will return with any result values whenever it finishes, without the user having to wait for a page to refresh.

Here is the signature for the CallASync javascript function;

\_this.CallASync=function(fnCallback, fnError, fnOnTimeout, socontext, ajaxMethod)

Like with the CallSync method, the ajaxMethod argument is the name of the method you want to call.

The fnError argument is the name of the javascript function you want to call if an error occurs.

The fnOnTimeOut argument is the name of a javascript function to call if the call times out.

The socontext argument is a value, if any, that will be passed on to the function defined in fnCallback.

As with the CallSync function, you can add as many arguments as your server-side method requires after the ones from the signature.
