const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


function getPages() {
  const pagesPath = path.resolve(__dirname, 'src', 'pages');
  return fs.readdirSync(pagesPath).filter(file => file.endsWith('.html'));
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src', 'assets', 'images'),
              to: path.resolve(__dirname, 'dist', 'assets', 'images'),
          },
      ],
  }),
    ...getPages().map(page => {
        return new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', page),
            filename: page, 
        });
    }),
    new MiniCssExtractPlugin(), 
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },   
    port: 8080,
  },
};
