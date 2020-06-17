/*
 * @Author: Siwen
 * @Date: 2020-06-15 14:59:42
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-17 14:23:10
 * @Description: webpack.config.js
 */
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
