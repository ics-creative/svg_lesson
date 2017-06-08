/**
 * TypeScriptのコンパイルタスク
 *
 * @author ICS-Kano
 */
const config = require("../../build_config");

const taskName = require("../taskName");
const notify = require("gulp-notify");

const plumber = require("gulp-plumber");

const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config.js");

gulp.task(taskName.tsCompile, () => {
  return plumber({errorHandler: notify.onError("<%= error.message %>")})
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.jsFolder));
});
