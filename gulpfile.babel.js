import gulp from 'gulp';
import serve from './.gulp/tasks/serve';
import gulpStats from 'gulp-stats';
import clean from './.gulp/tasks/clean';
import postcss from './.gulp/tasks/postcss';
import build from './.gulp/tasks/build';
import dev from './.gulp/tasks/dev';

// set default task
export default build;