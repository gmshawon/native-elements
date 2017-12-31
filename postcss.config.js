module.exports = () => ({
  plugins: {
    'postcss-easy-import': { extensions: '.pcss' },
    'stylelint': { configFile: '.stylelintrc' },
    'postcss-mixins': {},
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-selector-not': {},
    'autoprefixer': { browsers: ['last 1 versions', 'not ie <= 11'] },
    'cssnano': { preset: 'advanced' }
  }
});
