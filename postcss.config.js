module.exports = {

  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport-nl': {
      unitToConvert: 'px',
      viewportWidth: 375,
      // viewportHeight: 568, // not now used; TODO: need for different units and math for different properties
      unitPrecision: 8,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',  // vmin is more suitable.
      filePathBlackList: ['index/sections', 'pages/index.vue'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
