---
title: Print Debug
uid: crmscript_debug_print_debug
SortOrder: 30
---

## printDebug()

CRMScript has a global function for writing any string to a buffer.

The text will pop up in a separate window when loading a page. This means that `printDebug()` is  only for code resulting in a screen.

Here's how:

1. Enable debug: */bin/rms?action=debug*
2. Call `printDebug()` at appropriate places with suitable strings.
3. Run script.

The pop-up is not visible to regular users, but it will show up in your browser.
