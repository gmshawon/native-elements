/*
 * > Clean
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';
import del from 'del';

export const clean = (done) => {
  del([`${pkg.paths.elements}/**/dist`]).then(() => {
    //console.log(chalk.green('\n\n✔  Dist files cleaned\n'));
  });
  done();
}

gulp.task('clean', clean);
