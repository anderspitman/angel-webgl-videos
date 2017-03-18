var gulp = require('gulp');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

gulp.task("build", function() {

  var bundler = browserify({
    entries: "src/index.jsx",
    transform: babelify
  });

  bundler
    .bundle()
    .on("error", gutil.log)
    .pipe(source("bundle.js"))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest("dist"));

});

gulp.task("watch", function() {

  var watcher  = watchify(browserify({
    entries: "src/index.jsx",
    transform: [babelify],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  watcher.on("update", function() {
    watcher.bundle()
    .on("error", gutil.log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
    console.log("Updated");
  })
    // TODO: there's got to be a way to get rid of this duplication
    .bundle()
    .on("error", gutil.log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

gulp.task("default", ["watch"]);
