const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  devtool: 'source-map', 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
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