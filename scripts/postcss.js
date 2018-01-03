const {resolve, dirname} = require('path');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const chalk = require('chalk');

const package = require('../package.json');
const paths = package.paths;

const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
