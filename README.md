# hf-cli

> Project initialization scaffolding tool based on github, gitlab, gitee code repository templates

![@littlelane/hf-cli](https://img.shields.io/badge/npm-v0.0.1-brightgreen.svg)

## Install

```bash
$ npm install @littlelane/hf-cli -g
```

## Commands

### `hf add` OR `hf -a`

It is used to save and manage the information of the project template, and provide template basis for the initialization of the project.

After executing the `hf add` command, you will be prompted to enter the template name, the github repository where the template code is located, the corresponding branch and template description.

### `hf list` OR `hf -l`

Used to view all the template information that has been managed, and display it in the form of `table`.

### `hf init` OR `hf -i`

Initialize the template code for the project.

### `hf delete` OR `hf -d`

The existing managed template is deleted according to the input template name, and the main user deletes the useless template information.
