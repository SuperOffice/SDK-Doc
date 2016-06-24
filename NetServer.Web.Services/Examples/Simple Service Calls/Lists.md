<properties date="2016-06-24"
/>

You can get a specific list item:

```
    SoSession.Authenticate("SAL1" , "");

    using(ListAgent agent = new ListAgent())
    {
        Business business = agent.GetBusiness(2);
                
        Assert.AreEqual( 2, business.Id, "Business.Id has wrong value" );
        Assert.AreEqual( "Bank/Finans", business.Value, "Business.Value has wrong value" );
        Assert.AreEqual( "", business.Tooltip, "Business.Tooltip has wrong value" );
     }
```

You can use the agent to get a list of items too:

```
    using(SoSession.Authenticate("SAL1" , ""))
    {

        using(ListAgent agent = new ListAgent())
        {
            Category[] carrier = agent.GetCategories();
            Assert.AreEqual( 10, carrier.Length, "Returns the wrong number of list items." );
        }
    }
```
