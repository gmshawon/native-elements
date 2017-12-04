const fs = require('fs-extra');

const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const folder = './elements/**/*.pcss';
const outputFolder = './out';

const run = async () => {
  const files = await fs.readdir(folder);
  files.forEach(async file => {
    const fileContent = await fs.readFile(`${folder}/${file}`, 'utf8');
    const {css} = await postcssrc().then(({plugins}) => postcss(plugins).process(fileContent));
    await fs.ensureDir(outputFolder);
    await fs.writeFile(`${outputFolder}/${file.replace('postcss', 'css')}`, css);
  });
}

run().catch(err => console.error(err));