---
title: Git and GitHub fundamentals for docs
---

Git is an open-source version control system. The files are stored in repositories.

GitHub is a web-based hosting service for Git repositories.

## Git

* Repository (repo): the highest level of storage (SuperOfficeDocs)
* Branch: files and folders that make up a content set

You can interact with Git locally through tools such as Git Bash or via [www.github.com](www.github.com).

### Branch strategy

Our main branch is **master**, which the live docs.superoffice.com is built from.

We use feature branches to isolate work in progress from the completed work in the main branch. Even small fixes and changes should have their own branch. This simplifies the review process and creates an accurate history of changes.

* Create a feature branch for all new features and bug fixes.
* Base the feature branch on the main branch.
* Create pull requests to merge feature branches into the main branch.
* Use lowercase letters, numbers, and hyphens only.

**Naming conventions:**

* \<Azure DevOps issue>-feature-name
* \<docs issue>-description
* bugfix-description

### Pull requests

* Requires a pull request to merge code.
* Code merged into the main branch should build cleanly.
* Squash merge.

### Release branches (versioning)

Release branches are long-lived and not merged back into the main branch.

TBD

## Github

### File names and file extensions

* Use a descriptive name based on the top-level heading in the file.
* Use single hyphens as word separators. Don't use underscores or camel case.
* Use lower-case letters, numbers, and dashes only.

### Folder organization

We use subfolders to group similar content, images, and reusable snippets. The organization on GitHub only loosely resembles the structure on docs.superoffice.com.

At the root of the repo, you can find general pages that relate to the overall website and a set of subfolders that match the features/APIs or common scenarios.

### Media subfolder

All major folders have a */media* subfolder for the corresponding media files.

### Includes subfolder

All major folders have a */includes* subfolder for reusable content in that section. See [Markdown reference](markdown-reference.md) for how to use includes.

### Markdown file template

TBD
