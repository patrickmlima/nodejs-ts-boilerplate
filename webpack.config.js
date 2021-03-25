const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/app.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  node: {
    __dirname: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.yaml', '.yml'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new copyPlugin({
      patterns: [
        { from: '.env', to: '.env', toType: 'file' },
        { from: 'api-docs', to: 'api-docs', toType: 'dir' }
      ]
    })
  ]
}