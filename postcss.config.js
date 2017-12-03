module.exports = {
  plugins: [
      require('postcss-easy-import')({ extensions: '.pcss' }),
      require('postcss-nesting'),
      require('postcss-custom-media'),
      require('autoprefixer'),
      require('postcss-discard-comments')
  ]
}