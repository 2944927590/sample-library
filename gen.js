require('dotenv').config();
const config = require('./config.json');
const fsEx = require('fs-extra');
const path = require('path');

console.log(process.env.project);

async function copyFolder(sourcePath, targetPath) {
  try {
    await fsEx.copy(sourcePath, targetPath);
    console.log(`复制成功：${sourcePath} => ${targetPath}`);
  } catch (err) {
    console.error(err)
  }
}

function start() {
  const projectName = process.env.project;
  const targetConfig = config.find(item => item.project === projectName);
  const sourcePath = path.join(__dirname, targetConfig.from);
  const targetPath = path.join(__dirname, targetConfig.to);

  if (!projectName) {
    console.log('projectName 为空，示例： project=online-editor npm run gen');
    return;
  }
  console.log(targetConfig);
  if (!targetConfig) {
    console.log('配置文件发生错误');
    return;
  }
  copyFolder(sourcePath, targetPath);
}

start();

