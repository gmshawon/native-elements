const {resolve, dirname} = require('path');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const chalk = require('chalk');
const ora = require('ora');

const readProcess = require('./_read-process.js');
const package = require('../package.json');
const paths = package.paths;

const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const IS_DEV = process.argv.find(arg => arg.includes('watch'));
const elementArg = process.argv.find(arg => arg.includes('element='));
const element = elementArg ? elementArg.replace('element=', '') : null;

const FOLDER = element ? `${paths.elements}/${element}/**/!(_*).pcss` : `${paths.elements}/**/!(_*).pcss`;

const spinner = ora('ciao');

const _process = async file => {
  const cssFile = file.replace('pcss', 'css').replace('src', 'dist');
  const fileContent = await fs.readFile(file, 'utf8');
  const res = await postcssrc()
    .then(({plugins}) => postcss(plugins).process(fileContent, {from: file, to: cssFile}));

  await fs.ensureDir(dirname(cssFile));
  await fs.remove(cssFile);
  await fs.writeFile(cssFile, res.css);
  return true;
};

/** dev command */
const dev = folder => {
  const watcher = chokidar.watch(folder, {
    ignored: /dist/,
    persistent: true,
    awaitWriteFinish: {
      stabilityThreshold: 1000,
      pollInterval: 100
    }
  });

  return watcher
    .on('add', sourcePath => console.log(chalk.green('[ added ]'), sourcePath))
    .on('change', async sourcePath => {
      console.log(chalk.green('[ updated ]'), sourcePath, await _process(sourcePath))
      console.log(chalk.green('[ updated ]'), 'native-elements.css', await _process(`${paths.elements}/${package.name}/src/native-elements.pcss`))
    })
    .on('unlink', sourcePath => console.log('→', sourcePath, chalk.red('[ removed ]')));
};

/** Build command */
const build = folder =>
  readProcess(folder, _process);

const main = () =>
  IS_DEV ? dev(FOLDER) : build(FOLDER)

main();
