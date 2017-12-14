
const glob = require('glob-fs')({gitignore: true});
const chalk = require('chalk');

module.exports = (folder, processFn) => {
  const files = glob.readdirSync(folder);
  files.forEach(file =>
      processFn(file)
        .catch(err => chalk.red(`[ process error ] ${err}`))
  );
}
