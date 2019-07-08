// const glob = require('glob')
// const path = require('path')
// const webpack = require('webpack')

// function getPageEntry (globPath) {
//   return glob.sync(globPath).reduce((acc, curr) => {
//     const conf = require(curr)
//     let paths = curr.split('/')
//     paths.splice(-1)
//     const app = paths.splice(-1)
//     paths.push('index.js')
//     return acc[app] = Object.assign({
//       entry: paths.join('/'),
//       title: app,
//       template: 'public/' + app + '.html'
//     }, conf)
//   }, {})
// }

module.exports = {
  // productionSourceMap: false,
  // filenameHashing: false,
  // outputDir: './dist',
  // pages: getPageEntry('./src/views/**?/config.json'),
  pages: {
    index: 'src/views/about/index.js',
    home: {
      entry: 'src/views/home/index.js',
      template: 'public/home.html',
      chunks: ['home', 'chunk-vendors', 'chunk-common']
    },
    about: 'src/views/about/index.js'
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
    // splitChunks: {
    //   cacheGrooups: {
    //     home: {
    //       name: 'home-vendor',
    //       test: (module) => {
    //         return /vue-router/.test(module.context)
    //       },
    //       chunks: 'initial',
    //       priority: 1
    //     },
    //     common: {
    //       name: 'chunk-common',
    //       chunks: 'initial',
    //       priority: 2,
    //       minChunks: 2
    //     }
    //   }
    // }
  }
}
