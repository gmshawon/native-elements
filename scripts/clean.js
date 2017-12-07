const {resolve, dirname} = require('path');
const fs = require('fs-extra');
const del = require('del');
const chalk = require('chalk');

/** Build command */
const clean = () => {
  del(['elements/**/dist']).then(paths => {
    console.log(chalk.cyan.bold('Cleaning dist folders'));
  });
};

const main = () =>
  clean();

main();
