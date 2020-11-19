var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var react = require("gulp-react");
var watch = require("gulp-watch");
var clean = require("gulp-clean");
var reload = browserSync.reload;

gulp.task("build", ["clean"], function() {
  //Convert jsx to js
  gulp
    .src("source/samples/**/*.jsx")
    .pipe(react())
    .pipe(gulp.dest("source/jsx"));
});

gulp.task("clean", function() {
  return gulp.src("app", { read: false }).pipe(clean());
});

// Static Server + watching html files
gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Files watching
gulp.task("watch", ["build", "serve"], function() {
  gulp.watch(["source/samples/**/*.{js,jsx,html}"], ["build", reload]);
});

gulp.task("default", ["watch"]);
