module.exports = {
  productionSourceMap: false,

  pwa: {
    name: '我的文明',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF'
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 200000,
        maxSize: 250000
      }
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: undefined
}