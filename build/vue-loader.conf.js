'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production' || 
                     process.env.NODE_ENV === 'stage' || 
                     process.env.NODE_ENV === 'qa' ||
                     process.env.NODE_ENV === 'dev'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.local.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.local.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
