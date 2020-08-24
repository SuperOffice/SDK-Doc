<properties date="2016-06-24"
SortOrder="18"
/>

Encoding of binary data is normally behind the scenes

Represented as an array of Byte objects in ejScript

Binary data is base64 encoded when transmitted between ejScript and NetServer, but the encoding/decoding is handled behind the scenes.

The NSStream object is normally used for binary data, and in ejScript this is represented as an array of Bytes.

Example: Display the key account managers picture

We will now look at an example where we use the NSStream object to get a person’s image. We will also display this image in the Customer Centre.

```
#setLanguageLevel 3;
Integer id = getCgiVariable("assocId").toInteger();
NSUserAgent uAgent;
NSUser[] user = uAgent.GetUserFromEjUserId(id);
NSBLOBAgent bAgent;
NSImage image = bAgent.GetPersonImage(user[0].GetPerson().GetPersonId());
print("Content-Type: image/png\n\n");
printBinary(image.GetImage());
```
