var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var config = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },

            {
                test: /\.(png|jpg|PNG)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader: 'url?prefix=fonts/&limit=10000'
            }

        ]
    }
}
module.exports = config;


