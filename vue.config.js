
const path = require('path')
module.exports = {
  devServer: {
    // proxy: {
    //   '/': {
    //     target: 'http://192.168.130.131:8888/',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/style/mixin.less')
      ]
    }
  },
  css:{
    loaderOptions:{
      css:{},
      postcss:{
        plugins:[require('postcss-px2rem')({
          remUnit:75
        })]
      }
    }
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap'
    }
  }
}
