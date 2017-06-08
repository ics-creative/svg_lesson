/**
 * ローカルサーバーの起動、ファイルウォッチ用のタスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");
const taskName = require("../taskName");
const browserSync = require("browser-sync");

require("./tsCompile");
require("./tsLint");

const gulp = require("gulp");

/**
 * ローカルサーバーのタスク設定
 */
gulp.task(taskName.start,
  gulp.series(
    gulp.parallel(
      taskName.scssCompile
      // taskName.tsLint,
      // taskName.tsCompile
    ),
    () => {
      startWatchTasks();
    }
  )
);

/**
 * ウォッチタスクを開始します。
 */
function startWatchTasks() {
  browserSync.init({
    server: {
      baseDir: "src", // ルートとなるディレクトリを指定,
      index: "demo2_transition.html"
    },

    // 更新を監視する対象ファイル
    files: [`${config.srcFolder}/**/*.{html, js, css}`]
  });

  // Sassファイルのウォッチ
  gulp.watch([`${config.scssFolder}/**/*.scss`],
    gulp.parallel(
      taskName.scssCompile
    )
  );

  // TypeScriptファイルのウォッチ
  // gulp.watch(`${config.tsFolder}/**/*.ts`,
  //   gulp.series(
  //     gulp.parallel(
  //       taskName.tsLint,  // Lint
  //       taskName.tsCompile  // コンパイル
  //     )
  //   )
  // );
}