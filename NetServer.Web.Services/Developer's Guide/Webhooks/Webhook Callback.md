## Webhook Notifications

Now that webhooks have been created and saved in SuperOffice, notifications can be sent out when an event occurs. A webhook notification is referred to as a WebhookPayload, and contains the following properties:

| Property Name | Description                                                                              |
|---------------|------------------------------------------------------------------------------------------|
| EventId          | A GUID that uniquely identifies this event.                                           |
| Timestamp        | The datetime when the event occured.                                                           |
| Changes     | An array of fields that are connected to the change.                                                   |
| Event        | The name of the event.                           |
| PrimaryKey         | The entity identity that was affected                                  |
| Entity          | The type of entity that was affected, i.e. activity, associate, contact, person etc. |
| ContectIdentifier       | Customer id for Online users: "Cust1234". Not used for On-site installations.                         |
| ChangedByAssociateId    | Associate id of the user that triggered the event.                        |
| WebhookName   | The given name of the webhook. |

A webhook payload for the event _contact.changed_ is send as the following JSON message:

``` json

{
    "EventId":"88f91933-edce-4c1a-8ded-ade8e2f72434",
    "Timestamp":"2018-04-05T08:28:01.5732501Z",
    "Changes":["contact_id","updated_associate_id","soundEx","updated","name"],
    "Event":"contact.changed",
    "PrimaryKey":18,
    "Entity":"contact",
    "ContextIdentifier":"Cust54321",
    "ChangedByAssociateId":5,
    "WebhookName":"Tonys Contact Handler"
}

```

Notifications are sent out in a fire-and-forget fashion and do not expect a response to these POST requests. There is no way to prevent changes or interrupt the normal workflow of SuperOffice.

Note that the event name, event id and signature are sent as HTTP headers, to help the recipient route and filter the notification without having to parse the body.

### WebhookPayload Headers

| Header Name | Description                                                                              |
|-------------|------------------------------------------------------------------------------------------|
| X-SuperOffice-Event   | The event name, i.e. contact.created, project.changed.                         |
| X-SuperOffice-EventId | A GUID that uniquely identifies this event.                                    |
| X-SuperOffice-Retry   | The number of retries this webhook has been tried to be sent.                  |
| X-SuperOffice-Signature | The hash/base64 encoded secret.                                              |

---

## Webhook Secrets

A webhook secret is used as an additional layer of security in order to verify that the webhook sent to the receiver has not been tampered with. How do you know that the notification was sent from SuperOffice, and not from some random hacker.

Only when a webhook definition contains a secret value will SuperOffice will append an X-SuperOffice-Signature header to each event notification. It is then up to the receiver to verifying signature of the payload prior to processing the message.

So how does a receiver validate the X-SuperOffice-Signature header value? Let’s first review how the signature is generated.

SuperOffice uses the shared secret as a key in the HMAC SHA256 algorithm, which in turn is used to hash the body of the webhook JSON value. The result of the hash is then base64 encoded and used to populate the X-SuperOffice-Signature header value.

The responsiblity of the receiver is to use the shared secret in the same manner, and essensially do exactly the same thing. The receiver takes the body of the request; essentially the webhook payload, hash and base64 encode it, and then compare the results with the value from the X-SuperOffice-Signature header.

If the values match then you can be confident the webhook is a valid message that has not been tampered with. If not, the webhook has likely been tampered with mid-stream and should be ignored.

Here is a validation example using C#.

``` CSharp

/// <summary>
/// Validates the X-SuperOffice-Signature webhook header value.
/// </summary>
/// <param name="storedSecret">The shared secret stored on the application side.</param>
/// <param name="headerValue">The value from X-SuperOffice-Signature header</param>
/// <param name="body">JSON representation of the webhook</param>
/// <returns></returns>
private bool IsValidWebHook(
    string storedSecret,
    string headerValue,
    System.IO.Stream body)
{
    var validationResult = false;

    // ensure it is the correct encoding
    var secret = System.Text.Encoding.UTF8.GetBytes(storedSecret);

    // hash and base64 encode the stored shared secret
    using (var hasher = new System.Security.Cryptography.HMACSHA256(secret))
    {
        var sha256 = hasher.ComputeHash(body);
        var base64 = Convert.ToBase64String(sha256);

        // verify the values match!

        if (base64 == headerValue)
        {
            validationResult = true;
        }
    }

    return validationResult;
}

```

Here is a validation routine using Node/Javascript:

You need to be careful to compute the hash based on the request string, and not a parsed and converted representation, since whitespace and line delimiters are significant. See this [article](https://sensecommerce.io/blog/validating-shopify-webhooks-node-js/) for an in-depth example using Express and Node.

``` javascript

/**
@signature is X-SuperOffice-Signature header value
@secret is the stored shared secret
@ req is the HTTP request
@ buf is the body of the HTTP request
**/
function isValidWebHook(signature, secret, req, buf) {

    // generate the signature locally
    const computedSignature = crypto
      .createHmac("sha256", secret)
      .update(buf.toString())
      .digest("base64");

    // compare generated vs. header value
    if (computedSignature === signature) {
      return true;
    } else {
      return false;
    }

}

```

