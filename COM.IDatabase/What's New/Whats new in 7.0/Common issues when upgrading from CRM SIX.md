---
uid: Upgrading_from_CRM_SIX
title: Common issues when upgrading from CRM SIX
---

Some common issues when upgrading your programs to work with SEVEN are:

-   SOCRM is no longer registered automatically when it's run.
    You need to run SOCRM /RegServer as an administrator to put it into registry. The MSI installer will do this for you.
-   You need a SUPEROFFICE.CONFIG along with SUPEROFFICE.INI - this is the NetServer config file.
-   <span id="result_box" class="long_text"><span title="" style="BACKGROUND-COLOR: #fff" qc="You will need a new, empty, but correctly set up the database instance to convert into - your old database is not affected by the upgrade, since this is a copy upgrade." pc="Du vil trenge en ny, tom, men riktig satt opp database instans å konvertere inn i - din gamle database blir ikke berørt av oppgraderingen, siden dette er en kopierings-oppgradering." closure_uid_lxzxgl="40">You will need a new, empty, but correctly set up the database instance to convert into - your old database is not affected by the upgrade, since this is a copy upgrade.</span></span>

    <span id="result_box" class="long_text">This process adds a bunch of new tables, including all eJournal tables. Some tables who where never in use is removed and some existing ones are modified.</span>

-   <span class="long_text"><span title="" qc="&quot;If you do not have internet access from where you are running setup, you will need an XML license to upgrade." pc="&quot; Hvis du ikke har internett tilgjengelig fra der du kjører setup, så vil du trenge en XML lisensfil for å oppgradere." closure_uid_lxzxgl="41">If you do not have internet access from where you are running setup, you will need an XML license to upgrade. In this case you'll need to add the</span> <span title="" qc="The license file indicates you SOTABLES.INI so Server Setup / DbSetup obtain it." pc="Lisensfilen angir du i SOTABLES.INI slik at ServerSetup/DbSetup får tak i den." closure_uid_lxzxgl="42">license file to SOTABLES.INI so Server Setup / DbSetup gets it.</span></span>
-   <span class="long_text"><span title="" style="BACKGROUND-COLOR: #fff" qc="&quot;Db + user password will be stored locally on each client in encrypted form, or read from the ODBC link." pc="&quot; Db user + password vil lagres lokalt på hver klient i kryptert form, eventuelt leses fra ODBC koblingen." closure_uid_lxzxgl="43">Db + user password will be stored locally on each client in the SUPEROFFICE.CONFIG file in encrypted form, or read from the ODBC link.
    </span><span title="" style="BACKGROUND-COLOR: #fff" qc="(Encryption not implemented yet)." pc="(kryptering Ikke implementert ennå)." closure_uid_lxzxgl="44">
    </span><span title="" qc="m.a.o." pc="m.a.o." closure_uid_lxzxgl="45">This means a</span> <span title="" style="BACKGROUND-COLOR: #fff" qc="required database users for every super-office users." pc="kreves ikke database brukere for alle superoffice brukere." closure_uid_lxzxgl="46">database user for every SuperOffice user is no longer needed.
    </span><span title="" style="BACKGROUND-COLOR: #fff" qc="SuperOffice will use dbus to log into the database, then checks the Associate and Credentials to see if the correct user." pc="SuperOffice vil bruke dbuser for å logge seg på databasen, så sjekker den Associate og Credentials for å se om det er riktig bruker." closure_uid_lxzxgl="47">SuperOffice will use db user to log into the database, then checks the Associate and Credentials to see if it's the correct user.</span></span>