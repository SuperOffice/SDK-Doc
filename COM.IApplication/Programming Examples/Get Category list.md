---
uid: GetCategorylist
title: Get Category list
---

<span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Examples are written using [Scripting Engine](@refScriptingEngine)</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">. You can use the below code segment within any event, so once that particular event is fired it lists all categories and their internal ids. You should store the script file in the Scripts folder in SO\_ARC.</span>

<span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">This section tells us how we can retrieve the Category list using SuperOffice Application Object.</span>

<span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">This text may be copied to the notepad, and saved as a \*.vbs file.</span>

<span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Sub OnCurrentContactNotModified
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Dim enTableCategory
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">enTableCategory=64
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Dim cats
</span> <span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Dim cat
</span> <span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Dim msg
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">set cats = Database.GetList(enTableCategory)
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">For Each cat in cats
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">msg = msg & cat.Text  & " " & cat.Id
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">msg = msg & Chr(13) & Chr(10)
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">Next
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">
SOMessageBox msg, "Category List"
</span><span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">End sub</span>



<span style="mso-ansi-language: EN-US; mso-fareast-language: EN-US">The above script will be called if you click edit on a contact and save without doing any changes, and the result can be seen as follows .</span>

![](../images/CategoryList.JPG)
