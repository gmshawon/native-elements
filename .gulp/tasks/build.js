'use strict';

/*
 * > Build
 */

import gulp from 'gulp';

gulp.task('default', gulp.series('clean', 'postcss', done => {
  done();
}));
