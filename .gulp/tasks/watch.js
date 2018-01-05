
'use strict';

/*
 * > Watch
 */

import gulp from 'gulp';
import pkg from '~/package.json';

gulp.task('watch', gulp.series('postcss', () => {
  gulp.watch([pkg.paths.elements + '/ne-**/*.pcss', 'postcss.config.js'], gulp.series('postcss'))
    .on('change', (path, stats) => {
        console.log(path);
    })
    .on('unlink', (path, stats) => {
        console.log(path);
        // code to execute on delete
    });
}));