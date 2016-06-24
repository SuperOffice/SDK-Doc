<properties date="2016-05-11"
SortOrder="71"
/>

 

This is the Key that will be passed as the Key parameter to the Rijndeal symmetric encryption algorithm (System.Security.Cryptography.Rijndael). The Key parameter of the Rijndeal encryption has to be a byte array and since this string is a Base64 encoded string we can convert this to a byte array simply by using the FromBase64String method under the System.Convert namespace.

 

```
<add key="SymmetricKey"
value="mbiNaaa+3wWcbzGWCnvCvRBoLg8NADQiXaaChJ38W1w=" />
```

 

Having said all this, a question remains how you construct a string like above. It is fairly simple you can use a function like below to generate a Base64 encoded string.  

 

```
byte[] inArray = new byte[32];
for(x = 0; x < inArray.Length; x++)
{
inArray[x] = (byte)x;
}
string base64String = Convert.ToBase64String(inArray);
```

 

the value that is assigned to base64String can be used as the Symmetric Key.

 

 

An Important point to remember!

It is important of paramount importance that the same symmetric Key is used when encrypting data and decrypting data. The NetServer will take care of the encryption and decryption of data when it is needed so in a user point of view the important thing is having this symmetric Key and not changing it.
