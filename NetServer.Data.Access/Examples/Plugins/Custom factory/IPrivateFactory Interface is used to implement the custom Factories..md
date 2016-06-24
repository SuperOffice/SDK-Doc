<properties date="2016-05-11"
SortOrder="7"
/>

 

```
public interface IPrivateFactory
    {
        /// <summary>
        /// Create an instance of an object compatible with the
type.
        /// </summary>
        /// <param name="type">Type of object that is
needed.</param>
        /// <param name="constructorArgumentTypes">Array of
argument types that the constructor supports.  For further
reference, see the <see
cref="System.Type.GetConstructor"/>method.</param>
        /// <param name="constructorArguments">Array of
arguments that corresponds to the constructorArgumentTypes.  For
further reference, see the <see
cref="System.Reflection.ConstructorInfo.Invoke"/>
method.</param>
        /// <returns>Instance of an object representing the
type.</returns>
        object Create(Type type, Type[] constructorArgumentTypes,
object[] constructorArguments);
    }
```

 

 

NetServer(backend) uses the class called TypeFactories. TypeFactories.cs is referenced to the interfaces IPrivateFactory and ICustomFactory. IPrivateFactory is used to create an object and ICustomFactor is used to create a “CustomImplementationDescription” type object. IPrivateFactory is the simpler interface. ICustomFactory is used for creating objects based on reflection results. It is used internally in NetServer.

Once user create the new Win project or web site user can call the classlibrary’s dll dynamically by setting the &lt;Factory&gt; tag in the App.config file. Within the &lt;Factory&gt; tag we have to set &lt;DyanamicLoad&gt; tag. We have to set the key value pair within &lt;DyanamicLoad&gt;. Class library path is represented by the Value.

```
<Factory>
      <DynamicLoad>
        <add key="MyAddressRow"
value="C:\\Inetpub\\wwwroot\\Custom Factory\\Custom
Factory\\bin\\Debug\\Custom Factory.dll" />
      </DynamicLoad>
</Factory>
```

 

The “Custom Factory.dll” assembly that we created has two classes called MyCustomAddressRow and MyCustomFactory. We called the SOCore.dll and SoDataBase.dll from the NetServer by adding the references to the classlibrary.

MyCustomAddressRow.cs is shown below.

```
using System;
using System.Data;
 
using SuperOffice;
using SuperOffice.Configuration;
using SuperOffice.Security.Principal;
using SuperOffice.Exceptions;
using SuperOffice.CRM.Rows;
 
namespace Custom_Factory
{
    ///<summary>
    ///This class inherits from the AddressRow that we are
replacing.
    ///We must honor the type-contract that AddressRow defines, and
the easiest way to do that is to sub-class it.
    ///</summary>
    public class MyCustomAddressRow :
SuperOffice.CRM.Rows.AddressRow
    {
        private string myAddressRow = "This is My custom Address
Row";
 
        public MyCustomAddressRow()
            : base(null)
        {
        }
 
        /// <summary>
        /// This is a custom property added to do our magic thing.
        /// </summary>
        public string MyCustomStuff
        {
            get
            {
                return myAddressRow;
            }
            set
            {
                myAddressRow = value;
            }
        }
 
            /// <summary>
            /// ToString method intended for debugging, returns a
string
            /// that displays the object type, new/dirty status,
primary key
            /// and the string fields
            /// </summary>
        public override string ToString()
        {
            string tmp = base.ToString();
            return "This is the customized AddressRow\n" + tmp;
        }
 
    }
}
```

 

Code segment in the above shows that the class is inherited form the SuperOffice.CRM.Rows.AddressRow. In this class it inherits the ToString() method from  SuperOffice.CRM.Rows.AddressRow which returns the string value. We have overridden the ToString() method by adding  extra string part called “This is the customized AddressRow”. In this method it will return a string value by adding “This is the customized AddressRow” in to the front.

MyCustomFactory is the other class which is created by us.  MyCustomFactory.cs is shown below.

