'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.local.showEslintErrorsInOverlay
  }
})

function convert (str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

const stripTags = require('strip-tags')

let markdownLoaderOptions = {
  use: [
    require('markdown-it-decorate'),
    [require('markdown-it-container'), 'demo', {
      validate (params) {
        return params.trim().match(/^demo(?:\-\S+)?\s*/)
      },
      render (tokens, index) {
        // console.log('----------tokens:', tokens)
        // console.log('----------idx:', index)

        let token = tokens[index]

        if (token.type === 'container_demo_open') {
          let match = tokens[index].info.trim().match(/^demo(?:\-(\S+))?\s*(.*)$/)
          // console.log('match:', match);
          let demoType = match[1] || ''
          let descTitleHtml = match[2]
          let exampleHtml = ''

          while (token = tokens[++index]) {
            if (token.type === 'container_demo_close') {
              break
            }

            if (token.type === 'fence') {
              exampleHtml = convert(stripTags(token.content, ['style', 'script']))
              break
            }
          }

          return `
                      <demo-box type="${demoType}">
                          <template slot="example">${exampleHtml}</template>
                          <template slot="title">${descTitleHtml}</template>
                  `
        } else {
          return `</demo-box>`
        }
      }
    }],
    [require('markdown-it-container'), 'desc', {
      validate (params) {
        return params.trim().match(/^desc\s*/)
      },
      render (tokens, index) {
        let token = tokens[index]

        if (token.type === 'container_desc_open') {
          return '<template slot="desc">'
        } else {
          return '</template>'
        }
      },
      marker: '`'
    }]
  ]
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // app: './src/main.js'
    app: ['babel-polyfill', './src/main.js'] // 解决ie内核浏览器不支持es6语法
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ||
                process.env.NODE_ENV === 'stage' ||
                process.env.NODE_ENV === 'qa' ||
                process.env.NODE_ENV === 'dev'
      ? config.build.assetsPublicPath
      : config.local.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@varcss': resolve('src/assets/styles/variables.less'),
      '@img': resolve('src/assets/img'),
      '@varcomcss': resolve('src/css/var.less'),
      '@thincss': resolve('src/css/thin.css'),
      '@views': resolve('src/views'),
      '@documents': resolve('src/views/documents'),
      '@components': resolve('src/components'),
      '@api': resolve('src/api'),
      '@configs': resolve('src/configs'),
      '@utils': resolve('src/utils')
    }
  },
  module: {
    rules: [
      ...(config.local.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: markdownLoaderOptions
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
