module.exports = () => ({
  plugins: {
    'postcss-easy-import': { extensions: '.pcss' },
    'stylelint': { configFile: '.stylelintrc' },
    'postcss-mixins': {},
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-selector-not': {},
    'autoprefixer': {},
    'cssnano': { preset: 'default' }
  }
});
