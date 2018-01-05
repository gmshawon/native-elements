
const glob = require('glob-fs')({gitignore: true});
const chalk = require('chalk');
const spinner = require('./spinner.js');


module.exports = (folder, processFn) => {
  spinner.text = chalk.bold('Building postcss files...');
  spinner.start();

  const files = glob.readdirSync(folder);
  files.forEach(file =>
      processFn(file)
        .catch(err => chalk.red(`[ process error ] ${err}`))
  );
  spinner.succeed('Postcss files builded');
  spinner.clear();
}
