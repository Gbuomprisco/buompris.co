const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: []
    },

    output: {
        path: './_site/app',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.', '.ts', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['raw-loader', "sass-loader"]
            },
            {
                test: /\.html/,
                loader: ['raw-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
        new extractTextPlugin({filename: '[name].css', allChunks: true})
    ]
};
