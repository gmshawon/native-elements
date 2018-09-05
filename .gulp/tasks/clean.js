
'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';
import del from 'del';

export const clean = (done) => {
  console.log(
    '\n', chalk.cyan('💣  Cleaning dist files...'), '\n'
  );
  del([`${pkg.paths.elements}/**/dist`]);
  done();
}

gulp.task('clean', clean);
