'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import chalk from 'chalk';
import postcss from 'postcss';
import pluginsrc from 'postcss-load-plugins';


gulp.task('postcss', (cb, plugins) => {
  console.log(chalk.bold.magenta('\n[build]'), chalk.bold.blue('⚙  Parsing postcss \n'));

  return gulp.src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));
});