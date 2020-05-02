---
id: docusaurus
title: Docusaurus
sidebar_label: Docusaurus
---

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

### Developer privileges

To do development on this site, you must have commit/push privileges to jci-fellows/jci-fellows.github.io and jci-fellows/docusaurus repositories on GitHub.  You can obtain those privileges from Philip Johnson.

### Installation

Download the sources, install NPM, then run:
```
$ npm install
```

### Local Development

To start up a local version of the website with automatic rebuilding on changes, run:

```
$ npm run start
```

### Deployment

First, set GIT_USER to your GitHub user name. Then, to build and deploy the site to jci-fellows.github.io, invoke:

```
$ npm run deploy
```

Note that this command does not commit your changes to the jci-fellows/docusaurus repository, so be sure to push those changes as well.
