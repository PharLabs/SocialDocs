/*
 *
 * This file is part of the SocialDocs project (c) 2015 - 2020
 *
 * (c) Ben Bieler (Project Leed) <benjaminbieler2014@gmail.com>
 * (c) Maximilian Bosch (Developer) <maximilian.bosch.27@gmail.com>
 *
 * The Licence file can be found in the root of the directory
 */

"use strict";

//Config:
if (process.env.NODE_ENV === 'development') {
    var loaders = ['babel', 'react-hot'];
} else {
    var loaders = ['babel'];
}

module.exports = {
    devtool: 'eval',
    entry: "./assets/js/App.js",
    output: {
        path: './assets/js/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: 'true',
        contentBase: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules | bower_components)/,
                loaders: loaders
            }
        ]
    }
};