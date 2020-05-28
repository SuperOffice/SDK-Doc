<properties date="2016-05-11"
SortOrder="13"
/>

 

Internet Explorer 7+ and Firefox 2+ browsers have the integrated RSS reading capability. Previous versions of these browsers display RSS as plain XML. To address this issue, we use XSLT style sheets to control how the Feed will be rendered in a browser. The XML stylesheet will be ignored depending on whether the RSS is recognized as an XML document or as a RSS feed by a browser.

Following code segment shows the XSLT style sheet.

```
 
<div id="Content">
      <h1>
            <xsl:value-of select="rss/channel/title"/>
      </h1>
 
      <ol id="ItemList">
            <xsl:for-each select="rss/channel/item">
                  <li class="ItemListItem">
                        <h1>
                             <a>
                                   <xsl:attribute
name="href"> 
<xsl:value-of select="link"/>
</xsl:attribute>
                                   <xsl:value-of
select="title"/>
                             </a>
                        </h1>
 
                        <div class="ItemListItemDetails">
                             Published <xsl:value-of
select="pubDate"/>
                             by <xsl:value-of
select="dc:creator" />
                        </div>
                       
                  </li>
            </xsl:for-each>
      </ol>
</div>

 

 
```
