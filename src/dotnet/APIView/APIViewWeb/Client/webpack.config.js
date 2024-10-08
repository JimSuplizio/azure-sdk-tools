const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DuplicatesPlugin } = require("inspectpack/plugin");

module.exports = {
  mode: "production",
  entry: [
    './src/main.ts',
    './css/main.scss'
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (url, resourcePath) => {
                  return !url.startsWith('/icons/');
                },
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/source',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new DuplicatesPlugin({
      emitErrors: false,
      verbose: false
    })
  ],
  resolve: {
    alias: {
      '@wwwroot': path.resolve(__dirname, '../wwwroot'),
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../wwwroot'),
  },
}
