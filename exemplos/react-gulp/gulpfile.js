"use strict";
var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var uglify = require("gulp-uglify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify");

var _PRODUCAO = false;

function buildJS() {
    return new Promise(function (resolve, reject) {
        var r = browserify({
            entries: ["src/js/app.jsx"],
            extensions: [".jsx"],
            debug: true
        });
        r.transform(babelify);
        var stream = r.bundle()
            .pipe(source("app-bundle.js"));
        // if (_PRODUCAO) {
        //     stream.pipe(streamify(uglify()));
        // }
        stream.pipe(gulp.dest("./build/"))
            .on("end", function () {
                resolve();
            }).on("error", reject);
    });
}

function build() {
    return buildJS().then(function () {
      gulp.watch("./src/js/**/*.*", ["build-app"]);  
    }).catch(function (e) {
        console.log("erro: " + e);
    });
}



gulp.task("default", function () {
    return build();
});
