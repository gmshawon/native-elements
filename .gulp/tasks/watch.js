
'use strict';

/*
 * > Watch
 */

import gulp from 'gulp';
import infos from '../../package.json';

const paths = infos.paths;

gulp.task('watch', gulp.series('build', () => {
  gulp.watch([`${paths.elements}/**/*.pcss`, 'postcss.config.js'], ['build']);
}));