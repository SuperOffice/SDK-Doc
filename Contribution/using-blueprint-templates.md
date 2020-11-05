---
title: using_blueprint_templates
---

Using Blueprint templates in Visual Studio Code

## Pre-requisites

* A local clone of the [SuperOffice Docs repo](https://github.com/SuperOfficeDocs) (planningdocs)
* Visual Studio Code

## Getting started

* Install the VS Code [Blueprint extension](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint) by teamchilla.

## Create a new Markdown file with metadata header

This will create a single file with a standard metadata header and insert the name as the title.

1. Right-click the folder where you want to add the file.
2. Select **New File from Template**.
3. Select **metadata** from the list and enter a name without a file extension.
4. Edit and save the file as normal.

## Create a new sub-folder in DocFX content

This will create the folder and add files *index.md* and *toc.yml* to it.

1. Right-click the folder where you want to add the file.
2. Select **New File from Template**.
3. Select **docfx-subfolder** from the list and enter a folder name.
4. Add the new folder to the parent's *toc.yml*.
5. Optionally add additional Markdown files to the new folder. Each file should be included in the new *toc.yml*.
