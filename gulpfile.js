var gulp = require('gulp');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var livereactload = require('livereactload');
var livereload = require('gulp-server-livereload');

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

  var b = browserify({
    entries: "src/index.jsx",
    transform: [babelify],
    plugin: [watchify, livereactload],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  var build = function() {
    return b.bundle()
      .on("error", gutil.log)
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("dist"));
  }

  b.on("update", function() {
    build();
  })

  // kick off
  return build();

});

gulp.task("server", ["watch"], function() {
  return gulp.src("./")
    .pipe(livereload({
      host: "0.0.0.0",
      port: 3000
    }));
});

gulp.task("default", ["watch"]);
