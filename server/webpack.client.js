const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

const config = {
  // entry file is client.js
  entry: './src/client/client.js',
  // put output in build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
}

module.exports = merge(base, config)
