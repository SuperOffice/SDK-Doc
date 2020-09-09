---
title: Chart
path: /Blogic/Screen Elements/Chart
sortOrder: 18
---


This element will use the javascript charts library to create a chart.




###The following configuration parameters are supported:###


 - "type": "line", "spline", "area", "bar", "column", "pie" or "areaspline". From version 8.5R09: "bubble".
 - <b>"title"</b>: The title on top of the chart


From 8.4R05:


- "stacked": true/false. Will specify stacking for supported types (e.g bar and column). Use multiple series to get stacking.
- "show3D": true/false. Will show as 3D for supported types.





###Example:###
    type = pie
    



###Functions:###


 - setFieldValue(string, Map):
    - <b>"addSeries"</b>: This will create a new series of data. If you add data without creating at least one series, the first one will be automatically added. More than one series is not valid for pie.
        - <b>"label"</b>: Labels are used for specifying more user-friendly labels to show for a value.
    - <b>"addLabel"</b>: This will add a label for a key.
        - <b>"key"</b>: which key to add a label to
        - <b>"label"</b>: Labels are used for specifying more user-friendly labels to show for a value.
    - <b>"setUrl"</b>: This will set the url for a given key and optionally a series.
        - <b>"key"</b>
        - <b>"url"</b>
        - <b>"series"</b>
    - <b>"setValue"</b>: This will set the value for a given key in a given series.
        - <b>"key"</b>: The key (x-axis value)
        - <b>"value"</b>: The value to set
        - <b>"series"</b>: Use series=-1 to specify the last series added.
        - <b>"annotation"</b>: From version 8.2, optional text to show as annotation for this datapoint.
        - <b>"xValue"</b>, "zValue", "fillColor": From version 8.5R09, used to set values for this datapoint for Bubblecharts
    - <b>"increaseValue"</b>: This will increase the value for the given key with the given delta and the given series. Use series=-1 to specify the last series added.
        -  <b>"key"</b>: The key (x-axis value)
        - <b>"delta"</b>: The value to add/subtract from the current value. If this is the first time increaseValue is called for a key, then the current value is 0.
        - <b>"series"</b>: Use series=-1 to specify the last series added.
        - <b>"annotation"</b>: From version 8.2, optional text to show as annotation for this datapoint. If an annotation already exists for this point, it is overwritten.
    - <b>"setXLabel"</b>: Sets the label for the x-axis.
        - <b>"label"</b>
    - <b>"setYLabel"</b>: Sets the label for the y-axis.
        - <b>"label"</b>
    - <b>"setZLabel"</b>: Sets the label for the z-axis, from version 8.5R09.
        - <b>"label"</b>
    - <b>"setYIsTimespan"</b>: Set to true to indicate that the the y-axis represents timespan (in seconds).
        - <b>"set"</b> - true or false
    - <b>"setYMin"</b>: Sets minimum value for Y-axis.
        - <b>"value"</b>
    - <b>"setXMax"</b>: Sets maximum value for X-axis.
        - <b>"value"</b>
    - <b>"addXBand"</b>/"addYBand": From version 8.2. Adds a vertical/horizontal band to the chart.
        - <b>"color"</b>: The color of the band. HTML-compliant.
        - <b>"from"</b>: The start value of the band.
        - <b>"to"</b>: The end value of the band.
        - <b>"label"</b>: Optional label for the band.


