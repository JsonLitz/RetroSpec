var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

// gulp is a task controller that handles simple jobs that need to be done.
gulp.task("bundle", function () {
  return browserify({ //This is invoking browserify to bundle the code from entry point app/main.jsx
    entries: "./app/main.jsx",
    debug: true
}).transform(reactify)//this transpiles the JSX into plain JS using reactify
    .bundle()
    .pipe(source("main.js")) //this creates "main.js" in the dist directory and fills it with the transpiled js code... Hollaaa!
    .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});// this task takes the html/css and copies them into the "dist" folder. Our "virtual dom" son, ya feel me?


gulp.task("default",["copy"],function(){
   console.log("Gulped zommgggzzzzzzz...");
});
