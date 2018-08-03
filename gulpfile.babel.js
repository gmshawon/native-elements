import gulp from 'gulp';
import gulpStats from 'gulp-stats';
import serve from './.gulp/tasks/serve';
import clean from './.gulp/tasks/clean';
import postcss from './.gulp/tasks/postcss';
import build from './.gulp/tasks/build';
import dev from './.gulp/tasks/dev';

// set default task
export default build;