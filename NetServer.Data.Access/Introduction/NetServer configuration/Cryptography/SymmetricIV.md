<properties date="2016-05-11"
SortOrder="72"
/>

 

This value represents the initialization vector part of the Rijndeal symmetric encryption (System.Security.Cryptography.Rijndael) algorithm. This is also a Base64 encoded string and for this also the above example can be used to generate the value.

```
<add key="SymmetricIV" value="aBL3Kh0mXHzn+NvXkSS/Lg==" />
```

 

An Important point to remember!

It is important of paramount importance that the same symmetric Key is used when encrypting data and decrypting data. The NetServer will take care of the encryption and decryption of data when it is needed so in a user point of view the important thing is having this symmetric IV and not changing it.
