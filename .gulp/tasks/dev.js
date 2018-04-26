
'use strict';

/*
 * > Dev
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';

gulp.task('dev', gulp.parallel('postcss', 'serve', () => {
  gulp.watch([pkg.paths.elements + '/ne-**/src/*.pcss', 'postcss.config.js'], gulp.series('postcss'))
    .on('change', (path, stats) => {
      const file = path.replace('elements/', '');
      console.log(chalk.yellow('changed:'), file);
    })
    .on('unlink', (path, stats) => {
      const file = path.replace('elements/', '');

      console.log(file);
    });
}));
