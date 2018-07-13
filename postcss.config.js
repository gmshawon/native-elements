const BROWSERS_LIST = ['last 1 versions', 'not ie <= 11', 'not op_mini all', 'not dead', 'not < 0.5%'];

module.exports = (ctx) => ({
  plugins: {
    'stylelint': {
      configFile: '.stylelintrc'
    },
    'postcss-easy-import': {
      extensions: '.pcss',
      plugins: [require('stylelint')()]
    },
    'postcss-preset-env': {
      browsers: BROWSERS_LIST,
      stage: 0,
      autoprefixer: {
        grid: true
      },
      insertBefore: {
        'nesting-rules': require('postcss-mixins')()
      }
    },
    'cssnano': { preset: ['advanced', {
      mergeLonghand: false
    }] },
    'postcss-reporter': { clearReportedMessages: true }
  }
})
