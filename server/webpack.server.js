const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const nodeExt = require('webpack-node-externals')
const config = {
  // Building Node bundle rather than browser
  target: 'node',
  // entry file is index.js
  entry: './src/index.js',
  // put output in build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExt()],
}

module.exports = merge(base, config)
