<properties date="2016-05-11"
SortOrder="61"
/>

ServerSetup encrypts and saves the database user/password in the .MST

Client setup stores it in the local .config file

NetServer decrypts these credentials on behalf of the Sales and Marketing Windows client.

ServerSetup also creates a System User with the same credentials; giving them a dual role

These credentials can access NS Web Services

The following steps are recommended to increase security:

1. Deactivate the default system user in the SoAdmin client.

2. Create a new pair of database- and system user specifically for Sales and Marketing Web and Customer Service
