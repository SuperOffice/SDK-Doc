<properties date="2016-05-11"
SortOrder="3"
/>

What is sentry? As the name implies it acts as the watch dog that keeps an eye on all the access to data in the SuperOffice database.

In SuperOffice the security is based on Roles so all the user of SuperOffice belongs to a Role. The different roles have different levels of rights to access the data in the database so Sentry is the mechanism that ensures that these levels get the proper data access. The levels of data access rights in SuperOffice are as follows.

* None
* Read
* Create
* Update
* Delete

 

Here None means that the user does not have any rights to the data, Read means that the user can read the data, Create means the user can create rows in a table, Update means the user can update the data and Delete means the user can delete the data. If a user has the right to Delete a data item that means that user has the right to Read, Create and Update the data and if the user has the right to Update the user will have the rights to Create and Read as well like wise the rights will be determined.

The role defines what rights he has to the data that he owns, data owned by other associates in his primary user group and to associates of the other user groups he belongs to. It also defines what rights he has to data that belong to other associates outside his user groups and external users/anonymous users. All the users of the SO CRM application will have a role. The rights to each data item will be determined by these roles so that means there is a mechanism in place to protect access to data.

In NetServer the results of improper data access can be different from scenario to scenario in the following part of this section lets take few examples of sentry and discuss what will happen in a case of unauthorized data access and lets how we can avoid them.

First let’s take a case of a user trying to access data that the user does not have any rights to. In the below code snippet it illustrate a scenario that the logged in user is accessing data that the particular user does have any rights.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession newSession = SoSession.Authenticate("PB", "pb"))
{
//get a sale entity
Sale mySale = Sale.GetFromIdxSaleId(9);
//try to retrive the heading of the sale
string saleHeading = mySale.Heading;
}
```

 

In the above code snippet the authenticating user ‘PB’ belongs to a role that do not have rights to this sale record since it belongs to another user group and the PB user do not have any rights to other user groups sale data. In the role that he belongs to the data right on Sale is set to None on Sales of other associates  .  So now if you run this code since you are not trying to change any data NetSever will not throw an exception but it will not return you any data. It is always good parctise to avoid situations like this without disturbing the intended cause of your code. To avoid situations like this we have to check for wheather the logged user has proper access to data to do the intended operation in your code using the netserver provided methods to check data access rights. Below is the same code snippet with the proper checkings incoparted.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Security;
 
using(SoSession newSession = SoSession.Authenticate("PB", "pb"))
{
//get the sale table info
      SaleTableInfo saleTabInfo = TablesInfo.GetSaleTableInfo(); 
      Sale mySale = Sale.GetFromIdxSaleId(9);
      //get the field rights of the heading field using the
      //saletableinfo object we created
      FieldRight headingRight =
mySale.Row.Sentries.FieldRight(saleTabInfo.Heading);
      //check to determine that the user has a fieldright other
than
      //None. Any other right will ensure that the user has rights
to read
      if (headingRight.IsActive)
      {
            string saleHeading = mySale.Heading;
      }
      else
      {
      //show the user why he can not perform this opertaion
            MessageBox.Show("You don’t have access rights to
perform this operation");
      }
}
```

 

In the above code we properly avoid getting a blank value as the return for the heading of the sale. Here we use netserver provided mechanisams to check if the user has the rights if the user has the rights only we excute the code line which will retrive the sale heading.

Let’s take another example of sentry in the previous example we discussed what happens when you access data that you don’t have rights to and now let’s discuss what happens when you try to modify data that you don’t have access rights to. Let’s take the same code snippet as earlier and try to modify the hading of the sale.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession newSession = SoSession.Authenticate("PB", "pb"))
{
//get the sale id 9
Sale mySale = Sale.GetFromIdxSaleId(9);
//retrive the heading
string saleHeading = mySale.Heading;
//chnage the heading
mySale.Heading = "This is a very good sale";
//save the sale
mySale.Save();
}
```

 

In the above example the authenticating user PB who belongs to a role that does not have access rights sales of other user groups. So here when the user tries to retrieve the in formation it will not give any errors but NetServer will not retrieve the data but when the user tries to change the heading the NetServer will throw a Sentry exception error. The exception will give you a message saying “Sentry denies access”. So to avoid a situation like this the developer is left with two options he can either catch the error in a try catch block and show the user the reason using a message box or the user can prevent the error from happening  by checking the users access right like in the previous example. In the previous example the developer did not have a  choice since NetServer did not threw a error so he is left with one option that is to check the users access rights. In the below two examples both these options are illustrated. 

```
using SuperOffice;
using SuperOffice.CRM.Entities;
 