```
using System;
using System.Data;
 
using SuperOffice;
using SuperOffice.Configuration;
using SuperOffice.Security.Principal;
using SuperOffice.Exceptions;
using SuperOffice.CRM.Rows;
using SuperOffice.Factory;
 
namespace Custom_Factory
{
    ///<summary>
    ///This class is automatically detected and used by the
ClassFactory mechanism
    ///when the DLL is added to the DynamicLoad section in the
config file.
    ///Whenever AddressRow.CreateNew() is called, the classfactory
is called.
    ///This is the code inside createNew():
    ///<example>
    ///     return
(AddressRow)ClassFactory.Create(typeof(AddressRow));
    ///</example>
    ///When this custom factory is loaded, then the custom
sub-class is returned instead of the default AddressRow
implementation.
    ///</summary>
    [ClassFactory(typeof(SuperOffice.CRM.Rows.AddressRow),
FactoryPriority=FactoryPriority.High)]
    class MyCustomFactory : IPrivateFactory
    {
        #region IPrivateFactory Members
 
        object IPrivateFactory.Create(Type type, Type[]
constructorArgumentTypes, object[] constructorArguments)
        {
            if (type != typeof(AddressRow))
                throw new SoClassFactoryException("Expected
AddressRow type!");
 
            // create my custom subclass instead of the requested
type (bait-and-switch technique!)
            object newObj = new MyCustomAddressRow();
 
            // return it to the class factory, which will pass it
back to the requestor.
            return newObj;
        }
 
        #endregion
    }
}
```

 

MyCustomFactory.cs first sets the attribute

```
[ClassFactory(typeof(SuperOffice.CRM.Rows.AddressRow),
FactoryPriority=FactoryPriority.High)]
```

 

Type of the attribute is set to the AddressRow and priority is set to high and MyCustomFactory class inherited from the IPrivateFactory created an object by calling the create method inheriting from the IPrivateFactory. The ClassFactory attribute signals to the class factory mechanism what sorts of objects we will manufacture. The high priority overrides the default implementation (which has medium/normal priority).

This is the form we created to show the out put.

```
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using SuperOffice;
using SuperOffice.Data;
using SuperOffice.CRM.Rows;
 
namespace TestFac
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
 
        private void Form1_Load(object sender, EventArgs e)
        {
        }
 
        private void button1_Click(object sender, EventArgs e)
        {
            button1.Enabled = false; // prevent double-clicks
 
            try
            {
                using (SoSession mySession =
SoSession.Authenticate("SAL0", ""))
                {
                    // to create an instance of AddressRow         
                   
                    AddressRow aRow = AddressRow.CreateNew();
 
                    label1.Text += "=" + aRow.GetType().Name;
                    label2.Text = aRow.ToString();
 
             //to create an object by using ClassFactory,type
passed as AddressRow
                    object obj =
SuperOffice.Factory.ClassFactory.Create(typeof(AddressRow));
                   //cast the objectto AddressRow and assign it to
AddressRow
                    AddressRow bRow = obj as AddressRow;
 
                    label3.Text += "=" + bRow.GetType().Name;
                    label4.Text = bRow.ToString();
                }
            }
            catch (Exception ex)
            {
                string test = ex.Message; 
            }
 
        }
    }
}
```

 

In the above code we create an instance of AddressRow called aRow. AddressRow.CreateNew() uses the ClassFactory to create the new instenace. Secondly we create an object directly from SuperOffice.Factory.ClassFactory and then it is assigned to AddressRow. Both these methods will create a object of type MyCustomAddressRow instead of the NetServer address row.

Once we create the new project or web site we can call the SOCore.dll and SoDataBase.dll from the NetServer by adding as references. No need to add the reference for the created class library because in App.config file we set the reference as below.

```
<Factory>
      <DynamicLoad>
        <add key="MyAddressRow"
value="C:\\Inetpub\\wwwroot\\Custom Factory\\Custom
Factory\\bin\\Debug\\Custom Factory.dll" />
      </DynamicLoad>
</Factory>
```

 

Output of the program is shown below.

<img src="../Custom%20Factory_files/image001.jpg" width="300" height="204" />

If we don’t use the reference in App.config file it gives the following out put.

<img src="../Custom%20Factory_files/image002.jpg" width="300" height="204" />
