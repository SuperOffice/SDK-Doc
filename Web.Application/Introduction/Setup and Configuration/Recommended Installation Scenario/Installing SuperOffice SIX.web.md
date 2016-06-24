<properties date="2016-06-24"
SortOrder="19"
/>

An important point to remember!

The procedure explained below applies to a completely new installation. If you require additional information regarding the installation please refer to the installation document.

In order for us to complete the installation we require the following in formation.

* Database server IP/DNS address

* Database server version

* SIX database name

* SIX database prefix/schema name

* SIX database user name

* SIX database password

* SO\_ARC file server name

* SO\_ARC location (UNC path)

* SO\_ARC user name (if needed)

* SO\_ARC password (if needed)

* SO\_ARC domain (if needed

* CRM.web server IP/DNS address

* CRM.web URL

* CRM.web ASP.NET application identity

The SuperOffcie CRM.web installation is designed as a wizard, which helps us to install the application.

The installation steps are as follows.

[1.    Start the installation program by running SETUP.EXE. The installation wizard starts.]()

[2.    In the welcome screen, click **Next**.]()

3. Read the licence agreement. And if you agree to the terms, select **I accept the terms of the license agreement**, and then click **Next**.

<img src="../../Setup%20configuration_files/image002.jpg" width="504" height="386" />

[4.    In the **CRM.web Application Title** field, specify a title for the application. This title is shown in the list of programs under **Add or Remove Programs** in the Windows Control Panel. If several instances of CRM.web are installed on the computer, this title can be used to distinguish the instances from each other. Also, the application title is used as a suffix in the installation path and is stored in the configuration file. The default application title is "SuperOffice".]()

[5.    In the **Destination Folder** field, we have to specify the folder where we want to install CRM.web. The default folder is retrieved from the operating environment. If we want to install in a different folder, we click **Browse** and select the desired folder. Then we click **Next**.]()

<img src="../../Setup%20configuration_files/image003.jpg" width="504" height="386" />

[]()[6.    Select]() **CRM.web & NetServer application server on the same machine**, and click **Next**.

<img src="../../Setup%20configuration_files/image004.jpg" width="504" height="386" />

[]()[7.    In the **Internet Information Setup** section, select the web site for CRM.web from the dropdown list. The list contains all web sites on the computer. If only one web site is detected on the computer, that web site is selected by default. In the **Create a new virtual directory for CRM.web** field, specify the name of the virtual directory to be created for CRM.web on the specified web site. The default for a new installation is that the name of the virtual directory is the same as the application title we specified in step 4 on page 6.]() When we are done, we click **Next**.

An important point to remember!

If you leave this field blank, you will overwrite the web site’s root directory. This is not recommended.

[8.    Click **Install** to start the installation. The installation program starts copying the necessary files to the computer, and a shortcut to the SuperOffice Product Configuration program is added to the Windows **Start** menu.]()

<img src="../../Setup%20configuration_files/image005.jpg" width="504" height="386" />

[]()[]()[9.    The **Install Shield Wizard Complete** dialog contains two checkboxes:]()

* **I would like to launch CRM.web Configuration**. We can Select this option if we want to configure CRM.web at this point. This option is selected by default. The configuration program can also be launched manually by selecting **Start &gt; All Programs &gt; SuperOffice &gt; CRM.web &gt; Product Configuration (instance name)**, where "instance name" is the name of the instance we want to configure.

* **I would like to launch IIS Configuration**. We can Select this option if we want to verify our settings in IIS at this point. This option is deselected by default. IIS can also be launched manually from **Administrative Tools** in the Windows Control Panel.

When we are done, we click **Finish**.

[Depending on what we selected in step 9, the]() <a href="" id="OLE_LINK2"></a><a href="" id="OLE_LINK1">SuperOffice Product Configuration program</a> may be launched, and IIS may be launched in the background.
