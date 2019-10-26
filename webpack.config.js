const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  devtool: 'source-map', 
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          //'style-loader', 
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            }
          }, 
          {
            loader: 'sass-loader', 
            options: {
              sourceMap: true
            }
          }, 
        ]
      }, 
    ]
  },
};