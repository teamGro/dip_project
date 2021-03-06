const gulp = require("gulp");
const concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const plumber = require("gulp-plumber");
const remember = require("gulp-remember");
const browserSync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const minify = require("gulp-minify");
const autoprefixer = require('gulp-autoprefixer');

let isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("getAllCSS", () => {
  return (
    gulp
      .src("sources/styles/*.css", { since: gulp.lastRun("getAllCSS") })
      .pipe(
        plumber({
          errorHandler: notify.onError(function (err) {
            return {
              title: "css",
              message: err.message
            };
          })
        })
      )
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(remember())
      .pipe(concat("styles.css"))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cssmin())
      .pipe(rename("styles.min.css"))
      .pipe(gulp.dest("public/styles"))
  );
});

gulp.task("clean", (done) => {
  del(["public/styles"]);
  del(["public/*.html"]);
  del(["public/scripts/script-min.js"]);
  done();
});

gulp.task("copy", () => {
  return gulp
    .src("sources/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("public"));
});

gulp.task("minifyJS", () => {
  return gulp
    .src(["./sources/scripts/script.js"])
    .pipe(minify())
    .pipe(gulp.dest("./public/scripts"))
})

gulp.task("watch", () => {
  gulp.watch("sources/styles/*.css", gulp.series("getAllCSS"));
  gulp.watch("sources/*.html", gulp.series("copy"));
  gulp.watch("sources/scripts/script.js", gulp.series("minifyJS"));
});

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("getAllCSS", "copy", "minifyJS"))
);

gulp.task("serve", () => {
  browserSync.init({
    server: "public",
    tunnel: true
  });

  gulp.watch("public/**/*.*").on("change", browserSync.reload);
});

gulp.task("dev", gulp.series("build", gulp.parallel("watch", "serve")));