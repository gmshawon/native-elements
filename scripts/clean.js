const {resolve, dirname} = require('path');
const fs = require('fs-extra');
const del = require('del');

/** Build command */
const del = () => {
  del(['elements/**/dist/*.css']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
};

const main = () =>
  del();

main();
