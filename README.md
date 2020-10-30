# sample-library
样例库

`npm install` 安装依赖

项目 `build` 之后的静态资源，可以被 `gitpage` 托管，用于在线演示

在 `config.json` 中配合项目的信息

project： 项目名称

from：项目 `build` 之后的目录（拷贝源）

to：拷贝至当前项目的位置（目标）

在 `.env` 文件中配置 `project` 名称，通过 `npm run gen` 来执行拷贝

也可通过命令行 `project=XXX npm run gen` 来执行拷贝

