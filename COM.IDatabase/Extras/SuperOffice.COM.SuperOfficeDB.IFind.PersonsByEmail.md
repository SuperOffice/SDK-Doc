
##SUMMARY

Search and retrieve persons by their email address. This will return all persons that have an email address like the email given as search string. Does not accept partial address, but wildcards does work


##RETURNS

SOContacts  a collection of persons matching 'Email'.


##EXAMPLE

**PersonsByEmail**


This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.


The source code below logs on to the database, and search and retrieves all persons with an email address like <A href="mailto:sdk@SuperOffice.com">'sdk@SuperOffice.com'</A>.


![](..\..\Examples\vbs\SOFind.PersonsByEmail.vbs.txt)


##PARAM: Email

search argument (email address)

