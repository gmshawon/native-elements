'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import infos from '../../package.json';
import clean from 'gulp-clean';

const paths = infos.paths;

gulp.task('clean', () => {
  return gulp.src(`${paths.elements}/**/dist`, {'read': false})
    .pipe(clean());
});