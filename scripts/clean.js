const {resolve, dirname} = require('path');
const fs = require('fs-extra');
const del = require('del');
const chalk = require('chalk');
const spinner = require('./spinner.js');

/** Clean command */
const clean = () => {
  del(['elements/**/dist']);
};

const main = () =>
  spinner.text = chalk.bold('Cleaning dist files...');
  spinner.start();
  clean();
  spinner.succeed('Dist files cleaned');
  spinner.clear();

main();
