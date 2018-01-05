
'use strict';

/*
 * > Watch
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import ora from 'ora';
import chalk from 'chalk';

const spinner = ora(chalk.bold('Watching for changes...'));

gulp.task('watch', gulp.series('postcss', () => {
  console.log();
  spinner.color = 'gray';
  spinner.start();
  gulp.watch([pkg.paths.elements + '/ne-**/*.pcss', 'postcss.config.js'], gulp.registry().get('postcss'))
    .on('change', (path, stats) => {
        console.log(path);
    })
    .on('unlink', (path, stats) => {
        console.log(path);
    });
}));
