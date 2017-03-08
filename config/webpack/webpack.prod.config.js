const webpack = require('webpack');
const merge = require('webpack-merge');
const extractTextPlugin = require('extract-text-webpack-plugin');

let common = require('./webpack.common.config.js');

common.module = {
  loaders: [
    {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    },
    {
      test: /\.scss$/,
      loader: extractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
    }
  ]
};

let options = {
  devtool: false,

  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': 'production'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        output: {
            comments: false
        },
        mangle: {
            screw_ie8: true
        },
        compress: {
            screw_ie8: true,
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false
        }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('autoprefixer')({ browsers: ['last 2 versions'] }),
          require('cssnano')({
            discardComments: { removeAll: true },
            sourcemap: true
          })
        ]
      }
    })
  ]

};

module.exports = merge(common, options);
