<properties date="2016-05-11"
SortOrder="70"
/>

 

Cryptography is used for encrypting and decrypting the user sessions. This section consists of three Key Value pairs:

* SymmetricKey         - Base64 encoded key-string
* SymmetricIV          - Base64 encoded vector-string
* SymmetricSecret     - String value representing the user-defined secret

 

The SymmetricKey and the SymmetricIV is used in the Rijndeal (System.Security.Cryptography.Rijndael) based encrypting and decrypting methods. The SymmetricSecret is used to compute a hash code using the SHA256Managed classes (System.Security.Cryptography.SHA256Managed). The key value pairs in the section are used in the NetServer session suspend and session continue mechanisms.

When you suspend a session the SymmetricKey and the SymmetricIV will be used to encrypt the session information and based on the SymmetricSecret, a hash code will be created. Using a CryptoStream ( System.Security.Cryptography.CryptoStream ) the encrypted session data and the computed hash will be written to a MemoryStream ( System.IO.MemoryStream ) and returned as a Base64String for subsequent resubmitting in a session continue method.

In the session continue method, the SymmetricKey and the SymmetricIV will be used to decrypt the session data and the SymmetricKey will be used to compute the hash code. In the continue method, the hash code generated in the suspend method will be checked against the hash code generated in the continue method, to verify weather the encrypted and decrypted information has not been tampered with.

The SymmetricKey and the SymmetricIV are generated values while the SymmetricSecret is a user defined secret

 

An Important point to remember!

It is important to know that if your system is using a server cluster these values should be identical in all cluster machines. 

1. autolist

 

```
<Cryptography>
<add key="SymmetricKey" 
value="mbiNaaa+3wWcbzGWCnvCvRBoLg8NADQiXaaChJ38W1w=" />
<add key="SymmetricIV" value="aBL3Kh0mXHzn+NvXkSS/Lg==" />
<add key="SymmetricSecret" value="SuperOffice NetServer 1.0  
 Alpha lab-testing" />
</Cryptography>
```

 