using(SoSession newSession = SoSession.Authenticate("PB", "pb"))
{
try
      {
            //get the sale id 9
            Sale mySale = Sale.GetFromIdxSaleId(9);
            //retrive the heading
            string saleHeading = mySale.Heading;
            //chnage the heading
            mySale.Heading = "This is a very good sale";
            //save the sale
            mySale.Save();
      }
      catch (Exception ex)
      {
            //show the user why he can not perform this opertaion
            MessageBox.Show("You canot perform this operation due
to " + ex.Message);
      }
            }
```

 

In the above example we catch the error and show the user why the operation was not successful.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Security;
 
using(SoSession newSession = SoSession.Authenticate("PB", "pb"))
{
//get the sale table info
     SaleTableInfo saleTabInfo = TablesInfo.GetSaleTableInfo();
      Sale mySale = Sale.GetFromIdxSaleId(9);
      //get the field rights of the heading field using the
saletableinfo   object
      //we created
      FieldRight headingRight =
mySale.Row.Sentries.FieldRight(saleTabInfo.Heading);
      //check to determine that the user has a fieldright other
than None. Any other
      //right will ensure that the user has rights to read
      if (headingRight.IsActive)
      {
            string saleHeading = mySale.Heading;
            mySale.Heading = "This is a very good sale";
      }
      else
      {
            //show the user why he can not perform this opertaion
            MessageBox.Show("You dont have access rights to perform
this operation");
      }
}
```

 

The above example illustrates the use of checking for access right and avoiding the NetServer thrown error. In a scenario like this it is up to the developer to determine the best option but it is always a good practice to handle errors using a try catch block and it is also a very good practice always to check for the access rights. In the second example the try catch block is intentionally left out to make the point clear on access rights. 

Now that we have gone fairly deep into access rights lets focus on another dimension of sentry. In SuperOffice you can restrict access to a data item using the Visible for flag in addition to the user group’s rights to data. other than the role based security explained earlier. The visible for flag and role base security go hand in hand when the visible for flag is set it is a combination of role base access rights and access rights that was activated due to setting of the visible for flag. The visible for flag can be set at three levels.

 

* All
* Group
* Associate

 

Here the groups means the group that a particular associate belongs to in a given company defined in the SOAdmin application. For example it can be the “Administration”, “Marketing”, “Sales”, and “Service” etc... You may have sufficient rights from the Role to see something, but if the data is flagged with a VisibleFor=Associate, then the data may only be seen by the associate that owns the data. So to explain the visible for flag and how it affects data access rights lets take an example.

In the below example we will create a new sale and make it visible for only the logged in user. In the below case the logged in user is SAL0 who belongs role 0 and role 0 has all the rights on all data this group is like administrator group. The user SAL0 belong Marketing Department in the company that he is employed at.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice.CRM.Data;
using SuperOffice.CRM.Security;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
//create a sale
      Sale mySale = Sale.CreateNew();
      mySale.SetDefaults();
      //give tha sale a heading
      mySale.Heading = "To Test Visible For Flag";
      //make the sales visible for property to associate so it will
be set
      //to logged in associate
      EntityVisibleForHelper saleVisibleFor =
mySale.VisibleForHelper;
      saleVisibleFor.VisibleFor =
EntityVisibleForHelper.VisibleForType.Associate;
      //save the sale
      mySale.Save();
}
```

 

After executing the above code this particular sale belongs to user SAL0. Now what will happen if another user who belongs to the same user role (role 0) and also belongs to the same group witin the company ( Marketing Department). The user will not be able to gain access to this sale even though he has all the access to all tha data in the database. This is happening because from the role he gets Create, Read, Update and Delete (CRUD) rights for the data item but since the visible for flag is set he does not get any rights so ther is no common denominator between the two rights so he does not get any right at all on this sale.

If the above sales visible for property was set to the group that user SAL0 belongs in the following way

```
EntityVisibleForHelper saleVisibleFor = mySale.VisibleForHelper;
//set the visible for property to group
saleVisibleFor.VisibleFor =
EntityVisibleForHelper.VisibleForType.Group;
```

 

The above code lines make the sale visible for only the group members that belong to the same group as the authenticated user SAL0. In a case as above if another user who belongs to the same group in the company and belongs to a role that has access rights to data that belongs to user group members he will have access to this sale. This happens because from the Visible for flag we can explicitly say that this sale can be viewed by all the group members but that is only viewing the actual rights come from the role that a particular associate belongs to. If an associate belonging to the same group but belongs to role that does not have rights to a sale other than Read he will not be able to change any data on the sale.

Now let’s discuss what will happen if the above sale visible for property was set to All as the following way

```
EntityVisibleForHelper saleVisibleFor = mySale.VisibleForHelper;
//set the visible for property to all
saleVisibleFor.VisibleFor =
EntityVisibleForHelper.VisibleForType.All;
```

 

In the above situation all the associates that are listed in the system will be able to view this sale but like in the above case the right to the data will be determined by the roles that each associate belongs to. For example if a associate belonging to a role that have right only to view the a sale that associate will not be ablee to modify any of the data in the sale.

 
