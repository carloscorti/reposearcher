const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './lib/renderers/domRender.js',
  },

  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'js_[name].[contentHash].js',
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        // use: [MiniCssExtraxtPlugin.loader, 'css-loader', 'sass-loader'],
        use: [MiniCssExtraxtPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/transform-runtime'],
        },
      },
    ],
  },

  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'public'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtraxtPlugin({
      filename: 'css_[name].[contentHash].css',
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
