'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import ora from 'ora';

const spinner = ora(chalk.bold('Processing postcss files...'));

export const prepare = (done) => {
  spinner.start();
  return gulp.src(`${pkg.paths.elements}/**/src/!(_*).pcss`, {base: process.cwd(), since: gulp.lastRun(prepare)})
    .pipe(postcss())
    .pipe(rename(function (path, file) {
      path.dirname += '/../dist';
      path.extname = '.css';
    }))
    .pipe(gulp.dest('./'));
  done();
}

gulp.task('postcss', gulp.series(prepare, done => {
  spinner.succeed(chalk.bold('Postcss builded'));
  done();
}));