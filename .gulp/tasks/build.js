'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import chalk from 'chalk';


// export const prepare = (done) => {
//   console.log(chalk.bold.blue('⚙  Start bulding \n'));
//   done();
// }

// gulp.task('prepare', prepare);


gulp.task('default', gulp.series('clean', 'postcss', done => {
  done();
}));
