'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import chalk from 'chalk';


gulp.task('build', (cb) => {
  console.log(chalk.bold.magenta('\n[build]'), chalk.bold.blue('⚙  Start bulding \n'));
  gulp.series(
    'clean',
    'postcss',
    (error) => {
      if (error) {
        console.log(chalk.bold.magenta('\n[build]'), chalk.bold.red('There was an issue building Material Theme:\n'), error.message,  '\n');
      } else {
        console.log(chalk.bold.magenta('\n[build]'), chalk.bold.green('✔  Build finished successfully \n'));
      }
      cb(error);
    }
  );
});
