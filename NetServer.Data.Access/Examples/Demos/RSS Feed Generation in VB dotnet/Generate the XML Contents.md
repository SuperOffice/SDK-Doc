---
title: Generate XML Contents
uid: rss_feed_vb_dotnet_generate_xml
SortOrder: 20
---

**RSS**, which stands for *Really Simple Syndication*, is a Web content syndication format. As specified in RSS 2.0 specification, "RSS is a dialect of XML. All RSS files must conform to the XML 1.0 [specification](http://www.w3.org/TR/REC-xml), as published on the World Wide Web Consortium (W3C) website."

The format for the RSS Feed is predefined with a set of required and optional elements. The generated feed conforms to this format.

Here is an example of how the base RSS feed template appears.

```xml
<?xml-stylesheet type="text/xsl" href="rss.xsl" media="screen"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
   <channel>
        <title>SuperOffice Feed VB</title>
        <link><%= _url %></link>
        <description><%= _description %></description>
        <language>en-us</language>
        <copyright>Copyright 2006 SuperOffice</copyright>
        <pubDate><%= DateTime.Now.ToUniversalTime().ToString("R") %></pubDate>
        <generator>Late Night SuperOffice Hacker</generator>
        <%= _items %>
    </channel>
</rss>
```

An XML stylesheet, which is referenced on the first line in the example above, formats how the feed is displayed. The stylesheet will be discussed later in the article. Let’s take a look at how the activity is generated and passed to the feed.

The [code example](https://community.superoffice.com/globalassets/global/devnetfiles/codeexamples/rssfeedfinalvb.zip) uses the SuperOffice.CRM.ArchiveLists.ActivityArchiveProvider to retrieve the activities registered by another user on the current user’s contact.

Section 1 shows how the parameters required by GetArchiveListByColumns are created, i.e. the columns to be included in the selection. Section 1 also defines the search restrictions and the entities to be included in the search. Next, an IArchiveAgent object is retrieved using the AgentFactory. GetArchiveListByColumns method is then invoked to get the activity information.

Section 2 demonstrates how to, using the query results, generate the RSS feed. The approach taken in this example iterates over the retrieved ArchiveListItem collection.  I t extracts data values for each ArchiveListItem and stores those in a ListDictionary. The ListDictionary contains details of one activity at a time. Then the &lt;item&gt; sub-element values for &lt;title&gt;, &lt;link&gt;, &lt;description&gt;, &lt;pubDate&gt; and &lt;dc:creator&gt;  are set based on data in the ListDictionary. As shown in the feed code segment, this is the data referred to by the "&lt;%= \_items %&gt;" databinding expression.
