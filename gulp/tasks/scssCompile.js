/**
 * Sassのコンパイルタスク
 *
 * @author ICS-Kano
 */

const path = require("path");

const config = require("../../build_config");
const taskName = require("../taskName");

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const sassGlob = require("gulp-sass-glob");

gulp.task(taskName.scssCompile, () => {
  return gulp.src(config.scssFile)
    .pipe(sassGlob())
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.messageFormatted);
        this.emit("end");
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(autoprefixer({
      browsers: [
        "last 2 versions",
        "Android >= 4.4"
      ],
      cascade: false
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.cssFolder));
});