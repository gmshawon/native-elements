module.exports = () => ({
  plugins: {
    'postcss-easy-import': { extensions: '.pcss' },
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'autoprefixer': {},
    'postcss-discard-comments': {}
  }
});
