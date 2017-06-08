/**
 * TypeScriptのLintチェック
 *
 * @author ICS-Kano
 */
const config = require("../../build_config");
const taskName = require("../taskName");

const gulp = require("gulp");
const tslint = require("gulp-tslint");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");

gulp.task(taskName.tsLint, () => {
  return gulp.src(`${config.tsFolder}/**/*.ts`)
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError(`ts Error:${err}`);
        this.emit("end");
      }
    }))
    .pipe(tslint({
      formatter: "verbose",
      configuration: "./tslint.json"
    }))
    .pipe(tslint.report());
});