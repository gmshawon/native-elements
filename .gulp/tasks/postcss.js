'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

export const prepare = (done) => {
  console.log(
    '\n',
    chalk.cyan('📦 Building postcss...'),
    '\n'
  );
  return gulp.src([
      pkg.paths.elements + '/native-elements/src/native-elements.pcss',
      pkg.paths.elements + '/ne-*/src/*!(_*).pcss'
    ], {base: process.cwd()})
    .pipe(postcss())
    .pipe(rename(function (path, file) {
      path.dirname += '/../dist';
      path.extname = '.css';
    }))
    .pipe(gulp.dest('./'));
  done();
}


gulp.task('postcss', gulp.series(prepare, done => {
  done();
}));