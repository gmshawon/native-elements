'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import infos from '../../package.json';
import chalk from 'chalk';
import del from 'del';

const paths = infos.paths;

gulp.task('clean', () => {
  del(`${paths.elements}/**/dist`).then(paths => {
    console.log(chalk.green('✔  Dist files cleaned\n'));
  });
});