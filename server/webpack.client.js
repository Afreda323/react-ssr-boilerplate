const path = require('path')

module.exports = {
  // entry file is client.js
  entry: './src/client/client.js',
  // put output in build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
}
