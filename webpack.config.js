const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const devWebpackConfig = require('./webpack/webpack.development.config')
// const productionWebpackConfig = require('./webpack/webpack.production.config')

module.exports = function(webpackEnv) {
  const isDevelopment = webpackEnv === 'development'
  const isProduction = webpackEnv === 'production'

  return {
    mode: webpackEnv,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '_build'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
    ],
    devServer: {
      port: 3000,
      compress: true,
      noInfo: true,
      quiet: true,
      hot: true,
    },
  }
}
