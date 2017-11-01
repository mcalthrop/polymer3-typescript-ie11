const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babelLoader = require('babel-loader');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080', // live reload
            './src/index'
        ],
        polyfill: ['babel-polyfill/dist/polyfill'],
        'webcomponents-loader': ['@webcomponents/webcomponentsjs/webcomponents-loader']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'dist'),
        hot: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.ts?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { verbose: true, root: path.resolve(__dirname, '..') }),
        new CommonsChunkPlugin({
            // The order of this array matters
            names: [
                'app',
                'webcomponents-loader',
                'polyfill'
            ],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-hi.js')
            },
            {
                from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js')
            },
            {
                from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js.map')
            },
            {
                from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-hi-ce.js')
            },
            {
                from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js')
            }
        ]),
        new webpack.IgnorePlugin(/vertx/),
        new webpack.HotModuleReplacementPlugin(),
    ]
};