'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import chalk from 'chalk';


gulp.task('default', gulp.series('clean', 'postcss', done => {
  done();
}));
