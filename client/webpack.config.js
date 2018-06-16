const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  mode: 'development',
  entry: [
    './index.html'
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  target: 'web',
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: sourcePath,
    watchContentBase: true,
    open: true,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal'
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};