'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import pkg from '~/package.json';
import chalk from 'chalk';
import postcss from 'gulp-postcss';

import postcssEasyImport from 'postcss-easy-import';
import stylelint from 'stylelint';
import postcssMixins from 'postcss-mixins';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';
import postcssSelectorNot from 'postcss-selector-not';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';


export const pcss = (done) => {
  const plugins = [
    postcssEasyImport({ extensions: '.pcss' }),
    stylelint({ configFile: '.stylelintrc' }),
    postcssMixins(),
    postcssNesting(),
    postcssCustomMedia(),
    postcssSelectorNot(),
    autoprefixer({ browsers: ['last 1 versions', 'not ie <= 11'] }),
    cssnano({ preset: 'advanced' })
  ]

  return gulp.src(`${pkg.paths.elements}/**/*.pcss`)
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./elements'));

  done();
}

gulp.task('postcss', pcss);