const path = require('path');

module.exports = {
  mode: 'development',
  entry: './tampermonkey/src/index.ts',
  devtool: false,
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  },
  plugins: [ ]
};