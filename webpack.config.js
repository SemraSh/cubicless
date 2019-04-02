const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(webpackEnv) {
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
          test: /\.jsx?$/,
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
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      port: 3000,
      compress: true,
      noInfo: true,
      open: true,
      hot: true,
    },
  }
}
