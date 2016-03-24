var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        javascript: "./app.js",
        html : __dirname + "/index.html"
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        root: path.resolve('./app')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};