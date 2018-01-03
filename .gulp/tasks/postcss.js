'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import chalk from 'chalk';
import postcss from 'gulp-postcssrc';


gulp.task('postcss', (cb) => {
  console.log(chalk.bold.magenta('\n[build]'), chalk.bold.blue('⚙  Parsing postcss \n'));

  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./dest'));
});