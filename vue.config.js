
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8085,
    https: false,
    // hostOnly: false,
    disableHostCheck: true
  },
  configureWebpack: {

  }
}
