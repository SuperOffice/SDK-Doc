---
title: Select Time Span
path: /Blogic/Screen Elements/Select Time Span
sortOrder: 80
---


This element adds a text input encoding the timespan in a string and a popup that lets you select timespans with drop down menus for hours, minutes, etc.


The timespans that can be selected are set to true in the config.


 - <b>"days"</b>
 - <b>"hours"</b>
 - <b>"minutes"</b>
 - <b>"seconds"</b>
 - <b>"empty"</b>
 - <b>"negatives"</b>
 - <b>"enableStartStop"</b>: If true, the element can be started and stopped and will count seconds if started
 - <b>"returnMinutes"</b>: If true, `toInteger()` will return the timespan in minutes instead of seconds
 - <b>"maxNum"</b>
 - <b>"minJumps"</b>





###Config example:###
    
    days = false
    hours = true
    minutes = true
    seconds = false
    
    negatives = true
    
    maxNum = 24
    minJumps = 15
    

This will make a timespan where hours and minutes can be selected. 24 hours are selectable in the drop down menu for hours, while every 15 minutes can be selected. These can also be set negative.


