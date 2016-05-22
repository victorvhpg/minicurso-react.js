"use strict";

var webpack = require("webpack");


 module.exports = {
     entry: [
         "./src/js/app.jsx"
     ],
     output: {
         path: __dirname + "/build",
         filename: "index_bundle.js"
     },
     resolve: {
         extensions: ["", ".js", ".jsx"]

     },
     module: {
         loaders: [{
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: "babel-loader"
         }]
     },
     devtool: "inline-source-map",
     devServer: {
         stats: "errors-only",
         contentBase: "./build",
         devtool: "inline-source-map",
         historyApiFallback: true,
         progress: true,
         hot: true, //Live-reload
         inline: true,//
         port: 3000
     },
     plugins: [
         new webpack.HotModuleReplacementPlugin()
        //  new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false,
        //     }
        //   })

     ]
 };
