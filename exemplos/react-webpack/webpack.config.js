"use strict";

module.exports = {
    entry: [
        "./src/js/app.jsx"
    ],
    output: {
        path: __dirname + "/build",
        filename: "app-bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
