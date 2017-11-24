---
uid: exampleCTI
title: CTI Example
---

This example shows how Computer-Telephony Integration might be built.

It simulates incoming calls and then looks up the phone number in SuperOffice using the SDK.

If it find the phone number it sets the current contact or person, and then starts a new appointment to record the phonecall.

If it does not find the phone number it creates a new company and fills in the phone number.

An obvious extension would be to use a yellow-pages web service to fill in more information based on the phone-number.



[screenshot](../images/cti-app.gif)
