# hf-cli

> 基于 github 、gitlab、gitee 代码仓库模板的项目初始化脚手架工具

![@littlelane/hf-cli](https://img.shields.io/badge/npm-v0.0.1-brightgreen.svg)

## 安装

```bash
$ npm install @littlelane/hf-cli -g
```

## 命令

### hf add 或者 hf -a

用于将项目模板的信息进行保存和管理，为之后项目的初始化提供模板依据。

在执行 hf add 命令后，会提示输入模板名字、模板代码所在的 github 仓库、对应的分支和模板的描述信息。

### hf list 或者 hf -l

用于查看已有被管理着的所有的模板信息，以 table 的形式进行展示。

### hf init 或者 hf -i

初始化项目的模板代码。

### hf delete 或者 hf -d

根据输入的模板名称将已有管理的模板进行删除处理，主要用户删除无用的模板信息。
