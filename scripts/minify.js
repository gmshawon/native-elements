const {resolve} = require('path');
const fs = require('fs-extra');
const CleanCSS = require('clean-css');

const readProcess = require('./_read-process.js');

const FOLDER = './elements/**/dist/*.css';

const _process = async filePath => {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const output = await new CleanCSS({level: 0}).minify(fileContent);
  await fs.writeFile(filePath, output.styles);
};

const minify = folder => readProcess(folder, _process);

minify(FOLDER);
