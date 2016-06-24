<properties date="2016-05-11"
SortOrder="9"
/>

The structure of the returned object will vary depending on the country used for the formatting.

Here is the Thai address format:

<img src="../Localization%20in%20NetServer_files/image002.gif" id="Picture 2" width="269" height="64" />

formattedAddress looks like this:

  formattedAddress\[0\] = { Address1Field }
  formattedAddress\[1\] = { Address2Field }
  formattedAddress\[2\] = { CityField, PCodeField }

In the United States, addresses are formatted like this:

<img src="../Localization%20in%20NetServer_files/image003.gif" id="Picture 3" width="263" height="75" />

The formattedAddress result for a USA address looks like this:

  formattedAddress\[0\] = { Address1Field }
  formattedAddress\[1\] = { Address2Field }
  formattedAddress\[2\] = { CityField  }
  formattedAddress\[3\] = { StateField, ZipCodeField }

Each field info object contains the label of the field (“Address 1”) and the value that the end-user has typed into the field (“5500 Pennsylvania Avenue”), as well as the max length and formatting flags.

------------------------------------------------------------------------

**See Also:** AddressTableInfo
 
