<properties date="2016-06-24"
SortOrder="175"
/>

 

 <img src="../../Superoffice_Net%20Server_Services_files/image011.jpg" width="181" height="156" />

 

Name – frmLogin

Text - Login

 

Button 1

Name – btnLogin

Text – Login

 

Lable 1

Text - User Name

 

Lable 2

Text – Password

 

Text box 1

Name – txtUsrName

 

Text box 2

Name – txtPassword

PasswordChar - \*

 

Add the following code to the .CS file of the frmLogin form.

 

using System;

using System.Collections.Generic;

using System.ComponentModel;

using System.Data;

using System.Drawing;

using System.Text;

using System.Windows.Forms;

using SuperOffice;

 

namespace WindowsApplication2

    {
    public partial class frmLogin : Form
    {
        public frmLogin()
        {
            InitializeComponent();
        }

 

        private void btnLogin\_Click(object sender, EventArgs e)
        {
            try
            {

SoSessionsession =                             SoSession.Authenticate(txtUsrName.Text.Trim(), txtPassword.Text.Trim());

            frmAppointment appForm = new frmAppointment();
            appForm.Show();
            }
            catch (Exception ex)
            {

MessageBox.Show(ex.Message, "Message",          MessageBoxButtons.OK, MessageBoxIcon.Information);

            Application.Exit();
            }
        }

 

  private void frmLogin\_FormClosed(object sender, 

  FormClosedEventArgse)

        {
            Application.Exit();
        }
    }
    }

 

 
